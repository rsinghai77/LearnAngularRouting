import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkInvComponent } from './network-inv.component';

describe('NetworkInvComponent', () => {
  let component: NetworkInvComponent;
  let fixture: ComponentFixture<NetworkInvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkInvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
