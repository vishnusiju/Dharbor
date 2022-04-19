import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  name = "Ajay"

  isDisabled: boolean = true;     // its enabled now.

  // isDisabled: boolean = true;      its disabled now.

  constructor() { }

  ngOnInit(): void {
  }

}
