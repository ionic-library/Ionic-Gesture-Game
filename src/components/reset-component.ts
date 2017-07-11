import { Component, Output, EventEmitter } from '@angular/core';

@Component({
 selector: 'app-reset',
 template: `
 <ion-grid>
  <ion-row>
   <ion-col class="cols" (click)="onReset('all')">Reset All</ion-col>
   <ion-col class="cols" (click)="onReset('tap')">Reset Taps</ion-col>
   <ion-col class="cols" (click)="onReset('press')">Reset Presses</ion-col>
  </ion-row>
 </ion-grid>
 `

})


export class ResetComponent {
  //@Output establishes that this is an event and can be listned to outside of the comp
 @Output() didReset = new EventEmitter<string>();
 //Because the event is going to be handled in the home.ts you will need to emmit an event
 // Sending one event in a comp to another comp
  onReset(type: string){
   this.didReset.emit(type)
  }
  //method will pass the type of event selected, all, tap, press to be used in the home comp
}
