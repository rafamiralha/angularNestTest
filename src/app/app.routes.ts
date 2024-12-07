import { Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { HomeComponent } from './components/home/home.component';
import { AddBookComponent } from './components/book-list/add-book/add-book.component';
import { LoginComponent } from './components/home/login/login.component';
import { EditBookComponent } from './components/book-list/edit-book/edit-book.component';

export const routes: Routes = [
   {path:'list', component: BookListComponent},
   {path:'add-book', component:AddBookComponent},
   {path:'edit-book', component:EditBookComponent},
   {path:'home', component: HomeComponent},
   {path:'login', component:LoginComponent},
   {path: '',   redirectTo: 'home', pathMatch: 'full'}


];
