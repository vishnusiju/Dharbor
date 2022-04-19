import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  contactMethod=[
    
    {id: 1, name: "Development"},
    {id: 2, name: "Arts"},
    {id: 3, name: "Languages"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
