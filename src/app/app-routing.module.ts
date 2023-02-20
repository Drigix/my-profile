import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { SkillsComponent } from './pages/skills/skills.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: MainComponent
      },
      {
        path: 'aboutme',
        component: AboutmeComponent
      },
      {
        path: 'skills',
        component: SkillsComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
