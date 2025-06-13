import { Component, Input } from '@angular/core';
import { Product } from '../../../models/IProducts';
import { RouterModule } from '@angular/router';
import { PricePipe } from '../../../pipes/price.pipe';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [RouterModule, PricePipe],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {

  @Input() product?: Product;

}
