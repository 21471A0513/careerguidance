import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  Details,
  UniqueConstraintError,
} from '../details';
import { Subscription } from 'rxjs';
import { CspserviceService } from '../cspservice.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit, OnDestroy {
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
  a=[];
  SuccessMsg = '';
  ErrorMsg = '';
  Read(){
    this.clicked=true;
    this.ErrorMsg='';
    this.SuccessMsg='';
    this.Subscription=this.Service.Read(this.User.email).subscribe(
      (data:any)=>{
        if(data){
          this.canShow=true;
          this.a=data.Result[0];   
          this.User = {
            studentname:this.a[0] ,
            email:this.a[1],
            address:this.a[2],
            phoneno:this.a[3],
            schoolname:this.a[4],
            schooladdress:this.a[5],
            gpa:this.a[6],


           
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
    this.Subscription=this.Service.Update(this.User.email,this.User).subscribe(
      (data:any)=>{
        if(data){
        
          this.SuccessMsg = `${this.User.email} updated sucessfully`;
        }
        else{
          this.ErrorMsg = `${this.User.email} No record Found`;
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
  