import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { User } from './../../model/user';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  private userList : User[];

  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.userList = [];
    this.http.get<User[]>('http://localhost:3000/api')
    .subscribe(data => {
      for(let i = 1; i <= 9; i++){
        let obj = data['user' + i];
        let user = new User(obj['userID'], obj['userName'], obj['department']);
        this.userList.push(user)
      }
    });
  }

}
