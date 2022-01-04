import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    ButtonComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  exports: [
    ButtonComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
