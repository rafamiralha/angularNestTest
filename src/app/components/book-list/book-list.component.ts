import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../../service/book.service';
import { Book } from '../../entity/books-model';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-book-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {
  bookService = inject(BookService)
  books: Book[] = [];
  
  router = inject(Router);

  @Output() edit = new EventEmitter();
  ngOnInit() {
    this.bookService.GetAll().subscribe((books: any)=>{
      console.log(books);
      this.books = books;
    })
  }
  onEdit(){
  this.edit.emit()
  this.router.navigateByUrl('/edit-book')
  }
}
