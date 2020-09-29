import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BlogAddCategoryComponent } from '../blog-add-category/blog-add-category.component';

@Component({
  selector: 'app-blog-add-post',
  templateUrl: './blog-add-post.component.html',
  styleUrls: ['./blog-add-post.component.sass']
})
export class BlogAddPostComponent implements OnInit {

  addBlogForm = this.fb.group({
    title: ['', Validators.required],
    content: []
  });

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openCategoryDialog(): void {
    const dialogRef = this.dialog.open(BlogAddCategoryComponent, { width: '400px'});
  }

  get form() {
    return this.addBlogForm.controls;
  }

}
