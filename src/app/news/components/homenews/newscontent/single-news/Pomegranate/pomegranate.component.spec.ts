import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PomegranateComponent } from './pomegranate.component';

describe('PomegranateComponent', () => {
  let component: PomegranateComponent;
  let fixture: ComponentFixture<PomegranateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PomegranateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PomegranateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
