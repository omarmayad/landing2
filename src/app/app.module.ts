import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContinueComponent } from './components/continue/continue.component';
import { IndexComponent } from './components/index/index.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { FirstQuestionComponent } from './components/questions/first-question/first-question.component';
import { SecondQuestionComponent } from './components/questions/second-question/second-question.component';
import { ThirdQuestionComponent } from './components/questions/third-question/third-question.component';
import { ForthQuestionComponent } from './components/questions/forth-question/forth-question.component';
import { FifthQuestionComponent } from './components/questions/fifth-question/fifth-question.component';
import { SixthQuestionComponent } from './components/questions/sixth-question/sixth-question.component';
import { ZipCodeComponent } from './components/continue/zip-code/zip-code.component';
import { BirthComponent } from './components/continue/birth/birth.component';
import { PhoneNumberComponent } from './components/continue/phone-number/phone-number.component';
import { NameComponent } from './components/continue/name/name.component';
import { EmailComponent } from './components/continue/email/email.component';


const appRoutes: Routes = [
  { path: 'continue', component: ContinueComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: '**', component: IndexComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ContinueComponent,
    IndexComponent,
    QuestionsComponent,
    FirstQuestionComponent,
    SecondQuestionComponent,
    ThirdQuestionComponent,
    ForthQuestionComponent,
    FifthQuestionComponent,
    SixthQuestionComponent,
    ZipCodeComponent,
    BirthComponent,
    PhoneNumberComponent,
    NameComponent,
    EmailComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
