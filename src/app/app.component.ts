import { Component } from '@angular/core';

import { BookListComponent } from "./components/book-list/book-list.component";
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from './components/home/home.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  providers: [
    HttpClient
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularTest';
}
