import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Welcome to {{ vehicleList[0] }}!</h1>`,
  styles: []
})
export class AppComponent implements OnInit {
  vehicleList = ['Twizy E-Tech 100% Electric', 'Twingo', 'Zoe E-Tech 100% Electric'];

  ngOnInit(): void {
    console.table(this.vehicleList);
    this.selectTexture('TWINGO');
  }

  /**
   * Permet de sélectionner un asset.
   * @param vehicleName Nom de l'asset.
   */
  selectTexture(vehicleName: string) {
    console.log(`Vous avez cliqué sur le pokémon ${vehicleName}`);
  }
}
