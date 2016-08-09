import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ["onSubmitNewKeg"],
  template:`
    <div class="keg-form">
      <h3>Create Keg:</h3>
      <input placeholder="Name" class="col-sm-8 input-lg" #name>
      <input placeholder="Brand" class="col-sm-8 input-lg" #brand>
      <input placeholder="Price" class="col-sm-8 input-lg" #price>
      <input placeholder="Alcohol Content" class="col-sm-8 input-lg" #alcoholPercent>
      <button (click)="addKeg(name, brand, price, alcoholPercent)" class="btn btn-default">Create new Keg</button>
    </div>
  `
})

export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<Keg>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(newName: HTMLInputElement, newBrand: HTMLInputElement, newPrice: HTMLInputElement, newAlcoholPercent: HTMLInputElement) {
    this.onSubmitNewKeg.emit(new Keg(newName.value, newBrand.value, parseInt(newPrice.value), parseInt(newAlcoholPercent.value)));
    console.log(newName.value);
    console.log(newBrand.value);
    console.log(newPrice.value);
    console.log(newAlcoholPercent.value);
    newName.value = "";
    newBrand.value = "";
    newPrice.value = "";
    newAlcoholPercent.value = "";
  }
}
