import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
  <h3>{{ keg.name }}</h3>
  `
})

export class KegDisplayComponent {
  public keg: Keg;
}
