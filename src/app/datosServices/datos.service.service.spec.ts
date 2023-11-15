
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DatosService } from './datos.service.service';

describe('DatosService', () => {
  let service: DatosService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DatosService]
    });

    service = TestBed.inject(DatosService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get municipios', () => {
    const mockData = [{ municipio: 'MockMunicipio' }];
    service.getMunicipios().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpTestingController.expectOne(service['apiUrl']);
    expect(req.request.method).toEqual('GET');
    req.flush(mockData);
  });

  it('should get departamentos', () => {
    const mockData = [{ departamento: 'MockDepartamento' }];
    service.getDepartamentos().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpTestingController.expectOne(`${service['apiUrl']}?$select=departamento&$group=departamento`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockData);
  });
});

