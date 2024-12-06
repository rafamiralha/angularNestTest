import { Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
   {path:'list', component: BookListComponent},
   {path:'home', component: HomeComponent},
   { path: '',   redirectTo: 'home', pathMatch: 'full'}


];
