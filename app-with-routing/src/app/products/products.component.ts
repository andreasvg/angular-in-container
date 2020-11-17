import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IProduct } from '../models/IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: IProduct[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts(): void {
    this.apiService.getProducts().subscribe(products => this.products = products );
  }
}
