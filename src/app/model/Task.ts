import {Priority} from './Priority';
import {Category} from './Category';


export class Task {
    public id: number;
    public title: string;
    public completed: boolean;
    public priority?: Priority;
    public category?: Category;
    public date?: Date;

   public constructor(id: number, title: string, completed: boolean, priority?: Priority, category?: Category, date?: Date) {
        this.id = id;
        this.title = title;
        this.completed = completed;
        this.priority = priority;
        this.category = category;
        this.date = date;
    }
}
