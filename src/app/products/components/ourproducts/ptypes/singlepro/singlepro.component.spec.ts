import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleproComponent } from './singlepro.component';

describe('SingleproComponent', () => {
  let component: SingleproComponent;
  let fixture: ComponentFixture<SingleproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
