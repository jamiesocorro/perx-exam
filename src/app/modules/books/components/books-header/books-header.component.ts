import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-books-header',
  templateUrl: './books-header.component.html',
  styleUrls: ['./books-header.component.scss']
})
export class BooksHeaderComponent implements OnInit {
  @Output() onUpdate = new EventEmitter();
  covers = new FormControl();
  selectedValue: string = "All";
  coverList: string[] = ["All", "Hard cover", "Soft cover"];

  constructor() { }

  ngOnInit(): void {
  }

  filterBooks(e: any) {
    this.onUpdate.emit(this.selectedValue);
  }

}
