/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker';

import { VehiculoListComponent } from './vehiculo-list.component';
import { Vehiculo } from '../vehiculo';

describe('VehiculoListComponent', () => {
  let component: VehiculoListComponent;
  let fixture: ComponentFixture<VehiculoListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ VehiculoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoListComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 3; i++) {
      const vehiculo = new Vehiculo(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      );
      component.vehiculos.push(vehiculo)
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have 3 <tr> elements', () => {
    expect(debug.queryAll(By.css('tr'))).toHaveSize(4);
  });
  it('should have  3 <td> elements', () => {
    expect(debug.queryAll(By.css('td.text-wrap'))).toHaveSize(3);
  });
  it('should have  3 <th> elements', () => {
    expect(debug.queryAll(By.css('th.idth'))).toHaveSize(3);
  });
  it('should have  4 header table <th> elements', () => {
    expect(debug.queryAll(By.css('th.headertable'))).toHaveSize(4);
  });
  it('should have  1 table  elements', () => {
    expect(debug.queryAll(By.css('div.tables'))).toHaveSize(1);
  });
  it('should have  1 tbody  elements', () => {
    expect(debug.queryAll(By.css('tbody'))).toHaveSize(1);
  });
  it('should have  1 thead  elements', () => {
    expect(debug.queryAll(By.css('tbody'))).toHaveSize(1);
  });
  it('should have  infromation  elements', () => {
    expect(debug.queryAll(By.css('div.information'))).toHaveSize(1);
  });
  it('should have marca <td> elements', () => {
    debug.queryAll(By.css('td.text-wrap')).forEach((th, i) => {
      expect(th.nativeElement.textContent).toContain(
        component.vehiculos[i].marca
      );
    });
  });
});
