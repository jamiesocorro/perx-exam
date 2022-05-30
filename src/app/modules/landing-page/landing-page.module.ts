import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationBarModule } from 'src/app/shared/components/navigation-bar/navigation-bar.module';
import { LandingPageHeaderComponent } from './components/landing-page-header/landing-page-header.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    LandingPageHeaderComponent
  ],
  imports: [
    BrowserModule,
    NavigationBarModule
  ],
  providers: [],
  bootstrap: []
})
export class LandingPageModule { }
