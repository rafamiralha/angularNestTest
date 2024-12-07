import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-add-book',
  imports: [ReactiveFormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css',
})
export class AddBookComponent {
  bookService = inject(BookService);

  // instância o formulário
  bookForm = new FormGroup({
    name: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    author: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    description: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    dateRelease: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });
  //captura o valor do campo ao dar submit
  onSubmit() {
    this.bookService.Post({
      name: this.bookForm.controls.name.value,
      author: this.bookForm.controls.author.value,
      description: this.bookForm.controls.description.value,
      dateRelease: this.bookForm.controls.dateRelease.value
    })
    .subscribe(() =>{
      alert('successs');
    })
  }
}
