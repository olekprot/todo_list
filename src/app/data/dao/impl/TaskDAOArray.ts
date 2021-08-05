import {Observable, of} from 'rxjs';
import {Category} from '../../../model/Category';
import {Priority} from '../../../model/Priority';
import {Task} from '../../../model/Task';
import {TestData} from '../../TestData';
import {ITaskDao} from '../interface/TaskDao';

export class TaskDAOArray implements ITaskDao {
    public add(task: Task): Observable<Task> {
        if (task.id === null || task.id === 0){
            task.id = this.getLastIdTask();
        }
        TestData.tasks.push(task);
        return of(task);
    }
    public getLastIdTask(): number {
        return Math.max.apply(Math, TestData.tasks.map(task => task.id)) + 1;
    }

    public delete(id: number): Observable<Task> {
        const taskTmp = TestData.tasks.find((t) => t.id === id);
        TestData.tasks.splice(TestData.tasks.indexOf(taskTmp), 1);
        return of(taskTmp);
    }

    public get(id: number): Observable<Task> {
        return of(TestData.tasks.find((todo) => todo.id === id));
    }

    public getAll(): Observable<Task[]> {
        return of(TestData.tasks);
    }

    // кол-во завершенных задач в заданной категории (если category === null, то для всех категорий)
    public getCompletedCountInCategory(category: Category): Observable<number> {
        return of(this.searchTasks(category, null, true, null).length);
    }

    // кол-во незавершенных задач в заданной категории (если category === null, то для всех категорий)
    public getUncompletedCountInCategory(category: Category): Observable<number> {
        return of(this.searchTasks(category, null, false, null).length);
    }

    // кол-во всех задач в заданной категории (если category === null, то для всех категорий)
    public getTotalCountInCategory(category: Category): Observable<number> {
        return of(this.searchTasks(category, null, null, null).length);
    }

    // кол-во всех задач в общем
    public getTotalCount(): Observable<number> {
        return of(TestData.tasks.length);
    }

    public search(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]> {
        return of(this.searchTasks(category, searchText, status, priority));
    }
/*
    public searchTodos(category: Category, searchText: string, status: boolean, priority: Priority): Task[] {
        let allTasks = TestData.tasks;
        if (category !== null) {
            allTasks = allTasks.filter((todo) => todo.category === category);
        }
        return allTasks;
    }*/
    public searchTasks(category: Category, searchText: string, status: boolean, priority: Priority): Task[] {
        let allTasks = TestData.tasks;
        if (status != null){
            allTasks = allTasks.filter(task => task.completed === status)
        }
        if (category != null){
            allTasks = allTasks.filter(task => task.category === category)
        }
        if (priority != null){
            allTasks = allTasks.filter(task => task.priority === priority)
        }
        if (searchText != null){
            allTasks = allTasks.filter(
                task => task.title.toUpperCase().includes(searchText.toUpperCase())
            );
        }
        return allTasks;
    }
    public update(T: Task): Observable<Task> {
        const taskTmp = TestData.tasks.find((t) => t.id === T.id);
        TestData.tasks.splice(TestData.tasks.indexOf(taskTmp), 1, T);
        return of(T);
    }

    getTotalCountCategory(category: Category): Observable<number> {
        return undefined;
    }
}
