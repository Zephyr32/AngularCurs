import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AlertModule } from 'ngx-bootstrap';
import { CustomFormsModule } from 'ng2-validation'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './Service/DataService';
import { ProjectComponent } from './ProjectComponent/ProjectComponent';
import { ProjectComponentExtend } from './ProjectComponentExtend/ProjectComponentExtend';
import { UploadedComponent } from './UploadedComponent/UploadedComponent';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ProjectComponentExtend,
    UploadedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomFormsModule,
      HttpClientModule,
  AlertModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
