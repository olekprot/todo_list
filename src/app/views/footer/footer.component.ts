import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import {AboutDialogComponent} from "../../dialog/about/about.dialog.component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public year: Date;
  public git = 'https://github.com/olekprot';


  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.year = new Date();
  }
  public openAboutDialog(){
    this.dialog.open(AboutDialogComponent,
        {
          autoFocus: false,
          data: {
            dialogTitle: 'Мой GIT',
            message: 'Мой тестовый проект'
          },
          width: '400px'
        });
  }
}
