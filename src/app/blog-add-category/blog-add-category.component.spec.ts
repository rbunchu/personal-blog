import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAddCategoryComponent } from './blog-add-category.component';

describe('BlogAddCategoryComponent', () => {
  let component: BlogAddCategoryComponent;
  let fixture: ComponentFixture<BlogAddCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogAddCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogAddCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
