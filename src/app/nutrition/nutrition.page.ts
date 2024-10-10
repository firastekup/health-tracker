import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.page.html',
  styleUrls: ['./nutrition.page.scss'],
})
export class NutritionPage implements OnInit {
  caloriesConsumed: number = 0;
  calorieLogs: number[] = [];

  constructor(private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
    this.calorieLogs = (await this.storage.get('calorieLogs')) || [];
  }

  async addCalories() {
    if (this.caloriesConsumed > 0) {
      this.calorieLogs.push(this.caloriesConsumed);
      await this.storage.set('calorieLogs', this.calorieLogs);
      this.caloriesConsumed = 0;
    }
  }
}
