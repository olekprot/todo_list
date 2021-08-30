import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {ConfirmDialogComponent} from '../../dialog/confirm-dialog/confirm-dialog.component';
import {EditTaskDialogComponent} from '../../dialog/edit-task-dialog/edit-task-dialog.component';
import {Category} from '../../model/Category';
import {Task} from '../../model/Task';
import {DataHandlerService} from '../../service/data-handler.service';
import {Priority} from "../../model/Priority";
import {DeviceDetectorService} from "ngx-device-detector";
import {ModalActions} from "../../dialog/ModalActions";

@Component({
    selector: 'app-tasks',
    styleUrls: ['./tasks.component.css'],
    templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit {
    // поля для таблицы (те, что отображают данные из задачи - должны совпадать с названиями переменных класса)
    public displayedColumns: string[] = ['color', 'id', 'title', 'date', 'priority', 'category', 'operations', 'select'];
    public dataSource: MatTableDataSource<Task>; // контейнер - источник данных для таблицы

    @ViewChild(MatPaginator) private paginator: MatPaginator;
    @ViewChild(MatSort) private sort: MatSort;
    public tasks: Task[];
    public priorities: Priority[];
    public searchTaskText: string;
    public selectedStatusFilter: boolean = null;
    public selectedPriorityFilter: Priority = null;


    @Input('tasks')
    public set setTasks(tasks: Task[]) {
        this.tasks = tasks;
        this.fillTable();
    }
    @Input('priorities')
    set setPriorities(priorities: Priority[]) {
        this.priorities = priorities;
    }
    @Input()
    public selectedCategory: Category;

    @Output()
    public deleteTask = new EventEmitter<Task>();
    @Output()
    public updateTask = new EventEmitter<Task>();
    @Output()
    public selectCategory = new EventEmitter<Category>();
    @Output()
    public filterByTitle = new EventEmitter<string>();
    @Output()
    public filterByStatus = new EventEmitter<boolean>();
    @Output()
    filterByPriority = new EventEmitter<Priority>();
    @Output()
    public addTask = new EventEmitter<Task>();

    public isMobile:boolean;

    constructor(public dataHandler: DataHandlerService,
                public dialog: MatDialog,
                public deviceService:DeviceDetectorService) {
        this.isMobile = this.deviceService.isMobile();
    }

    public ngOnInit(): void {
        this.dataSource = new MatTableDataSource();
        this.onSelectCategory(null);
    }

    public getPriorityColor(task: Task): string {
        // цвет завершенной задачи
        if (task.completed) {
            return '#F8F9FA'; // TODO вынести цвета в константы (magic strings, magic numbers)
        }
        if (task.priority && task.priority.color) {
            return task.priority.color;
        }

        return '#fff'; // TODO вынести цвета в константы (magic strings, magic numbers)
    }

    public fillTable(): void {
        if (!this.dataSource) {
            return;
        }
        this.dataSource.data = this.tasks; // обновить источник данных (т.к. данные массива tasks обновились)
        this.addTableObjects();

        // @ts-ignore - показывает ошибку для типа даты, но так работает, т.к. можно возвращать любой тип
        this.dataSource.sortingDataAccessor = (task, colName) => {
            // по каким полям выполнять сортировку для каждого столбца
            switch (colName) {
                case 'priority': {
                    return task.priority ? task.priority.id : null;
                }
                case 'category': {
                    return task.category ? task.category.title : null;
                }
                case 'date': {
                    return task.date ? task.date : null;
                }
                case 'title': {
                    return task.title;
                }
            }
        };
    }

    public addTableObjects(): void {
        this.dataSource.sort = this.sort; // компонент для сортировки данных (если необходимо)
        this.dataSource.paginator = this.paginator; // обновить компонент постраничности (кол-во записей, страниц)
    }

    public onClickTask(task: Task): void {
        this.updateTask.emit(task);
    }

    public openEditTaskDialog(task: Task): void {
        const dialogRef = this.dialog.open(EditTaskDialogComponent, {
            autoFocus: false,
            data: [task, 'Редактировать задачи']
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result === ModalActions.delete) {
                this.deleteTask.emit(task);
                return;
            }
            if (result === ModalActions.complete) {
                task.completed = true;
                this.updateTask.emit(task);
            }
            if (result === ModalActions.activate) {
                task.completed = false;
                this.updateTask.emit(task);
                return;
            }
            if (result as Task) {
                this.updateTask.emit(task);
                return;
            }
        });
    }
    public openDeleteDialog(task: Task): void {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            maxWidth: '500px',
            data: {dialogTitle: 'Подтвердите действие', message: `Вы действительно хотите удалить задачу: "${task.title}"?`},
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.deleteTask.emit(task);
            }
        });
    }
    public onToggleStatus(task: Task): void {
        task.completed = !task.completed;
        this.updateTask.emit(task);
    }
    public onSelectCategory(category: any) {
        this.selectCategory.emit(category as Category);
    }
    public onFilterByTitle(): void{
        this.filterByTitle.emit(this.searchTaskText);
    }
    public onFilterByStatus(value: boolean) {
        if (value !== this.selectedStatusFilter){
            this.selectedStatusFilter = value;
            this.filterByStatus.emit(this.selectedStatusFilter);
        }
    }
    public onFilterByPriority(value: Priority) {
        if (value !== this.selectedPriorityFilter) {
            this.selectedPriorityFilter = value;
            this.filterByPriority.emit(this.selectedPriorityFilter);
        }
    }
    public openAddTaskDialog(): void {
        const task = new Task(null,'',false,null, this.selectedCategory);
        const dialogRef = this.dialog.open(EditTaskDialogComponent, {data:[task, 'Добавление задачи']});
        dialogRef.afterClosed().subscribe(result => {
            if(result){
                this.addTask.emit(task);
            }
        })
    }
    public getMobilePriorityBgColor(task: Task) {
        if (task.priority != null && !task.completed) {
            return task.priority.color;
        }
        return 'none';
    }
}
