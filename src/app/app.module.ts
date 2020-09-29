import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card/';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MenuComponent } from './menu/menu.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core/';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaxPulseCalculatorComponent } from './max-pulse-calculator/max-pulse-calculator.component';
import { ContactComponent } from './contact/contact.component';
import { MatDividerModule } from '@angular/material/divider';
import { OpenLayerMapComponent } from './open-layer-map/open-layer-map.component';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { BlogComponent } from './blog/blog.component';
import { ResumeComponent } from './resume/resume.component';
import { BlogAddPostComponent } from './blog-add-post/blog-add-post.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { BlogAddCategoryComponent } from './blog-add-category/blog-add-category.component';
import { HeaderTitleComponent } from './header-title/header-title.component';
import { BlogCategoriesComponent } from './blog-categories/blog-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    MaxPulseCalculatorComponent,
    ContactComponent,
    OpenLayerMapComponent,
    BlogComponent,
    ResumeComponent,
    BlogAddPostComponent,
    BlogAddCategoryComponent,
    HeaderTitleComponent,
    BlogCategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    MatDialogModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
