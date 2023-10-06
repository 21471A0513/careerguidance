import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  Details,
  UniqueConstraintError,
} from '../details';
import { Subscription } from 'rxjs';
import { CspserviceService } from '../cspservice.service';
@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit, OnDestroy {
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
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';

    //   this.Subscription = this.Service.Insert(this.User).subscribe(
    //     (data)=>{
    //       if(data){
    //         console.log(data);
    //       }
    //       else{
    //         console.log("Failed");
    //       }
    //     }
    //   )
    // }

    this.Subscription = this.Service.Insert(this.User).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.email} alredy Exists`;
        } else {
          this.SuccessMsg = `${this.User.email} Inserted Succesfully`;
        }
      },
      error: (Error) => {
        console.log(Error);
      },
    });
    // this the another syntax for the Subscribe Its advanced Handling everything
  } 
   
  updatedMsg=''
  Update() {
    alert('updated successfully!!!');
    this.ErrorMsg = '';
    this.updatedMsg = '';
      
    const Data = {
      studentname: this.User.studentname,
      email: this.User.email,
      address: this.User.address,
      phoneno: this.User.phoneno,
      schoolname: this.User.schoolname,
      schooladdress: this.User.schooladdress,
      gpa: this.User.gpa,

     
    };
      
    this.Subscription = this.Service.Update(this.User.email,Data).subscribe({
      next: (data: any) => {
        console.log(`Updated values: name=${this.User.studentname}, email=${this.User.email},address=${this.User.address},phoneno=${this.User.phoneno},schoolname=${this.User.schoolname},schooladdress=${this.User.schooladdress},gpa=${this.User.gpa}`);
        this.updatedMsg = `Updated data for email ${this.User.email} successfully`;
      },
      error: (error: any) => {
        console.log(error);
        this.ErrorMsg = '';
      }
    });
  
  } 
  GotResult: Boolean = false;
  Results = [];
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
  ngOnDestroy(){
    this.Subscription.unsubscribe();
  }

}
