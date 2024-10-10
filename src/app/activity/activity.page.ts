import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {
  activityDuration: number = 0;
  activityLogs: number[] = [];

  constructor(private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
    this.activityLogs = (await this.storage.get('activityLogs')) || [];
  }

  async addActivity() {
    if (this.activityDuration > 0) {
      this.activityLogs.push(this.activityDuration);
      await this.storage.set('activityLogs', this.activityLogs);
      this.activityDuration = 0;
    }
  }
}
