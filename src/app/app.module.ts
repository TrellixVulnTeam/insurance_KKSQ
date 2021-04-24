import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignComponent } from './Components/login/sign/sign.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { NotFoundComponent } from './Components/login/not-found/not-found.component';

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

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {  MatInputModule } from '@angular/material/input';
import { ThirdincuranceComponent } from './Components/login/thirdincurance/thirdincurance.component';

import {MatMenuModule} from '@angular/material/menu';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {MatSelectModule} from '@angular/material/select';

import { HttpClientModule } from '@angular/common/http';

import {NgxPrintModule} from 'ngx-print';
import { AboutusComponent } from './Components/login/aboutus/aboutus.component';
import { ContactComponent } from './Components/login/contact/contact.component';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  TranslateModule, 
  TranslateService,
  TranslateLoader,
} from '@ngx-translate/core';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

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
    SignComponent,
    NotFoundComponent,
    HomeComponent,
    FullInsuranceComponent,
    HeaderComponent,
    SignUpComponent,
    LoginComponent,
    ThirdincuranceComponent,
    AboutusComponent,
    ContactComponent
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
    NgxPrintModule,
    MatMenuModule,
    CascadeSelectModule,
    DropdownModule,
    ButtonModule,
    MatSelectModule,
    TranslateModule,
    // TranslateService,
    HttpClientModule,
    TranslateModule.forRoot({ 
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],

      },
    }),



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
