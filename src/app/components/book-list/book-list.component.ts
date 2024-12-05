import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface Book {
  heroesUrl: string;
  textfile: string;
  date: any;
}
@Component({
  selector: 'app-book-list',
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {
id: any;
  constructor(private httpClient:HttpClient){}
  books: any[] = [];
  
  

  ngOnInit() {
    this.httpClient.get('http://localhost:3000/books').subscribe((books: any)=>{
      console.log(books);
      this.books = books;
    })
  }
}
