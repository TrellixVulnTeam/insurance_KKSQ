import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/ViewModals/user';
import { LoginComponent } from '../login/login.component';
import { SignauthService } from './../../../services/signauth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  userInfo: FormGroup;
  listadd: User = { id:'',Email: '', Password: '', Name: ''}


  constructor(private _formBuilder: FormBuilder,public dialogRef: MatDialogRef<SignUpComponent>,
    public dialog: MatDialog,
    private authSer: SignauthService,
    ) {
    this.userInfo = this._formBuilder.group({
      Email: new FormControl('', [Validators.required,Validators.email]),
      Password: new FormControl('', [Validators.required,Validators.minLength(5)]),
      mobile: new FormControl('', [Validators.required,Validators.minLength(12),Validators.maxLength(12)])
    });
  
  }


  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent,{
      // width:'250px'
    });

  
  }
  ngOnInit(): void {
  }

  onNoClick() {
    this.signupp();
    this.dialogRef.close();
  }
  hasacc(){
    this.openDialog();
    this.dialogRef.close();


  }
  signupp() {
    ////old////
    this.listadd = this.userInfo.value
    // this.listadd.Email=this.Email.value;
    // this.listadd.Password=this.Password.value;
    // this.listadd.Name=this.Password.value;
    // this.listadd.JoinDate = Date.now()

    console.log(this.listadd)
    console.log(this.listadd.Email)
    console.log(this.listadd.Password)
    console.log(this.listadd.Name)
    this.authSer
      .signup(this.listadd)
      .then((result) => {
    
        this.authSer
          .addUser(result.user?.uid, this.listadd)
 
          .then(() => { 
            // localStorage.setItem('currentUser', result.user?.uid)
            // localStorage.setItem('currentUserName', this.listadd.Name)
            localStorage.setItem('currentUserEmail', this.listadd.Email)

            this.authSer.userLogin = false
            // this.router.navigate(['/'])
            // window.history.back()

            // window.location.reload()
          })
          .catch((errr) => console.log(errr))
      })
      .catch((err) => {
        // this.errorMsg = err.message
      })

  }
}
