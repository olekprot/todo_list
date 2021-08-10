import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SettingsDialogComponent} from "../../dialog/settings-dialog/settings-dialog.component";

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
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  public onToggleStat() {
    this.toggleStat.emit(!this.showStat);
  }
  public showSettings(): void {
    this.dialog.open(SettingsDialogComponent, // delete const dialogRef
        {
          autoFocus: false,
          width: '500px'
        });
  }
}
