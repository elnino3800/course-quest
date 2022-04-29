import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CalcComponent} from "./calc/calc.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'calc', component: CalcComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
