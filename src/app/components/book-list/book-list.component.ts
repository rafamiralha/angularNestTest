import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Book } from '../../entity/books.model';

@Component({
  selector: 'app-book-list',
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {
  books: any[] = [];
  
  httpClient= Inject(HttpClient)

  ngOnInit() {
    this.httpClient.get('/api/products').subscribe((books:any ) =>{
      this.books = books
    });
  }
}
