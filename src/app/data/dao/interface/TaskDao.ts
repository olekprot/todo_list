import {Observable} from 'rxjs';
import {Category} from '../../../model/Category';
import {Priority} from '../../../model/Priority';
import { Task } from '../../../model/Task';
import {ICommonDao} from './CommonDao';

export interface ITaskDao extends ICommonDao<Task> {
    search(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]>;
    getCompletedCountInCategory(category: Category): Observable<number>;
    getUncompletedCountInCategory(category: Category): Observable<number>;
    getTotalCountCategory(category: Category): Observable<number>;
    getTotalCount(): Observable<number>;
}
