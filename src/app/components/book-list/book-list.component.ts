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
  @Output() delete = new EventEmitter();
  ngOnInit() {
    this.bookService.GetAll().subscribe((books: any) => {
      this.books = books;
    })
  }
  onEdit(book: Book) {
    this.edit.emit()
    this.router.navigateByUrl(`/edit-book/${book.id}`)

  }
  // Esta função deleta um livro cadastrado e recarrega a página
  onDelete(book: Book) {
    this.delete.emit()
    this.bookService.Delete(book.id)
      .subscribe(() => {
        this.bookService.GetAll().subscribe((books: any) => {
          this.books = books;
        })
      })
  }
}
