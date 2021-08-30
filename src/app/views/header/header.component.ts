import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SettingsDialogComponent} from "../../dialog/settings-dialog/settings-dialog.component";
import {IntroService} from "../../service/intro.service";
import {DeviceDetectorService} from "ngx-device-detector";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input()
  public categoryName: string;
  @Input()
  public showStat: boolean;
  @Output()
  public toggleStat = new EventEmitter<boolean>();
  @Output()
  public toggleMenu = new EventEmitter<boolean>();

  public isMobile:boolean;

  constructor(public dialog: MatDialog,
              public introService: IntroService,
              public deviceDetector: DeviceDetectorService  ){
    this.isMobile=deviceDetector.isMobile();
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
    public showIntroHelp() {
      this.introService.startIntroJS(false);
    }
    public onToggleMenu() {
      this.toggleMenu.emit();
    }
}
