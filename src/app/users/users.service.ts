import { Injectable } from '@angular/core';
import { User } from './interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userValido:User = {
    username: "admin",
    pass:"admin"
  }

  compare(user:User):boolean{
    return(user.username === this.userValido.username && user.pass === this.userValido.pass)? true : false;
  }

  constructor() { }
}
