// src/nutrition/nutrition.page.ts
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Meal } from '../models/meal.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.page.html',
  styleUrls: ['./nutrition.page.scss'],
})
export class NutritionPage implements OnInit {
  caloriesConsumed: number = 0;
  calorieLogs: { date: string; name: string; calories: number; quantity: number }[] = [];

  meals: Meal[] = [
    { name: 'Salad', caloriesPer100g: 100 },
    { name: 'Pasta', caloriesPer100g: 300 },
    { name: 'Chicken', caloriesPer100g: 400 },
    { name: 'Rice', caloriesPer100g: 130 },
    { name: 'Beef', caloriesPer100g: 250 },
    { name: 'Fish', caloriesPer100g: 200 },
    { name: 'Broccoli', caloriesPer100g: 55 },
    { name: 'Carrot', caloriesPer100g: 41 },
    { name: 'Potato', caloriesPer100g: 77 },
    { name: 'Apple', caloriesPer100g: 52 },
    { name: 'Banana', caloriesPer100g: 89 },
    { name: 'Orange', caloriesPer100g: 47 },
    { name: 'Yogurt', caloriesPer100g: 59 },
    { name: 'Egg', caloriesPer100g: 155 },
    { name: 'Bread', caloriesPer100g: 265 },
    { name: 'Cheese', caloriesPer100g: 402 },
    { name: 'Nuts', caloriesPer100g: 600 },
    { name: 'Chocolate', caloriesPer100g: 546 },
    { name: 'Ice Cream', caloriesPer100g: 207 },
    { name: 'Honey', caloriesPer100g: 304 },
    { name: 'Granola', caloriesPer100g: 471 },
  ];
  
  selectedMeal: string = '';
  quantity: number = 100; // Valeur par défaut de 100g
  calculatedCalories: number = 0;

  constructor(private storage: Storage, private alertController: AlertController) {}

  async ngOnInit() {
    await this.storage.create();
    await this.resetDailyConsumption();
    this.calorieLogs = (await this.storage.get('calorieLogs')) || [];
  }

  async resetDailyConsumption() {
    const today = new Date().toISOString().split('T')[0]; // Date actuelle
    const lastLoggedDate = this.calorieLogs.length ? this.calorieLogs[this.calorieLogs.length - 1].date : null;

    if (lastLoggedDate !== today) {
      // Réinitialisez les consommations ici si la date ne correspond pas à aujourd'hui
      this.calorieLogs = [];
      await this.storage.set('calorieLogs', this.calorieLogs);
      this.caloriesConsumed = 0; // Réinitialisez aussi le compteur de calories
    }
  }

  calculateCalories() {
    const meal = this.meals.find(m => m.name === this.selectedMeal);
    if (meal) {
      this.calculatedCalories = (meal.caloriesPer100g / 100) * this.quantity;
    } else {
      this.calculatedCalories = 0;
    }
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Calorie Limit Exceeded',
      message: 'You have exceeded your daily calorie limit!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async addCalories() {
    const meal = this.meals.find(m => m.name === this.selectedMeal);
    const today = new Date().toISOString().split('T')[0]; // Date actuelle

    if (meal && this.calculatedCalories > 0) {
      this.calorieLogs.push({ date: today, name: meal.name, calories: this.calculatedCalories, quantity: this.quantity });
      await this.storage.set('calorieLogs', this.calorieLogs);
      
      this.caloriesConsumed += this.calculatedCalories; // Total calories consumed
      
      // Vérifiez si les calories dépassent la limite
      if (this.caloriesConsumed > 2000) { // Changez 2000 avec votre seuil désiré
        await this.showAlert(); // Affichez l'alerte
      }
      
      this.selectedMeal = '';
      this.quantity = 100;
      this.calculatedCalories = 0;
    }
  }
}
