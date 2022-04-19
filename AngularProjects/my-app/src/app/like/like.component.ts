import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent{

  @Input('likeCount')
  likeCount!: number; 
  @Input('isActive')
  isActive: boolean = false; 


  onClick(){
    this.likeCount += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
  }
}
