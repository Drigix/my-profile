import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import interactionPlugin from '@fullcalendar/interaction';
import daygridPlugin from '@fullcalendar/daygrid';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { WorkTimeModule } from 'work-time';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule';
import { FormsModule } from '@angular/forms';
import { LayoutsModule } from './layouts/layouts.module';
import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScheduleModule,
    ButtonModule,
    WorkTimeModule,
    FormsModule,
    LayoutsModule,
    PagesModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
