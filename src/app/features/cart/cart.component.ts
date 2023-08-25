import { Component, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AddToCartService } from 'src/app/common/add-to-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnDestroy {
  productaAddedOnCart: any;
  displayedColumns: string[] = [
    'name',
    'weight',
    'price',
    'count',
    'total',
    'remove',
  ];
  dataSource: any;
  count: any = 1;
  value: any = false;
  tCount: any;
  grandTotalAmount: any = 0;
  sum = 0;
  estimatedDeliveryDate: string = 'June 24, 2023';
  data: any;
  constructor(private cartService: AddToCartService, private router: Router) {
    this.dataSource = new MatTableDataSource(
      this.cartService.getProductsInCart()
    );

    if (this.dataSource.data.length) {
      this.value = true;
    }
  }

  getTotalAmount() {
    this.dataSource?.data?.forEach((element: any, index: any) => {
      this.dataSource.data[index].total = element.price * element.count;
    });
  }
  getGrandTotal() {
    let sum: number = 0;
    this.dataSource?.data?.forEach((data: any) => {
      sum = sum + data.total;
    });

    return sum;
  }
  removeItem(i: any) {
    this.dataSource.data.splice(i, 1);
    const result = this.dataSource.data;
    
    this.dataSource = new MatTableDataSource(result);
    if (this.dataSource.data.length === 0) {
      this.value = false;
    }
  }
  goToHome() {
    this.router.navigate(['']);
  }
  confirmOrder() {
    this.router.navigate(['./confirm-order']);
  }
  ngOnDestroy(): void {
    this.cartService.makeProductsEmpty();
  }
}
