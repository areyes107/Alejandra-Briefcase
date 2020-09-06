import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuartoComponent } from './components/cuarto/cuarto.component';
import { HomeComponent } from './components/home/home.component';
import { KinderComponent } from './components/kinder/kinder.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PreKinderComponent } from './components/pre-kinder/pre-kinder.component';
import { PrepaComponent } from './components/prepa/prepa.component';
import { PrimeroComponent } from './components/primero/primero.component';
import { SegundoComponent } from './components/segundo/segundo.component';
import { TerceroComponent } from './components/tercero/tercero.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'pre-kinder', component: PreKinderComponent},
  { path: 'kinder', component: KinderComponent},
  { path: 'prepa', component: PrepaComponent},
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
