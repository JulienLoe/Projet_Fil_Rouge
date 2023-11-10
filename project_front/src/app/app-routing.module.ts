import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MovieDetailsComponent } from './components/movieDetails/movieDetails.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomePageComponent } from './components/home-page/home-page.component';


const routes: Routes = [
  { path: '', component: LayoutComponent, children:[
    { path: '', redirectTo: '/65e4gn_zvl&a&n&d&i&n&g&5ve46tb8sc32', pathMatch: 'full'},
    { path: '65e4gn_zvl&a&n&d&i&n&g&5ve46tb8sc32', component: LandingPageComponent },
    { path: 'evgeg4452nyt-&d&e&t&a&i&l&s&-geg654651', component: MovieDetailsComponent },
    { path: 'fz47fz&l&o&g&i&n&56egt-$ghr', component: LoginComponent},
    { path: '166-cz$r&e&g&i&s&t&e&r&56+cegr', component: RegisterComponent},
    { path: 'home', component: HomePageComponent}
  ] }, 
  { path: '**', component: PageNotFoundComponent } // Gestion des routes non trouvées
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
  
 }
