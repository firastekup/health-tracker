import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-hydration',
  templateUrl: './hydration.page.html',
  styleUrls: ['./hydration.page.scss'],
})
export class HydrationPage implements OnInit {
  waterIntake: number = 0;
  waterLogs: number[] = [];

  constructor(private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
    this.waterLogs = (await this.storage.get('waterLogs')) || [];
  }

  async addWater() {
    if (this.waterIntake > 0) {
      this.waterLogs.push(this.waterIntake);
      await this.storage.set('waterLogs', this.waterLogs);
      this.waterIntake = 0;
    }
  }
}
