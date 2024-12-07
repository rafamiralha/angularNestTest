import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  imports: [ReactiveFormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css',
})
export class AddBookComponent {

  // instância o formulário
  bookForm = new FormGroup({
    title: new FormControl<string>('', { 
      nonNullable: true, 
      validators: Validators.required }),
  });
  //captura o valor do campo ao dar submit 
  onSubmit(){
      this.bookForm.controls.title.value;
  }

}
