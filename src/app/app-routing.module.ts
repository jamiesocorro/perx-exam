import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksModule } from '@modules/books/books.module';
import { BooksComponent } from '@modules/books/components/pages/books/books.component';
import { CustomDirectivesComponent } from '@modules/custom-directives/pages/custom-directives/custom-directives.component';
import { LandingPageComponent } from '@modules/landing-page/components/pages/landing-page/landing-page.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'landing-page', 
    pathMatch: 'full' },
  {
    path: "landing-page",
    component: LandingPageComponent
  },
  {
    path: "books",
    component: BooksComponent
  },
  {
    path: "custom-directives",
    component: CustomDirectivesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
