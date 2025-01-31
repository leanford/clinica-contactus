import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importe seus componentes aqui
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';

// Defina as rotas
const routes: Routes = [
  { path: '', component: HomeComponent }, // Rota padrão (home)
  { path: 'sobre', component: AboutComponent },
  { path: 'servicos', component: ServicesComponent },
  { path: 'contato', component: ContactComponent },
  { path: '**', redirectTo: '' } // Rota curinga para páginas não encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configura as rotas
  exports: [RouterModule] // Exporta o módulo de rotas
})
export class AppRoutingModule { }