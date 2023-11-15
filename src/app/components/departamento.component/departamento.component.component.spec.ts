import { DatosService } from './../../datosServices/datos.service.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DepartamentoComponent } from './departamento.component.component';
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
