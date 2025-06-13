import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Product } from '../../models/IProducts';
import { ProductItemComponent } from '../inc/product-item/product-item.component';
import { SecurdataService } from '../../services/securdata.service';
import { PagetitleDirective } from '../../directives/pagetitle.directive';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ProductItemComponent, PagetitleDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  products: Product[] = []

  constructor( private api: ApiService, private securData: SecurdataService, private seo: SeoService) {
  }

  ngOnInit() {
    this.seo.seo('Dashboard', 'This is the dashboard page of our application');
    this.productView()
    this.api.getAllProducts().subscribe({
        next: (res) => {
          this.products = res.data
        },
        error: (err) => {
          console.log(err);
        }
      }
    )
  }

  productView() {
    try {
      const stProduct = localStorage.getItem('product')
      if (stProduct) {
        const plainText = this.securData.decrypt(stProduct)
        const product = JSON.parse(plainText) as Product
        console.log(product);
      }
    } catch (error) {
      localStorage.removeItem('product')
    }
  }


}
