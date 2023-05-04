import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
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
  {
    path : 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
