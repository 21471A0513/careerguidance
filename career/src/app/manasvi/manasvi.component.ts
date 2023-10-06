import { Component,OnInit,OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  StudentDetails,
  UniqueConstraintError,
} from '../student-details';
import { Subscription } from 'rxjs';
import { Crud1Service } from '../crud1.service';
 @Component({
  selector: 'app-manasvi',
  templateUrl: './manasvi.component.html',
  styleUrls: ['./manasvi.component.css']
})
 
export class ManasviComponent implements OnInit,OnDestroy {
  canShow:boolean=false;
  retrive:boolean=false;
  clicked:boolean=false;
  a: any;
  constructor(private Service: Crud1Service) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: StudentDetails = {
    name: '',
    hallticketno: 0,
    gender: '',
    sclname: '',
    coursename: '',
    gpa: 0,
    phno: 0,
    address: '',


  };
  SuccessMsg = '';
  ErrorMsg = '';
  Read(){
    this.clicked=true;
    this.ErrorMsg='';
    this.SuccessMsg='';
    this.Subscription=this.Service.Read(this.User.hallticketno).subscribe(
      (data:any)=>{
        if(data){
          this.canShow=true;
          this.a=data.Result[0];   
          this.User = {
            name:this.a[0] ,
            hallticketno:this.a[1],
            gender:this.a[2],
            sclname:this.a[3],
            coursename:this.a[4],
            gpa:this.a[5],
            phno:this.a[6],
            address:this.a[7],


           
            };
            console.log(data.Result);
            }
        else{
       alert("can't update");
        }
      }
    )
    
  }
  Update(){
    this.ErrorMsg='';
    this.SuccessMsg='';
    this.Subscription=this.Service.Update(this.User.hallticketno,this.User).subscribe(
      (data:any)=>{
        if(data){
        
          this.SuccessMsg = `${this.User.hallticketno} updated sucessfully`;
        }
        else{
          this.ErrorMsg = `${this.User.hallticketno} No record Found`;
        }

      }
    )
  alert(" Updated successfully (●'◡'●)")
    console.log(this.User);
    this.canShow=false;
  }
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';
    this.canShow=false;
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
  
}
   