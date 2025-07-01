// app.route.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductspageComponent } from './productspage/productspage.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'productspage', component: ProductspageComponent },
];
