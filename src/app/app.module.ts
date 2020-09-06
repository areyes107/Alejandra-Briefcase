import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment.prod';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PrimeroComponent } from './components/primero/primero.component';
import { SegundoComponent } from './components/segundo/segundo.component';
import { TerceroComponent } from './components/tercero/tercero.component';
import { CuartoComponent } from './components/cuarto/cuarto.component';
import { PrepaComponent } from './components/prepa/prepa.component';
import { KinderComponent } from './components/kinder/kinder.component';
import { PreKinderComponent } from './components/pre-kinder/pre-kinder.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    PrimeroComponent,
    SegundoComponent,
    TerceroComponent,
    CuartoComponent,
    PrepaComponent,
    KinderComponent,
    PreKinderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
