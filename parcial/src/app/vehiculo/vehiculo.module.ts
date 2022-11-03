import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoComponent } from './vehiculo.component';
import { VehiculoListComponent } from './vehiculo-list/vehiculo-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [VehiculoComponent,VehiculoListComponent],
  declarations: [VehiculoComponent,VehiculoListComponent]
})
export class VehiculoModule { }
