import { Component, OnInit } from '@angular/core';
import { DatosService } from './datosServices/datos.service.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports:[CommonModule],
  standalone: true ,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent  implements OnInit {
  municipios: any[] = [];
  departamentos: any[] = [];

  constructor(private DatosService: DatosService) {}

  ngOnInit(): void {
    this.DatosService.getMunicipios().subscribe(data => {
      this.municipios = data;
    });

    this.DatosService.getDepartamentos().subscribe(data => {
      this.departamentos = data;
    });
  }
}
