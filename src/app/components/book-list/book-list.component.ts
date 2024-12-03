import { Component, OnInit } from '@angular/core';
import { Book } from '../../entity/books.model';
import { BookService } from '../../service/book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  books: Book [] = [];
  constructor(private bookService: BookService) { }
    ngOnInit(): void {
  
     this.getBooks();
  }
  getBooks(): void {
    this.bookService.GetBooks().subscribe(books => this.books = books);
  }
}
