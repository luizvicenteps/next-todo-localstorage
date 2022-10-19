import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TodoService } from 'src/app/services/todo.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlertDialog } from 'src/app/shared/alert-dialog/alert-dialog.component';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tasks: Task[] = [];
  tasksDone: Task[] = [];
  valueInput = '';

  constructor(
    private todoService: TodoService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.updateTasks();
  }

  private updateTasks(): void {
    this.todoService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });

  }
  getTasksByStatusDone(statusDone: boolean): Task[] {
    return this.tasks.filter(t => t.done === statusDone);
  }

  public adicionarTask(): void {
    this.todoService.addTask(this.valueInput).subscribe(() => {
      console.log('task criada com sucesso')
      this.valueInput = '';
      this.updateTasks();
    });
  }

  public disableInput(): boolean {
    return this.valueInput.length == 0 ? true : false;
  }
  public finishTask(id: number): void {
    const taskIndex = this.tasks.findIndex(t => t.id == id)
    const taskDone = this.tasks[taskIndex];
    taskDone.done = true;
    this.todoService.updateTask(taskDone).subscribe(taskUpdated => {
      console.log('task atualizada com sucesso')
      this.updateTasks();
    })
  }
  public todoTask(id: number): void {
    const taskIndex = this.tasks.findIndex(t => t.id == id)
    const taskDone = this.tasks[taskIndex];
    taskDone.done = false;
    this.todoService.updateTask(taskDone).subscribe(taskUpdated => {
      console.log('task atualizada com sucesso')
      this.updateTasks();
    })

  }

  public removerTask(id: number): void {
    const taskIndex = this.tasks.findIndex(t => t.id == id)
    const taskToDelete = this.tasks[taskIndex];
    const dialogRef = this.dialog.open(AlertDialog, {
      data: {
        title: 'Deletar?',
        message: `Deseja deletar a task "${taskToDelete.title}" ?`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.todoService.deleteTask(id).subscribe(() => {
          console.log('task deletada com sucesso')
          this.updateTasks();
        })
      }
    });
  }

}
