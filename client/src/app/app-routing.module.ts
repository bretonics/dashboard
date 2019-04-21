import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubComponent } from './components/github/github.component';
import { WeatherComponent } from './components/weather/weather.component';
import { DirectionsComponent } from './components/directions/directions.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'github', component: GithubComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'directions', component: DirectionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
