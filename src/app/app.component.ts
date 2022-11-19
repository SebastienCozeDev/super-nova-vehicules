import { Component, OnInit } from '@angular/core';
import { Vehicle } from './vehicle';
import { VEHICLES } from './mock-vehicle-list';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  vehicleList: Vehicle[] = VEHICLES;

  ngOnInit(): void {
    console.table(this.vehicleList);
    this.selectVehicle(this.vehicleList[1]);
  }

  /**
   * Permet de sélectionner un véhicule.
   * @param vehicle Véhicule.
   */
  selectVehicle(vehicle: Vehicle) {
    console.log(`Vous avez cliqué sur le véhicule ${vehicle.name}`);
  }
}
