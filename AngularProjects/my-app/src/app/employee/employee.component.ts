import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  // template: `
  //   <h2>Employee List</h2>
  //   <ul *ngFor="let employee of employees">
  //     <li>{{employee.id}} - {{employee.name}} - {{employee.age}}</li>
  //   </ul>
  // `,
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employees = [
    {"id": 1, "name": "Andrew", "age": 30},
    {"id": 2, "name": "brandon", "age": 40},
    {"id": 3, "name": "christ", "age": 10},
    {"id": 4, "name": "elena", "age": 20}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
