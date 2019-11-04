import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Unit5Lesson1';
  doSomething(){
    console.log('doing something');
    return this.title;
  }
}
