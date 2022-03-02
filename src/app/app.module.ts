import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatBadgeModule} from '@angular/material/badge';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductBoxComponent } from './product-box/product-box.component';
import { FeedComponent } from './feed/feed.component';
import { SigninFeedComponent } from './signin-feed/signin-feed.component';
import { FooterComponent } from './footer/footer.component';
import { MainAppComponent } from './main-app/main-app.component';
import { ProductBuyBoxComponent } from './product-buy-box/product-buy-box.component';
import {MatSelectModule} from '@angular/material/select';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AdSectionComponent } from './ad-section/ad-section.component';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatInputModule} from '@angular/material/input';










@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputComponent,
    NavbarComponent,
    ProductBoxComponent,
    FeedComponent,
    SigninFeedComponent,
    FooterComponent,
    routingComponents,
    MainAppComponent,
    ProductBuyBoxComponent,
    DropdownComponent,
    AdSectionComponent,
 









  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatSidenavModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule



  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
