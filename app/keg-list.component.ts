import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { NewKegComponent } from './new-keg.component';
import { KegDisplayComponent } from './keg-display.component';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  directives: [KegDisplayComponent, NewKegComponent],
  template: `
  <keg-display *ngFor="#currentKeg of kegList"></keg-display>
  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
})

export class KegListComponent {
  public kegList: Keg[] = [];
  createKeg(newKeg: Keg): void {
    console.log(newKeg);
    this.kegList.push(newKeg);
    console.log(this.kegList);
  }
}
