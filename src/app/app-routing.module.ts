import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'aboutme',
        component: AboutmeComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
