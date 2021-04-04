import { Directive, ElementRef, HostListener } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appNavcontrolDispaly]'
})
export class NavcontrolDispalyDirective {

  constructor(private elRef: ElementRef) { 
        // this.elRef.nativeElement.style.backgroundColor = " rgba(230, 30, 40, 0.493)";

  }
  @HostListener('click') onClick(){
    console.info('clicked: ');
    // this.elRef.nativeElement.style.backgroundColor = " rgba(230, 30, 40, 0.493)";
    // document.getElementById('num1')?.style.backgroundColor ;

}

//   @HostListener('keypress') onKeyPress() {  
//    if((this.elRef.nativeElement.value.length!=15) || (isNaN (this.elRef.nativeElement.value))){
//     this.elRef.nativeElement.style.backgroundColor = " rgba(230, 30, 40, 0.493)";
//    }
//    else{    this.elRef.nativeElement.style.backgroundColor = "rgba(22, 224, 66, 0.493)";
//   }
//    console.log( this.elRef.nativeElement.value.length )
//  } 

}
