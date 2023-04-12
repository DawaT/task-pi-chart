import { Component, OnInit } from '@angular/core';
import { AddTaskService, Task } from '../services/add-task.service';

@Component({
  selector: 'app-pi-chart-timer',
  templateUrl: './pi-chart-timer.component.html',
  styleUrls: ['./pi-chart-timer.component.scss']
})
export class PiChartTimerComponent implements OnInit {
  hourHandAngle: number;
  minuteHandAngle: number;
  secondHandAngle: number;

  clockDailyTasks: Task[] = [];

  /*clockDailyTasks: any[] = [
    {category: 'meetings', startTime: '2022-06-22T12:00:00Z', endTime: '2022-06-22T02:00:00Z'},
    {category: 'emails', startTime: '2022-06-22T02:00:00', endTime: '2022-06-22T03:00:00'},
    {category: 'presentations', startTime: '2022-06-22T03:00:00', endTime: '2022-06-22T04:00:00'},
    {category: 'lunch', startTime: '2022-06-22T04:00:00', endTime: '2022-06-22T06:00:00'},
    {category: 'prospecting', startTime: '2022-06-22T06:00:00Z', endTime: '2022-06-22T07:30:00Z'},
    {category: 'crm_work', startTime: '2022-06-22T07:30:00', endTime: '2022-06-22T08:30:00'},
    {category: 'new_calls', startTime: '2022-06-22T08:30:00', endTime: '2022-06-22T10:00:00'},
    {category: 'follow_up_calls', startTime: '2022-06-22T10:00:00', endTime: '2022-06-22T11:00:00'}
  ];*/


  constructor( private taskService: AddTaskService) { }

  ngOnInit() {
    // Update clock hands every second
    /*setInterval(() => {
      const dateToday = new Date();
      const clockHours = dateToday.getHours() % 12;
      const clockMinutes = dateToday.getMinutes();
      const clockSeconds = dateToday.getSeconds();
      this.hourHandAngle = (clockHours + clockMinutes / 60) * 30;
      this.minuteHandAngle = clockMinutes * 6;
      this.secondHandAngle = clockSeconds * 6;
    }, 1000);*/
    setInterval(() => {
      const date = new Date();
      let hours = date.getHours() % 12;
      if (hours === 0) {
        hours = 12;
      }
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      this.hourHandAngle = (hours + minutes / 60) * 30;
      this.minuteHandAngle = minutes * 6;
      this.secondHandAngle = seconds * 6;
    }, 1000);
    this.clockDailyTasks = this.taskService.getTasks();
  }

  timeValue(dateTime) {
    const hoursMinutes = (new Date(dateTime.replace('T', ' ').replace('Z', '')).toLocaleTimeString()).split(/[.:]/);
    const hours = parseInt(hoursMinutes[0], 10);
    const minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
    const timeValue = hours + (minutes / 60);
    return (timeValue * 8.3333333333);
  }

  getTimeDiff(startDate, endDate) {
    const diff = (new Date(endDate).getTime()) - (new Date(startDate).getTime());
    const days = Math.floor(diff / (60 * 60 * 24 * 1000));
    const hours = Math.floor(diff / (60 * 60 * 1000)) - (days * 24);
    const minutes = Math.floor(diff / (60 * 1000)) - ((days * 24 * 60) + (hours * 60));
    const seconds = Math.floor(diff / 1000) - ((days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60));
    return `${days} ${hours}:${minutes}:${seconds}`;
  }

}
