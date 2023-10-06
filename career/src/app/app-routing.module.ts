import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateComponent } from './generate/generate.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AllComponent } from './all/all.component';
import { ItiComponent } from './iti/iti.component';
import { InterComponent } from './inter/inter.component';
import { DiplomaComponent } from './diploma/diploma.component';
import { VocationalComponent } from './vocational/vocational.component';
import { PolyComponent } from './poly/poly.component';
import { SignupComponent } from './signup/signup.component';
 import { ReadComponent } from './read/read.component';
import { PolytechniqueComponent } from './polytechnique/polytechnique.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { CinupComponent } from './cinup/cinup.component';
import { CreadComponent } from './cread/cread.component';
import { CdeleteComponent } from './cdelete/cdelete.component';
import { DelComponent } from './del/del.component';
import { UpdateComponent } from './update/update.component';
import { CupComponent } from './cup/cup.component';
import { DeleteComponent } from './delete/delete.component';
import { Insert1Component } from './insert1/insert1.component';
import { Read1Component } from './read1/read1.component';
import { ManasviComponent } from './manasvi/manasvi.component';
import { VocinComponent } from './vocin/vocin.component';
import { VocreadComponent } from './vocread/vocread.component';
import { VocupComponent } from './vocup/vocup.component';
import { AddComponent } from './add/add.component';
import { Read2Component } from './read2/read2.component';
import { In4pComponent } from './in4p/in4p.component';
import { Read3Component } from './read3/read3.component';
import { Up3Component } from './up3/up3.component';
import { FeedComponent } from './feed/feed.component';
import { Up2Component } from './up2/up2.component';
 const routes: Routes = [
  {
  path : 'generate',
  component : GenerateComponent
  },
  {
    path : "carousel",
    component : CarouselComponent
  },
  {
    path :"home",
    component : HomeComponent
  },
  {
    path : 'polytechnique',
    component : PolytechniqueComponent
  },
  {
    path : "login",
    component : LoginComponent
  },
  {
    path : "all",
    component : AllComponent
  },
  {
    path : "iti",
    component : ItiComponent
  },
  {
    path : "inter",
    component : InterComponent
  },
  {
    path : "diploma",
    component : DiplomaComponent
  },
  {
    path : "vocational",
    component : VocationalComponent
  },
  
  {
    path : "poly",
    component : PolyComponent
  },
  {
    path : "signup",
    component : SignupComponent
  },{
    path :'delete',
    component : DeleteComponent
  },
   
    {
      path : 'read',
      component : ReadComponent
      },
{
  path : 'main',
  component : MainComponent
},
{
  path : 'contact',
  component : ContactComponent
},
{
  path : 'cinup',
  component : CinupComponent
},
{
  path : 'cread',
  component : CreadComponent
},
{
  path : 'cdelete',
  component : CdeleteComponent
},{
  path : 'del',
  component : DelComponent
},
{
  path : 'update',
  component : UpdateComponent
},
{
  path : 'cup',
  component : CupComponent
},
{
  path : 'insert1',
  component : Insert1Component
},  
{
  path : 'read1',
  component : Read1Component
}, 
{
  path : 'manasvi',
  component:ManasviComponent
},
{
  path : 'vocin',
  component:VocinComponent
},  
{
  path : 'vocread',
  component:VocreadComponent
}, 
{
  path : 'vocup',
  component:VocupComponent
}, 
{
  path : 'add',
  component:AddComponent
}, 
{
  path : 'read2',
  component:Read2Component
},
{
  path : 'in4p',
  component:In4pComponent
},
{
  path : 'read3',
  component:Read3Component
},
{
  path : 'up3',
  component:Up3Component
},
{
  path : 'feed',
  component:FeedComponent
},
{
  path : 'up2',
  component:Up2Component
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
