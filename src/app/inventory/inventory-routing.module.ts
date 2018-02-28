import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NetworkInvComponent } from './network-inv.component';
import { ServiceInvComponent } from './service-inv.component';
import { InfrastructureInvComponent } from './infrastructure-inv.component';

const inventoryRoutes: Routes = [
  { path: 'inventory/network', component: NetworkInvComponent },
  { path: 'inventory/service', component: ServiceInvComponent },
  { path: 'inventory/infrastructure', component: InfrastructureInvComponent }
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
