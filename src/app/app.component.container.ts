// src/app/app.component.container.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-app-container',
  
  template: `
    <div>
        <!-- Puedes agregar aquí cualquier encabezado, pie de página u otros elementos comunes -->
        <!-- <app-app>holis</app-app> -->
        <!-- Puedes agregar aquí cualquier pie de página, etc. -->
    </div>
    `,
    imports: [CommonModule],
    standalone: true
})
export class AppComponentContainer {}
