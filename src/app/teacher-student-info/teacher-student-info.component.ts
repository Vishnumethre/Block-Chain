import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataPasserService } from '../data-passer.service';

@Component({
  selector: 'app-teacher-student-info',
  templateUrl: './teacher-student-info.component.html',
  styleUrls: ['./teacher-student-info.component.css']
})
export class TeacherStudentInfoComponent implements OnInit {
  @ViewChild('d') studentData:NgForm

  constructor(private route: Router,private service :DataPasserService ) { }

  ngOnInit(): void {
  }
  Submit()
  {
  console.log(this.studentData.value);
DataPasserService.studentInfo.studentName=this.studentData.value.student;
  DataPasserService.studentInfo.studentName=this.studentData.value.RollNumber;
  DataPasserService.studentInfo.studentName=this.studentData.value.BranchNames;
  DataPasserService.studentInfo.studentName=this.studentData.value.year;
  DataPasserService.studentInfo.studentName=this.studentData.value.date;

  this.route.navigate(['Student','SubjectInfo']);

  

  }

}
