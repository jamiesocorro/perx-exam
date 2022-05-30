import { Component, OnInit, ViewChild } from '@angular/core';
import { BooksListComponent } from '../../books-list/books-list.component';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  @ViewChild(BooksListComponent) bookList: BooksListComponent;
  selectedBookType: string = "Hard cover";
  constructor() { }

  ngOnInit(): void {
  }

  updateBooks(book: string) {

    this.bookList.filterBooks(book);
  }

}
