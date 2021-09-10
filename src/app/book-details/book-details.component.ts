// import { createInput } from '@angular/compiler/src/core';
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Book } from '../shared/book';
import { ActivatedRoute } from '@angular/router';
import { BookStoreService } from '../shared/book-store.service';
@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
book:Book;
   constructor(private bs:BookStoreService,
               private route :ActivatedRoute) { }
  @Input()
  @Output() showListEvent = new EventEmitter<any>();

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    this.book=this.bs.getSingle(params.get('isbn'));

  }
  getRating(num:number){
  return new Array(num);

}
showBookList(){
  this.showListEvent.emit();

}

}
