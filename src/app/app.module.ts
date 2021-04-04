import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashbordMainComponent } from './Components/login/dashbord-main/dashbord-main.component';
import { SignComponent } from './Components/login/sign/sign.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { NavcontrolDispalyDirective } from './directive/navcontrol-dispaly.directive';
import { NotFoundComponent } from './Components/login/not-found/not-found.component';
import { AMlistComponent } from './Lists/amlist/amlist.component';
import { PMlistComponent } from './Lists/pmlist/pmlist.component';
import { HomeComponent } from './Components/login/home/home.component';

import {MatSidenavModule} from '@angular/material/sidenav';

import {MatStepperModule} from '@angular/material/stepper';
import { FullInsuranceComponent } from './Components/login/full-insurance/full-insurance.component';
import { HeaderComponent } from './Components/login/header/header.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { SignUpComponent } from './Components/login/sign-up/sign-up.component';
import { LoginComponent } from './Components/login/login/login.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SidenavComponent } from './sidenav/sidenav.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {  MatInputModule } from '@angular/material/input';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { ThirdincuranceComponent } from './Components/login/thirdincurance/thirdincurance.component';

import {NgxPrintModule} from 'ngx-print';


var firebaseConfig = {
  apiKey: "AIzaSyAzBJKDiRHQ0pgh52rSMCh_jvV5CBRwdCI",
  authDomain: "klooktest-520cb.firebaseapp.com",
  projectId: "klooktest-520cb",
  storageBucket: "klooktest-520cb.appspot.com",
  messagingSenderId: "486005586729",
  appId: "1:486005586729:web:7ced86ac11b96f1c9ad538"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    AppComponent,
    DashbordMainComponent,
    SignComponent,
    NavcontrolDispalyDirective,
    NotFoundComponent,
    AMlistComponent,
    PMlistComponent,
    HomeComponent,
    FullInsuranceComponent,
    HeaderComponent,
    SignUpComponent,
    LoginComponent,
    SidenavComponent,
    InfoDialogComponent,
    ThirdincuranceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    NgxPrintModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
