import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { AddInsuranceService } from 'src/app/services/add-insurance.service';
import { ICardsDash } from 'src/app/ViewModals/icards-dash';
import { Form2 } from './../../../ViewModals/form2';
import { Firstform } from './../../../ViewModals/firstform';
import { InfoInsurance } from './../../../ViewModals/info-insurance';
import { Secondform } from './../../../ViewModals/secondform';
import { Forthform } from './../../../ViewModals/forthform';
import { SelectItemGroup, SelectItem } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from 'src/app/services/lang.service';

interface City {
  name: string,
  code: string
}
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
  price5:number=0;

  price1p:number=0;
  price2p:number=0;
  price3p:number=0;
  price4p:number=0;
  price5p:number=0;

  price1y:number=0;
  price2y:number=0;
  price3y:number=0;
  price4y:number=0;
  price5y:number=0;

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
  constructor(private _formBuilder: FormBuilder,public dialog: MatDialog,private insSer:AddInsuranceService,private languageService: LangService,
    private translate: TranslateService,) { 

      this.translate.use(languageService.getLanguage());


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

    
  //  ngOnChanges(changes: SimpleChanges): void {
  //   // this.setLanguage();
  //   throw new Error('Method not implemented.');
  //   // this.setLanguage();
  // }
    ngOnInit() {
       
    }

  // openDialog() {
  //   const dialogRef = this.dialog.open(InfoDialogComponent,{
  //     // width:'250px'
  //   });
  // }
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
        title:"شركة ابن الهيثم ",
        NoDocument:this.price5,
        Icon:"../../../../assets/hh.gif",
        ColorBck:"card-header-primary"
      },
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
  // console.log(this.listadd.Section)

  // this.price=this.listadd.Section;
}
compprice:string=''
item:InfoInsurance={title:'',Icon:'',NoDocument:''};
addInfo(comapanyPrice:number,companyImage:string,companyName:string){
  console.log(this.item.carType)
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

  console.log(this.listaddforth.calender)
  if(this.listaddforth.calender=='شهر' ){
    console.log('1')
    
   this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*31*1)));
   this.showAge2=this.showAge
   
  this.price1= this.price*0.05
   this.price2=this.price*0.03
  this.price3=this.price*0.04
  this.price4=this.price*0.06
  this.price5=this.price*0.03
  console.log("price1",this.price1)
  console.log("price2",this.price2)
  console.log("price3",this.price3)
  console.log("price4",this.price4)
  console.log("price5",this.price5)
 

  }

  else if(this.listaddforth.calender=='شهرين' ){
    console.log('2yer')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*31*2)));
    this.showAge2=this.showAge
     
  this.price1= this.price*0.1
  this.price2=this.price*0.06
 this.price3=this.price*0.08
 this.price4=this.price*0.12
 this.price5=this.price*0.06
 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
 
   }
   else if(this.listaddforth.calender=='ثلاث شهور' ){
    console.log('2yer')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*31*3)));
    this.showAge2=this.showAge
     
  this.price1= this.price*0.13
  this.price2=this.price*0.09
 this.price3=this.price*0.11
 this.price4=this.price*0.13
 this.price5=this.price*0.08

 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
 
   }
   else if(this.listaddforth.calender=='اربع شهور' ){
    console.log('4')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*31*4)));
    this.showAge2=this.showAge
     
  this.price1= this.price*0.18
  this.price2=this.price*0.12
 this.price3=this.price*0.15
 this.price4=this.price*0.19
 this.price5=this.price*0.11

 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
 
   } else if(this.listaddforth.calender=='خمس شهور' ){
    console.log('خمس')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*31*5)));
    this.showAge2=this.showAge
     
  this.price1= this.price*0.21
  this.price2=this.price*0.15
 this.price3=this.price*0.18
 this.price4=this.price*0.20
 this.price5=this.price*0.13

 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
 
   } else if(this.listaddforth.calender=='ست شهور' ){
    console.log('6')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*31*6)));
    this.showAge2=this.showAge
     
  this.price1= this.price*0.26
  this.price2=this.price*0.18
 this.price3=this.price*0.22
 this.price4=this.price*0.26
 this.price5=this.price*0.16

 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
 
   } else if(this.listaddforth.calender=='سبع شهور' ){
    console.log('7')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*31*7)));
    this.showAge2=this.showAge
     
  this.price1= this.price*0.29
  this.price2=this.price*0.21
 this.price3=this.price*0.24
 this.price4=this.price*0.27
 this.price5=this.price*0.18

 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
 
   } else if(this.listaddforth.calender=='ثمان شهور' ){
    console.log('2yer')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*31*8)));
    this.showAge2=this.showAge
     
  this.price1= this.price*0.34
  this.price2=this.price*0.24
 this.price3=this.price*0.28
 this.price4=this.price*0.33
 this.price5=this.price*0.21

 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
 
   } else if(this.listaddforth.calender=='تسعة شهور' ){
    console.log('9')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*31*9)));
    this.showAge2=this.showAge
     
  this.price1= this.price*0.37
  this.price2=this.price*0.27
 this.price3=this.price*0.30
 this.price4=this.price*0.34
 this.price5=this.price*0.23

 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
 
   } 
   else if(this.listaddforth.calender=='عشرة شهور' ){
    console.log('عشرة')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*31*10)));
    this.showAge2=this.showAge
     
  this.price1= this.price*0.42
  this.price2=this.price*0.29
 this.price3=this.price*0.34
 this.price4=this.price*0.40
 this.price5=this.price*0.26

 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
 
   }
   else if(this.listaddforth.calender=='احدى عشر شهر' ){
    console.log('عشرة')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*31*11)));
    this.showAge2=this.showAge
     
  this.price1= this.price*0.45
  this.price2=this.price*0.32
 this.price3=this.price*0.37
 this.price4=this.price*0.41
 this.price5=this.price*0.28

 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
 
   }
   else if(this.listaddforth.calender=='سنة' ){
    console.log('4yer')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*31*12)));
    this.showAge2=this.showAge
    this.price1= this.price*0.50
    this.price2=this.price*0.35
   this.price3=this.price*0.41
   this.price4=this.price*0.47
 this.price5=this.price*0.30

  

 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
 
   }

  else if(this.listaddforth.calender=='1 month' ){
    console.log('1')
    
   this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*31*1)));
   this.showAge2=this.showAge
   
  this.price1= this.price*0.05
   this.price2=this.price*0.03
  this.price3=this.price*0.04
  this.price4=this.price*0.06
  this.price5=this.price*0.03
  console.log("price1",this.price1)
  console.log("price2",this.price2)
  console.log("price3",this.price3)
  console.log("price4",this.price4)
  console.log("price5",this.price5)
 

  }

  else if(this.listaddforth.calender== '2 month' ){
    console.log('2yer')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*31*2)));
    this.showAge2=this.showAge
     
  this.price1= this.price*0.1
  this.price2=this.price*0.06
 this.price3=this.price*0.08
 this.price4=this.price*0.12
 this.price5=this.price*0.06
 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
 
   }
   else if(this.listaddforth.calender== '3 month' ){
    console.log('2yer')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*31*3)));
    this.showAge2=this.showAge
     
  this.price1= this.price*0.13
  this.price2=this.price*0.09
 this.price3=this.price*0.11
 this.price4=this.price*0.13
 this.price5=this.price*0.08

 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
 
   }
   else if(this.listaddforth.calender== '4 month'){
    console.log('4')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*31*4)));
    this.showAge2=this.showAge
     
  this.price1= this.price*0.18
  this.price2=this.price*0.12
 this.price3=this.price*0.15
 this.price4=this.price*0.19
 this.price5=this.price*0.11

 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
 
   } else if(this.listaddforth.calender=='5 month' ){
    console.log('خمس')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*31*5)));
    this.showAge2=this.showAge
     
  this.price1= this.price*0.21
  this.price2=this.price*0.15
 this.price3=this.price*0.18
 this.price4=this.price*0.20
 this.price5=this.price*0.13

 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
 
   } else if(this.listaddforth.calender=='6 month' ){
    console.log('6')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*31*6)));
    this.showAge2=this.showAge
     
  this.price1= this.price*0.26
  this.price2=this.price*0.18
 this.price3=this.price*0.22
 this.price4=this.price*0.26
 this.price5=this.price*0.16

 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
 
   } else if(this.listaddforth.calender== '7 month'){
    console.log('7')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*31*7)));
    this.showAge2=this.showAge
     
  this.price1= this.price*0.29
  this.price2=this.price*0.21
 this.price3=this.price*0.24
 this.price4=this.price*0.27
 this.price5=this.price*0.18

 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
 
   } else if(this.listaddforth.calender== '8 month'){
    console.log('2yer')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*31*8)));
    this.showAge2=this.showAge
     
  this.price1= this.price*0.34
  this.price2=this.price*0.24
 this.price3=this.price*0.28
 this.price4=this.price*0.33
 this.price5=this.price*0.21

 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
 
   } else if(this.listaddforth.calender=='9 month' ){
    console.log('9')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*31*9)));
    this.showAge2=this.showAge
     
  this.price1= this.price*0.37
  this.price2=this.price*0.27
 this.price3=this.price*0.30
 this.price4=this.price*0.34
 this.price5=this.price*0.23

 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
 
   } 
   else if(this.listaddforth.calender== '10 month'){
    console.log('عشرة')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*31*10)));
    this.showAge2=this.showAge
     
  this.price1= this.price*0.42
  this.price2=this.price*0.29
 this.price3=this.price*0.34
 this.price4=this.price*0.40
 this.price5=this.price*0.26

 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
 
   }
   else if(this.listaddforth.calender==  '11 month'){
    console.log('عشرة')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*31*11)));
    this.showAge2=this.showAge
     
  this.price1= this.price*0.45
  this.price2=this.price*0.32
 this.price3=this.price*0.37
 this.price4=this.price*0.41
 this.price5=this.price*0.28

 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
 
   }
   else if(this.listaddforth.calender=='year' ){
    console.log('4yer')
    
    this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*31*12)));
    this.showAge2=this.showAge
    this.price1= this.price*0.50
    this.price2=this.price*0.35
   this.price3=this.price*0.41
   this.price4=this.price*0.47
 this.price5=this.price*0.30

  

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

//     this.price1= this.price*0.01
//     this.price2=this.price*0.02
//    this.price3=this.price*0.02
//    this.price4=this.price*0.01
//  this.price5=this.price*0.01

   this.price1= this.price1
    this.price2=this.price2
   this.price3=this.price3
   this.price4=this.price4
 this.price5=this.price5

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
        
    this.price1p= this.price*0.01
    this.price2p=this.price*0.02
   this.price3p=this.price*0.02
   this.price4p=this.price*0.01
 this.price5p=this.price*0.01

   this.price1= this.price1+this.price1p
    this.price2=this.price2+this.price2p
   this.price3=this.price3+this.price3p
   this.price4=this.price4+this.price4p
 this.price5=this.price5+this.price5p

    
 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
    }
  

   if(this.yearof<=2000 ){
    console.log('year2000<')
    this.price1y= this.price*0.01
    this.price2y=this.price*0.01
   this.price3y=this.price*0.01
   this.price4y=this.price*0.01
 this.price5y=this.price*0.01

   this.price1= this.price1+this.price1y
    this.price2=this.price2+this.price2y
   this.price3=this.price3+this.price3y
   this.price4=this.price4+this.price4y
 this.price5=this.price5+this.price5y

    
 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
   }
 
   else if(this.yearof>2000 && this.yearof<=2018 ){
    console.log('year2000>2018')

//     this.price1y= this.price*0.01
//     this.price2y=this.price*0.01
//    this.price3y=this.price*0.01
//    this.price4y=this.price*0.01
//  this.price5y=this.price*0.01

   this.price1= this.price1
    this.price2=this.price2
   this.price3=this.price3
   this.price4=this.price4
 this.price5=this.price5

    
 console.log("price1",this.price1)
  console.log("price2",this.price2)
 console.log("price3",this.price3)
 console.log("price4",this.price4)
 console.log("price5",this.price5)
    }

    else if(this.yearof<2022 && this.yearof>=2019 ){
      this.price1y= this.price*0.02
      this.price2y=this.price*0.03
     this.price3y=this.price*0.03
     this.price4y=this.price*0.03
   this.price5y=this.price*0.02
  
     this.price1= this.price1+this.price1y
      this.price2=this.price2+this.price2y
     this.price3=this.price3+this.price3y
     this.price4=this.price4+this.price4y
   this.price5=this.price5+this.price5y
  
      
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
