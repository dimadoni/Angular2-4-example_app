import { Component, ViewChild } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { MatTableDataSource, MatSort } from '@angular/material';
import { UsertableComponent } from './usertable/usertable.component';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works';
  private apiUrl = 'https://api.github.com/users/Automattic/repos';
  data: any = {};
  searchStr = '';

  constructor (private http: Http) {
  	this.getRepositories();
  	this.getData();
  }
  getData() {
  	return this.http.get(this.apiUrl).map((res: Response) => res.json())
  }

  getRepositories() {
  	this.getData().subscribe(data => {
  	console.log(data);
  	this.data = data;
  	})
  }
}
