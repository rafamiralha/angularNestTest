import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import {  CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [ CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
public show_login = false
public show_content = true
openModalLogin(){
  this.show_login = true;
  this.show_content = false;
}


}
