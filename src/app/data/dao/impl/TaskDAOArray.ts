import {Observable, of} from 'rxjs';
import {Category} from '../../../model/Category';
import {Priority} from '../../../model/Priority';
import {Task} from '../../../model/Task';
import {TestData} from '../../TestData';
import {ITaskDao} from '../interface/TaskDao';

export class TaskDAOArray implements ITaskDao {
    public add(T: Task): Observable<Task> {
        return undefined;
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

    public getCompletedCountInCategory(category: Category): Observable<number> {
        return undefined;
    }

    public getTotalCount(): Observable<number> {
        return undefined;
    }

    public getTotalCountCategory(category: Category): Observable<number> {
        return undefined;
    }

    public getUncompletedCountInCategory(category: Category): Observable<number> {
        return undefined;
    }

    public search(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]> {
        return of(this.searchTodos(category, searchText, status, priority));
    }

    public searchTodos(category: Category, searchText: string, status: boolean, priority: Priority): Task[] {
        let allTasks = TestData.tasks;
        if (category !== null) {
            allTasks = allTasks.filter((todo) => todo.category === category);
        }
        return allTasks;
    }
    public update(T: Task): Observable<Task> {
        const taskTmp = TestData.tasks.find((t) => t.id === T.id);
        TestData.tasks.splice(TestData.tasks.indexOf(taskTmp), 1, T);
        return of(T);
    }
}
