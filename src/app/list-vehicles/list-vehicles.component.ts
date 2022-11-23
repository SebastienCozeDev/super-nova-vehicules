import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) {}

  /**
   * Redirige l'utilisateur vers les détails du véhicule souhaité.
   * 
   * @param vehicle Le véhicule cliqué.
   */
  goToVehicle(vehicle: Vehicle): void {
    this.router.navigate(['/vehicle', vehicle.id]);
  }
     
}
