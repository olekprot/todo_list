import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';
import {OperType} from "../OperType";
import {DialogMet} from "../DialogMet";
import {ModalActions} from "../ModalActions";

@Component({
  selector: 'app-edit-priority-dialog',
  templateUrl: './edit-priority-dialog.component.html',
  styleUrls: ['./edit-priority-dialog.component.css']
})

// создание/редактирование категории
export class EditPriorityDialogComponent extends DialogMet<EditPriorityDialogComponent> implements OnInit {

  public dialogTitle: string; // текст для диалогового окна
  public priorityTitle: string; // текст для названия приоритета (при реактировании или добавлении)
  public operType: OperType;

  constructor(
      public dialogRef: MatDialogRef<EditPriorityDialogComponent>, // // для возможности работы с текущим диалог. окном
      @Inject(MAT_DIALOG_DATA) private data: [string, string, OperType], // данные, которые передали в диалоговое окно
      public dialog: MatDialog // для открытия нового диалогового окна (из текущего) - например для подтверждения удаления
  ) {
    super(dialogRef);
  }

  ngOnInit() {
    this.priorityTitle = this.data[0];
    this.dialogTitle = this.data[1];
    this.operType = this.data[2];
  }

  public onConfirm(): void {
    this.dialogRef.close(this.priorityTitle);
  }

  // нажали Удалить
  public delete(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '500px',
      data: {
        dialogTitle: 'Подтвердите действие',
        message: `Вы действительно хотите удалить приоритет: "${this.priorityTitle}"? (в задачи проставится '')`
      },
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dialogRef.close(ModalActions.delete); // нажали удалить
      }
    });
  }
  public canDelete(): boolean {
    return this.operType === OperType.EDIT;
  }
}
