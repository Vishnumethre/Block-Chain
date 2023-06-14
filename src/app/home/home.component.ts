import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
user:{
  id:number,
  name:string
}
  constructor(private route : Router,private routes:ActivatedRoute) { }

  ngOnInit(): void {

    this.user={
      id:this.routes.snapshot.params['id'],
      name:this.routes.snapshot.params['name']
    }
    
      this.routes.params.subscribe((params:Params)=>
      {
console.log(params);
this.user.id=params['id'];
this.user.name=params['name'];
      })
    
  }
  Navigate()
  {
  this.route.navigate(['/Student']);
  }

}
