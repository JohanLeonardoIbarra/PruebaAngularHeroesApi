import { Component, OnInit } from '@angular/core';
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
    console.log(this.user);
  }

  ngOnInit(): void {
  }

}
