import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigableComponent } from './navigable.component';

describe('NavigableComponentComponent', () => {
  let component: NavigableComponent;
  let fixture: ComponentFixture<NavigableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
