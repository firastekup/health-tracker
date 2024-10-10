import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HydrationPageModule } from './hydration/hydration.module'; // Module de la page Hydration
import { NutritionPageModule } from './nutrition/nutrition.module'; // Module de la page Nutrition
import { SleepPageModule } from './sleep/sleep.module'; // Module de la page Sleep
import { ActivityPageModule } from './activity/activity.module'; // Module de la page Activity

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HydrationPageModule,
    NutritionPageModule,
    SleepPageModule,
    ActivityPageModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
