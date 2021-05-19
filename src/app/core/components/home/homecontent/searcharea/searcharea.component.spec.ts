import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchareaComponent } from './searcharea.component';

describe('SearchareaComponent', () => {
  let component: SearchareaComponent;
  let fixture: ComponentFixture<SearchareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
