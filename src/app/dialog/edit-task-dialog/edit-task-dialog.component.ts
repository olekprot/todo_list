import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Category} from '../../model/Category';
import {Priority} from '../../model/Priority';
import {Task} from '../../model/Task';
import {DataHandlerService} from '../../service/data-handler.service';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';
import {DeviceDetectorService} from "ngx-device-detector";
import {DialogMet} from "../DialogMet";
import {ModalActions} from "../ModalActions";


@Component({
    selector: 'app-edit-task-dialog',
    styleUrls: ['./edit-task-dialog.component.css'],
    templateUrl: './edit-task-dialog.component.html'
})
export class EditTaskDialogComponent extends DialogMet<EditTaskDialogComponent> implements OnInit {
    public categories: Category[];
    public priorities: Priority[];

    public dialogTitle: string;
    public task: Task;

    public tmpTitle: string;
    public tmpCategory: Category;
    public tmpPriority: Priority;
    public tmpDate: Date;

    public isMobile: boolean;

    constructor(
        public dialogRef: MatDialogRef<EditTaskDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: [Task, string],
        public dataHandler: DataHandlerService,
        public dialog: MatDialog,
        public deviceService: DeviceDetectorService
    ) {
        super(dialogRef);
        this.isMobile = deviceService.isMobile();
    }

    public ngOnInit(): void {
        this.task = this.data[0];
        this.dialogTitle = this.data[1];

        this.tmpTitle = this.task.title;
        this.tmpCategory = this.task.category;
        this.tmpPriority = this.task.priority;
        this.tmpDate = this.task.date;

        this.dataHandler.getAllCategories().subscribe((items) => (this.categories = items));
        this.dataHandler.getAllPriorities().subscribe((items) => (this.priorities = items));
    }

    public onConfirm(): void {
        this.task.title = this.tmpTitle;
        this.task.category = this.tmpCategory;
        this.task.priority = this.tmpPriority;
        this.task.date = this.tmpDate;
        this.dialogRef.close(this.task);
    }

    public delete(): void {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            maxWidth: '500px',
            data: {
                dialogTitle: 'Подтвердите действие',
                message: `Вы действительно хотите удалить задачу: "${this.task.title}"?`
            },
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe((result: boolean) => {
            if (result) {
                this.dialogRef.close(ModalActions.delete);
            }
        });
    }

    public complete(): void {
        this.dialogRef.close(ModalActions.complete);
    }

    public activate(): void {
        this.dialogRef.close(ModalActions.activate);
    }
}
