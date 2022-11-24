import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrosPageRoutingModule } from './registros-routing.module';

import { RegistrosPage } from './registros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule,
    RegistrosPageRoutingModule
  ],
  declarations: [RegistrosPage]
})
export class RegistrosPageModule {}
