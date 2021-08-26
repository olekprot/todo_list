import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  public photo: any;
  public git = 'https://github.com/olekprot';

  constructor ( public dialogRef: MatDialogRef<MeComponent>) { }

  ngOnInit(): void {
  }
  public onConfirm(): void {
    this.dialogRef.close(true);
  }
}
