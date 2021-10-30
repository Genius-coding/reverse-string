import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  reversedText: string = '';


  reveseString(event: Event) {
    let message = (<HTMLInputElement>event.target).value;
    console.log(message);
    /* 
      here we will take the text message and tranform it to an array of chars
      after that we'll try to use some reactive functions to fix the problem
      else the other way its the traditional way with for
    */
    this.reversedText = message.split("").reverse().join("");

  }



}
