import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: '**', redirectTo: '' }
// ];

const routes: Routes = [
  { path: '', redirectTo: 'clinica-contactus-web', pathMatch: 'full' },
  { path: 'clinica-contactus-web', component: HomeComponent },
  { path: '**', redirectTo: 'clinica-contactus-web' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
