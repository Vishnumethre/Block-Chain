import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataPasserService } from 'src/app/data-passer.service';

@Component({
  selector: 'app-subject-info',
  templateUrl: './subject-info.component.html',
  styleUrls: ['./subject-info.component.css']
})
export class SubjectInfoComponent implements OnInit {
  @ViewChild('f') formData:NgForm;

  constructor(private ser:DataPasserService,private route:Router) { }

  ngOnInit(): void {
  }
  Submit()
  {
    DataPasserService.studentInfo.Sub1=this.formData.value.student1;
    this.route.navigate(['Home'])


  }

}
