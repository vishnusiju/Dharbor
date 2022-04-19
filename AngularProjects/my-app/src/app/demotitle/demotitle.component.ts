import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demotitle',
  templateUrl: './demotitle.component.html',
  styleUrls: ['./demotitle.component.css']
})
export class DemotitleComponent implements OnInit {

  title!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
