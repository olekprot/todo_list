import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  public categoryName: string;
  @Input()
  public showStat: boolean
  @Output()
  public toggleStat = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit() {
  }
  public onToggleStat() {
    this.toggleStat.emit(!this.showStat)
  }
}
