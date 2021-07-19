import {Component, OnInit} from '@angular/core';
import {Category} from './model/Category';
import {Task} from './model/Task';
import {DataHandlerService} from './service/data-handler.service';

@Component({
    selector: 'app-root',
    styles: [],
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    public title = 'Todo';
    public tasks: Task[];
    public categories: Category[];
    private selectedCategory: Category;

    constructor(public dataHandler: DataHandlerService) {}

    public ngOnInit(): void {
        // this.dataHandler.getAllTasks().subscribe((tasks) => this.tasks = tasks);
        this.dataHandler.getAllCategories().subscribe((categories) => (this.categories = categories));
        this.onSelectCategory(null);
    }
    public onSelectCategory(category: Category): void {
        this.selectedCategory = category;
        this.dataHandler.searchTasks(this.selectedCategory, null, null, null).subscribe((tasks: Task[]) => {
            this.tasks = tasks;
        });
    }
    public onUpdateTask(task: Task): void {
        this.dataHandler.updateTask(task).subscribe((): void => {
            this.dataHandler.searchTasks(this.selectedCategory, null, null, null).subscribe((tasks) => {
                this.tasks = tasks;
            });
        });
    }
    public onDeleteTask(task: Task): void {
        this.dataHandler.deleteTask(task.id).subscribe(() => {
            this.dataHandler.searchTasks(this.selectedCategory, null, null, null).subscribe((tasks) => {
                this.tasks = tasks;
            });
        });
    }
    public onDeleteCategory(category: Category): void {
        this.dataHandler.deleteCategory(category.id).subscribe((cat: Category) => {
            this.selectedCategory = null;
            this.onSelectCategory(this.selectedCategory);
        });
    }
    public onUpdateCategory(category: Category): void {
        this.dataHandler.updateCategory(category).subscribe(() => {
            this.onSelectCategory(this.selectedCategory);
        });
    }
}
