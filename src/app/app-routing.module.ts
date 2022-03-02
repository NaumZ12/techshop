import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPage } from './about-page/about-page.component';
import { HomePage } from './home-page/home-page.component';
import { SigninPage } from './signin-page/signin-page.component';
import { TvPageComponent } from './tv-page/tv-page.component';
import {ComputerPageComponent} from './computer-page/computer-page.component'
import { GamingOpremaPageComponent } from './gaming-oprema-page/gaming-oprema-page.component';
import { PhonePageComponent } from './phone-page/phone-page.component';
import { CamerasComponent } from './cameras/cameras.component';
import { AllPageComponent } from './all-page/all-page.component';
import { RegPageComponent } from './reg-page/reg-page.component';


const routes: Routes = [
  {path: '', component: HomePage},
  {path: 'about', component: AboutPage},
  {path: 'registration', component: RegPageComponent},
  {path: 'signin', component: SigninPage},
  {path: 'tv', component: TvPageComponent},
  {path: 'computer', component: ComputerPageComponent},
  {path: 'gaming_oprema', component: GamingOpremaPageComponent},
  {path: 'phones', component: PhonePageComponent},
  {path: 'cameras', component: CamerasComponent},
  {path: 'all', component: AllPageComponent},








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegPageComponent,  AllPageComponent, CamerasComponent, PhonePageComponent, GamingOpremaPageComponent,AboutPage, HomePage, SigninPage, TvPageComponent, ComputerPageComponent]
