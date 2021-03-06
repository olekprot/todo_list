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
    public updatePriority(priority: Priority): Observable<Priority> {
        return this.priorityDaoArray.update(priority);
    }
    public deleteCategory(id: number): Observable<Category> {
        return this.categoriesDaoArray.delete(id);
    }
    public deletePriority(id: number): Observable<Priority> {
        return this.priorityDaoArray.delete(id);
    }
    public addTask(task: Task): Observable<Task> {
        return this.taskDaoArray.add(task);
    }
    public addCategory(title: string): Observable<Category> {
        return this.categoryDaoArray.add(new Category(null, title));
    }
    public addPriority(priority: Priority): Observable<Priority> {
        return this.priorityDaoArray.add(priority);
    }
    public searchCategories (title: string): Observable<Category[]>{
        return this.categoriesDaoArray.search(title);
    }
    public getCompletedCountInCategory(category: Category): Observable<number>{
        return this.taskDaoArray.getCompletedCountInCategory(category);
    }
    public getUncompletedTotalCount(): Observable<number> {
        return this.taskDaoArray.getUncompletedCountInCategory(null);
    }
    public getUncompletedCountInCategory(category: Category):Observable<number>{
        return this.taskDaoArray.getUncompletedCountInCategory(category);
    }
    public getTotalCountInCategory(category: Category): Observable<number> {
        return this.taskDaoArray.getTotalCountInCategory(category);
    }
}
