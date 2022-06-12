import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '../interfaces/user.interface';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    username: "",
    pass: "" 
  }

  error = false;

  constructor(private userService:UsersService) { }

  login(){
    this.error = false
    if(this.user.username === "" || this.user.pass === ""){
      this.error = true
      return;
    };
    if(this.userService.compare(this.user)) window.open("/heroes", "_self")
    else this.error = true
  }

  ngOnInit(): void {
  }

}
