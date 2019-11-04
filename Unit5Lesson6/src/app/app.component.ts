import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Unit5Lesson1';
  text = 'OurText'

  // doSomething(something:string){
  //   console.log(something);
  //   return this.title;
  // }
  // text ='';
  // setText(text:string){
  //   this.text=text;
  // }
  // doSomething(){
  //   console.log(this.text);
  //   return this.text;
  // }


  doSomething(){
    console.log(this.text)
    return this.text;
  }
}
