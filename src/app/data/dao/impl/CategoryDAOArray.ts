import {Observable, of} from 'rxjs';
import {Category} from '../../../model/Category';
import {TestData} from '../../TestData';
import {ICategoryDao} from '../interface/CategoryDao';

export class CategoryDAOArray implements ICategoryDao {
    public add(T: Category): Observable<Category> {
        return undefined;
    }

    public delete(id: number): Observable<Category> {
        TestData.tasks.forEach((task: any) => {
            if (task.category && task.category.id === id) {
                task.category = null;
            }
        });
        const tmpCategory = TestData.categories.find((t: Category): boolean => t.id === id);
        TestData.categories.splice(TestData.categories.indexOf(tmpCategory), 1);
        return of(tmpCategory);
    }

    public get(id: number): Observable<Category> {
        return undefined;
    }

    public getAll(): Observable<Category[]> {
        return of(TestData.categories);
    }

    public search(title: string): Observable<Category[]> {
        return undefined;
    }

    public update(category: Category): Observable<Category> {
        const tmpCategory = TestData.categories.find((t: Category): boolean => t.id === category.id);
        TestData.categories.splice(TestData.categories.indexOf(tmpCategory), 1, category);
        return of(tmpCategory);
    }
}
