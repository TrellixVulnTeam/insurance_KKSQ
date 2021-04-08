import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { InfoDialogComponent } from 'src/app/info-dialog/info-dialog.component';
import { AddInsuranceService } from 'src/app/services/add-insurance.service';
import { ICardsDash } from 'src/app/ViewModals/icards-dash';
import { Form2 } from './../../../ViewModals/form2';
import { Firstform } from './../../../ViewModals/firstform';
import { InfoInsurance } from './../../../ViewModals/info-insurance';
import { Secondform } from './../../../ViewModals/secondform';
import { Forthform } from './../../../ViewModals/forthform';

@Component({
  selector: 'app-full-insurance',
  templateUrl: './full-insurance.component.html',
  styleUrls: ['./full-insurance.component.scss']
})
export class FullInsuranceComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;
  isEditable = false;
  dateOfBirth: string=''; 
  noyear: string=''; 
  icp1:string='';
  price:number=0;

  price1:number=0;
  price2:number=0;
  price3:number=0;
  price4:number=0;

  yearof:number=0;
  
  cardsBool:boolean=true

  Cards:ICardsDash[]=[];
listadd: Form2 = {Section:''}
listaddthird: Secondform = {}
listaddfirst: Firstform = {}
listaddforth: Forthform = {}


today: number = Date.now();
random:number= Math.floor((Math.random() * 100000000) + 1);


  constructor(private _formBuilder: FormBuilder,public dialog: MatDialog,private insSer:AddInsuranceService) {
    this.firstFormGroup = this._formBuilder.group({
      Email: new FormControl(localStorage.getItem("currentUserEmail"), [Validators.required,Validators.email]),
      Name: new FormControl('يياحمد', [Validators.required,Validators.minLength(5)]),
      Mobile: new FormControl('123456789123', [Validators.required,Validators.minLength(5)]),
    });
    this.secondFormGroup = this._formBuilder.group({
   
      id:new FormControl('vbfdd', Validators.required),
        Booked:new FormControl('احمد', Validators.required),
        Date:new FormControl('احمد', Validators.required)
        ,Image:new FormControl('احمد', Validators.required)
        ,OldPrice:new FormControl('احمد', Validators.required)
        ,Price:new FormControl('احمد', Validators.required)
        ,Rate:new FormControl('احمد', Validators.required)
        ,Review:new FormControl('احمد', Validators.required)
        ,Section:new FormControl('50000', Validators.required)
        ,Title:new FormControl('احمد', Validators.required)
        ,TourDiscount:new FormControl('احمد', Validators.required)
  
  
  
      });
      this.thirdFormGroup = this._formBuilder.group({
        Email: new FormControl('d@gd', [Validators.required,Validators.email]),
        Name: new FormControl('يياحمد', [Validators.required,Validators.minLength(5)]),
        Mobile: new FormControl('123456789123', Validators.required),
      });

      this.forthFormGroup = this._formBuilder.group({
       
        calender: new FormControl('123456789123', Validators.required),
        date: new FormControl('123456789123', Validators.required)
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

  
  }

  thirdform(){

    console.log(this.dateOfBirth)
    this.datee()
    this.Cards=[
      {
      title:"شركة الانماء طوكيو",
      NoDocument:this.price1,
      Icon:"../../../../assets/ali.jpg",
      ColorBck:"card-header-warning"
  },
  {
    title:"شركة المجموعة المتحدة",
    NoDocument:this.price2,
    Icon:"../../../../assets/612770365.jpg",
    ColorBck:"card-header-success"
  },
  {
    title:"شركة المتوسط والخليج",
    NoDocument:this.price3,
    Icon:"../../../../assets/mid.png",
    ColorBck:"card-header-danger"
  },
  {
    title:"الدرع العربي للتأمين",
    NoDocument:this.price4,
    Icon:"../../../../assets/dre.png",
    ColorBck:"card-header-info"
  },
 
  
  ];

  
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

this.item.insurancetype="تأمين شامل"
console.log(this.item)

  this.insSer.addInsurance(this.item)
}
printPage() {
  window.print()
}
showAge:number=0
showAge2:number=0

datee(){
  this.listaddforth=this.forthFormGroup.value
  


  const convertAge = new Date(this.dateOfBirth);
  const timeDiff = Math.abs(convertAge.getTime());

  
  
  this.showAge2=this.showAge

  

  if(this.listaddforth.calender=='سنة' ){
    console.log('1yer')
    
   this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*365*4)));
   this.showAge2=this.showAge
   
  this.price1= this.price*0.3
   this.price2=this.price*0.3
  this.price3=this.price*0.3
  this.price4=this.price*0.3
  console.log("price1",this.price1)
  console.log("price2",this.price2)
  console.log("price3",this.price3)
  console.log("price4",this.price4)
 

  }

  else if(this.listaddforth.calender=='سنتين' ){
    console.log('2yer')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*365*4)));
    this.showAge2=this.showAge
     
  this.price1= this.price*0.3
  this.price2=this.price*0.4
 this.price3=this.price*0.3
 this.price4=this.price*0.4
 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 
   }
   else if(this.listaddforth.calender=='3 سنوات' ){
    console.log('2yer')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*365*4)));
    this.showAge2=this.showAge
     
  this.price1= this.price*0.4
  this.price2=this.price*0.5
 this.price3=this.price*0.5
 this.price4=this.price*0.6
 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 
   }
   else if(this.listaddforth.calender=='4 سنوات' ){
    console.log('4yer')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*365*4)));
    this.showAge2=this.showAge
    this.price1= this.price*0.2
    this.price2=this.price*0.5
   this.price3=this.price*0.45
   this.price4=this.price*0.5
  

 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 
   }

  

  if(this.price<=50000 ){
    console.log('5000<')
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*365*4)));
    this.showAge2=this.showAge
    
   this.price1= this.price1*0.9
    this.price2=this.price2*0.7
   this.price3=this.price3*0.6
   this.price4=this.price4*0.5
   console.log("price1",this.price1)
  console.log("price2",this.price2)
  console.log("price3",this.price3)
  console.log("price4",this.price4)
 
   }
 
   else if(this.price>=50000 ){
    console.log('5000>')
     
     this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*365*4)));
     this.showAge2=this.showAge
      
  
    
  this.price1= this.price1*0.08
  this.price2=this.price2*0.3
 this.price3=this.price3*0.09
 this.price4=this.price4*0.6
    
 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
    }
   else{
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*365*2)));
    this.showAge2=this.showAge
 
   }

   if(this.yearof<=2000 ){
    console.log('5000<')
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*365*4)));
    this.showAge2=this.showAge
    
   this.price1= this.price1*0.9
    this.price2=this.price2*0.9
   this.price3=this.price3*0.9
   this.price4=this.price4*0.9
   console.log("price1",this.price1)
  console.log("price2",this.price2)
  console.log("price3",this.price3)
  console.log("price4",this.price4)
 
   }
 
   else if(this.yearof>2000 && this.yearof<=2018 ){
    console.log('5000>')
     
     this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*365*4)));
     this.showAge2=this.showAge
      
  
    
     this.price1= this.price1*0.7
     this.price2=this.price2*0.8
    this.price3=this.price3*0.7
    this.price4=this.price4*0.8
    
 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
    }

    else if(this.yearof>2000 && this.yearof<=2018 ){
      console.log('5000>')
       
       this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*365*4)));
       this.showAge2=this.showAge
        
    
      
       this.price1= this.price1*1.1
       this.price2=this.price2*1.1
      this.price3=this.price3*1.2
      this.price4=this.price4*1.2
      
   console.log("price1",this.price1)
    console.log("price2",this.price2)
   console.log("price3",this.price3)
   console.log("price4",this.price4)
      }
    }


    resetform(gg:any){
      gg.reset();
    }
}
