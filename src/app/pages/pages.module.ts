import { SkillsComponent } from './skills/skills.component';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    ButtonModule,
    PanelModule,
    FieldsetModule,
    RatingModule,
    FormsModule
  ],
  exports: [
    AboutmeComponent,
    SkillsComponent
    ],
  declarations: [
    AboutmeComponent,
    SkillsComponent
  ],
  providers: [],
})
export class PagesModule { }
