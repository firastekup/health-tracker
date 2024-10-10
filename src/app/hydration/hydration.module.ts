import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Ajoutez ceci pour ngModel
import { IonicModule } from '@ionic/angular'; // Importer IonicModule

import { HydrationPageRoutingModule } from './hydration-routing.module';
import { HydrationPage } from './hydration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, // Ajoutez FormsModule ici
    IonicModule, // Ajoutez IonicModule ici
    HydrationPageRoutingModule
  ],
  declarations: [HydrationPage]
})
export class HydrationPageModule {}
