import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { InfoDialogComponent } from 'src/app/info-dialog/info-dialog.component';
import { AddInsuranceService } from 'src/app/services/add-insurance.service';
import { Firstform } from 'src/app/ViewModals/firstform';
import { Form2 } from 'src/app/ViewModals/form2';
import { Forthform } from 'src/app/ViewModals/forthform';
import { ICardsDash } from 'src/app/ViewModals/icards-dash';
import { InfoInsurance } from 'src/app/ViewModals/info-insurance';
import { Secondform } from 'src/app/ViewModals/secondform';

import {MenuItem} from 'primeng/api';
import {SelectItem} from 'primeng/api';
import {SelectItemGroup} from 'primeng/api';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-thirdincurance',
  templateUrl: './thirdincurance.component.html',
  styleUrls: ['./thirdincurance.component.scss']
})
export class ThirdincuranceComponent implements OnInit {
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
  price5:number=0;

  yearof:number=0;
  
  cardsBool:boolean=true

  statuesshow:string=''
  Cards:ICardsDash[]=[];
listadd: Form2 = {Section:''}
listaddthird: Secondform = {}
listaddfirst: Firstform = {}
listaddforth: Forthform = {}
 

today: number = Date.now();
random:number= Math.floor((Math.random() * 100000000) + 1);

cities: City[]=[];



selectedCity3: string='';

selectedCountry: string='';

countries: any[]=[];

groupedCities: SelectItemGroup[]=[];

items: SelectItem[]=[];

itemm: string='';
yeararr:any[]=[]
  constructor(private _formBuilder: FormBuilder,public dialog: MatDialog,private insSer:AddInsuranceService) {
    this.firstFormGroup = this._formBuilder.group({
      Email: new FormControl(localStorage.getItem("currentUserEmail"), [Validators.required,Validators.email]),
      Name: new FormControl('', [Validators.required,Validators.minLength(5)]),
      Mobile: new FormControl('', [Validators.required,Validators.minLength(5)]),
    });
    this.secondFormGroup = this._formBuilder.group({
   
      id:new FormControl('', Validators.required),
        Booked:new FormControl('', Validators.required),
        Date:new FormControl('', Validators.required)
        ,Image:new FormControl('', Validators.required)
        ,OldPrice:new FormControl('', Validators.required)
        ,Price:new FormControl('', Validators.required)
        ,Rate:new FormControl('', Validators.required)
        ,Review:new FormControl('', Validators.required)
        ,Section:new FormControl('', Validators.required)
        ,Title:new FormControl('', Validators.required)
        ,TourDiscount:new FormControl('', Validators.required)
        ,noChiled:new FormControl('')
        ,gender:new FormControl('', Validators.required)
  
  
  
      });
      this.thirdFormGroup = this._formBuilder.group({
        Email: new FormControl('', [Validators.required,Validators.email]),
        Name: new FormControl('', [Validators.required,Validators.minLength(5)]),
        Mobile: new FormControl('', Validators.required),
      });

      this.forthFormGroup = this._formBuilder.group({
       
        calender: new FormControl('', Validators.required),
        date: new FormControl('', Validators.required)
      });

    
      this.yeararr=[ 
        {no:1970},
        {no:1971},
        {no:1972},
        {no:1973},
        {no:1974},
        {no:1975},
        {no:1976},
        {no:1977},
        {no:1978},
        {no:1979},
        {no:1980},
        {no:1981},
        {no:1982},
        {no:1983},
        {no:1984},
        {no:1985},
        {no:1986},
        {no:1987},
        {no:1988},
        {no:1989},
        {no:1990},
        {no:1991},
        {no:1992},
        {no:1993},
        {no:1994},
        {no:1995},
        {no:1996},
        {no:1997},
        {no:1998},
        {no:1999},
        {no:2001},
        {no:2002},
        {no:2003},
        {no:2004},
        {no:2005},
        {no:2006},
        {no:2007},
        {no:2008},
        {no:2009},
        {no:2010},
        {no:2011},
        {no:2012},
        {no:2013},
        {no:2014},
        {no:2015},
        {no:2016},
        {no:2017},
        {no:2018},
        {no:2019},
        {no:2020},
        {no:2021},
     

      ]
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
  {
    title:"شركة ابن الهيثم ",
    NoDocument:this.price5,
    Icon:"../../../../assets/hh.gif",
    ColorBck:"card-header-primary"
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
this.item.noChiled=this.listadd.noChiled
this.item.gender=this.listadd.gender

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
showAge:number=0
showAge2:number=0

datee(){
  this.listaddforth=this.forthFormGroup.value
  


  const convertAge = new Date(this.dateOfBirth);
  const timeDiff = Math.abs(convertAge.getTime());

  
  
  this.showAge2=this.showAge

  

  if(this.listaddforth.calender=='شهر' ){
    console.log('1yer')
    
   this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*365*1)));
   this.showAge2=this.showAge
   
  this.price1= this.price*0.1
   this.price2=this.price*0.1
  this.price3=this.price*0.11
  this.price4=this.price*0.12
  this.price5=this.price*0.09
  console.log("price1",this.price1)
  console.log("price2",this.price2)
  console.log("price3",this.price3)
  console.log("price4",this.price4)
  console.log("price5",this.price5)
 

  }

  else if(this.listaddforth.calender=='شهرين' ){
    console.log('2yer')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*365*2)));
    this.showAge2=this.showAge
     
  this.price1= this.price*0.1
  this.price2=this.price*0.13
 this.price3=this.price*0.12
 this.price4=this.price*0.14
 this.price5=this.price*0.09
 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
 
   }
   else if(this.listaddforth.calender=='ثلاث شهور' ){
    console.log('2yer')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*365*3)));
    this.showAge2=this.showAge
     
  this.price1= this.price*0.15
  this.price2=this.price*0.14
 this.price3=this.price*0.12
 this.price4=this.price*0.14
 this.price5=this.price*0.11

 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
 
   }
   else if(this.listaddforth.calender=='اربع شهور' ){
    console.log('4')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*365*3)));
    this.showAge2=this.showAge
     
  this.price1= this.price*0.17
  this.price2=this.price*0.16
 this.price3=this.price*0.16
 this.price4=this.price*0.15
 this.price5=this.price*0.14

 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
 
   } else if(this.listaddforth.calender=='خمس شهور' ){
    console.log('خمس')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*365*3)));
    this.showAge2=this.showAge
     
  this.price1= this.price*0.17
  this.price2=this.price*0.16
 this.price3=this.price*0.17
 this.price4=this.price*0.16
 this.price5=this.price*0.15

 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
 
   } else if(this.listaddforth.calender=='ست شهور' ){
    console.log('6')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*365*3)));
    this.showAge2=this.showAge
     
  this.price1= this.price*0.20
  this.price2=this.price*0.21
 this.price3=this.price*0.25
 this.price4=this.price*0.23
 this.price5=this.price*0.20

 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
 
   } else if(this.listaddforth.calender=='سبع شهور' ){
    console.log('7')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*365*3)));
    this.showAge2=this.showAge
     
  this.price1= this.price*0.25
  this.price2=this.price*0.23
 this.price3=this.price*0.25
 this.price4=this.price*0.23
 this.price5=this.price*0.20

 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
 
   } else if(this.listaddforth.calender=='ثمان شهور' ){
    console.log('2yer')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*365*3)));
    this.showAge2=this.showAge
     
  this.price1= this.price*0.32
  this.price2=this.price*0.34
 this.price3=this.price*0.33
 this.price4=this.price*0.33
 this.price5=this.price*0.31

 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
 
   } else if(this.listaddforth.calender=='تسعة شهور' ){
    console.log('9')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*365*3)));
    this.showAge2=this.showAge
     
  this.price1= this.price*0.35
  this.price2=this.price*0.31
 this.price3=this.price*0.34
 this.price4=this.price*0.31
 this.price5=this.price*0.25

 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
 
   } 
   else if(this.listaddforth.calender=='عشرة شهور' ){
    console.log('عشرة')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*365*3)));
    this.showAge2=this.showAge
     
  this.price1= this.price*0.30
  this.price2=this.price*0.31
 this.price3=this.price*0.33
 this.price4=this.price*0.32
 this.price5=this.price*0.29

 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
 
   }
   else if(this.listaddforth.calender=='احدى عشر شهر' ){
    console.log('عشرة')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*365*3)));
    this.showAge2=this.showAge
     
  this.price1= this.price*0.36
  this.price2=this.price*0.30
 this.price3=this.price*0.39
 this.price4=this.price*0.33
 this.price5=this.price*0.28

 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
 
   }
   else if(this.listaddforth.calender=='سنة' ){
    console.log('4yer')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*365*4)));
    this.showAge2=this.showAge
    this.price1= this.price*0.28
    this.price2=this.price*0.28
   this.price3=this.price*0.33
   this.price4=this.price*0.35
 this.price5=this.price*0.25

  

 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
 
   }

  

  if(this.price<=50000 ){

    console.log('5000<')
    console.log(this.yearof)
    console.log(this.price)
    // this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*365*4)));
    // this.showAge2=this.showAge
    
   this.price1= this.price1*0.9
    this.price2=this.price2*0.7
   this.price3=this.price3*0.6
   this.price4=this.price4*0.5
 this.price5=this.price5*0.5

   console.log("price1",this.price1)
  console.log("price2",this.price2)
  console.log("price3",this.price3)
  console.log("price4",this.price4)
  console.log("price5",this.price5)
 
   }
 
   else if(this.price>=50000 ){
    console.log('5000>')
     
    //  this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*365*4)));
    //  this.showAge2=this.showAge
        
  this.price1= this.price1*0.08
  this.price2=this.price2*0.4
 this.price3=this.price3*0.09
 this.price4=this.price4*0.6
 this.price5=this.price5*0.05

    
 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
    }
  

   if(this.yearof<=2000 ){
    console.log('5000<')
    // this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*365*4)));
    // this.showAge2=this.showAge
    
   this.price1= this.price1*0.9
    this.price2=this.price2*0.9
   this.price3=this.price3*0.9
   this.price4=this.price4*0.9
 this.price5=this.price5*0.8

   console.log("price1",this.price1)
  console.log("price2",this.price2)
  console.log("price3",this.price3)
  console.log("price4",this.price4)
  console.log("price5",this.price5)
 
   }
 
   else if(this.yearof>2000 && this.yearof<=2018 ){
    // console.log('5000>')
     
    //  this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*365*4)));
    //  this.showAge2=this.showAge
      
  
    
     this.price1= this.price1*0.7
     this.price2=this.price2*0.8
    this.price3=this.price3*0.7
    this.price4=this.price4*0.8
 this.price5=this.price5*0.6

    
 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
    }

    else if(this.yearof>2000 && this.yearof<=2018 ){
      // console.log('5000>')
       
      //  this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*365*4)));
      //  this.showAge2=this.showAge
        
    
      
       this.price1= this.price1*1.1
       this.price2=this.price2*1.1
      this.price3=this.price3*1.2
      this.price4=this.price4*1.2
 this.price5=this.price5*1

      
   console.log("price1",this.price1)
    console.log("price2",this.price2)
   console.log("price3",this.price3)
   console.log("price4",this.price4)
   console.log("price5",this.price5)
      }
    }


    resetform(gg:any){
      gg.reset();
    }
}
