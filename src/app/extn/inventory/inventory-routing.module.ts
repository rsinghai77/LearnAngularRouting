import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NetworkInvComponent } from './network-inv.component';

const inventoryRoutes: Routes = [
  { path: 'inventory/network', component: NetworkInvComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(inventoryRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class InventoryRoutingModule {
}
