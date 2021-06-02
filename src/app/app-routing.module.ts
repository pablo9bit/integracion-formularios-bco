import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndiceComponent } from './components/indice/indice.component'
import { LineaUnoComponent } from './components/linea-uno/linea-uno.component'
import { LineaDosComponent } from './components/linea-dos/linea-dos.component'
import { LineaTresComponent } from './components/linea-tres/linea-tres.component'
import { LineaCuatroComponent } from './components/linea-cuatro/linea-cuatro.component'
import { LineaCincoComponent } from './components/linea-cinco/linea-cinco.component'
import { LineaSeisComponent } from './components/linea-seis/linea-seis.component'
import { LineaSieteComponent } from './components/linea-siete/linea-siete.component'
import { from } from 'rxjs';


const routes: Routes = [
  {
    path: '',
    component: IndiceComponent
  },
  {
    path: 'linea-1',
    component: LineaUnoComponent
  },
  {
    path: 'linea-2',
    component: LineaDosComponent
  },
  {
    path: 'linea-3',
    component: LineaTresComponent
  },
  {
    path: 'linea-4',
    component: LineaCuatroComponent
  },
  {
    path: 'linea-5',
    component: LineaCincoComponent
  },
  {
    path: 'linea-6',
    component: LineaSeisComponent
  },
  {
    path: 'linea-7',
    component: LineaSieteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
