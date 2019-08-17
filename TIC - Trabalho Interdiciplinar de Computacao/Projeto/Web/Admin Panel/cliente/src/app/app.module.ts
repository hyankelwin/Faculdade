import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MainModule } from './screens/main.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    AppRoutingModule,
    RouterModule,
    MainModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
