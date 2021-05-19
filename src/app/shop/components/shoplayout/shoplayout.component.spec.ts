import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoplayoutComponent } from './shoplayout.component';

describe('ShoplayoutComponent', () => {
  let component: ShoplayoutComponent;
  let fixture: ComponentFixture<ShoplayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoplayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoplayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
