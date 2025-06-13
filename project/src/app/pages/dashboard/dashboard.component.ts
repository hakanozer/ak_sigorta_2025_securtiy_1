import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Product } from '../../models/IProducts';
import { ProductItemComponent } from '../inc/product-item/product-item.component';
import { SecurdataService } from '../../services/securdata.service';
import { PagetitleDirective } from '../../directives/pagetitle.directive';
import { SeoService } from '../../services/seo.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ProductItemComponent, PagetitleDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  products: Product[] = []
  sanitizedHtml = '<script>alert("merhaba")</script><table class="table"> <thead> <tr> <th scope="col">#</th> <th scope="col">First</th> <th scope="col">Last</th> <th scope="col">Handle</th> </tr> </thead> <tbody> <tr> <th scope="row">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td> </tr> <tr> <th scope="row">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td> </tr> <tr> <th scope="row">3</th> <td>John</td> <td>Doe</td> <td>@social</td> </tr> </tbody> </table>';

  constructor( 
    private api: ApiService, 
    private securData: SecurdataService, 
    private seo: SeoService,
    private domSanitizer: DomSanitizer
  ) {
    this.sanitizedHtml = this.domSanitizer.bypassSecurityTrustHtml(this.sanitizedHtml) as string;
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
