import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-angular-project';
  receivedData: any = 0;
  constructor(private router: Router) {}

  goToCart() {
    this.router.navigate(['./cart']);
  }
  goToCatalogue() {
    this.router.navigate(['']);
  }
}
