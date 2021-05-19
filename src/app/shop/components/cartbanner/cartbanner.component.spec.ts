import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartbannerComponent } from './cartbanner.component';

describe('CartbannerComponent', () => {
  let component: CartbannerComponent;
  let fixture: ComponentFixture<CartbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartbannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
