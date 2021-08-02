import {Observable, of} from 'rxjs';
import {Category} from '../../../model/Category';
import {TestData} from '../../TestData';
import {ICategoryDao} from '../interface/CategoryDao';

export class CategoryDAOArray implements ICategoryDao {
    public add(category: Category): Observable<Category> {

        if (category.id === null || category.id === 0) {
            category.id = this.getLastIdCategory();
        }

        TestData.categories.push(category);
        return of(category);

    }
    public getLastIdCategory(): number {
        return Math.max.apply(Math, TestData.categories.map(c => c.id)) + 1;
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
        return of(TestData.categories.filter(
            cat => cat.title.toUpperCase().includes(title.toUpperCase()))
            .sort((c1,c2)=> c1.title.localeCompare(c2.title)));
    }

    public update(category: Category): Observable<Category> {
        const tmpCategory = TestData.categories.find((t: Category): boolean => t.id === category.id);
        TestData.categories.splice(TestData.categories.indexOf(tmpCategory), 1, category);
        return of(tmpCategory);
    }
}
