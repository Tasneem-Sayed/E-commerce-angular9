import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedsectionComponent } from './featuredsection.component';

describe('FeaturedsectionComponent', () => {
  let component: FeaturedsectionComponent;
  let fixture: ComponentFixture<FeaturedsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedsectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
