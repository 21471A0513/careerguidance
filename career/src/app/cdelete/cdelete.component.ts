 import { Component, OnDestroy, OnInit } from '@angular/core';
 import {
   InsertedSuccess,
   StudentDetails,
   UniqueConstraintError,
 } from '../student-details';
 import {Subscription} from 'rxjs';
 import { CrudService } from '../crud.service';
 
 
@Component({
  selector: 'app-cdelete',
  templateUrl: './cdelete.component.html',
  styleUrls: ['./cdelete.component.css']
})
export class CdeleteComponent implements OnInit,OnDestroy {
  constructor(private Service: CrudService) {}
  GotResult: Boolean = false;
  ngOnInit() {
    this.Read();
  }
  Read() {
    throw new Error('Method not implemented.');
  }
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
   Results = [];
  
   SuccessMsg = '';
   ErrorMsg = '';
   Delete() {
     this.ErrorMsg = '';
     this.SuccessMsg = '';
     this.Subscription = this.Service.Delete(this.User.hallticketno).subscribe({
       next: (Data) => {
         if ('errorNum' in Data) {
           this.ErrorMsg = `${this.User.hallticketno} not Exists`;
         } else {
           this.SuccessMsg = `${this.User.hallticketno} Deleted Succesfully`;
         }
       },
       error: (Error) => {
         console.log(Error);
       },
     });
    } 
    ngOnDestroy(){
      this.Subscription.unsubscribe();
    }
}
