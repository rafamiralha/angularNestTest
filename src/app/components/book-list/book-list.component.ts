import { Component, OnInit } from '@angular/core';
import { Book } from '../../entity/books.model';
import { BookService } from '../books/book.service';
import { CommonModule } from '@angular/common';
import { BooksComponent } from '../books/books.component';

@Component({
  selector: 'app-book-list',
  imports: [CommonModule, BooksComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {
  constructor() {}
}
