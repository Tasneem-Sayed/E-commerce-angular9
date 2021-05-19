import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopbannerComponent } from './shopbanner.component';

describe('ShopbannerComponent', () => {
  let component: ShopbannerComponent;
  let fixture: ComponentFixture<ShopbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopbannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
