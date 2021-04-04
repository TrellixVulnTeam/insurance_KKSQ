import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ICardsDash } from 'src/app/ViewModals/icards-dash';
import { InfoInsurance } from './../ViewModals/info-insurance';

@Injectable({
  providedIn: 'root'
})
export class AddInsuranceService {

  constructor(private fb:AngularFirestore) { }

  addInsurance(itemm:InfoInsurance){

    ////old////

  //   return this.fb.doc('insurance').set({
  //     Password : itemm.NoDocument,
  //     Email : itemm.Icon,
  //     Date:itemm.title,
  
  // })

    ////old////

    return this.fb.collection('insurance').add(itemm).then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
     return docRef.id;
    })
      .catch(function (error) {
        console.error("Error adding document: ", error);
        return "error"
      });

      


  }
}
