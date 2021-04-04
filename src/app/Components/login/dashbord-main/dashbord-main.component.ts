import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbord-main',
  templateUrl: './dashbord-main.component.html',
  styleUrls: ['./dashbord-main.component.scss']
})
export class DashbordMainComponent implements OnInit {

  adminsbool:boolean=false
  aprrovbool:boolean=false
  listbool:boolean=false
  schedulaebool:boolean=false
  reportsbool:boolean=false
  // schedulaebool:boolean=false
  collapsee:string='collapse2'

  hasArrow:string='has-arrow2'
  iconControl:string='iconControl1';
  hideMenu:string='hide-menu2'
  leftsidebar:string='left-sidebar1'
  navheader:string='navbar-header1'
  navbar:string='navbar-brand1'
  pagewrapper:string='page-wrapper1'

  adminSmallNav:boolean=false
  AproSmallNav:boolean=false
  ListSmallNav:boolean=false
  ScduSmallNav:boolean=false
  RepoSmallNav:boolean=false

  rightNav:boolean=false;
  Backgroundcolor:string='#4F5467'



  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navclick(listName:string){
    console.log("clicked")
    if(this.leftsidebar=='left-sidebar'){
    if(listName=='admin'){
      this.adminsbool=!this.adminsbool
      this.aprrovbool=false
      this.listbool=false
      this.schedulaebool=false
      this.reportsbool=false
      
    }
    else if(listName=='aproo'){
      this.aprrovbool=!this.aprrovbool
      this.adminsbool=false
      this.listbool=false
      this.schedulaebool=false
      this.reportsbool=false

    }
    else if(listName=='list'){
      this.listbool=!this.listbool
      this.adminsbool=false
      this.aprrovbool=false
      this.schedulaebool=false
      this.reportsbool=false

    }
    else if(listName=='schedual'){
      this.schedulaebool=!this.schedulaebool
      this.adminsbool=false
      this.aprrovbool=false
      this.listbool=false
      this.reportsbool=false

    }
    else if(listName=='reports'){
      this.reportsbool=!this.reportsbool
      this.adminsbool=false
      this.aprrovbool=false
      this.listbool=false
      this.schedulaebool=false
      this.reportsbool=false
      console.log("reports")

    }

    else{
      console.log("nooo")
    }
  }
  else
  {
    if(listName=='admin'){
      this.adminSmallNav=!this.adminSmallNav
      this.AproSmallNav=false;
      this.ListSmallNav=false;
      this.RepoSmallNav=false;
      this.ScduSmallNav=false;
    }
    else if(listName=='aproo'){
      this.adminSmallNav=false;
      this.AproSmallNav=!this.AproSmallNav;
      this.ListSmallNav=false;
      this.RepoSmallNav=false;
      this.ScduSmallNav=false;

    }
    else if(listName=='list'){
      this.adminSmallNav=false;
      this.AproSmallNav=false;
      this.ListSmallNav=!this.ListSmallNav;
      this.RepoSmallNav=false;
      this.ScduSmallNav=false;
    }
    else if(listName=='schedual'){
      this.adminSmallNav=false;
      this.AproSmallNav=false;
      this.ListSmallNav=false;
      this.RepoSmallNav=false;
      this.ScduSmallNav=!this.ScduSmallNav;
    }
    else if(listName=='reports'){
      this.adminSmallNav=false;
      this.AproSmallNav=false;
      this.ListSmallNav=false;
      this.RepoSmallNav=!this.RepoSmallNav;
      this.ScduSmallNav=false;

    }
    
  }
  }


  sidebarSmall(){
    if(this.leftsidebar=='left-sidebar'){
      this.hasArrow='has-arrow2'
      this.iconControl='iconControl1';
      this.hideMenu='hide-menu2'
      this.leftsidebar='left-sidebar1'
      this.navbar='navbar-brand1'
      this.navheader='navbar-header1'
      this.pagewrapper='page-wrapper1'
      this.adminsbool=false
      this.aprrovbool=false
      this.listbool=false
      this.schedulaebool=false
      this.reportsbool=false
    }

    else{
      this.hasArrow='has-arrow'
      this.iconControl='iconControl';
      this.hideMenu='hide-menu'
      this.leftsidebar='left-sidebar'
      this.navbar='navbar-brand'
      this.navheader='navbar-header'
      this.pagewrapper='page-wrapper'
      this.adminSmallNav=false;
      this.AproSmallNav=false;
      this.ListSmallNav=false;
      this.RepoSmallNav=false;
      this.ScduSmallNav=false;
    }
  }

  getColor() { 

    return this.Backgroundcolor
  }

  getBckColor(color:string){


if(color=='default'){

  this.Backgroundcolor='#4F5467'
}
else if(color=='green'){

  this.Backgroundcolor='#00C292'
}
else if(color=='red'){

  this.Backgroundcolor='#E46A76'
}
else if(color=='blue'){

  this.Backgroundcolor='#03A9F3'
}
else if(color=='purple'){

  this.Backgroundcolor='#6F42C1'
}
else if(color=='menga'){

  this.Backgroundcolor='#01C0C8'
}


}


AmFun(){
  this.router.navigate(['/AMLists/',this.Backgroundcolor]);
}

PmFun(){
  this.router.navigate(['/PMLists/',this.Backgroundcolor]);

}

ngOnChanges(){
  
}
}
