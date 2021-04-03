import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.page.html',
  styleUrls: ['./vehicle.page.scss'],
})
export class VehiclePage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.isVehicleSelected = true;
  }
  isVehicleSelected: Boolean;
  isOtherSelected: Boolean;
  selectVehicle() {
    this.isVehicleSelected = true;
    this.isOtherSelected = false;
  }
  selectOther() {
    this.isVehicleSelected = false;
    this.isOtherSelected = true;
  }
}
