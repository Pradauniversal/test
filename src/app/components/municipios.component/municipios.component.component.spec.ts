import { DatosService } from './../../datosServices/datos.service.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MunicipioComponent } from "./municipios.component.component";
import { of } from 'rxjs';

describe('MunicipiosComponentComponent', () => {
  let component: MunicipioComponent;
  let fixture: ComponentFixture<MunicipioComponent>;
  let dataServiceSpy: jasmine.SpyObj<DatosService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('DataService', ['getMunicipios']);

    TestBed.configureTestingModule({
      declarations: [MunicipioComponent],
      providers: [{ provide: DatosService, useValue: spy }]
    });
    
    fixture = TestBed.createComponent(MunicipioComponent);
    component = fixture.componentInstance;
    dataServiceSpy = TestBed.inject(DatosService) as jasmine.SpyObj<DataService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get municipios on init', () => {
    const mockData = [{ municipio: 'MockMunicipio' }];
    dataServiceSpy.getMunicipios.and.returnValue(of(mockData));

    fixture.detectChanges();

    expect(component.municipios).toEqual(mockData);
  });
});

