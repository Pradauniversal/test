import { CommonModule } from '@angular/common';
import { DatosService } from './../../datosServices/datos.service.service';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.component.html',
  styleUrls: ['./departamento.component.component.css'],
  imports:[CommonModule],
  standalone: true
})
export class DepartamentoComponent implements OnInit {
  departamentos: any[] = [];
  selectedDepartamento: string = '';

  @Output() departamentoSelected = new EventEmitter<string>();

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.datosService.getDepartamentos().subscribe(data => {
      this.departamentos = data;
    });
  }

  filterByDepartamento(): void {
    // Lógica para filtrar la tabla por departamento seleccionado
    this.departamentoSelected.emit(this.selectedDepartamento);
  }
}
