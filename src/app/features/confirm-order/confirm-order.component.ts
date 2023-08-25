import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css'],
})
export class ConfirmOrderComponent {
  trackingId = Math.ceil(Math.random() * 10000000000);
  constructor(private router: Router) {}
  goToHome() {
    this.router.navigate(['']);
  }
}
