import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveValidationModule } from 'npm_publish/angular-reactive-validation/lib/reactive-validation.module';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ReactiveValidationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
