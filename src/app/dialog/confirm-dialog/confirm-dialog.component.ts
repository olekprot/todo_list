import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogMet} from "../DialogMet";

@Component({
  selector: 'app-confirm-dialog',
  styleUrls: ['./confirm-dialog.component.css'],
  templateUrl: './confirm-dialog.component.html',
})
export class ConfirmDialogComponent extends DialogMet<ConfirmDialogComponent>{

  public dialogTitle: string;
  public message: string;

  constructor(
      public dialogRef: MatDialogRef<ConfirmDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: { dialogTitle: string, message: string },
  ) {
    super(dialogRef);
    this.dialogTitle = data.dialogTitle;
    this.message = data.message;
  }

  public onConfirm(): void {
    this.dialogRef.close(true);
  }
}
