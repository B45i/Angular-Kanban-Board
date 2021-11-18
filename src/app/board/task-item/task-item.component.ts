import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() list: Array<string> = [];
  @Input() type?: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
}
