import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerateComponent } from './generate/generate.component';
import { MainComponent } from './main/main.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AllComponent } from './all/all.component';
import { ItiComponent } from './iti/iti.component';
import { InterComponent } from './inter/inter.component';
import { DiplomaComponent } from './diploma/diploma.component';
import { VocationalComponent } from './vocational/vocational.component';
import { PolytechniqueComponent } from './polytechnique/polytechnique.component';
import { PolyComponent } from './poly/poly.component'; 
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { DeleteComponent } from './delete/delete.component';
import { ReadComponent } from './read/read.component';
import { ContactComponent } from './contact/contact.component';
import { CreadComponent } from './cread/cread.component';
import { CinupComponent } from './cinup/cinup.component';
import { CdeleteComponent } from './cdelete/cdelete.component';
import { DelComponent } from './del/del.component';
import { UpdateComponent } from './update/update.component';
import { CupComponent } from './cup/cup.component';
import { Insert1Component } from './insert1/insert1.component';
import { Read1Component } from './read1/read1.component';
import { ManasviComponent } from './manasvi/manasvi.component';
import { VocinComponent } from './vocin/vocin.component';
import { VocreadComponent } from './vocread/vocread.component';
import { VocupComponent } from './vocup/vocup.component';
import { AddComponent } from './add/add.component';
import { Read2Component } from './read2/read2.component';
import { Up2Component } from './up2/up2.component';
import { In4pComponent } from './in4p/in4p.component';
import { Read3Component } from './read3/read3.component';
import { Up3Component } from './up3/up3.component';
import { FeedComponent } from './feed/feed.component';
     @NgModule({
  declarations: [
    AppComponent,
    GenerateComponent,
    MainComponent,
    CarouselComponent,
    HomeComponent,
    LoginComponent,
    AllComponent,
    ItiComponent,
    InterComponent,
    DiplomaComponent,
    VocationalComponent,
    PolytechniqueComponent,
    PolyComponent,
    SignupComponent,
    DeleteComponent,
    ReadComponent,
    ContactComponent,
    CreadComponent,
    CinupComponent,
    CdeleteComponent,
    DelComponent,
    UpdateComponent,
    CupComponent,
    Insert1Component,
    Read1Component,
    ManasviComponent,
    VocinComponent,
    VocreadComponent,
    VocupComponent,
    AddComponent,
    Read2Component,
    Up2Component,
    In4pComponent,
    Read3Component,
    Up3Component,
    FeedComponent,
         ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
