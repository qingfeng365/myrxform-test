import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Formdemo1Component } from './formdemo1/formdemo1.component';
import { RegFormComponent } from './reg-form/reg-form.component';

@NgModule({
  declarations: [
    AppComponent,
    Formdemo1Component,
    RegFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
