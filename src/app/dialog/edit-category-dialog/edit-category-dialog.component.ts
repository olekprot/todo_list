import {Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';
import {OperType} from '../OperType';

@Component({
    selector: 'app-edit-category-dialog',
    templateUrl: './edit-category-dialog.component.html',
    styleUrls: ['./edit-category-dialog.component.css']
})
export class EditCategoryDialogComponent implements OnInit {
    public categoryTitle: string;
    public dialogTitle: string;
    public operType: OperType;

    constructor(
        public dialogRef: MatDialogRef<EditCategoryDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private data: [string, string, OperType],
        public dialog: MatDialog
    ) {}

    public ngOnInit(): void {
        this.categoryTitle = this.data[0];
        this.dialogTitle = this.data[1];
        this.operType = this.data[2];
    }
    public onConfirm() {
        this.dialogRef.close(this.categoryTitle);
    }
    public onCancel() {
        this.dialogRef.close(false);
    }
    public delete() {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            maxWidth: '500px',
            data: {
                dialogTitle: 'Подтвердите действие',
                message: `Вы действительно хотите удалить категорию: "${this.categoryTitle}"?`
            },
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.dialogRef.close('delete');
            }
        });
    }
    public canDelete(): boolean {
        return this.operType === OperType.EDIT;
    }
}
