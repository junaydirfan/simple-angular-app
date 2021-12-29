import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { MainComponent } from './main/main.component';
import { ViewstdComponent } from './viewstd/viewstd.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';

const routes: Routes = [
  {
    path:'Teacher',
    component:TeacherComponent,
    children:[{
      path:'ViewStudent', 
      component: ViewstdComponent
    },
    {
      path:'ViewProfile',
      component: TeacherProfileComponent
    }]
    },
    {
    path:'Student',
    component: StudentComponent
    },
    {
    path:'',
    component: MainComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
