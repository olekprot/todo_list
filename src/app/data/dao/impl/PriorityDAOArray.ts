import {Observable, of} from 'rxjs';
import {Priority} from '../../../model/Priority';
import {TestData} from '../../TestData';
import {IPriorityDao} from '../interface/PriorityDao';

export class PriorityDAOArray implements IPriorityDao {
    public add(T: Priority): Observable<Priority> {
        return undefined;
    }

    public delete(id: number): Observable<Priority> {
        return undefined;
    }

    public get(id: number): Observable<Priority> {
        return undefined;
    }

    public getAll(): Observable<Priority[]> {
        return of(TestData.priorities);
    }

    public update(T: Priority): Observable<Priority> {
        return undefined;
    }

}
