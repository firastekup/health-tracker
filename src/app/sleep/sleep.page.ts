import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-sleep',
  templateUrl: './sleep.page.html',
  styleUrls: ['./sleep.page.scss'],
})
export class SleepPage implements OnInit {
  sleepDuration: number = 0;
  sleepLogs: number[] = [];

  constructor(private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
    this.sleepLogs = (await this.storage.get('sleepLogs')) || [];
  }

  async addSleep() {
    if (this.sleepDuration > 0) {
      this.sleepLogs.push(this.sleepDuration);
      await this.storage.set('sleepLogs', this.sleepLogs);
      this.sleepDuration = 0;
    }
  }
}
