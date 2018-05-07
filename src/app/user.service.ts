import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user.model';
import { Observable } from 'rxjs/Observable';
import { HttpClientModule } from '@angular/common/http';


@Injectable()
export class UserService {
  private serviceUrl = " https://api.github.com/users/Automattic/repos";


  constructor(private http: HttpClient) { }
  
  getUser():Observable<User[]>{
  	return this.http.get<User[]>(this.serviceUrl);
  }
}
