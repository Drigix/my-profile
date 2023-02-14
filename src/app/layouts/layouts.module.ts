import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterCompoment } from './footer/footer.component';


@NgModule({
  imports: [
    ButtonModule
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
