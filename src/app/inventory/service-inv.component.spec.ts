import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceInvComponent } from './service-inv.component';

describe('ServiceInventoryComponent', () => {
  let component: ServiceInvComponent;
  let fixture: ComponentFixture<ServiceInvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceInvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
