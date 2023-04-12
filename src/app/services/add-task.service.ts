import { Injectable } from '@angular/core';
export interface Task {
  name: string;
  startTime: string;
  endTime: string;
  color: string;
}
@Injectable({
  providedIn: 'root'
})
export class AddTaskService {

  constructor() { }

  private tasks: Task[] = [];

  addTask(task: Task) {
    this.tasks.push(task);
  }

  getTasks(): Task[] {
    return this.tasks;
  }
}
