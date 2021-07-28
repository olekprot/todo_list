import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {EditCategoryDialogComponent} from '../../dialog/edit-category-dialog/edit-category-dialog.component';
import {Category} from '../../model/Category';
import {DataHandlerService} from '../../service/data-handler.service';
import {OperType} from '../../dialog/OperType';

@Component({
    selector: 'app-categories',
    styleUrls: ['./categories.component.css'],
    templateUrl: './categories.component.html'
})
export class CategoriesComponent implements OnInit {
    @Input()
    public categories: Category[];
    @Output()
    public selectCategory = new EventEmitter<Category>();
    @Output()
    public deleteCategory = new EventEmitter<Category>();
    @Output()
    public updateCategory = new EventEmitter<Category>();
    @Input()
    public selectedCategory: Category;
    @Output()
    public addCategory = new EventEmitter<string>()
    public indexMouseMove: number;
    public showEditIconCategory: boolean;
    constructor(public dataHandler: DataHandlerService, public dialog: MatDialog) {}

    // метод вызывается автоматически после инициализации компонента
    public ngOnInit(): void {
        // this.dataHandler.getAllCategories().subscribe((categories) => this.categories = categories);
    }

    public showTasksByCategory(category: Category): void {
        if (this.selectedCategory === category) {
            return;
        }
        this.selectedCategory = category;
        this.selectCategory.emit(this.selectedCategory);
    }

    public showEditIcon(index: number): void {
        this.indexMouseMove = index;
    }
    public openEditDialog(category: Category): void {
        const dialogRef = this.dialog.open(EditCategoryDialogComponent, {
            data: [category.title, 'Редактирование категорий', OperType.EDIT],
            width: '400px'
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result === 'delete') {
                this.deleteCategory.emit(category);
                return;
            }
            if (typeof result === 'string') {
                category.title = result as string;
                this.updateCategory.emit(category);
                return;
            }
        });
    }
    public openAddDialog(){
        const dialogRef = this.dialog.open(EditCategoryDialogComponent, {data: ['', 'Добавление категории', OperType.ADD], width: '400px'});
        dialogRef.afterClosed().subscribe(result => {
            if (result){
                this.addCategory.emit(result as string);
            }
        })
    }
}
