import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SignauthService } from 'src/app/services/signauth.service';
import { User } from 'src/app/ViewModals/user';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
// import { ObservableMedia, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {


  constructor(    private router: Router,
    ) {

  }


  ngOnInit() {

  }

  full(){
          this.router.navigate(['/full']);

  }

  third(){
    this.router.navigate(['/third']);

}
}