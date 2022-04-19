import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  name = 'angular';

  ////like component propertys

  tweet={
    body:" ..",
    likeCount: 10,
    isLiked: true
  }

  
}
