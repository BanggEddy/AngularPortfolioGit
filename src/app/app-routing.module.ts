import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { AccueilComponent } from './accueil/accueil.component';
const routes: Routes = [
  {
    path : 'skills',
    component: SkillsComponent,
  },
  {
    path : 'accueil',
    component: AccueilComponent,
  },
  {
    path : '',
    component: AccueilComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
