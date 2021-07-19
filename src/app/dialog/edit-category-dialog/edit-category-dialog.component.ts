import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';

@Component({
    selector: 'app-edit-category-dialog',
    templateUrl: './edit-category-dialog.component.html',
    styleUrls: ['./edit-category-dialog.component.css']
})
export class EditCategoryDialogComponent implements OnInit {
    private categoryTitle: string;
    public dialogTitle: string;
    public canDelete: boolean;

    constructor(
        public dialogRef: MatDialogRef<EditCategoryDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private data: [string, string],
        public dialog: MatDialog
    ) {}

    public ngOnInit(): void {
        this.categoryTitle = this.data[0];
        this.dialogTitle = this.data[1];
        if (this.categoryTitle) {
            this.canDelete = false;
        }
    }
    public onConfirm(): void {
        this.dialogRef.close(this.categoryTitle);
    }
    public onCancel(): void {
        this.dialogRef.close(false);
    }
    public delete(): void {
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
}
