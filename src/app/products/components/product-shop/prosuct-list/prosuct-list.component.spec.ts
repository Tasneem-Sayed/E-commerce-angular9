import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsuctListComponent } from './prosuct-list.component';

describe('ProsuctListComponent', () => {
  let component: ProsuctListComponent;
  let fixture: ComponentFixture<ProsuctListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProsuctListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProsuctListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
