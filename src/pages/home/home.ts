import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tapped = 0;
  pressed = 0;

  constructor(public navCtrl: NavController) {

  }

 //handles the event emitted by clicking reset buttons in the reset comp
 onDidReset(type: string){
   if(type == 'all'){
     this.tapped = 0;
     this.pressed = 0;
   } else if (type == 'tap'){
     this.tapped = 0;
   } else if (type == 'press'){
     this.pressed = 0;
   }

 }

 onActionSelected(type: string){
   if(type == 'tap' ){
     this.tapped ++;
   } else if (type == 'press'){
     this.pressed ++;
   }
 }

 onWinning(){
   //return true if condition is met and will alter the *ngIf in the home template
  return this.tapped == 2 && this.pressed == 4;
 }



}
