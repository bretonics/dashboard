import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientJsonpModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { NavbarComponent } from './components/navbar/navbar.component';
import { GithubComponent } from './components/github/github.component';
import { WeatherComponent } from './components/weather/weather.component';
import { DirectionsComponent } from './components/directions/directions.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GithubComponent,
    WeatherComponent,
    DirectionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
