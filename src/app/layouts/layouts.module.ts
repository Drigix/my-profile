import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterCompoment } from './footer/footer.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    ButtonModule,
    FormsModule,
    BrowserModule
  ],
  exports: [
    NavbarComponent,
    MainComponent,
    FooterCompoment
  ],
  declarations: [
    NavbarComponent,
    MainComponent,
    FooterCompoment
  ],
})
export class LayoutsModule { }
