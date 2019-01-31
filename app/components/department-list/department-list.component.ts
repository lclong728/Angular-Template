import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  private department : string[] = [
    'code-JJ', 
    'ERMS-JJ'
  ]

  constructor(private http : HttpClient) { }

  ngOnInit() {
  }

}
