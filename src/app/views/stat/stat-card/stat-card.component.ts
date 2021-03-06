import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.css']
})
export class StatCardComponent {

  @Input()
  public completed: boolean = false;
  @Input()
  public iconName:string
  @Input()
  public count1: number | string;
  @Input()
  public countTotal: number | string;
  @Input()
  public title: string;
}
