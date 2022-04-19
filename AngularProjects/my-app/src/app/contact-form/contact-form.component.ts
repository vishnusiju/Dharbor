import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  log(x: any){
    console.log(x);
  }

  submit(f: any){
    console.log(f);
  }

  constructor() { }

  ngOnInit(): void {
  }

  contactMethod=[
    {id: 1, name: "name1"},
    {id: 2, name: "name2"}
  ]


 

}
