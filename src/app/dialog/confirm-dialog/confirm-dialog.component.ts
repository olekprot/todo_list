import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  styleUrls: ['./confirm-dialog.component.css'],
  templateUrl: './confirm-dialog.component.html',
})
export class ConfirmDialogComponent implements OnInit {

  public dialogTitle: string;
  public message: string;

  constructor(
      private dialogRef: MatDialogRef<ConfirmDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: { dialogTitle: string, message: string },
  ) {
    this.dialogTitle = data.dialogTitle;
    this.message = data.message;
  }

  public ngOnInit(): void {
  }
  public onConfirm(): void {
    this.dialogRef.close(true);
  }
  public onCancel(): void {
    this.dialogRef.close(false);
  }
}
