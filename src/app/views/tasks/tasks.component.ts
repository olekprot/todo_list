import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {ConfirmDialogComponent} from '../../dialog/confirm-dialog/confirm-dialog.component';
import {EditTaskDialogComponent} from '../../dialog/edit-task-dialog/edit-task-dialog.component';
import {Category} from '../../model/Category';
import {Task} from '../../model/Task';
import {DataHandlerService} from '../../service/data-handler.service';

@Component({
    selector: 'app-tasks',
    styleUrls: ['./tasks.component.css'],
    templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit {
    // поля для таблицы (те, что отображают данные из задачи - должны совпадать с названиями переменных класса)
    public displayedColumns: string[] = ['color', 'id', 'title', 'date', 'priority', 'category', 'operations', 'select'];
    private dataSource: MatTableDataSource<Task>; // контейнер - источник данных для таблицы

    @ViewChild(MatPaginator, {static: false}) private paginator: MatPaginator;
    @ViewChild(MatSort, {static: false}) private sort: MatSort;
    private tasks: Task[];

    @Input('tasks')
    public set setTasks(tasks: Task[]) {
        this.tasks = tasks;
        this.fillTable();
    }

    @Output()
    public deleteTask = new EventEmitter<Task>();
    @Output()
    public updateTask = new EventEmitter<Task>();
    @Output()
    public selectCategory = new EventEmitter<Category>();
    public dataHandler: DataHandlerService;
    private dialog: MatDialog;

    constructor(dataHandler: DataHandlerService, dialog: MatDialog) {
        this.dataHandler = dataHandler;
        this.dialog = dialog;
    }

    public ngOnInit(): void {
        // this.dataHandler.getAllTasks().subscribe((tasks) => this.tasks = tasks);

        // датасорс обязательно нужно создавать для таблицы, в него присваивается любой источник (БД, массивы, JSON и пр.)
        this.dataSource = new MatTableDataSource();
        this.fillTable();
    }

    // в зависимости от статуса задачи - вернуть цвет названия
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

    // показывает задачи с применением всех текущий условий (категория, поиск, фильтры и пр.)
    private fillTable(): void {
        if (!this.dataSource) {
            return;
        }
        this.dataSource.data = this.tasks; // обновить источник данных (т.к. данные массива tasks обновились)
        this.addTableObjects();

        // когда получаем новые данные..
        // чтобы можно было сортировать по столбцам "категория" и "приоритет", т.к. там не примитивные типы, а объекты
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

    private addTableObjects(): void {
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
            if (result === 'delete') {
                this.deleteTask.emit(task);
                return;
            }
            if (result === 'complete') {
                task.completed = true;
                this.updateTask.emit(task);
            }
            if (result === 'activate') {
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
    public onSelectCategory(category: Category): void {
        this.selectCategory.emit(category);
    }
}
