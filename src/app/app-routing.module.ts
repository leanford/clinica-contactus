import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ProfissionaisComponent } from './components/profissionais/profissionais.component';
import { LocalidadeComponent } from './components/localidade/localidade.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servicos', component: ServicesComponent },
  { path: 'localidade', component: LocalidadeComponent },
  { path: 'profissionais', component: ProfissionaisComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }