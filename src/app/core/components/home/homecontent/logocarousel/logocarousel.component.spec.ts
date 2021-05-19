import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogocarouselComponent } from './logocarousel.component';

describe('LogocarouselComponent', () => {
  let component: LogocarouselComponent;
  let fixture: ComponentFixture<LogocarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogocarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogocarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
