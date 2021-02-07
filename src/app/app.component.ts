import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts=[
    {
      imageUrl:'tree.jpeg',
      title:'Neat Tree',
      userName:'nature',
      content:'I saw this neat tree during the hike today.'
    },
    {
      imageUrl:'mountain.jpeg',
      title:'Snowy mountain ',
      userName:'mountainlover',
      content:'Here is a picture of snowy mountain.'
    },
    {
      imageUrl:'biking.jpeg',
      title:'Mountain biking',
      userName:'biking1222',
      content:'I did some biking today.'
    }
  ]
}
