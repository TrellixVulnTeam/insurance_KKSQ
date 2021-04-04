import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignComponent } from './../sign/sign.component';
import { SignUpComponent } from './../sign-up/sign-up.component';
import { LoginComponent } from '../login/login.component';
import { SignauthService } from 'src/app/services/signauth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog,private authser: SignauthService) {}

  openDialog() {
    const dialogRef = this.dialog.open(SignUpComponent,{
      // width:'250px'
    });
    // const dialogRef = this.dialog.open(LoginComponent,{
      // width:'250px'
    // });

 
  }
  isuser: boolean = true
  ngOnInit(): void {

      this.authser.user.subscribe(user => {
    if (user) {
      this.isuser = false
      // console.log(user)s
    }
    else
      this.isuser = true;
  })
  }

  Logout() {
    this.authser.logout()
    localStorage.removeItem('currentUserEmail')

  }

}
