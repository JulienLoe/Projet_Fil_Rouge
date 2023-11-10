import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieDetailsComponent } from './components/movieDetails/movieDetails.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfilComponent } from './components/profil/profil.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MovieDetailsComponent,
    LandingPageComponent,
    PageNotFoundComponent,
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    ProfilComponent,
    HomePageComponent,
    ModalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MdbModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
