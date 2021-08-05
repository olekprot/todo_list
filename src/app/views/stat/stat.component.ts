import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {
  @Input()
  public totalTasksInCategory: number; // общее кол-во задач в категории

  @Input()
  public completeTasksInCategory: number; // кол-во решенных задач в категории

  @Input()
  public uncompleteTasksInCategory: number; // кол-во нерешенных задач в категории

  @Input()
  public showStat: boolean;

  constructor() { }

  ngOnInit() {
  }

}
