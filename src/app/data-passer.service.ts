import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataPasserService {
  static studentInfo={
    studentName:'',
    RollNumber:'',
    BranchName:'', 
    Year:'',
    Date:new Date(),
    Sub1:0,
    Sub2:0,
    Sub3:0,
    Sub4:0,
    Sub5:0,
    Sub6:0
  };
  constructor() { 
    console.log(DataPasserService.studentInfo);
  }

}
