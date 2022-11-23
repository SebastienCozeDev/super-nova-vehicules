import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailVehicleComponent } from './detail-vehicle/detail-vehicle.component';
import { ListVehiclesComponent } from './list-vehicles/list-vehicles.component';

const routes: Routes = [
  { path: 'vehicles', component: ListVehiclesComponent },
  { path: 'vehicle/:id', component: DetailVehicleComponent },
  { path: '', redirectTo: 'vehicles', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
