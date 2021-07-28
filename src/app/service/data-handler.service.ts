import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {CategoryDAOArray} from '../data/dao/impl/CategoryDAOArray';
import {PriorityDAOArray} from '../data/dao/impl/PriorityDAOArray';
import {TaskDAOArray} from '../data/dao/impl/TaskDAOArray';
import {TestData} from '../data/TestData';
import {Category} from '../model/Category';
import {Priority} from '../model/Priority';
import {Task} from '../model/Task';

@Injectable({
    providedIn: 'root'
})
export class DataHandlerService {
    public tasksSubject = new BehaviorSubject<Task[]>(TestData.tasks);
    public categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories);
    public taskDaoArray = new TaskDAOArray();
    public categoryDaoArray = new CategoryDAOArray();
    public priorityDaoArray = new PriorityDAOArray();
    public categoriesDaoArray = new CategoryDAOArray();

    constructor() {
        this.fillTasks();
    }

    // fillCategories() {
    //     return TestData.categories;
    // }

    public fillTasks(): void {
        this.tasksSubject.next(TestData.tasks);
    }

    public fillTasksByCategory(category: Category): void {
        const tasks = TestData.tasks.filter((task) => task.category === category);
        this.tasksSubject.next(tasks);
    }

    public getAllTasks(): Observable<Task[]> {
        return this.taskDaoArray.getAll();
    }
    public getAllCategories(): Observable<Category[]> {
        return this.categoriesDaoArray.getAll();
    }
    public getAllPriorities(): Observable<Priority[]> {
        return this.priorityDaoArray.getAll();
    }

    public searchTasks(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]> {
        return this.taskDaoArray.search(category, searchText, status, priority);
    }

    public updateTask(task: Task): Observable<Task> {
        return this.taskDaoArray.update(task);
    }
    public deleteTask(id: number): Observable<Task> {
        return this.taskDaoArray.delete(id);
    }
    public updateCategory(category: Category): Observable<Category> {
        return this.categoriesDaoArray.update(category);
    }
    public deleteCategory(id: number): Observable<Category> {
        return this.categoriesDaoArray.delete(id);
    }
    public addTask(task: Task): Observable<Task> {
        return this.taskDaoArray.add(task);
    }
    public addCategory(title: string): Observable<Category> {
        return this.categoryDaoArray.add(new Category(null, title));
    }
}
