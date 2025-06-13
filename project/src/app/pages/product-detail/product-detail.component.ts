import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Product } from '../../models/IProducts';
import { getOneLike, storeLike } from '../../utils/store';
import { SecurdataService } from '../../services/securdata.service';
import { PricePipe } from '../../pipes/price.pipe';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [PricePipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  item?: Product
  bigImage = ''
  isLike = false

  constructor( private route: ActivatedRoute, private api: ApiService, private securData: SecurdataService, private seo: SeoService) { }

  ngOnInit() { 
    this.route.params.subscribe(params => {
      const productId = params['id'];
      this.api.getProductById(productId).subscribe({
        next: (res) => {
          this.item = res.data
          this.bigImage = this.item.images[0]
          this.isLike = getOneLike(this.item.id)
          const stSecurt = this.securData.encrypt(JSON.stringify(this.item))
          localStorage.setItem('product', stSecurt)
          this.seo.seo(this.item.title, this.item.description)
        },
        error: (err) => {
          console.error(err);
        }
      })
    })
  }

  changeBigImage(path: string) {
    this.bigImage = path
  }

  addLike() {
    storeLike(this.item!.id)
    this.isLike = getOneLike(this.item!.id)
  }


}
