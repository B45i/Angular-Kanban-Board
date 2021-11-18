import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from './add-task/add-task.component';

type Board = {
  todo: Array<string>;
  doing: Array<string>;
  done: Array<string>;
};
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  data: Board = {
    todo: ['Get to work', 'Go home', 'Fall asleep'],
    doing: ['Pick up groceries'],
    done: ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'],
  };
  // update feature
  // delete feature
  // title for lists
  // empty list message

  get todo() {
    return this.data.todo;
  }

  get doing() {
    return this.data.doing;
  }

  get done() {
    return this.data.done;
  }

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('data') || '');
  }

  onAddTask() {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.todo.push(result)
      }
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    localStorage.setItem('data', JSON.stringify(this.data));
  }
}
