import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  Details,
  UniqueConstraintError,
} from '../details';
import { Subscription } from 'rxjs';
import { CspserviceService } from '../cspservice.service';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit,OnDestroy {
  Results: any;
  GotResult: boolean | undefined;
  canShow:boolean=false;
  retrive:boolean=false;
  clicked:boolean=false;
  constructor(private Service: CspserviceService) {}
  
  // ngOnDestroy(): void {
  //   throw new Error('Method not implemented.');
  // }
  ngOnInit() {
    this.Read();
  }
  Subscription: Subscription = new Subscription();
  User: Details = {
    studentname: '',
    email: '',
    address:'',
    phoneno:0,
    schoolname:'',
    schooladdress:'',
    gpa:0
  };
  SuccessMsg = '';
  ErrorMsg = '';
  Read() {
    this.Service.Read(this.User.email).subscribe({
      next: (Data : any) => {
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }
  Delete() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';
    this.Subscription = this.Service.Delete(this.User.email).subscribe({
      next: (Data) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.email} not Exists`;
        } else {
          this.SuccessMsg = `${this.User.email} Deleted Succesfully`;
        }
      },
      error: (Error) => {
        console.log(Error);
      },
    });
   
     
  }
  
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
  
}
 


