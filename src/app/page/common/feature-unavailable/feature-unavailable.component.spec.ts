import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureUnavailableComponent } from './feature-unavailable.component';

describe('FeatureUnavailableComponent', () => {
  let component: FeatureUnavailableComponent;
  let fixture: ComponentFixture<FeatureUnavailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureUnavailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureUnavailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
