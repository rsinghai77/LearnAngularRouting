import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Learn Angular Routing</h1>
    <nav>
      <a routerLink="/crises" routerLinkActive="active">Crisis Center</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/inventory/network" routerLinkActive="active">Inventory</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
