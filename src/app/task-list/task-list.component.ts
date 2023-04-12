import { Component, OnInit } from '@angular/core';
import { AddTaskService, Task } from '../services/add-task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: AddTaskService) { }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

}
