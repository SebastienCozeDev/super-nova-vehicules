import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vehicleTypeColor'
})
export class VehicleTypeColorPipe implements PipeTransform {

  transform(type: string): string {
    let color: string;
    switch (type) {
      case 'full hybrid':
        color = 'blue lighten-1';
        break;
      case 'electric':
        color = 'blue lighten-1';
        break;
      case 'essence':
        color = 'deep-orange';
        break;
      case 'diesel':
        color = 'deep-purple darken-2';
        break;
      default:
        color = 'grey';
        break;
    }
    return 'chip ' + color;
  }

}
