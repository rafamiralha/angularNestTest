import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../../service/book.service';
import { Book } from '../../../entity/books-model';

@Component({
  selector: 'app-details-book',
  imports: [],
  templateUrl: './details-book.component.html',
  styleUrl: './details-book.component.css'
})
export class DetailsBookComponent {
  bookService = inject(BookService);
  router = inject(Router);
  book: Book = inject(ActivatedRoute).snapshot.data['book'];

}
