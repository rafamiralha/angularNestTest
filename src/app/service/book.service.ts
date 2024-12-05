import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../entity/books.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient:HttpClient){}
  books: Book[] = [];
  GetAll() {
   return this.httpClient.get('http://localhost:3000/books');
  }
}
