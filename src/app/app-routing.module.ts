import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from "./resume/resume.component";
import { BlogComponent } from "./blog/blog.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { MaxPulseCalculatorComponent } from './max-pulse-calculator/max-pulse-calculator.component';
import { BlogAddPostComponent } from './blog-add-post/blog-add-post.component';
import { BlogCategoriesComponent } from './blog-categories/blog-categories.component';


const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full'},
  { path: 'resume', component: ResumeComponent},
  { path: 'blog', component: BlogComponent },
  { path: 'about', component: AboutComponent},
  { path: 'calculator', component: MaxPulseCalculatorComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'blog-add-post', component: BlogAddPostComponent },
  { path: 'blog-categories', component: BlogCategoriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
