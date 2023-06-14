import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-department-info',
  templateUrl: './department-info.component.html',
  styleUrls: ['./department-info.component.css']
})
export class DepartmentInfoComponent implements OnInit {
  @ViewChild('v') formInput : NgForm
  mobileNumber:number=9380345703;

  constructor() { }

  ngOnInit(): void {
  }
  Submit()
  {
    this.mobileNumber=this.formInput.value.PhoneNumber;
    console.log(this.formInput);
  }

}
