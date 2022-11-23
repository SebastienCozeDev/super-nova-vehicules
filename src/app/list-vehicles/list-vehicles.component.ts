import { Component } from '@angular/core';
import { VEHICLES } from '../mock-vehicle-list';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
})
export class ListVehiclesComponent {

  /**
   * Liste des véhicules.
   */
     vehicleList: Vehicle[] = VEHICLES;
     
}
