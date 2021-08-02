import {Component, OnInit} from '@angular/core';
import {Category} from './model/Category';
import {Task} from './model/Task';
import {DataHandlerService} from './service/data-handler.service';
import {Priority} from "./model/Priority";

@Component({
    selector: 'app-root',
    styles: [],
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    public title = 'Todo';
    public tasks: Task[];
    public categories: Category[];
    public priorities: Priority[];
    public selectedCategory: Category;
    public searchTasksText: string = '';
    public searchCategoryText: string = '';
    public priorityFilter: Priority;
    public statusFilter: boolean;

    constructor(public dataHandler: DataHandlerService) {}

    public ngOnInit(): void {
        // this.dataHandler.getAllTasks().subscribe((tasks) => this.tasks = tasks);
        this.dataHandler.getAllPriorities().subscribe((priorities) => this.priorities = priorities)
        this.dataHandler.getAllCategories().subscribe((categories) => this.categories = categories);
        this.onSelectCategory(null);
    }
    public onSelectCategory(category: Category) {
        this.selectedCategory = category;
        this.updateTasks();
    }
    public onUpdateTask(task: Task): void {
        this.updateTasks();
    }
    public onDeleteTask(task: Task): void {
        this.dataHandler.deleteTask(task.id).subscribe(cat => {
            this.updateTasks()
        });
    }
    public onDeleteCategory(category: Category): void {
        this.dataHandler.deleteCategory(category.id).subscribe((cat: Category) => {
            this.selectedCategory = null;
            this.onSearchCategory(this.searchCategoryText);
        });
    }
    public onUpdateCategory(category: Category): void {
        this.dataHandler.updateCategory(category).subscribe(() => {
            this.onSearchCategory(this.searchCategoryText);
        });
    }
    public onSearchTasks(searchString: string): void {
        this.searchTasksText = searchString;
        this.updateTasks();
    }
    public onFilterTaskByStatus(status: boolean): void {
        this.statusFilter = status;
        this.updateTasks();
    }
    public onFilterTasksByPriority(priority: Priority) {
        this.priorityFilter = priority;
        this.updateTasks();
    }
    public updateTasks() {
        this.dataHandler.searchTasks(
            this.selectedCategory,
            this.searchTasksText,
            this.statusFilter,
            this.priorityFilter
        ).subscribe((tasks: Task[]) => {
            this.tasks = tasks;
        });
    }
    public onAddTask(task: Task){
        this.dataHandler.addTask(task).subscribe(result => {
            this.updateTasks();
        });
    }
    public onAddCategory(title: string) {
        this.dataHandler.addCategory(title).subscribe(() => this.updateCategories());
    }

    public updateCategories() {
        this.dataHandler.getAllCategories().subscribe(categories => this.categories = categories);
    }
    public onSearchCategory(title: string) {
        this.searchCategoryText = title;
        this.dataHandler.searchCategories(title).subscribe(categories => {
            this.categories = categories;
            });
    }
}
