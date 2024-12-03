import { Component } from '@angular/core';

@Component({
  selector: 'app-details-book',
  imports: [],
  templateUrl: './details-book.component.html',
  styleUrl: './details-book.component.css'
})
export class DetailsBookComponent {
   usuarios = {
    data:{
      "":{
        "name":"rafael",
        "livro":"era uma vez",
        "lançamento": "01-02-2001"
      },
      "name":"rafael2",
      "livro":"21345",
      "lançamento":"07-03-2005",
    },

  
   
  };
}
