import {Observable, of} from 'rxjs';
import {Priority} from '../../../model/Priority';
import {TestData} from '../../TestData';
import {IPriorityDao} from '../interface/PriorityDao';

export class PriorityDAOArray implements IPriorityDao {
    public get(id: number): Observable<Priority> {
        return of(TestData.priorities.find(priority => priority.id === id));
    }

    public getAll(): Observable<Priority[]> {
        return of(TestData.priorities);
    }

    public add(priority: Priority): Observable<Priority> {
        if (priority.id === null || priority.id === 0) {
            priority.id = this.getLastIdPriority();
        }
        TestData.priorities.push(priority);
        return of(priority);
    }

    public delete(id: number): Observable<Priority> {
        TestData.tasks.forEach(task => {
            if (task.priority && task.priority.id === id) {
                task.priority = null;
            }
        });

        const tmpPriority = TestData.priorities.find(t => t.id === id); // удаляем по id
        TestData.priorities.splice(TestData.priorities.indexOf(tmpPriority), 1);

        return of(tmpPriority);
    }

    public update(priority: Priority): Observable<Priority> {
        const tmp = TestData.priorities.find(t => t.id === priority.id); // обновляем по id
        TestData.priorities.splice(TestData.priorities.indexOf(tmp), 1, priority);
        return of(priority);
    }
    public getLastIdPriority(): number {
        return Math.max.apply(Math, TestData.priorities.map(c => c.id)) + 1;
    }
}
