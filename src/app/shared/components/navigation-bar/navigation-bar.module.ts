import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NavigationBarComponent } from './navigation-bar.component';


@NgModule({
  declarations: [
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  exports: [
    NavigationBarComponent
  ],
  providers: [],
  bootstrap: []
})
export class NavigationBarModule { }
