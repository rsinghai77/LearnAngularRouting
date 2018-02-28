import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisListComponent }    from './crisis-list.component';
import { CrisisDetailComponent }  from './crisis-detail.component';

const crisisesRoutes: Routes = [
  { path: 'crises',  component: CrisisListComponent },
  { path: 'crisis/:id', component: CrisisDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(crisisesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CrisisRoutingModule {
}
