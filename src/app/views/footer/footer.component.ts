import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import {AboutDialogComponent} from "../../dialog/about/about.dialog.component";
import {DeviceDetectorService} from "ngx-device-detector";
import {MeComponent} from "../../dialog/me/me.component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public year: Date;
  public git = 'https://github.com/olekprot';
  public isMobile: boolean;
  public dialog: MatDialog

  constructor(public deviceService: DeviceDetectorService) {
      this.isMobile = deviceService.isMobile()
  }

  public ngOnInit() {
    this.year = new Date();
  }
  public openAboutDialog(){
    this.dialog.open(AboutDialogComponent,
        {
          autoFocus: false,
          data: {
            dialogTitle: 'Проект TODO-List',
            message: 'Мой тестовый проект. Реализован простой ежедневник с задачами и категориями.'+
                'Также добавлена статистика по выполнению задач.'
          },
          width: '400px'
        });
  }
    public openAboutMe(){
        this.dialog.open(MeComponent,
            {
                autoFocus: false,
                width: '1200px',
                height: '100%'
            });
    }
}
