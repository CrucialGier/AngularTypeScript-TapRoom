import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { KegListComponent } from './keg-list.component';
import { NewKegComponent } from './new-keg.component';
import { KegDisplayComponent } from './keg-display.component';

@Component({
  selector: 'tap-room',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>Tap Room</h1>
      <keg-list [kegList]="kegs"></keg-list>
    </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor() {
    this.kegs = [
      new Keg("name", "brand", 1, 1)
    ];
  }
}
