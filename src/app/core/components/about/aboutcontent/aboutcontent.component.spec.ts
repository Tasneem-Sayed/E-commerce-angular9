import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutcontentComponent } from './aboutcontent.component';

describe('AboutcontentComponent', () => {
  let component: AboutcontentComponent;
  let fixture: ComponentFixture<AboutcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
