import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {FamilyComponent} from "./family/family.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'families', component: FamilyComponent},
  {path: '', component: HomeComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
