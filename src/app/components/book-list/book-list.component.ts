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
  @Output() show = new EventEmitter()
  ngOnInit() {
    this.bookService.GetAll().subscribe((books: any) => {
      this.books = books;
    })
  }

  onShowDetail(book: Book){
    this.show.emit()
    this.router.navigateByUrl(`/details/${book.id}`)
  }

  //este metodo roteia para a página de edit baseado no ID
  onEdit(book: Book) {
    this.edit.emit()
    this.router.navigateByUrl(`/edit-book/${book.id}`)

  }
  // Este método deleta um livro cadastrado e recarrega a página
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
