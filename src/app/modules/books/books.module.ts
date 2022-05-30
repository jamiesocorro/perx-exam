import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationBarModule } from 'src/app/shared/components/navigation-bar/navigation-bar.module';
import { BooksComponent } from './components/pages/books/books.component';
import { BooksHeaderComponent } from './components/books-header/books-header.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormatDateModule } from 'src/app/shared/pipes/format-date/format-date.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BooksComponent,
    BooksHeaderComponent,
    BooksListComponent
  ],
  imports: [
    BrowserModule,
    NavigationBarModule,
    InfiniteScrollModule,
    FormatDateModule,
    MatSortModule,
    MatTableModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: []
})
export class BooksModule { }
