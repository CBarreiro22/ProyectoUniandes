import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];
  totalRenault = 0
  totalChevrolet = 0
  totalNissan = 0

  constructor(private vehiculoService: VehiculoService) { }

  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
      vehiculos.forEach(vehiculos => {
        if(vehiculos.marca === "Renault"){
          this.totalRenault = this.totalRenault +1
        }
        if(vehiculos.marca === "Chevrolet"){
          this.totalChevrolet = this.totalChevrolet +1
          console.log(vehiculos.marca);

        }
        if(vehiculos.marca === "Nissan"){
          this.totalNissan = this.totalNissan +1
        }
      })

    });
  }

  ngOnInit() {
    this.getVehiculos();
  }

}
