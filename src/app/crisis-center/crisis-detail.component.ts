import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { slideInDownAnimation } from '../animations'
import { Crisis, CrisisService }  from './crisis.service';

@Component({
  template: `
  <h2>CRISIS</h2>
  <div *ngIf="crisis$ | async as crisis">
    <h3>"{{ crisis.name }}"</h3>
    <div>
      <label>Id: </label>{{ crisis.id }}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="crisis.name" placeholder="name"/>
    </div>
    <p>
      <button (click)="gotoCrisises(crisis)">Back</button>
    </p>
  </div>
  `,
  animations: [ slideInDownAnimation ]
})
export class CrisisDetailComponent implements OnInit {

  crisis$: Observable<Crisis>;

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService
  ) {}

  ngOnInit() {
    this.crisis$ = this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getCrisis(params.get('id')));
  }

  gotoCrisises(crisis: Crisis) {
    let crisisId = crisis ? crisis.id : null;
    // Pass along the crisis id if available
    // so that the CrisisList component can select that crisis.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/crises', { id: crisisId, foo: 'foo' }]);
  }
}
