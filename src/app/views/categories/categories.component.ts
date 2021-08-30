import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {EditCategoryDialogComponent} from '../../dialog/edit-category-dialog/edit-category-dialog.component';
import {Category} from '../../model/Category';
import {DataHandlerService} from '../../service/data-handler.service';
import {OperType} from '../../dialog/OperType';
import {DeviceDetectorService} from "ngx-device-detector";
import {ModalActions} from "../../dialog/ModalActions";

@Component({
    selector: 'app-categories',
    styleUrls: ['./categories.component.css'],
    templateUrl: './categories.component.html'
})
export class CategoriesComponent {
    @Input()
    public categories: Category[];
    @Input()
    public selectedCategory: Category;

    @Input('categoryMap')
    set setCategoryMap(categoryMap: Map<Category, number>) {
        this.selectedCategoryMap = categoryMap;
    }
    @Input()
    public uncompletedTotal: number;
    @Output()
    public selectCategory = new EventEmitter<Category>();
    @Output()
    public deleteCategory = new EventEmitter<Category>();
    @Output()
    public updateCategory = new EventEmitter<Category>();
    @Output()
    public addCategory = new EventEmitter<string>();
    @Output()
    public searchCategory = new EventEmitter<string>();
    public indexMouseMove: number;
    public showEditIconCategory: boolean;
    public selectedCategoryMap: Map<Category, number>
    public searchCategoryTitle: string;

    public isMobile: boolean;
    public isTablet: boolean;

    constructor(public dataHandler: DataHandlerService,
                public dialog: MatDialog,
                public deviceService: DeviceDetectorService) {
        this.isMobile = deviceService.isMobile();
        this.isTablet = deviceService.isTablet();
    }

    // метод вызывается автоматически после инициализации компонента
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
            if (result === ModalActions.delete) {
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
    public search(){
        if (this.searchCategoryTitle === null){
            return;
        }
        this.searchCategory.emit(this.searchCategoryTitle);
    }
}
