import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BookService } from '../../../service/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../../entity/books-model';

@Component({
  selector: 'app-edit-book',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css',
})
export class EditBookComponent {
  bookService = inject(BookService);
  book: Book = inject(ActivatedRoute).snapshot.data['book'];
  router = inject(Router);

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

  onSubmit() {

      if (!this.book || !this.book['id']) {
        alert('Livro não está carregado corretamente!');
        return console.log(this.book);
      }
    this.bookService
      .Put(this.book['id'],{
        name: this.bookForm.controls.name.value,
        author: this.bookForm.controls.author.value,
        description: this.bookForm.controls.description.value,
        dateRelease: this.bookForm.controls.dateRelease.value,
      })
      .subscribe(() => {
        alert("Editado com sucesso!");
      });
      // Re-renderiza a pagina
    this.router.navigateByUrl('/list',   { skipLocationChange: true }).then(() => {
      this.router.navigate([decodeURI('/list')]);
    });
  }
}
