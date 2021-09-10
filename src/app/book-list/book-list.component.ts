// import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit, Output,Input ,EventEmitter} from '@angular/core';
// import { EventEmitter } from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  @Input ()book:Book;
  @Output() showDetailsEvent = new EventEmitter<Book>();
  
  constructor(private bs : BookStoreService) { }

  ngOnInit(): void {
    this.books=this.bs.getAll();


  }
  getRating(num : number){
    return new Array(num)
  }


  showDetails(book:Book){
  this.showDetailsEvent.emit(book);
}

}

