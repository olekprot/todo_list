import {ICommonDao} from './CommonDao';
import {Category} from '../../../model/Category';
import {Observable} from 'rxjs';

export interface ICategoryDao extends ICommonDao<Category> {
    search(title: string): Observable<Category[]>;
}