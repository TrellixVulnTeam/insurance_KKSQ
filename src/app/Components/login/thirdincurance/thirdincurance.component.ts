import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { InfoDialogComponent } from 'src/app/info-dialog/info-dialog.component';
import { AddInsuranceService } from 'src/app/services/add-insurance.service';
import { Firstform } from 'src/app/ViewModals/firstform';
import { Form2 } from 'src/app/ViewModals/form2';
import { ICardsDash } from 'src/app/ViewModals/icards-dash';
import { InfoInsurance } from 'src/app/ViewModals/info-insurance';
import { Secondform } from 'src/app/ViewModals/secondform';

@Component({
  selector: 'app-thirdincurance',
  templateUrl: './thirdincurance.component.html',
  styleUrls: ['./thirdincurance.component.scss']
})
export class ThirdincuranceComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  isEditable = false;
  dateOfBirth: string=''; 
  icp1:string='';
  price:number=0;

  
  cardsBool:boolean=true

  Cards:ICardsDash[]=[];
listadd: Form2 = {Section:''}
listaddthird: Secondform = {}
listaddfirst: Firstform = {}


today: number = Date.now();
random:number= Math.floor((Math.random() * 100000000) + 1);


  constructor(private _formBuilder: FormBuilder,public dialog: MatDialog,private insSer:AddInsuranceService) {
    this.firstFormGroup = this._formBuilder.group({
      Email: new FormControl(localStorage.getItem("currentUserEmail"), [Validators.required,Validators.email]),
      Name: new FormControl('يياحمد', [Validators.required,Validators.minLength(5)]),
      Mobile: new FormControl('123456789123', [Validators.required,Validators.minLength(5)]),
    });
    this.secondFormGroup = this._formBuilder.group({
   
      id:new FormControl('احمد', Validators.required),
        Booked:new FormControl('احمد', Validators.required),
        Date:new FormControl('احمد', Validators.required)
        ,Image:new FormControl('احمد', Validators.required)
        ,OldPrice:new FormControl('احمد', Validators.required)
        ,Price:new FormControl('احمد', Validators.required)
        ,Rate:new FormControl('احمد', Validators.required)
        ,Review:new FormControl('احمد', Validators.required)
        ,Section:new FormControl('احمد', Validators.required)
        ,Title:new FormControl('احمد', Validators.required)
        ,TourDiscount:new FormControl('احمد', Validators.required)
  
  
  
      });
      this.thirdFormGroup = this._formBuilder.group({
        Email: new FormControl('d@gd', [Validators.required,Validators.email]),
        Name: new FormControl('يياحمد', [Validators.required,Validators.minLength(5)]),
        Mobile: new FormControl('123456789123', Validators.required),
      });
    }

  ngOnInit() { 
  }

  openDialog() {
    const dialogRef = this.dialog.open(InfoDialogComponent,{
      // width:'250px'
    });


 
  }
  firstNext(){
    console.log(this.firstFormGroup.value)
    this.listaddfirst=this.firstFormGroup.value
  }
  scondform(){
    console.log(this.secondFormGroup.value)
    this.listadd=this.secondFormGroup.value

    this.Cards=[
      {
      title:"شركة الانماء طوكيو",
      NoDocument:this.price*0.05,
      Icon:"../../../../assets/ali.jpg",
      ColorBck:"card-header-warning"
  },
  {
    title:"شركة المجموعة المتحدة",
    NoDocument:this.price*0.04,
    Icon:"../../../../assets/612770365.jpg",
    ColorBck:"card-header-success"
  },
  {
    title:"شركة المتوسط والخليج",
    NoDocument:this.price*0.02,
    Icon:"../../../../assets/mid.png",
    ColorBck:"card-header-danger"
  },
  {
    title:"الدرع العربي للتأمين",
    NoDocument:this.price*0.1,
    Icon:"../../../../assets/dre.png",
    ColorBck:"card-header-info"
  },
 
  
  ];
  
  }

  thirdform(){

    console.log(this.dateOfBirth)
 
  }

  forthform(){
    console.log(this.thirdFormGroup.value)
    this.listaddthird=this.thirdFormGroup.value
  

  }

  goBack(stepper: MatStepper){
    stepper.previous();
}

add(){
  this.listadd=this.secondFormGroup.value;
  console.log(this.listadd.Section)

  // this.price=this.listadd.Section;
}
compprice:string=''
item:InfoInsurance={title:'',Icon:'',NoDocument:''};
addInfo(comapanyPrice:number,companyImage:string,companyName:string){
  this.compprice=comapanyPrice.toString()

  this.item.Icon=companyImage;
  this.item.title=companyName;
  this.item.NoDocument=this.compprice;
this.item.Email=this.listaddfirst.Email
this.item.Name=this.listaddfirst.Name
this.item.Mobile=this.listaddfirst.Mobile

console.log(this.listadd)

this.item.serialNumber=this.listadd.id
this.item.noshase=this.listadd.Booked
this.item.type=this.listadd.Date
this.item.year=this.listadd.Image
this.item.worktype=this.listadd.OldPrice
this.item.staues=this.listadd.Price
this.item.carType=this.listadd.Rate
this.item.carColor=this.listadd.Review
this.item.price=this.listadd.Section
this.item.carTypeOtam=this.listadd.Title
this.item.licenceType=this.listadd.TourDiscount

this.item.buldingNo=this.listaddthird.Name
this.item.elkadaa=this.listaddthird.Email
this.item.elmohafza=this.listaddthird.Mobile

this.item.date=this.dateOfBirth
this.item.currentdate=this.today.toString()

this.item.insurancetype="تأمين ضد الغير"
console.log(this.item)

  this.insSer.addInsurance(this.item)
}
printPage() {
  window.print()
}
}