import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddTaskService, Task } from '../services/add-task.service';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: AddTaskService) {
  }
  ngOnInit() {
    this.taskForm = this.fb.group({
      name: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      color: ['#8DDDFF'],
    });
  }

  onSubmit() {
    const task: Task = {
      name: this.taskForm.value.name,
      startTime: this.taskForm.value.startTime,
      endTime: this.taskForm.value.endTime,
      color: this.taskForm.value.color,
    };
    // Add the task to the task list in the service
    // Alternatively, you can emit an event to the parent component and let it handle adding the task
    // ...
    this.taskService.addTask(task);
    // Reset the form
    this.taskForm.reset();
  }
}
