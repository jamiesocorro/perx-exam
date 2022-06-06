import { Component, OnInit, Input } from '@angular/core';
import books from "@mocks/example.json";
import { Observable, of } from 'rxjs';
import { IBook } from '@models/books.model';
import { ITableHeader } from '@models/table-header.model';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  @Input() bookType: string = "";
  selectedHeader: ITableHeader = {
    sortOrder: "",
    sortProp: "desc"
  }
  headers = [
    {
      label: "",
      sortable: false
    },
    {
      label: "Title",
      sortProp: "title",
      sortable: true
    },
    {
      label: "Type",
      sortProp: "type",
      sortable: true
    },
    {
      label: "Date Created",
      sortProp: "created_date",
      sortable: true
    }


  ]

  displayedColumns: string[] = ['image', 'title', 'type', 'created_at'];
  sortedData: IBook[] = [];
  sortedDataBackup: IBook[] = [];

  books$: Observable<IBook[]> = of(books.data);
  constructor() { }

  ngOnInit(): void {
    this.books$.subscribe((data: IBook[]) => {
      this.sortedData = data.slice();
      this.sortedDataBackup = this.sortedData
    });
  }

  filterBooks(type: string) {
    this.sortedData = this.sortedDataBackup;

    if (type === 'All') {
      this.sortedData = this.sortedDataBackup;
    } else {
      const filteredBooks = this.sortedData.filter(b => b.attributes.display_properties.type === type);
      this.sortedData = filteredBooks;
    }

  }

  sortData(sort: Sort) {
    const data = this.sortedData.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active.toLowerCase()) {
        case 'title':
          return this.compare(a.attributes.content, b.attributes.content, isAsc);
        case 'type':
          return this.compare(a.type, b.type, isAsc);
        case 'created_date':
          return this.compare(a.attributes.created_date, b.attributes.created_date, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}
