import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-action',
  template: `
    <ion-grid>
     <ion-row>
      <ion-col class="action" (tap)="onAction('tap')">Tap Here</ion-col>
      <ion-col class="action" (press)="onAction('press')">Press Here</ion-col>
     </ion-row>
    </ion-grid>`
})

export class ActionComponent{

  @Output() actionSelected = new EventEmitter<string>();

  onAction(type: string){
    this.actionSelected.emit(type);
  }

}
