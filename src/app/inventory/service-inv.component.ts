import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Service, InventoryService }  from './inventory.service';

@Component({
  templateUrl: './service-inv.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class ServiceInvComponent implements OnInit {

  services$: Observable<Service[]>;
  private selectedId: number;

  constructor(
    private service: InventoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.services$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getServices();
      });
  }
}
