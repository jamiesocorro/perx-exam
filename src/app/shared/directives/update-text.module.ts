import { NgModule } from "@angular/core";
import { UpdateTextDirective } from "./update-text.directive";
 
@NgModule({
    declarations: [UpdateTextDirective],
    exports: [UpdateTextDirective]
})

export class UpdateTextModule {}