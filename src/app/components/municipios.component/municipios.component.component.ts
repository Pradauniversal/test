import { DatosService } from './../../datosServices/datos.service.service';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-municipio',
  templateUrl: './municipios.component.component.html',
  styleUrl: './municipios.component.component.css'
})
export class MunicipioComponent implements OnInit {
  @Input() selectedDepartamento: string = '';
  municipios: any[] = [];
  filteredMunicipios: any[] = [];

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.datosService.getMunicipios().subscribe(data => {
      this.municipios = data;
      this.filterByDepartamento();
    });
  }

  ngOnChanges(): void {
    this.filterByDepartamento();
  }

  private filterByDepartamento(): void {
    if (this.selectedDepartamento) {
      this.filteredMunicipios = this.municipios.filter(municipio => municipio.departamento === this.selectedDepartamento);
    } else {
      this.filteredMunicipios = this.municipios;
    }
  }
}
