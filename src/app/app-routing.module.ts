import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './Components/login/aboutus/aboutus.component';
import { ContactComponent } from './Components/login/contact/contact.component';
import { FullInsuranceComponent } from './Components/login/full-insurance/full-insurance.component';
import { HomeComponent } from './Components/login/home/home.component';
import { NotFoundComponent } from './Components/login/not-found/not-found.component';
import { ThirdincuranceComponent } from './Components/login/thirdincurance/thirdincurance.component';

const routes: Routes = [
  // { path: 'List', component: DashbordMainComponent },
  { path: 'home', component: HomeComponent },
  { path: 'full', component: FullInsuranceComponent },
  { path: 'third', component: ThirdincuranceComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'contact', component: ContactComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' }, //Default Path
 
  
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
