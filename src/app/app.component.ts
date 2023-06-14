import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm : NgForm;
  DefaultquestionAns="pet"
  answer='';
  genders=['male','female'];
myForm: any;
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  // Submit(f:NgForm)
  // {
  //   console.log(f);
  // }
  Submit()
  {
    console.log(this.signupForm);
  }
  GetName(name:string)
  {
    console.log(name);
  }
}
