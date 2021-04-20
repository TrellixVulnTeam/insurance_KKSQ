import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { SignauthService } from 'src/app/services/signauth.service';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { User } from './../../../ViewModals/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userInfo: FormGroup;


  constructor(private _formBuilder: FormBuilder,public dialogRef: MatDialogRef<LoginComponent>,
    public dialog: MatDialog,    private authSer: SignauthService,
    ) {
    this.userInfo = this._formBuilder.group({
      Email: new FormControl('', [Validators.required,Validators.email]),
      Password: new FormControl('', [Validators.required,Validators.minLength(5)]),
    });
  
  }


  ngOnInit(): void {
  }
  listadd : User={Email:'',Name:'',Password:''}
  onNoClick() {
    console.log(this.listadd.Email,this.listadd.Password)

    this.listadd = this.userInfo.value
    console.log(this.listadd.Email,this.listadd.Password)


    this.authSer

      .login(this.listadd.Email,this.listadd.Password)
      .then((result) => {
    
    this.dialogRef.close();
    localStorage.setItem('currentUserEmail', this.listadd.Email)
         
      })
      .catch((err) => {
        console.log(err)
        // this.errorMsg = err.message
      })

  }
}
