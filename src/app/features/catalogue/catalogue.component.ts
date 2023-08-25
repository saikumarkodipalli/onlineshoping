import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AddToCartService } from 'src/app/common/add-to-cart.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent implements OnInit {
  products: any = [];

  displayedColumns: string[] = ['name', 'image', 'weight', 'price', 'cart'];
  dataSource: any;
  total: any;
  updateCount: any;

  constructor(
    private http: HttpClient,
    private cartService: AddToCartService
  ) {}

  ngOnInit() {
    this.http.get<any[]>('./assets/data.json').subscribe((data) => {
      this.products = data.map((product) => ({ ...product, quantity: 0 }));
    });
  }

  addToCart(product: any) {
    const index = this.products.indexOf(product);
    this.cartService.sendData(product);

    if (index > -1) {
      this.products[index].quantity++;
    }
  }

  increaseQuantity(product: any) {
    const index = this.products.indexOf(product);
    // console.log(index);
    if (index > -1) {
      this.products[index].count++;

      this.products[index].quantity++;
    }
  }

  decreaseQuantity(product: any) {
    const index = this.products.indexOf(product);
    if (index > -1) {
      this.products[index].quantity--;

      if (this.products[index].quantity < 0) {
        this.products[index].quantity = 0;
      }
    }
  }
}
