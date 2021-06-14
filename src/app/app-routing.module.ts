import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndiceComponent } from './components/indice/indice.component';
import { LineaUnoComponent } from './components/linea-uno/linea-uno.component';
import { LineaDosComponent } from './components/linea-dos/linea-dos.component';
import { LineaTresComponent } from './components/linea-tres/linea-tres.component';
import { LineaCuatroComponent } from './components/linea-cuatro/linea-cuatro.component';
import { LineaCincoComponent } from './components/linea-cinco/linea-cinco.component';
import { LineaSeisComponent } from './components/linea-seis/linea-seis.component';
import { LineaSieteComponent } from './components/linea-siete/linea-siete.component';
import { ProductivaIndividualComponent } from './components/productiva-individual/productiva-individual.component';
import { from } from 'rxjs';
import { SignInComponent } from './components/autentificacion/sign-in/sign-in.component';
import { GuardGuard } from './components/autentificacion/guard.guard';
import { SignOutComponent } from './components/autentificacion/sign-out/sign-out.component';
import { SignUpComponent } from './components/autentificacion/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'sign-out',
    component: SignOutComponent,
    canActivate: [GuardGuard],
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: '',
    component: IndiceComponent,
    canActivate: [GuardGuard],
  },
  {
    path: 'linea-1',
    component: LineaUnoComponent,
    canActivate: [GuardGuard],
  },
  {
    path: 'linea-2',
    component: LineaDosComponent,
    canActivate: [GuardGuard],
  },
  {
    path: 'linea-3',
    component: LineaTresComponent,
    canActivate: [GuardGuard],
  },
  {
    path: 'linea-4',
    component: LineaCuatroComponent,
    canActivate: [GuardGuard],
  },
  {
    path: 'linea-5',
    component: LineaCincoComponent,
    canActivate: [GuardGuard],
  },
  {
    path: 'linea-6',
    component: LineaSeisComponent,
    canActivate: [GuardGuard],
  },
  {
    path: 'linea-7',
    component: LineaSieteComponent,
    canActivate: [GuardGuard],
  },
  {
    path: 'productiva-individual',
    component: ProductivaIndividualComponent,
    canActivate: [GuardGuard],
  },
/*   {
    path: '**',
    redirectTo: 'sign-in',
    pathMatch: 'full',
  }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
