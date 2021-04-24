import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignComponent } from './../sign/sign.component';
import { SignUpComponent } from './../sign-up/sign-up.component';
import { LoginComponent } from '../login/login.component';
import { SignauthService } from 'src/app/services/signauth.service';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
}) 
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog,private authser: SignauthService,  private languageService: LangService,
    private translate: TranslateService,) {}
    // "UU%\_%b2p=z:G#
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

  changeLanguage() {
    window.location.reload()
    this.languageService.setLanguage(
      this.languageService.getLanguage() == 'ar' ? 'en' : 'ar',
    )
    this.translate.use(this.languageService.getLanguage())
  }

}
