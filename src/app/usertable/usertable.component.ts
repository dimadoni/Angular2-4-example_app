import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MatTableDataSource, MatSort, MatSortable, MatPaginatorModule, MatPaginator, MatCheckboxModule } from '@angular/material';
import { UserService } from '../user.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularFirestore } from 'angularfire2/firestore';
import { SelectionModel } from '@angular/cdk/collections';


@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  repositoryDetails = {
    name: '',
    description: '',
    language: '',
    actions: ''
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  dataSource;
  selection;
  displayedColumns = ['name', 'description', 'language','actions'];
  constructor(private UserService: UserService) { }

  ngOnInit() {
  	this.UserService.getUser().subscribe(results => {
  		if(!results) {
  			return;
  		}
  		this.dataSource = new MatTableDataSource(results);
  		this.dataSource.sort = this.sort;
      setTimeout(() => {
      this.dataSource.paginator = this.paginator;
});
  	})
  }

  deleteUser(repository){
    if (confirm("Are you sure you want to delete " + repository.name + "?")) {
      var index = this.data.indexOf(repository);
      this.data.splice(index, 1);

      this.usersService.deleteUser(repository.name)
        .subscribe(null,
          err => {
            alert("Could not delete user.");
            // Revert the view back to its original state
            this.data.splice(index, 0, repository);
          });
    }
  }



  addrepository() {
    this.dataSource.addrepository(this.repositoryDetails);
  }

}
