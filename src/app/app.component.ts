import {Component, OnInit} from '@angular/core';
import {Category} from './model/Category';
import {Task} from './model/Task';
import {DataHandlerService} from './service/data-handler.service';
import {Priority} from "./model/Priority";
import {zip} from "rxjs";
import {concatMap, map} from "rxjs/operators";
import {IntroService} from "./service/intro.service";
import {DeviceDetectorService} from "ngx-device-detector";

@Component({
    selector: 'app-root',
    styles: ['nav { z-index: 0 !important; }'], // create new file for css
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

    public title = 'TestTODO';
    public categoryMap = new Map<Category, number>();
    public tasks: Task[];
    public categories: Category[];
    public priorities: Priority[];

    public totalTasksCountInCategory: number;
    public completedCountInCategory: number;
    public uncompletedCountInCategory: number;
    public uncompletedTotalTasksCount: number

    public showStat: boolean = true;
    public selectedCategory: Category = null;
    public searchTasksText: string = '';
    public searchCategoryText: string = '';
    public priorityFilter: Priority;
    public statusFilter: boolean;

    public menuOpened: boolean;
    public menuMode: any;
    public menuPosition: any;
    public showBackdrop: boolean;

    public isMobile: boolean;
    public isTablet: boolean;

    constructor(public dataHandler: DataHandlerService,
                public introService: IntroService,
                public deviceService: DeviceDetectorService) {
        this.isMobile = deviceService.isMobile();
        this.isTablet = deviceService.isTablet();
        this.showStat = true ? !this.isMobile : false;
        this.setMenuValues()
    }

    public ngOnInit(): void {
        this.dataHandler.getAllPriorities().subscribe((priorities) => this.priorities = priorities)
        this.dataHandler.getAllCategories().subscribe((categories) => this.categories = categories);
        this.fillCategories();
        this.onSelectCategory(null);
        if (!this.isMobile && !this.isTablet){
            this.introService.startIntroJS(true);
        }
    }

    public fillCategories() {
        if (this.categoryMap) {
            this.categoryMap.clear();
            this.categories = this.categories.sort((a,b) => a.title.localeCompare(b.title));
            this.categories.forEach(cat =>{
                this.dataHandler.getUncompletedCountInCategory(cat).subscribe(count => this.categoryMap.set(cat, count))
            });
        }
    }

    public onSelectCategory(category: Category) {
        this.selectedCategory = category;
        this.updateTasksAndStat()
    }
    public onUpdateTask(task: Task): void {
        this.dataHandler.updateTask(task).subscribe(() => {
            this.fillCategories();
            this.updateTasksAndStat();
        })
    }
    public onDeleteTask(task: Task): void {
        this.dataHandler.deleteTask(task.id).pipe(
            concatMap(task => {
                    return this.dataHandler.getUncompletedCountInCategory(task.category).pipe(map(count => {
                        return ({t: task, count});
                    }));
                }
            )).subscribe(result => {
            const t = result.t as Task;
            if(t.category){
                this.categoryMap.set(t.category, result.count);
            }
            this.updateTasksAndStat();
        });
    }
    public onDeleteCategory(category: Category){
        this.dataHandler.deleteCategory(category.id).subscribe((cat: Category) => {
            this.selectedCategory = null;
            this.categoryMap.delete(cat);
            this.onSearchCategory(this.searchCategoryText);
            this.updateTasksAndStat()
        });
    }
    public onUpdateCategory(category: Category): void {
        this.dataHandler.updateCategory(category).subscribe(() => {
            this.onSearchCategory(this.searchCategoryText);
        });
    }
    public onSearchTasks(searchString: string): void {
        this.searchTasksText = searchString;
        this.updateTasksAndStat()
    }
    public onFilterTaskByStatus(status: boolean): void {
        this.statusFilter = status;
        this.updateTasksAndStat()
    }
    public onFilterTasksByPriority(priority: Priority) {
        this.priorityFilter = priority;
        this.updateTasksAndStat()
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

    public onAddTask(task: Task) {
        this.dataHandler.addTask(task).pipe(
            concatMap(task => {
                    return this.dataHandler.getUncompletedCountInCategory(task.category).pipe(map(count => {
                        return ({t: task, count});
                    }));
                }
            )).subscribe(result => {
            const t = result.t as Task;
            if (t.category) {
                this.categoryMap.set(t.category, result.count);
            }
            this.updateTasksAndStat();
        });
    }
    public onAddCategory(title: string) {
        this.dataHandler.addCategory(title).subscribe(() => this.fillCategories());
    }

    public updateCategories() {
        this.dataHandler.getAllCategories().subscribe(categories => this.categories = categories);
        console.log(this.categories)
    }
    public onSearchCategory(title: string): void {
        this.searchCategoryText = title;
        this.dataHandler.searchCategories(title).subscribe(categories => {
            this.categories = categories;
            this.fillCategories();
            });
    }
    public updateTasksAndStat(){
        this.updateTasks();
        this.updateStat();
    }

    public updateStat() {
        zip(
            this.dataHandler.getTotalCountInCategory(this.selectedCategory),
            this.dataHandler.getCompletedCountInCategory(this.selectedCategory),
            this.dataHandler.getUncompletedCountInCategory(this.selectedCategory),
            this.dataHandler.getUncompletedTotalCount())
            .subscribe( array => {
                this.totalTasksCountInCategory = array[0];
                this.completedCountInCategory = array[1];
                this.uncompletedCountInCategory = array[2];
                this.uncompletedTotalTasksCount = array[3];
            })
    }

    public toggleStat(showStat: boolean) {
        this.showStat = showStat;
    }
    public onClosedMenu(){
        this.menuOpened = false;
    }
    public setMenuValues() {
        this.menuPosition = 'left';
        if(this.isMobile){
            this.menuOpened = false;
            this.menuMode = 'over';
            this.showBackdrop = true;
        } else {
            this.menuOpened = true;
            this.menuMode = 'push';
            this.showBackdrop = false;
        }
    }
    public toggleMenu(){
        this.menuOpened = !this.menuOpened;
    }

}
