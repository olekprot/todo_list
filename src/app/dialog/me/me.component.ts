import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {DialogMet} from "../DialogMet";

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent extends DialogMet<MeComponent>{

  public photo: any;
  public git = 'https://github.com/olekprot';

  constructor ( public dialogRef: MatDialogRef<MeComponent>) {
    super(dialogRef);
  }
}
