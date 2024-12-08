import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { HomeComponent } from './components/home/home.component';
import { AddBookComponent } from './components/book-list/add-book/add-book.component';
import { LoginComponent } from './components/home/login/login.component';
import { EditBookComponent } from './components/book-list/edit-book/edit-book.component';
import { BookService } from './service/book.service';
import { inject } from '@angular/core';


export const routes: Routes = [
   {path:'list', component: BookListComponent},
   {path:'add-book', component:AddBookComponent},
   {
      path:'edit-book/:id',
      resolve:{

         book: (route: ActivatedRouteSnapshot, state:RouterStateSnapshot)  => {
            const bookService = inject(BookService);
            return bookService.Get(route.paramMap.get('id') as string)
         },

      },
      loadComponent: () =>
         import('./components/book-list/edit-book/edit-book.component').then((m) => m.EditBookComponent),
   },
   {
    path:'details/:id',
    resolve:{

       book: (route: ActivatedRouteSnapshot, state:RouterStateSnapshot)  => {
          const bookService = inject(BookService);
          return bookService.Get(route.paramMap.get('id') as string)
       },

    },
    loadComponent: () =>
       import('./components/book-list/details-book/details-book.component').then((m) => m.DetailsBookComponent),
 },

   {path:'home', component: HomeComponent},
   {path:'login', component:LoginComponent},
   {path: '',   redirectTo: 'home', pathMatch: 'full'}


];
