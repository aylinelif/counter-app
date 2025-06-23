import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count = 10;
 handleCounter(val:string){
   if (val=='minus'&& this.count>0) {
  this.count=this.count-1;
  
 }
 else if(val=='plus'){
  this.count=this.count+1;
 }
 else {
  this.count=0;
 }
 }

}
