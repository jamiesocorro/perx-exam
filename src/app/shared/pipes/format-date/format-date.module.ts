import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormatDatePipe } from "./format-date.pipe";
 
@NgModule({
    declarations: [FormatDatePipe],
    exports: [FormatDatePipe],
    imports: [CommonModule]
})

export class FormatDateModule {}