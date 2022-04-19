import { Component, OnInit } from '@angular/core';
import { AuthorsService } from './authors.service';

@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  author: any;

  constructor(service: AuthorsService) {
    this.author = service.getAuthors();   //initialize the author
   }

  ngOnInit(): void {
  }

}
