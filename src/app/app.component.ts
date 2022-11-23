import { Component, OnInit } from '@angular/core';
import { Vehicle } from './vehicle';
import { VEHICLES } from './mock-vehicle-list';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  /**
   * Liste des véhicules.
   */
  vehicleList: Vehicle[] = VEHICLES;

  /**
   * Véhicule sélectionné par l'utilisateur.
   */
  vehicleSelected: Vehicle|undefined;

  ngOnInit(): void {
    console.table(this.vehicleList);
  }

  /**
   * Permet de sélectionner un véhicule.
   * @param vehicleId Identifiant du véhicule.
   */
  selectVehicle(vehicleId: String) {
    const vehicle: Vehicle|undefined = this.vehicleList.find(vehicle => vehicle.id == +vehicleId);
    if (vehicle) {
      console.log(`Vous avez cliqué sur le véhicule ${vehicle.name}`);
    } else {
      console.log(`Vous avez demandé un véhicule qui n'existe pas.`);
    }
    this.vehicleSelected = vehicle;
  }

}
