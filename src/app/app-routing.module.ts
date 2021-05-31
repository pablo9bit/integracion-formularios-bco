import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndiceComponent } from './components/indice/indice.component'
import { LineaUnoComponent } from './components/linea-uno/linea-uno.component'
import { LineaDosComponent } from './components/linea-dos/linea-dos.component'
import { LineaCuatroComponent } from './components/linea-cuatro/linea-cuatro.component'


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
    path: 'linea-4',
    component: LineaCuatroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
