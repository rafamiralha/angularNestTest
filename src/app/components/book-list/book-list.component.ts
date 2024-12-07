import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../../service/book.service';
import { Book } from '../../entity/books-model';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-book-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {
  bookService = inject(BookService)
  books: Book[] = [];





  ngOnInit() {
    this.bookService.GetAll().subscribe((books: any)=>{
      console.log(books);
      this.books = books;
    })
  }
}
