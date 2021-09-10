import { Component } from '@angular/core';
// import { type } from 'os';
import { Book } from './shared/book';
type ViewState = 'list' | 'details'
@Component({
  selector: 'bm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styleUrls: [
  //   'h2{color:blue}',

  //   'h1{font-size:3em}'
  // ],
})
export class AppComponent {
  title = 'book-monkey';
  book : Book;
  viewState : ViewState ='list';

  showList(){
    this.viewState='list';
  }
  showDetails(book:Book){
    this.book=book;
    this.viewState='details';
  }
}
