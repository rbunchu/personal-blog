import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAddPostComponent } from './blog-add-post.component';

describe('BlogAddPostComponent', () => {
  let component: BlogAddPostComponent;
  let fixture: ComponentFixture<BlogAddPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogAddPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogAddPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
