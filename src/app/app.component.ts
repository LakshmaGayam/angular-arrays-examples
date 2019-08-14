import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
   north:string[]=["delhi","pune","mumbai"]
     south:string[]=["AndhraPradesh","Telangana","Karnataka"]
     cities:string[]=this.north.concat(this.south).sort();

     a:number=2;
     b:number=3;
    c=this.a++;
 
 
}
