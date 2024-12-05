import { Injectable } from '@angular/core';
import { Book } from '../../entity/books.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'assets/book.json';


}
