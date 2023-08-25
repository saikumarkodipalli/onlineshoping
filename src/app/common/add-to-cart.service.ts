import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddToCartService {
  constructor() {}

  private productsAddedToCart: any[] = [];
  private productsAddedToCartSubject = new Subject<any>();

  sendData(data: any) {
    this.productsAddedToCart.push(data);
    this.productsAddedToCartSubject.next(data);
  }

  getData() {
    return this.productsAddedToCartSubject.asObservable();
  }

  getProductsInCart() {
    return this.productsAddedToCart;
  }

  makeProductsEmpty() {
    this.productsAddedToCart = [];
  }
}
