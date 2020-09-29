import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddCategoryData } from './add-category-data';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-blog-add-category',
  templateUrl: './blog-add-category.component.html',
  styleUrls: ['./blog-add-category.component.sass']
})
export class BlogAddCategoryComponent implements OnInit {
  addCategoryForm = this.fb.group({
    name: ['', Validators.required],
  });

  constructor(
    public dialogRef: MatDialogRef<BlogAddCategoryComponent>, @Inject(MAT_DIALOG_DATA) public data: AddCategoryData, private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addCategory(): void {

  }

  get form() {
    return this.addCategoryForm.controls;
  }

}
