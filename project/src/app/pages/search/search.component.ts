import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Product } from '../../models/IProducts';
import { ProductItemComponent } from '../inc/product-item/product-item.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ ProductItemComponent ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  products: Product[] = []
  query = ''
  error = ''
  
  constructor( private activeRoute: ActivatedRoute, private api: ApiService ) { }

  ngOnInit() {
    this.activeRoute.queryParams.forEach((params) => {
      const q = params['q'];
      if (q) {
        this.query = q
        this.api.searchProducts(q).subscribe({
          next: (res) => {
            this.products = res.data
          },
          error: (err) => {
            this.error = "No products found"
          }
        })
      }
    })
  }


}
