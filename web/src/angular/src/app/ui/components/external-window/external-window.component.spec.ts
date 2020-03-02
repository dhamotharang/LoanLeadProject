import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalWindowComponent } from './external-window.component';

describe('CustomWindowComponent', () => {
  let component: ExternalWindowComponent;
  let fixture: ComponentFixture<ExternalWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
