import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { InventoryComponent } from './inventory.component';
import { NetworkInvComponent } from './network-inv.component';
import { ServiceInvComponent } from './service-inv.component';
import { InfrastructureInvComponent } from './infrastructure-inv.component';
import { InventoryRoutingModule } from './inventory-routing.module';

import { InventoryService } from './inventory.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InventoryRoutingModule
  ],
  declarations: [
    InventoryComponent,
    NetworkInvComponent,
    ServiceInvComponent,
    InfrastructureInvComponent
  ],
  providers: [ InventoryService ]
})
export class InventoryModule {
}
