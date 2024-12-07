import { Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { HomeComponent } from './components/home/home.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
   {path:'list', component: BookListComponent},
   {path:'home', component: HomeComponent},
   {path:'add-book', component:AddBookComponent},
   {path:'login', component:LoginComponent},
   {path: '',   redirectTo: 'home', pathMatch: 'full'}


];
