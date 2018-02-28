import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InventoryComponent } from './inventory.component';
import { NetworkInvComponent } from './network-inv.component';
import { ServiceInvComponent } from './service-inv.component';
import { InfrastructureInvComponent } from './infrastructure-inv.component';

const inventoryRoutesx: Routes = [
  { path: 'inventory/network', component: NetworkInvComponent },
  { path: 'inventory/service', component: ServiceInvComponent },
  { path: 'inventory/infrastructure', component: InfrastructureInvComponent }
];

const inventoryRoutes: Routes = [
  {
    path: 'inventory', component: InventoryComponent,
    children: [
      { path: 'network', component: NetworkInvComponent },
      { path: 'service', component: ServiceInvComponent },
      { path: 'infrastructure', component: InfrastructureInvComponent },
      { path: '', component: NetworkInvComponent }
    ]
  }
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
