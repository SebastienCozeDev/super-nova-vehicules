import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorderCardDirective } from './border-card.directive';
import { VehicleTypeColorPipe } from './vehicle-type-color.pipe';
import { DetailVehicleComponent } from './detail-vehicle/detail-vehicle.component';
import { ListVehiclesComponent } from './list-vehicles/list-vehicles.component';

@NgModule({
  declarations: [
    AppComponent,
    BorderCardDirective,
    VehicleTypeColorPipe,
    DetailVehicleComponent,
    ListVehiclesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
