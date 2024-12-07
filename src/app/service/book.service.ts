import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../entity/books-model';
import { BookPayload } from '../entity/books-payload';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private httpClient: HttpClient) {}
  books: Book[] = [];
  GetAll() {
    return this.httpClient.get('http://localhost:3000/books');
  }
  Get(id: string) {
    return this.httpClient.get(`http://localhost:3000/books/${id}`);
  }
  Post(payload: BookPayload) {
    return this.httpClient.post('http://localhost:3000/books', payload);
  }
  //O patch também é usável neste caso
  Put(id: string, payload: BookPayload) {
    return this.httpClient.put(`http://localhost:3000/books/${id}`, payload);
  }
  
}
