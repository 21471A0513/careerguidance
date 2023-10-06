import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  Details,
  UniqueConstraintError,
} from '../details';
import { CspserviceService } from '../cspservice.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit,OnDestroy {
  constructor(private Service: CspserviceService) {}
  GotResult: Boolean = false;
  ngOnInit() {
    this.Read();
  }
  Read() {
    throw new Error('Method not implemented.');
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
  Results = [];
  
  SuccessMsg = '';
  ErrorMsg = '';
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
    // this the another syntax for the Subscribe Its advanced Handling everything
  } 
  ngOnDestroy(){
    this.Subscription.unsubscribe();
  }
}
