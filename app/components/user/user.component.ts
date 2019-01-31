import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  companyName : String;
  employees : User[];
  inputValue : string;
  iUserList : User[]; 

  constructor(private http : HttpClient) { 
    console.log('constructor running....');
  }

  ngOnInit() {
    console.log('init running....');
    // init variables 
    this.companyName = 'SAGE';
    this.employees = [
      new User(1, 'David','ERMS-JJ'), 
      new User(2, 'jacky', 'code-JJ'),
      new User(3, 'viki', 'ERMS-JJ'),
      new User(4, 'william','Bosssss'),
      new User(5, 'Nancy','ERMS-JJ'),
      new User(6, 'Kapil', 'ERMS-JJ'),
      new User(7, 'Marco', 'ERMS-JJ'),
      new User(8, 'Peter', 'ERMS-JJ'),
      new User(9, 'long', 'code-JJ')
    ];
    this.iUserList = [];
    this.inputValue = '';
  }

  public clearAllOnClick() : void {
    this.inputValue = '';
    this.iUserList = [];
    alert('clear!')
  }

  public deleteUser(user : User, objList : any[]) : void {
    for(let i = 0;  i < objList.length; i++){
      if(objList[i] === user){
        objList.splice(i, 1);
      }
    }
  }

  public onInputValue(event : any) : void {
    this.inputValue += event.target.value + ' | ';
  }

  public getResponse() : void {
    this.http.get<User[]>('http://localhost:3000/api')
    .subscribe(data => {
      for(let i = 1; i <= 9; i++){
        let obj = data['user' + i];
        let user = new User(obj['userID'], obj['userName'], obj['department']);
        this.iUserList.push(user);
      }
    });
  }
}
