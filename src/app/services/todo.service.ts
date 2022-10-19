import { Injectable } from '@angular/core';
import { findIndex, Observable, of } from 'rxjs';
import { Task } from '../models/task.model';
interface responseTasks {
  tasks: Task[];
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  public getTasks(): Observable<Task[]> {
    // return this.http.get(apiUrl)
    return of(this._getTasksLocalStorage())
  }
  public getTaskById(id: number): Observable<Task> {

    return of(this._getTaskByIdLocalStorage(id))
  }
  public addTask(taskTitle: string): Observable<Task> {
    // return this.http.post(apiUrl, taskTitle)
    return of(this._addTaskLocalStorage(taskTitle))
  }
  public updateTask(task: Task): Observable<Task> {
    // return this.http.put(apiUrl, task)
    return of(this._updateTaskLocalStorage(task))
  }
  public deleteTask(id: number): Observable<Task> {

    return of(this._deleteTaskLocalStorage(id))
  }

  private _getTasksLocalStorage(): Array<Task> {
    // const tasks: Task[] = JSON.parse(localStorage.getItem('tasks') as string)
    let tasks: responseTasks = JSON.parse(localStorage.getItem('tasks') as string)
    return tasks.tasks
  }
  private _addTaskLocalStorage(taskTitle: string): Task {
    // const tasks: Task[] = JSON.parse(localStorage.getItem('tasks') as string)
    let tasks: responseTasks = JSON.parse(localStorage.getItem('tasks') as string)
    const newTask: Task = { id: Math.random() * 20, title: taskTitle, done: false }
    tasks.tasks.unshift(newTask)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    return newTask
  }
  private _getTaskByIdLocalStorage(id: number): Task {
    let tasks: responseTasks = JSON.parse(localStorage.getItem('tasks') as string)
    const taskIndex = tasks.tasks.findIndex(t => t.id == id)
    return tasks.tasks[taskIndex];
  }
  private _updateTaskLocalStorage(task: Task): Task {
    let tasks: responseTasks = JSON.parse(localStorage.getItem('tasks') as string)
    const taskIndex = tasks.tasks.findIndex(t => t.id == task.id)
    if (taskIndex >= 0) {
      tasks.tasks.splice(taskIndex, 1);
      // tasks.tasks[taskIndex] = task;
      tasks.tasks.unshift(task)
    }
    localStorage.setItem('tasks', JSON.stringify(tasks))
    return task
  }
  private _deleteTaskLocalStorage(id: number): Task {
    let tasks: responseTasks = JSON.parse(localStorage.getItem('tasks') as string)
    const taskIndex = tasks.tasks.findIndex(t => t.id == id)
    const task = tasks.tasks[taskIndex];
    if (taskIndex >= 0) {
      tasks.tasks.splice(taskIndex, 1);
    }
    localStorage.setItem('tasks', JSON.stringify(tasks))
    // this.sleep(500)
    return task
  }
  sleep(milliseconds: number) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
}
