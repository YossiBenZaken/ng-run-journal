import { ActivityService } from './../services/activity.service';
import { IActivity } from './../shared/activity.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss'],
})
export class ActivityListComponent implements OnInit {
  activities: IActivity[];
  totalActivities: number
  totalDistance: number
  firstDate: Date
  constructor(private _activity: ActivityService) {}

  ngOnInit() {
    this.activities = this._activity.getActivities();
    this.totalActivities = this._activity.getTotalActivities(this.activities);
    this.totalDistance = this._activity.getTotalDistance(this.activities);
    this.firstDate = this._activity.getFirstDate(this.activities);
  }
}
