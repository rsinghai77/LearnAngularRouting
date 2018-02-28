import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { NetworkInvComponent } from './network-inv.component';
import { InventoryRoutingModule } from './inventory-routing.module';

import { InventoryService } from './inventory.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InventoryRoutingModule
  ],
  declarations: [
    NetworkInvComponent
  ],
  providers: [ InventoryService ]
})
export class InventoryExtnModule {
}
