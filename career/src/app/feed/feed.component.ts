import { Component,OnInit,OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  ConDetails,
  UniqueConstraintError,
} from '../con-details';
import { Subscription } from 'rxjs';
import { Crud5Service } from '../crud5.service';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit,OnDestroy {
  constructor(private Service: Crud5Service) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: ConDetails = {
    name: '',
     email: '',
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
          this.ErrorMsg = `${this.User.email} alredy Exists`;
        } else {
          this.SuccessMsg = `${this.User.email} Inserted Succesfully`;
        }
      },
      error: (Error: any) => {
        console.log(Error);
      },
    });
    // this the another syntax for the Subscribe Its advanced Handling everything
   }
    
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}
  


