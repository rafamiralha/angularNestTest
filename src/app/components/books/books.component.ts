import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DetailsBookComponent } from '../details-book/details-book.component';

@Component({
  selector: 'app-books',
  imports: [CommonModule, DetailsBookComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

}
