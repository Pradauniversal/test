import { DatosService } from './../../datosServices/datos.service.service';
// import { DataService } from './../../datosServices/datos.service.service';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: "./departamento.component.component.ts",
//   templateUrl: "./departamento.component.component.html",
//   styleUrls: ["./departamento.component.component.css"]
// })
// // export class DepartamentoFilterComponent implements OnInit {
// //   departamentos: any[] = [];
// //   selectedDepartamento: string = '';

// //   constructor(private DataService: DataService) { }

// //   ngOnInit(): void {
// //     this.DataService.getDepartamentos().subscribe(DepartamentoFilterComponent => {
// //       this.departamentos = DataService;
// //     });
// //   }

// //   filterByDepartamento(): void {
// //   }
// // }



// export class DepartamentoFilterComponent implements OnInit {
//   departamentos: any[] = [];
//   selectedDepartamento: string = '';

//   constructor(private dataService: DataService) { }

//   ngOnInit(): void {
//     this.dataService.getDepartamentos().subscribe(data => {
//       this.departamentos = data;
//     });
//   }

//   filterByDepartamento(): void {
//   }
// }

// src/app/departamento/departamento.component.ts


// src/app/departamento.component.ts
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { DatosService } from '../DatosService';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.component.html',
  styleUrls: ['./departamento.component.component.css']
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
