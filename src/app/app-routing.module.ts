import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuartoComponent } from './components/cuarto/cuarto.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PrePrimariaComponent } from './components/pre-primaria/pre-primaria.component';
import { PrimeroComponent } from './components/primero/primero.component';
import { SegundoComponent } from './components/segundo/segundo.component';
import { TerceroComponent } from './components/tercero/tercero.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'pre-primaria', component: PrePrimariaComponent},
  { path: 'primero', component: PrimeroComponent},
  { path: 'segundo', component: SegundoComponent},
  { path: 'tercero', component: TerceroComponent},
  { path: 'cuarto', component: CuartoComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
