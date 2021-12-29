import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ViewstdComponent } from './viewstd/viewstd.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { FormsModule } from '@angular/forms';
import { AppHighlightDirective } from './app-highlight.directive';
import { ViewstdServiceComponent } from './viewstd-service/viewstd-service.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    TeacherComponent,
    ViewstdComponent,
    TeacherProfileComponent,
    AppHighlightDirective,
    ViewstdServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
