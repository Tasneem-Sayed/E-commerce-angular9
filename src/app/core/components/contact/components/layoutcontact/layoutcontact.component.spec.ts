import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutcontactComponent } from './layoutcontact.component';

describe('LayoutcontactComponent', () => {
  let component: LayoutcontactComponent;
  let fixture: ComponentFixture<LayoutcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutcontactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
