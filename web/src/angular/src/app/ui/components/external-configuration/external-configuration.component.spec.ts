import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalConfigurationComponent } from './external-configuration.component';

describe('ExternalConfigurationComponent', () => {
  let component: ExternalConfigurationComponent;
  let fixture: ComponentFixture<ExternalConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
