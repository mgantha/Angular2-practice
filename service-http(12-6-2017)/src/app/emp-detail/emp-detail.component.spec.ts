import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDetailComponent } from './emp-detail.component';

describe('EmpDetailComponent', () => {
  let component: EmpDetailComponent;
  let fixture: ComponentFixture<EmpDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
