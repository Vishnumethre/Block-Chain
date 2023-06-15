import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StudentInfoComponent } from './student-info/student-info.component';
import { DepartmentInfoComponent } from './department-info/department-info.component';
import { HomeComponent } from './home/home.component';
import { TeacherStudentInfoComponent } from './teacher-student-info/teacher-student-info.component';
import { SubjectInfoComponent } from './teacher-student-info/subject-info/subject-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes:Routes =[
  {path:'Home',component:HomeComponent},
  {path:'Student',component:StudentInfoComponent},
  {path:'StudentData',component:TeacherStudentInfoComponent},
  /* children:[
    {
      path:'SubjectInfo',component:SubjectInfoComponent
    }
  ]},*/
  {path:'Student/SubjectInfo',component:SubjectInfoComponent},
  {path:'Department', component:DepartmentInfoComponent},
  {
    path:'**',component:PageNotFoundComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    StudentInfoComponent,
    DepartmentInfoComponent,
    HomeComponent,
    TeacherStudentInfoComponent,
    SubjectInfoComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
