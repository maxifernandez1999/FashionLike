import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbmComponent } from './pages/abm/abm.component';
import { FormsModule } from '@angular/forms';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';


@NgModule({
  declarations: [
    AbmComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularFireStorageModule
  ]
})
export class AbmModule { }
