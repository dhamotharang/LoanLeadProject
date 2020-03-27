import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanProductFormComponent } from './loan-product-form.component';

describe('LoanProductFormComponent', () => {
  let component: LoanProductFormComponent;
  let fixture: ComponentFixture<LoanProductFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanProductFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
