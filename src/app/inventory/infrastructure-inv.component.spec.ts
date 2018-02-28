import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastructureInvComponent } from './infrastructure-inv.component';

describe('InfrastructureInvComponent', () => {
  let component: InfrastructureInvComponent;
  let fixture: ComponentFixture<InfrastructureInvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfrastructureInvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfrastructureInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
