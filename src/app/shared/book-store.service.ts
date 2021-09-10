import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Injectable } from '@angular/core';
import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  books: Book[];



  constructor() {
    this.books = [
      {
        isbn: '9783864907791',
        title: 'Angular',
        authors: ['Ferdinand Malcher', 'Johannes Hoppe', 'Danny Koppenhagen'],
        published: new Date(2020, 8, 1),
        subtitle: 'Grundlagen , fortgeschrittene Themen und Best Practices',
        rating: 1,
        thumbnails: [{
          url: 'https://api4.angular-buch.com/images/angular_auflage3.jpg',
          title: 'Buchcover'
        }],
        description: 'Lernen Sie Angular mit diesem Praxisbuch!'
      },


      {
        isbn: '9783836285230',
        title: 'JavaScript',
        authors: ['Beshr'],
        published: new Date(2020, 8, 1),
        subtitle: 'Grundlagen , fortgeschrittene Themen und Best Practices',
        rating: 2,
        thumbnails: [{
          url: 'https://viitorcloud.com/blog/wp-content/uploads/2018/06/JavaScript%E2%80%93-the-future-web-programming-cover.jpg',
          title: 'Buchcover'
        }],
        description: 'Lernen Sie JavaScript mit diesem Praxisbuch!'
      },
      {
        isbn: '9783898647878',
        title: 'JavaEloquent',
        authors: ['Ehlen'],
        published: new Date(2020, 8, 1),
        subtitle: 'Grundlagen , fortgeschrittene Themen und Best Practices',
        rating: 3,
        thumbnails: [{
          url: 'https://images-eu.ssl-images-amazon.com/images/I/51-5ZXYtcML._SX342_SY445_QL70_ML2_.jpg',
          title: 'Buchcover'
        }],
        description: 'Lernen Sie JavaEloquent mit diesem Praxisbuch!'
      },
      {
        isbn: '978383623333230',
        title: 'Sql Oracle',
        authors: ['Mike'],
        published: new Date(2020, 8, 1),
        subtitle: 'Grundlagen , fortgeschrittene Themen und Best Teacher evers',
        rating: 5,
        thumbnails: [{
          url: 'https://profile-images.xing.com/images/4860ae88346cfef4e1296e0f06e3f250-1/mike-bondzio.256x256.jpg',
          title: 'Buchcover'
        }],
        description: 'Lernen Sie JavaScript mit diesem Praxisbuch!'
      },
      {
        isbn: '9783864905520',
        title: 'React',
        authors: ['Oliver Zeigermann', 'Nils Hartmann'],
        published: new Date(2019, 11, 12),
        subtitle: 'Grundlage , fortgeschrittene Techniken und Praxistipps',
        rating: 4,
        thumbnails: [{
          url: 'https://api4.angular-buch.com/images/react.jpg',
          title: 'Buchcover'
        }],
        description: 'Das bewährte und umfassende Praxisbuch zu React'
      }

    ];

  }

  getAll(): Book[] {
    return this.books;
  }


  getSingle(isbn: string): Book {
    return this.books.find(book => book.isbn === isbn);
  }

}








