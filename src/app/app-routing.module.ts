import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TrueCotizationComponent } from './components/true-cotization/true-cotization.component';

const routes: Routes = [
  {path: 'cotizador', component: HomeComponent},
  {path: 'send-cotization', component: TrueCotizationComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'cotizador'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
