import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {
  @ViewChild('f') signupForm : NgForm;
  DefaultquestionAns="pet"
  answer='';
  genders=['male','female'];
myForm: any;
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  constructor(private router : Router,private route:ActivatedRoute) { }
  // Submit(f:NgForm)
  // {
  //   console.log(f);
  // }
  Submit()
  {
    console.log(this.signupForm);
    this.router.navigate(['../Student'],{relativeTo:this.route});
  }
  GetName(name:string)
  {
    console.log(name);
  }


  ngOnInit(): void {
  }


}
