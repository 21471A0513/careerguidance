import { Component,OnInit,OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  StudentDetails,
  UniqueConstraintError,
} from '../student-details';
import { Subscription } from 'rxjs';
import { Crud1Service } from '../crud1.service';
 @Component({
  selector: 'app-insert1',
  templateUrl: './insert1.component.html',
  styleUrls: ['./insert1.component.css']
})
export class Insert1Component implements OnInit,OnDestroy {
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
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';
    this.Subscription = this.Service.Insert(this.User).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.hallticketno} alredy Exists`;
        } else {
          this.SuccessMsg = `${this.User.hallticketno} Inserted Succesfully`;
        }
      },
      error: (Error: any) => {
        console.log(Error);
      },
    });
    // this the another syntax for the Subscribe Its advanced Handling everything
   }
   Update(){
    this.ErrorMsg='';
    this.SuccessMsg='';
    this.Subscription=this.Service.Update(this.User.hallticketno,this.User).subscribe(
      
      (data:any)=>{
        if(data){
        
          this.SuccessMsg = `updated sucessfully`;
        }
        else{
          this.ErrorMsg = ` No record Found`;
        }

      }
    )
    

   
    console.log(this.User);
  
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}
  
