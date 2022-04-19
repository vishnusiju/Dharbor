import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AuthorComponent } from './author/author.component';
import { AuthorsService } from './author/authors.service';
import { BindingComponent } from './binding/binding.component';
import { FavoriteComponent } from './favorite/favorite.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemotitleComponent } from './demotitle/demotitle.component';
import { DemotitlePipe } from './demotitle/demotitle.pipe';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AuthorComponent,
    BindingComponent,
    FavoriteComponent,
    DemotitleComponent,
    DemotitlePipe,
    LikeComponent,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    FormArrayComponent,
    ChangePasswordComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthorsService                   // add authorservice to provider.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
