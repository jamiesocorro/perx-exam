import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationBarModule } from 'src/app/shared/components/navigation-bar/navigation-bar.module';
import { CustomDirectivesComponent } from './pages/custom-directives/custom-directives.component';
import { CustomDirectivesHeaderComponent } from './custom-directives-header/custom-directives-header.component';
import { CustomDirectivesActionComponent } from './custom-directives-action/custom-directives-action.component';
import { UpdateTextModule } from 'src/app/shared/directives/update-text.module';


@NgModule({
  declarations: [
    CustomDirectivesComponent,
    CustomDirectivesHeaderComponent,
    CustomDirectivesActionComponent
  ],
  imports: [
    BrowserModule,
    NavigationBarModule,
    UpdateTextModule
  ],
  providers: [],
  bootstrap: []
})
export class CustomDirectivesModule { }
