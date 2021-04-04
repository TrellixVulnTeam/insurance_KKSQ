import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbordMainComponent } from './Components/login/dashbord-main/dashbord-main.component';
import { FullInsuranceComponent } from './Components/login/full-insurance/full-insurance.component';
import { HomeComponent } from './Components/login/home/home.component';
import { NotFoundComponent } from './Components/login/not-found/not-found.component';
import { ThirdincuranceComponent } from './Components/login/thirdincurance/thirdincurance.component';
import { AMlistComponent } from './Lists/amlist/amlist.component';
import { PMlistComponent } from './Lists/pmlist/pmlist.component';

const routes: Routes = [
  // { path: 'List', component: DashbordMainComponent },
  { path: 'home', component: HomeComponent },
  { path: 'full', component: FullInsuranceComponent },
  { path: 'third', component: ThirdincuranceComponent },
  // { path: 'AMLists/:color', component: AMlistComponent },
  // { path: 'PMLists/:color', component: PMlistComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' }, //Default Path
 
  
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }