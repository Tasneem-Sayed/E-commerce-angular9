import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtypesComponent } from './ptypes.component';

describe('PtypesComponent', () => {
  let component: PtypesComponent;
  let fixture: ComponentFixture<PtypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PtypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
