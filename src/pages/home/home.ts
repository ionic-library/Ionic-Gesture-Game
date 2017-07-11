import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  message = 'Tap twice and press four times';
  tapped = 0;
  pressed = 0;

  constructor(public navCtrl: NavController) {

  }

  onTap(){
    this.tapped = this.tapped + 1;
    this.onWinning();
  }

  onPress(){
   this.pressed = this.pressed + 1;
   this.onWinning();
  }

  onWinning(){
    if(this.tapped == 2 && this.pressed == 4){
      this.message = "You Won";
      this.tapped = 0;
      this.pressed = 0;
    }
  }

  onResetAll(){
    this.tapped = 0;
    this.pressed = 0;
  }

  onResetTaps(){
    this.tapped = 0;

  }

  onResetPress(){
    this.pressed = 0;
  }


}
