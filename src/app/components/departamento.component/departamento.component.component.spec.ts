import { DatosService } from './../../datosServices/datos.service.service';
// // src/app/departamento-filter/departamento-filter.component.spec.ts
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { DepartamentoComponent } from "./departamento.component.component";
// import { of } from 'rxjs';

// describe('DepartamentoFilterComponent', () => {
//   let component: DepartamentoComponent;
//   let fixture: ComponentFixture<DepartamentoComponent>;
//   let dataServiceSpy: jasmine.SpyObj<DatosService>;

//   beforeEach(() => {
//     const spy = jasmine.createSpyObj('DataService', ['getDepartamentos']);

//     TestBed.configureTestingModule({
//       declarations: [DepartamentoComponent],
//       providers: [{ provide: DatosService, useValue: spy }]
//     });

//     fixture = TestBed.createComponent(DepartamentoComponent);
//     component = fixture.componentInstance;
//     dataServiceSpy = TestBed.inject(DatosService) as jasmine.SpyObj<DatosService>;
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should get departamentos on init', () => {
//     const mockData = [{ departamento: 'MockDepartamento' }];
//     dataServiceSpy.getDepartamentos.and.returnValue(of(mockData));

//     fixture.detectChanges();

//     expect(component.departamentos).toEqual(mockData);
//   });

//   it('should filter by departamento', () => {
//     const mockData = [{ departamento: 'MockDepartamento1' }, { departamento: 'MockDepartamento2' }];
//     dataServiceSpy.getDepartamentos.and.returnValue(of(mockData));

//     fixture.detectChanges();

//     component.selectedDepartamento = 'MockDepartamento1';
//     component.filterByDepartamento();

//     expect(component.selectedDepartamento).toBe('MockDepartamento1');
  
//   });
// });





// src/app/departamento.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DepartamentoComponent } from './departamento.component.component';
// import { DatosService } from "./datosService.service";
import { of } from 'rxjs';

describe('DepartamentoComponent', () => {
  let component: DepartamentoComponent;
  let fixture: ComponentFixture<DepartamentoComponent>;
  let datosServiceSpy: jasmine.SpyObj<DatosService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('DatosService', ['getDepartamentos']);

    TestBed.configureTestingModule({
      declarations: [DepartamentoComponent],
      providers: [{ provide: DatosService, useValue: spy }]
    });

    fixture = TestBed.createComponent(DepartamentoComponent);
    component = fixture.componentInstance;
    datosServiceSpy = TestBed.inject(DatosService) as jasmine.SpyObj<DatosService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get departamentos on init', () => {
    const mockData = [{ departamento: 'MockDepartamento' }];
    datosServiceSpy.getDepartamentos.and.returnValue(of(mockData));

    fixture.detectChanges();

    expect(component.departamentos).toEqual(mockData);
  });

  it('should emit departamentoSelected event on filterByDepartamento', () => {
    spyOn(component.departamentoSelected, 'emit');
    component.selectedDepartamento = 'MockDepartamento1';
    component.filterByDepartamento();

    expect(component.departamentoSelected.emit).toHaveBeenCalledWith('MockDepartamento1');
  });
});
