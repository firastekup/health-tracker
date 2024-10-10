// src/nutrition/nutrition.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NutritionPageRoutingModule } from './nutrition-routing.module';
import { NutritionPage } from './nutrition.page';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NutritionPageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [NutritionPage]
})
export class NutritionPageModule {}
