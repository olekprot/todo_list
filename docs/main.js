(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <div class=\"wrapper \">\n\n        <app-categories\n                (selectCategory)=\"onSelectCategory($event)\"\n                (deleteCategory)=\"onDeleteCategory($event)\"\n                (updateCategory)=\"onUpdateCategory($event)\"\n                (addCategory)=\"onAddCategory($event)\"\n                (searchCategory)=\"onSearchCategory($event)\"\n                [categoryMap]=\"categoryMap\"\n                [uncompletedTotal]=\"uncompletedTotalTasksCount\"\n                [selectedCategory]=\"selectedCategory\"\n                [categories]=\"categories\">\n        </app-categories>\n\n        <div class=\"main-panel\">\n\n            <nav class=\"navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top \">\n                <app-header [categoryName]=\"selectedCategory ? selectedCategory.title: 'Все'\"\n                            (toggleStat)=\"toggleStat($event)\"\n                            [showStat]=\"showStat\"></app-header>\n            </nav>\n\n            <div class=\"content\">\n                <div class=\"container-fluid\">\n                    <app-stat\n                            [totalTasksInCategory]=\"totalTasksCountInCategory\"\n                            [completeTasksInCategory]=\"completedCountInCategory\"\n                            [uncompleteTasksInCategory]=\"uncompletedCountInCategory\"\n                            [showStat]=\"showStat\"></app-stat>\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <app-tasks (updateTask)=\"onUpdateTask($event)\"\n                                       (deleteTask)=\"onDeleteTask($event)\"\n                                       (selectCategory)=\"onSelectCategory($event)\"\n                                       (addTask)=\"onAddTask($event)\"\n\n                                       [selectedCategory]=\"selectedCategory\"\n                                       (filterByTitle)=\"onSearchTasks($event)\"\n                                       (filterByStatus)=\"onFilterTaskByStatus($event)\"\n                                       (filterByPriority)=\"onFilterTasksByPriority($event)\"\n\n                                       [tasks]=\"tasks\"\n                                       [priorities]=\"priorities\">\n                            </app-tasks>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <app-footer></app-footer>\n        </div>\n    </div>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/about/about.dialog.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/about/about.dialog.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>\n    {{dialogTitle}}\n</h1>\n<div mat-dialog-content>\n    <p>{{message}}</p>\n</div>\n<div mat-dialog-action>\n    <button mat-raised-button color=\"primary\" (click)=\"onConfirm()\">\n        Ok\n    </button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/confirm-dialog/confirm-dialog.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/confirm-dialog/confirm-dialog.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<h1 mat-dialog-title>{{dialogTitle}}</h1>\n<div mat-dialog-content>\n    <p>{{message}}</p>\n</div>\n\n<div mat-dialog-action>\n    <button mat-raised-button color=\"primary\" (click)=\"onConfirm()\">Ok</button>\n    <button mat-button (click)=\"onCancel()\">Отмена</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/edit-category-dialog/edit-category-dialog.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/edit-category-dialog/edit-category-dialog.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content>\n  <p mat-dialog-title>{{dialogTitle}}</p>\n  <mat-form-field>\n    <mat-label> Название(15 символов)</mat-label>\n    <input #inputTitle\n      matInput maxlength=\"15\"\n      [(ngModel)]=\"categoryTitle\"\n      (keydown.enter)=\"onConfirm()\"/>\n    <button *ngIf=\"categoryTitle.trim().length > 0\"\n            class=\"clear-icon size25\"\n            mat-button  matSuffix mat-icon-button aria-label=\"Clear\"\n            (click)=\"categoryTitle= ''\">\n            <mat-icon>clear</mat-icon>\n    </button>\n  </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-action>\n  <div class=\"col-12 text-center\">\n    <button mat-raised-button color=\"primary\" (click)=\"onConfirm()\"\n            [disabled]=\"inputTitle.value.trim().length===0\">Сохранить</button>\n    <button mat-raised-button (click)=\"onCancel()\">Отмена</button>\n  </div>\n\n  <div class=\"col-12 text-center\">\n    <button\n            *ngIf=\"canDelete()\"\n            mat-button\n            (click)=\"delete()\"\n            class=\"red\">\n      Удалить\n    </button>\n  </div>\n</mat-dialog-action>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/edit-task-dialog/edit-task-dialog.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/edit-task-dialog/edit-task-dialog.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content>\n    <p mat-dialog-title>{{dialogTitle}}</p>\n    <mat-form-field>\n        <mat-label>Название (обязательно)</mat-label>\n\n        <input #inputTitle matInput [(ngModel)]=\"tmpTitle\"\n               (keydown.enter)=\"onConfirm()\">\n        <button *ngIf=\"tmpTitle.trim().length > 0\"\n                mat-button matSuffix mat-icon-button aria-label=\"Clear\"\n                (click)=\"tmpTitle=''\" class=\"size25\">\n            <mat-icon>clear</mat-icon>\n        </button>\n    </mat-form-field>\n    <mat-form-field>\n        <mat-label>Укажите категорию</mat-label>\n        <mat-select [(ngModel)]=\"tmpCategory\">\n            <mat-option [value]=\"null\">Без категории</mat-option>\n            <mat-option *ngFor=\"let cat of categories\" [value]=\"cat\">{{cat.title}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <mat-form-field>\n        <mat-label>Укажите приоритет</mat-label>\n        <mat-select [(ngModel)]=\"tmpPriority\">\n            <mat-option [value]=\"null\">Без приоритета</mat-option>\n            <mat-option *ngFor=\"let pri of priorities\" [value]=\"pri\">{{pri.title}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <mat-form-field>\n        <input\n        matInput placeholder=\"Укажите срок выполнения\" #inputDate\n        readonly=\"true\"\n        [matDatepicker]=\"picker\"\n        [(ngModel)]=\"tmpDate\"\n        (click)=\"picker.open()\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n        <button *ngIf=\"inputDate.value.trim().length > 0\"\n                mat-button matSuffix mat-icon-button aria-label=\"Clear\"\n                (click)=\"tmpDate = null\" class=\"size25\">\n                <mat-icon>clear</mat-icon>\n        </button>\n    </mat-form-field>\n</mat-dialog-content>\n\n<mat-dialog-action>\n    <div class=\"col-md-5 col-12\">\n        <button mat-raised-button color=\"primary\"\n                (click)=\"onConfirm()\"\n                [disabled]=\"inputTitle.value.trim().length==0\">\n            Сохранить\n        </button>\n        <button mat-raised-button (click)=\"onCancel()\">\n            Отмена\n        </button>\n    </div>\n    <div class=\"col-md-7 col-12 text-right\">\n        <button mat-button class=\"green\" (click)=\"complete()\" *ngIf=\"!task.completed && task.id\" >\n            Завершить задачу\n        </button>\n        <button mat-button class=\"green\" (click)=\"activate()\" *ngIf=\"task.completed\">\n            Активировать\n        </button>\n        <button mat-button class=\"red\" (click)=\"delete()\" *ngIf=\"task.id\">\n            Удалить задачу\n        </button>\n    </div>\n\n</mat-dialog-action>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/categories/categories.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/categories/categories.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sidebar\"  data-background-color=\"white\" data-color=\"purple\">\n    <div id=\"categories\">\n        <div class=\"logo\">\n            <span class=\"nav-title\">Категории</span>\n            <span class=\"add-icon-area\">\n                <button class=\"add-icon\" mat-icon-button (click)=\"openAddDialog()\">\n                    <mat-icon>add</mat-icon>\n                </button>\n            </span>\n        </div>\n        <div class=\"sidebar-wrapper\">\n            <ul class=\"nav\">\n                <div class=\"search-category-area\">\n                    <mat-form-field class=\"example-full-width\">\n                        <input #inputSearchCategory\n                               (keydown.escape)=\"searchCategoryTitle = ''; search()\"\n                               (keyup)=\"search()\"\n                               [(ngModel)]=\"searchCategoryTitle\"\n                               matInput maxlength=\"256\" placeholder=\"Поиск категории\">\n                        <button (click)=\"searchCategoryTitle = ''; search()\"\n                                *ngIf=\"inputSearchCategory.value.trim().length > 0\" aria-label=\"Clear\"\n                                class=\"search-category-button size25 gray\"\n                                mat-button mat-icon-button matSuffix>\n                            <mat-icon>clear</mat-icon>\n                        </button>\n                    </mat-form-field>\n                </div>\n                <li class=\"nav-item category\" (click)=\"showTasksByCategory(null)\" [class.active]=\"selectedCategory\">\n                    <a class=\"nav-link pointer\">\n                        <span class=\"all-category-title\">Все</span>\n                        <span class=\"uncompleted-count\">{{uncompletedTotal}}</span>\n                    </a>\n                </li>\n                <div class=\"line\"></div>\n                <div *ngIf=\"categories.length === 0\">\n                    <p class=\"not-found\">Ничего не найдено</p>\n                </div>\n                <li (click)=\"showTasksByCategory(mapValue.key)\"\n                    *ngFor=\"let mapValue of selectedCategoryMap | keyvalue; let index = index\"\n                    [class.active]=\"mapValue.key === selectedCategory\"\n                    (click)=\"showTasksByCategory(mapValue.key)\"\n                    (mouseleave)=\"showEditIcon(null)\"\n                    (mouseenter)=\"showEditIcon(index)\"\n\n                    class=\"nav-item pointer\">\n                    <a class=\"nav-link\">\n                        <span class=\"category-title\">{{mapValue.key.title}}</span>\n                        <span class=\"edit-category-icon-area\">\n                            <mat-icon *ngIf=\"indexMouseMove === index\" (click)=\"$event.stopPropagation(); openEditDialog(mapValue.key)\"\n                                      class=\"edit-category-icon\"> edit\n                            </mat-icon>\n                        </span>\n                        <span class=\"uncompleted-count\"> {{mapValue.value}}</span>\n                    </a>\n                </li>\n            </ul>\n        </div>\n        <div class=\"sidebar-background\"></div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/footer/footer.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/footer/footer.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <nav class=\"float-left\">\n            <ul>\n                <li>\n                    <a href=\"#\">Про меня</a>\n                </li>\n                <li>\n                    <a [href]=\"git\">My GIT</a>\n                </li>\n                <li>\n                    <a (click)=\"openAboutDialog()\" class=\"link\">О приложении</a>\n                </li>\n            </ul>\n        </nav>\n    </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/header/header.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/header/header.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"row settings\">\n        <div class=\"col-10 text-left align-self-top\">\n            <p class=\"navbar-brand\">{{categoryName}}</p>\n            <p class=\"link navbar-brand\" (click)=\"onToggleStat()\" *ngIf=\"showStat\">Скрыть статистику</p>\n            <p class=\"link navbar-brand\" (click)=\"onToggleStat()\" *ngIf=\"!showStat\">Показать статистику</p>\n\n        </div>\n        <div class=\"col-2 text-right align-self-top\">\n            <button mat-icon-button  class=\"header-icon\">\n                <mat-icon>settings</mat-icon>\n            </button>\n            <button mat-icon-button   class=\"header-icon\">\n                <mat-icon>help</mat-icon>\n            </button>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/stat/stat-card/stat-card.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/stat/stat-card/stat-card.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card card-stats\" [ngClass]=\"{'completed-card': completed}\">\n    <div class=\"card-header\" card-header-warning card-header-icon>\n        <div class=\"card-icon\">\n            <i class=\"material-icons\">{{iconName}}</i>\n        </div>\n        <p class=\"card-category\"></p>\n        <h3 class=\"card-title\"> {{count1}}\n            <span *ngIf=\"countTotal\">из {{countTotal}}</span>\n        </h3>\n    </div>\n\n    <div class=\"card-footer\">\n        <div class=\"stats\">\n            <p class=\"stat-card-title\">{{title}}</p>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/stat/stat.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/stat/stat.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"showStat\">\n    <div class=\"row\">\n        <app-stat-card\n                class='col-lg-3 col-md-6 col-sm-6'\n                title=\"Завершенные задачи\"\n                iconName=\"done\"\n                [count1]=\"completeTasksInCategory\"\n                [countTotal]=\"totalTasksInCategory\"\n                [completed]=\"true\">\n        </app-stat-card>\n        <app-stat-card\n                class='col-lg-3 col-md-6 col-sm-6'\n                title=\"Незавершенные задачи\"\n                iconName=\"thumb_down_alt\"\n                [count1]=\"uncompleteTasksInCategory\"\n                [countTotal]=\"totalTasksInCategory\">\n        </app-stat-card>\n        <app-stat-card\n                class='col-lg-3 col-md-6 col-sm-6 completed-card'\n                title=\"Процент завершенных задач\"\n                iconName=\"poll\"\n                [count1]=\"completeTasksInCategory ? (completeTasksInCategory/totalTasksInCategory | percent) : '0 %'\"\n                [completed]=\"true\">\n        </app-stat-card>\n        <app-stat-card\n                class='col-lg-3 col-md-6 col-sm-6'\n                title=\"Процент незавершенных задач\"\n                iconName=\"thumb_down_alt\"\n                [count1]=\"uncompleteTasksInCategory ? (uncompleteTasksInCategory/totalTasksInCategory | percent) : '0 %'\">\n        </app-stat-card>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tasks/tasks.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/tasks/tasks.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"row\">\n    <div class=\"col-md-3 col-sm-12\">\n        <mat-form-field>\n            <input #filterInput\n                    (keydown.escape)=\"searchTaskText = ''; onFilterByTitle()\"\n                    (keyup)=\"onFilterByTitle()\"\n                    [(ngModel)]=\"searchTaskText\"\n                    matInput\n                    placeholder=\"Поиск в текущей категории\">\n            <button (click)=\"searchTaskText = ''; onFilterByTitle()\"\n                    *ngIf=\"filterInput.value.trim().length > 0\"\n                    aria-label=\"Clear\" class=\"clear-icon size25 gray\" mat-button\n                    mat-icon-button\n                    matSuffix>\n                <mat-icon>clear</mat-icon>\n            </button>\n        </mat-form-field>\n    </div>\n    <div class=\"col-md-3 col-sm-12\">\n        <mat-form-field>\n            <mat-select #statusFilter (valueChange)=\"onFilterByStatus(this.$event)\"\n                        [value]=\"selectedStatusFilter\" placeholder=\"Фильтр по статусу\">\n                <mat-option [value]=\"null\">Все статусы</mat-option>\n                <mat-option [value]=\"true\">Завершенные задачи</mat-option>\n                <mat-option [value]=\"false\">Незавершенные задачи</mat-option>\n            </mat-select>\n\n            <button (click)=\"$event.stopPropagation(); onFilterByStatus(null)\"\n                    *ngIf=\"selectedStatusFilter != null\"\n                    aria-label=\"Clear\" class=\"clear-icon size25 gray\" mat-button\n                    mat-icon-button\n                    matSuffix>\n                <mat-icon>clear</mat-icon>\n            </button>\n        </mat-form-field>\n    </div>\n    <div class=\"col-md-3 col-sm-12\">\n        <mat-form-field>\n            <mat-select [value]=\"selectedPriorityFilter\" (valueChange)=\"onFilterByPriority(this.$event)\"\n                        placeholder=\"Фильтр по приоритетам\">\n                <mat-option [value]=\"null\">Все приоритеты</mat-option>\n                <mat-option *ngFor=\"let priority of priorities\" [value]=\"priority\">{{priority.title}}</mat-option>\n            </mat-select>\n            <button\n                    *ngIf=\"selectedPriorityFilter != null\"\n                    class=\"clear-icon size25 gray\"\n                    matSuffix mat-icon-button mat-button\n                    aria-label=\"Clear\"\n                    (click)=\"$event.stopPropagation(); onFilterByPriority(null); \">\n                <mat-icon>clear</mat-icon>\n            </button>\n        </mat-form-field>\n    </div>\n    <div class=\"col-md-3 col-sm-12 text-right\">\n        <div class=\"row\">\n            <div class=\"text-left col-6\">\n                <button\n                        *ngIf=\"selectedStatusFilter != null || selectedPriorityFilter != null || (searchTaskText != null && searchTaskText.trim() != '') \"\n                        matSuffix mat-button\n                        aria-label=\"Clear\"\n                        (click)=\"$event.stopPropagation(); onFilterByStatus(null); onFilterByPriority(null); searchTaskText = ''; onFilterByTitle()\">\n                    Сбросить фильтры\n                </button>\n            </div>\n            <div class=\"text-right col-6\">\n                <button mat-raised-button color=\"primary\" (click)=\"openAddTaskDialog()\">Добавить</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-12 task-list\">\n        <div class=\"card\">\n            <div class=\"card-header card-header-warning\">\n                <h4 class=\"card-title\">Список задач</h4>\n            </div>\n            <div class=\"card-body table-responsive\" *ngIf='tasks && tasks.length > 0'>\n                <table [dataSource]=\"dataSource\" mat-table matSort>\n                    <!--  цвет приоритета  -->\n                    <ng-container matColumnDef=\"color\">\n                        <th *matHeaderCellDef mat-header-cell></th>\n                        <td *matCellDef=\"let task\" [style.background-color]=\"getPriorityColor(task)\" class=\"col-color\"\n                            mat-cell></td>\n                    </ng-container>\n\n                    <!-- нумерация-->\n                    <ng-container matColumnDef=\"id\">\n                        <th *matHeaderCellDef mat-header-cell></th>\n                        <td *matCellDef=\"let index = index;\" class=\"col-id\" mat-cell>\n                            {{index + 1}}\n                        </td>\n                    </ng-container>\n\n                    <!-- название задачи-->\n                    <ng-container matColumnDef=\"title\">\n                        <th *matHeaderCellDef mat-header-cell mat-sort-header> Название</th>\n                        <td *matCellDef=\"let task\" [class.completed]=\"task.completed\" class=\"col-title pointer\" mat-cell\n                            (click)= \"openEditTaskDialog(task)\">\n                            {{task.title}}\n                        </td>\n                    </ng-container>\n\n                    <!--дата выполнения-->\n                    <ng-container matColumnDef=\"date\">\n                        <th *matHeaderCellDef mat-header-cell mat-sort-header> Срок</th>\n                        <td *matCellDef=\"let task\" [ngClass]=\"{'completed': task.completed, 'novalue': task.date == null}\"\n                            class=\"col-date\"\n                            mat-cell>\n                            {{task.date | taskDate}}\n                        </td>\n                    </ng-container>\n\n                    <!--приоритет-->\n                    <ng-container matColumnDef=\"priority\">\n                        <th *matHeaderCellDef mat-header-cell mat-sort-header>Приоритет</th>\n                        <td *matCellDef=\"let task\" class=\"col-priority\"\n                            [ngClass]=\"{'completed': task.completed, 'novalue': task.priority == null}\"\n                            mat-cell>\n                            {{task.priority ? task.priority.title : \"Без приоритета\"}}\n                        </td>\n                    </ng-container>\n\n                    <!--категория-->\n                    <ng-container matColumnDef=\"category\">\n                        <th *matHeaderCellDef mat-header-cell mat-sort-header> Категория</th>\n                        <td *matCellDef=\"let task\" class=\"col-category\"\n                            [ngClass]=\"{'completed': task.completed, 'novalue': task.category == null, 'link': !task.completed && task.category}\"\n                            (click)=\"!task.completed && task.category && onSelectCategory(task.category)\"\n                            mat-cell>\n                            {{task.category ? task.category.title : \"Без категории\"}}\n                        </td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"operations\">\n                        <th mat-header-cell *matHeaderCellDef></th>\n                        <td class=\"col-operations\" mat-cell *matCellDef=\"let task\" [class.completed]=\"task.completed\">\n                            <button mat-icon-button (click)=\"openDeleteDialog(task)\" class=\"delete-icon\">\n                                <mat-icon aria-hidden=\"false\">delete</mat-icon>\n                            </button>\n                            <button mat-icon-button (click)=\"openEditTaskDialog(task)\" class=\"edit-icon\">\n                                <mat-icon aria-hidden=\"false\">edit</mat-icon>\n                            </button>\n                        </td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"select\">\n                        <th mat-header-cell *matHeaderCellDef></th>\n                        <td class=\"col-select text-right\" mat-cell *matCellDef=\"let task\">\n                            <mat-checkbox (click)=\"$event.stopPropagation()\"\n                                          (change)=\"$event ? onToggleStatus(task) : null\"\n                                          [checked]=\"task.completed\">\n                            </mat-checkbox>\n                        </td>\n                    </ng-container>\n\n                    <!--  заголовок таблицы-->\n                    <tr *matHeaderRowDef=\"displayedColumns; \" mat-header-row></tr>\n\n                    <!--  строки таблицы - набор строк из тегов td (порядок указывается в переменной displayedColumns) -->\n                    <tr *matRowDef=\"let row; columns: displayedColumns;\" mat-row></tr>\n\n                </table>\n                <mat-paginator [pageSizeOptions]=\"[10, 20, 50, 100]\" showFirstLastButtons></mat-paginator>\n            </div>\n            <div *ngIf=\"tasks && tasks.length === 0\">\n                <p class=\"not_found\">Ничего не найдено</p>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _service_data_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/data-handler.service */ "./src/app/service/data-handler.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AppComponent = (function () {
    function AppComponent(dataHandler) {
        this.dataHandler = dataHandler;
        this.title = 'Todo';
        this.categoryMap = new Map();
        this.showStat = true;
        this.selectedCategory = null;
        this.searchTasksText = '';
        this.searchCategoryText = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataHandler.getAllPriorities().subscribe(function (priorities) { return _this.priorities = priorities; });
        this.dataHandler.getAllCategories().subscribe(function (categories) { return _this.categories = categories; });
        this.fillCategories();
        this.onSelectCategory(null);
    };
    AppComponent.prototype.fillCategories = function () {
        var _this = this;
        if (this.categoryMap) {
            this.categoryMap.clear();
            this.categories = this.categories.sort(function (a, b) { return a.title.localeCompare(b.title); });
            this.categories.forEach(function (cat) {
                _this.dataHandler.getUncompletedCountInCategory(cat).subscribe(function (count) { return _this.categoryMap.set(cat, count); });
            });
        }
    };
    AppComponent.prototype.onSelectCategory = function (category) {
        this.selectedCategory = category;
        this.updateTasksAndStat();
    };
    AppComponent.prototype.onUpdateTask = function (task) {
        var _this = this;
        this.dataHandler.updateTask(task).subscribe(function () {
            _this.fillCategories();
            _this.updateTasksAndStat();
        });
    };
    AppComponent.prototype.onDeleteTask = function (task) {
        var _this = this;
        this.dataHandler.deleteTask(task.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (task) {
            return _this.dataHandler.getUncompletedCountInCategory(task.category).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (count) {
                return ({ t: task, count: count });
            }));
        })).subscribe(function (result) {
            var t = result.t;
            if (t.category) {
                _this.categoryMap.set(t.category, result.count);
            }
            _this.updateTasksAndStat();
        });
    };
    AppComponent.prototype.onDeleteCategory = function (category) {
        var _this = this;
        this.dataHandler.deleteCategory(category.id).subscribe(function (cat) {
            _this.selectedCategory = null;
            _this.categoryMap.delete(cat);
            _this.onSearchCategory(_this.searchCategoryText);
            _this.updateTasksAndStat();
        });
    };
    AppComponent.prototype.onUpdateCategory = function (category) {
        var _this = this;
        this.dataHandler.updateCategory(category).subscribe(function () {
            _this.onSearchCategory(_this.searchCategoryText);
        });
    };
    AppComponent.prototype.onSearchTasks = function (searchString) {
        this.searchTasksText = searchString;
        this.updateTasksAndStat();
    };
    AppComponent.prototype.onFilterTaskByStatus = function (status) {
        this.statusFilter = status;
        this.updateTasksAndStat();
    };
    AppComponent.prototype.onFilterTasksByPriority = function (priority) {
        this.priorityFilter = priority;
        this.updateTasksAndStat();
    };
    AppComponent.prototype.updateTasks = function () {
        var _this = this;
        this.dataHandler.searchTasks(this.selectedCategory, this.searchTasksText, this.statusFilter, this.priorityFilter).subscribe(function (tasks) {
            _this.tasks = tasks;
        });
    };
    AppComponent.prototype.onAddTask = function (task) {
        var _this = this;
        this.dataHandler.addTask(task).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (task) {
            return _this.dataHandler.getUncompletedCountInCategory(task.category).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (count) {
                return ({ t: task, count: count });
            }));
        })).subscribe(function (result) {
            var t = result.t;
            if (t.category) {
                _this.categoryMap.set(t.category, result.count);
            }
            _this.updateTasksAndStat();
        });
    };
    AppComponent.prototype.onAddCategory = function (title) {
        var _this = this;
        this.dataHandler.addCategory(title).subscribe(function () { return _this.fillCategories(); });
    };
    AppComponent.prototype.updateCategories = function () {
        var _this = this;
        this.dataHandler.getAllCategories().subscribe(function (categories) { return _this.categories = categories; });
        console.log(this.categories);
    };
    AppComponent.prototype.onSearchCategory = function (title) {
        var _this = this;
        this.searchCategoryText = title;
        this.dataHandler.searchCategories(title).subscribe(function (categories) {
            _this.categories = categories;
            _this.fillCategories();
        });
    };
    AppComponent.prototype.updateTasksAndStat = function () {
        this.updateTasks();
        this.updateStat();
    };
    AppComponent.prototype.updateStat = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["zip"])(this.dataHandler.getTotalCountInCategory(this.selectedCategory), this.dataHandler.getCompletedCountInCategory(this.selectedCategory), this.dataHandler.getUncompletedCountInCategory(this.selectedCategory), this.dataHandler.getUncompletedTotalCount())
            .subscribe(function (array) {
            _this.totalTasksCountInCategory = array[0];
            _this.completedCountInCategory = array[1];
            _this.uncompletedCountInCategory = array[2];
            _this.uncompletedTotalTasksCount = array[3];
        });
    };
    AppComponent.prototype.toggleStat = function (showStat) {
        this.showStat = showStat;
    };
    AppComponent.ctorParameters = function () { return [
        { type: _service_data_handler_service__WEBPACK_IMPORTED_MODULE_2__["DataHandlerService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_data_handler_service__WEBPACK_IMPORTED_MODULE_2__["DataHandlerService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/button.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/core.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/input.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/select.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dialog_edit_task_dialog_edit_task_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dialog/edit-task-dialog/edit-task-dialog.component */ "./src/app/dialog/edit-task-dialog/edit-task-dialog.component.ts");
/* harmony import */ var _views_categories_categories_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/categories/categories.component */ "./src/app/views/categories/categories.component.ts");
/* harmony import */ var _views_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/tasks/tasks.component */ "./src/app/views/tasks/tasks.component.ts");
/* harmony import */ var _dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dialog/confirm-dialog/confirm-dialog.component */ "./src/app/dialog/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _pipe_task_date_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pipe/task-date.pipe */ "./src/app/pipe/task-date.pipe.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_common_locales_ru_UA__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/locales/ru-UA */ "./node_modules/@angular/common/locales/ru-UA.js");
/* harmony import */ var _angular_common_locales_ru_UA__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_ru_UA__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _dialog_edit_category_dialog_edit_category_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dialog/edit-category-dialog/edit-category-dialog.component */ "./src/app/dialog/edit-category-dialog/edit-category-dialog.component.ts");
/* harmony import */ var _views_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/footer/footer.component */ "./src/app/views/footer/footer.component.ts");
/* harmony import */ var _dialog_about_about_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dialog/about/about.dialog.component */ "./src/app/dialog/about/about.dialog.component.ts");
/* harmony import */ var _views_header_header_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./views/header/header.component */ "./src/app/views/header/header.component.ts");
/* harmony import */ var _views_stat_stat_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./views/stat/stat.component */ "./src/app/views/stat/stat.component.ts");
/* harmony import */ var _views_stat_stat_card_stat_card_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./views/stat/stat-card/stat-card.component */ "./src/app/views/stat/stat-card/stat-card.component.ts");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-sidebar */ "./node_modules/ng-sidebar/__ivy_ngcc__/lib_esmodule/index.js");




























Object(_angular_common__WEBPACK_IMPORTED_MODULE_19__["registerLocaleData"])(_angular_common_locales_ru_UA__WEBPACK_IMPORTED_MODULE_20___default.a);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _views_categories_categories_component__WEBPACK_IMPORTED_MODULE_15__["CategoriesComponent"],
                _views_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_16__["TasksComponent"],
                _dialog_edit_task_dialog_edit_task_dialog_component__WEBPACK_IMPORTED_MODULE_14__["EditTaskDialogComponent"],
                _dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_17__["ConfirmDialogComponent"],
                _pipe_task_date_pipe__WEBPACK_IMPORTED_MODULE_18__["TaskDatePipe"],
                _dialog_edit_category_dialog_edit_category_dialog_component__WEBPACK_IMPORTED_MODULE_21__["EditCategoryDialogComponent"],
                _views_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__["FooterComponent"],
                _dialog_about_about_dialog_component__WEBPACK_IMPORTED_MODULE_23__["AboutDialogComponent"],
                _views_header_header_component__WEBPACK_IMPORTED_MODULE_24__["HeaderComponent"],
                _views_stat_stat_component__WEBPACK_IMPORTED_MODULE_25__["StatComponent"],
                _views_stat_stat_card_stat_card_component__WEBPACK_IMPORTED_MODULE_26__["StatCardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOptionModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                ng_sidebar__WEBPACK_IMPORTED_MODULE_27__["SidebarModule"].forRoot()
            ],
            providers: [],
            entryComponents: [_dialog_edit_task_dialog_edit_task_dialog_component__WEBPACK_IMPORTED_MODULE_14__["EditTaskDialogComponent"], _dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_17__["ConfirmDialogComponent"], _dialog_edit_category_dialog_edit_category_dialog_component__WEBPACK_IMPORTED_MODULE_21__["EditCategoryDialogComponent"], _dialog_about_about_dialog_component__WEBPACK_IMPORTED_MODULE_23__["AboutDialogComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data/TestData.ts":
/*!**********************************!*\
  !*** ./src/app/data/TestData.ts ***!
  \**********************************/
/*! exports provided: TestData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestData", function() { return TestData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var TestData = (function () {
    function TestData() {
    }
    TestData.categories = [
        { id: 1, title: 'Работа' },
        { id: 2, title: 'Семья' },
        { id: 3, title: 'Учеба' },
        { id: 4, title: 'Отдых' },
        { id: 5, title: 'Спорт' },
        { id: 6, title: 'Еда' },
        { id: 7, title: 'Финансы' },
        { id: 8, title: 'Гаджеты' },
        { id: 9, title: 'Здоровье' },
        { id: 10, title: 'Автомобиль' },
        { id: 11, title: 'Ремонт' }
    ];
    TestData.priorities = [
        { id: 1, title: 'Низкий', color: '#e5e5e5' },
        { id: 2, title: 'Средний', color: '#85D1B2' },
        { id: 3, title: 'Высокий', color: '#F1828D' },
        { id: 4, title: 'Очень срочно!!', color: '#F1128D' }
    ];
    TestData.tasks = [
        {
            id: 1,
            title: 'Залить бензин полный бак',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[9],
            date: new Date('2019-04-10')
        },
        {
            id: 2,
            title: 'Передать отчеты начальнику управления',
            priority: TestData.priorities[0],
            completed: false,
            category: TestData.categories[0],
            date: new Date('2019-04-11')
        },
        {
            id: 3,
            title: 'Убраться у себя в комнате, полить растения',
            priority: TestData.priorities[2],
            completed: true,
            category: TestData.categories[1]
        },
        {
            id: 4,
            title: 'Сходить в парк с семьей, пригласить друзей',
            priority: TestData.priorities[1],
            completed: false,
            category: TestData.categories[1],
            date: new Date('2019-08-17')
        },
        {
            id: 5,
            title: 'Найти и выучить учебник по квантовой физике',
            completed: false,
            category: TestData.categories[2]
        },
        {
            id: 6,
            title: 'Сходить на семинар по программированию',
            priority: TestData.priorities[1],
            completed: true,
            category: TestData.categories[2],
            date: new Date('2019-06-11')
        },
        {
            id: 7,
            title: 'Найти билеты в Турцию, выбрать отель',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[3]
        },
        {
            id: 8,
            title: 'Приготовить ужин для всей семьи (семга с картошкой)',
            completed: false,
            category: TestData.categories[5]
        },
        {
            id: 9,
            title: 'Подтянуться 10 раз',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[4],
            date: new Date('2019-03-12')
        },
        {
            id: 10,
            title: 'Пробежать 100 м',
            priority: TestData.priorities[0],
            completed: true,
            category: TestData.categories[4]
        },
        {
            id: 11,
            title: 'Организовать детский праздник ',
            completed: false
        },
        {
            id: 12,
            title: 'Сходить на лекцию "Как научиться программировать на Java"',
            priority: TestData.priorities[1],
            completed: false,
            category: TestData.categories[2]
        },
        {
            id: 13,
            title: 'Купить продукты на неделю',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[5],
            date: new Date('2019-05-11')
        },
        {
            id: 14,
            title: 'Провести собрание по поводу всех проектов',
            completed: true,
            category: TestData.categories[0]
        },
        {
            id: 15,
            title: 'Сдать экзамен по Java',
            priority: TestData.priorities[2],
            completed: true
        },
        {
            id: 16,
            title: 'Положить 100 000 р в банк на депозит',
            priority: TestData.priorities[3],
            completed: false,
            category: TestData.categories[6]
        },
        {
            id: 17,
            title: 'Попросить аванс на работе',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[6]
        },
        {
            id: 18,
            title: 'Сдать анализы, проверить гемоглобин',
            priority: TestData.priorities[3],
            completed: false,
            category: TestData.categories[8],
            date: new Date('2020-12-11')
        },
        {
            id: 19,
            title: 'Сравнить новый айпад с самсунгом',
            priority: TestData.priorities[0],
            completed: false,
            category: TestData.categories[7],
            date: new Date('2019-10-11')
        },
        {
            id: 20,
            title: 'Футбол с сотрудниками',
            priority: TestData.priorities[0],
            completed: false,
            category: TestData.categories[4],
            date: new Date('2019-03-17')
        }
    ];
    return TestData;
}());



/***/ }),

/***/ "./src/app/data/dao/impl/CategoryDAOArray.ts":
/*!***************************************************!*\
  !*** ./src/app/data/dao/impl/CategoryDAOArray.ts ***!
  \***************************************************/
/*! exports provided: CategoryDAOArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDAOArray", function() { return CategoryDAOArray; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _TestData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../TestData */ "./src/app/data/TestData.ts");



var CategoryDAOArray = (function () {
    function CategoryDAOArray() {
    }
    CategoryDAOArray.prototype.add = function (category) {
        if (category.id === null || category.id === 0) {
            category.id = this.getLastIdCategory();
        }
        _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].categories.push(category);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(category);
    };
    CategoryDAOArray.prototype.getLastIdCategory = function () {
        return Math.max.apply(Math, _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].categories.map(function (c) { return c.id; })) + 1;
    };
    CategoryDAOArray.prototype.delete = function (id) {
        _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].tasks.forEach(function (task) {
            if (task.category && task.category.id === id) {
                task.category = null;
            }
        });
        var tmpCategory = _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].categories.find(function (t) { return t.id === id; });
        _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].categories.splice(_TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].categories.indexOf(tmpCategory), 1);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(tmpCategory);
    };
    CategoryDAOArray.prototype.get = function (id) {
        return undefined;
    };
    CategoryDAOArray.prototype.getAll = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].categories);
    };
    CategoryDAOArray.prototype.search = function (title) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].categories.filter(function (cat) { return cat.title.toUpperCase().includes(title.toUpperCase()); })
            .sort(function (c1, c2) { return c1.title.localeCompare(c2.title); }));
    };
    CategoryDAOArray.prototype.update = function (category) {
        var tmpCategory = _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].categories.find(function (t) { return t.id === category.id; });
        _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].categories.splice(_TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].categories.indexOf(tmpCategory), 1, category);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(tmpCategory);
    };
    return CategoryDAOArray;
}());



/***/ }),

/***/ "./src/app/data/dao/impl/PriorityDAOArray.ts":
/*!***************************************************!*\
  !*** ./src/app/data/dao/impl/PriorityDAOArray.ts ***!
  \***************************************************/
/*! exports provided: PriorityDAOArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriorityDAOArray", function() { return PriorityDAOArray; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _TestData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../TestData */ "./src/app/data/TestData.ts");



var PriorityDAOArray = (function () {
    function PriorityDAOArray() {
    }
    PriorityDAOArray.prototype.add = function (T) {
        return undefined;
    };
    PriorityDAOArray.prototype.delete = function (id) {
        return undefined;
    };
    PriorityDAOArray.prototype.get = function (id) {
        return undefined;
    };
    PriorityDAOArray.prototype.getAll = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].priorities);
    };
    PriorityDAOArray.prototype.update = function (T) {
        return undefined;
    };
    return PriorityDAOArray;
}());



/***/ }),

/***/ "./src/app/data/dao/impl/TaskDAOArray.ts":
/*!***********************************************!*\
  !*** ./src/app/data/dao/impl/TaskDAOArray.ts ***!
  \***********************************************/
/*! exports provided: TaskDAOArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDAOArray", function() { return TaskDAOArray; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _TestData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../TestData */ "./src/app/data/TestData.ts");



var TaskDAOArray = (function () {
    function TaskDAOArray() {
    }
    TaskDAOArray.prototype.add = function (task) {
        if (task.id === null || task.id === 0) {
            task.id = this.getLastIdTask();
        }
        _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].tasks.push(task);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(task);
    };
    TaskDAOArray.prototype.getLastIdTask = function () {
        return Math.max.apply(Math, _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].tasks.map(function (task) { return task.id; })) + 1;
    };
    TaskDAOArray.prototype.delete = function (id) {
        var taskTmp = _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].tasks.find(function (t) { return t.id === id; });
        _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].tasks.splice(_TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].tasks.indexOf(taskTmp), 1);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(taskTmp);
    };
    TaskDAOArray.prototype.get = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].tasks.find(function (todo) { return todo.id === id; }));
    };
    TaskDAOArray.prototype.getAll = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].tasks);
    };
    TaskDAOArray.prototype.getCompletedCountInCategory = function (category) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.searchTasks(category, null, true, null).length);
    };
    TaskDAOArray.prototype.getUncompletedCountInCategory = function (category) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.searchTasks(category, null, false, null).length);
    };
    TaskDAOArray.prototype.getTotalCountInCategory = function (category) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.searchTasks(category, null, null, null).length);
    };
    TaskDAOArray.prototype.getTotalCount = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].tasks.length);
    };
    TaskDAOArray.prototype.search = function (category, searchText, status, priority) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.searchTasks(category, searchText, status, priority));
    };
    TaskDAOArray.prototype.searchTasks = function (category, searchText, status, priority) {
        var allTasks = _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].tasks;
        if (status != null) {
            allTasks = allTasks.filter(function (task) { return task.completed === status; });
        }
        if (category != null) {
            allTasks = allTasks.filter(function (task) { return task.category === category; });
        }
        if (priority != null) {
            allTasks = allTasks.filter(function (task) { return task.priority === priority; });
        }
        if (searchText != null) {
            allTasks = allTasks.filter(function (task) { return task.title.toUpperCase().includes(searchText.toUpperCase()); });
        }
        return allTasks;
    };
    TaskDAOArray.prototype.update = function (T) {
        var taskTmp = _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].tasks.find(function (t) { return t.id === T.id; });
        _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].tasks.splice(_TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].tasks.indexOf(taskTmp), 1, T);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(T);
    };
    TaskDAOArray.prototype.getTotalCountCategory = function (category) {
        return undefined;
    };
    return TaskDAOArray;
}());



/***/ }),

/***/ "./src/app/dialog/OperType.ts":
/*!************************************!*\
  !*** ./src/app/dialog/OperType.ts ***!
  \************************************/
/*! exports provided: OperType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperType", function() { return OperType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var OperType;
(function (OperType) {
    OperType[OperType["ADD"] = 0] = "ADD";
    OperType[OperType["EDIT"] = 1] = "EDIT";
})(OperType || (OperType = {}));


/***/ }),

/***/ "./src/app/dialog/about/about.dialog.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dialog/about/about.dialog.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy9hYm91dC9hYm91dC5kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/dialog/about/about.dialog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dialog/about/about.dialog.component.ts ***!
  \********************************************************/
/*! exports provided: AboutDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutDialogComponent", function() { return AboutDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");



var AboutDialogComponent = (function () {
    function AboutDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialogTitle = data.dialogTitle;
        this.message = data.message;
    }
    AboutDialogComponent.prototype.ngOnInit = function () {
    };
    AboutDialogComponent.prototype.onConfirm = function () {
        this.dialogRef.close(true);
    };
    AboutDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    AboutDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-dialog',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/about/about.dialog.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.dialog.component.css */ "./src/app/dialog/about/about.dialog.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], AboutDialogComponent);
    return AboutDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialog/confirm-dialog/confirm-dialog.component.css":
/*!********************************************************************!*\
  !*** ./src/app/dialog/confirm-dialog/confirm-dialog.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy9jb25maXJtLWRpYWxvZy9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/dialog/confirm-dialog/confirm-dialog.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/dialog/confirm-dialog/confirm-dialog.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/dialog.es5.js");



var ConfirmDialogComponent = (function () {
    function ConfirmDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialogTitle = data.dialogTitle;
        this.message = data.message;
    }
    ConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmDialogComponent.prototype.onConfirm = function () {
        this.dialogRef.close(true);
    };
    ConfirmDialogComponent.prototype.onCancel = function () {
        this.dialogRef.close(false);
    };
    ConfirmDialogComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    ConfirmDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-dialog',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirm-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/confirm-dialog/confirm-dialog.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirm-dialog.component.css */ "./src/app/dialog/confirm-dialog/confirm-dialog.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialog/edit-category-dialog/edit-category-dialog.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/dialog/edit-category-dialog/edit-category-dialog.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy9lZGl0LWNhdGVnb3J5LWRpYWxvZy9lZGl0LWNhdGVnb3J5LWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/dialog/edit-category-dialog/edit-category-dialog.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/dialog/edit-category-dialog/edit-category-dialog.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EditCategoryDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoryDialogComponent", function() { return EditCategoryDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../confirm-dialog/confirm-dialog.component */ "./src/app/dialog/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _OperType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../OperType */ "./src/app/dialog/OperType.ts");





var EditCategoryDialogComponent = (function () {
    function EditCategoryDialogComponent(dialogRef, data, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialog = dialog;
    }
    EditCategoryDialogComponent.prototype.ngOnInit = function () {
        this.categoryTitle = this.data[0];
        this.dialogTitle = this.data[1];
        this.operType = this.data[2];
    };
    EditCategoryDialogComponent.prototype.onConfirm = function () {
        this.dialogRef.close(this.categoryTitle);
    };
    EditCategoryDialogComponent.prototype.onCancel = function () {
        this.dialogRef.close(false);
    };
    EditCategoryDialogComponent.prototype.delete = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"], {
            maxWidth: '500px',
            data: {
                dialogTitle: 'Подтвердите действие',
                message: "\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E: \"" + this.categoryTitle + "\"?"
            },
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.dialogRef.close('delete');
            }
        });
    };
    EditCategoryDialogComponent.prototype.canDelete = function () {
        return this.operType === _OperType__WEBPACK_IMPORTED_MODULE_4__["OperType"].EDIT;
    };
    EditCategoryDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
    EditCategoryDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-category-dialog',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-category-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/edit-category-dialog/edit-category-dialog.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-category-dialog.component.css */ "./src/app/dialog/edit-category-dialog/edit-category-dialog.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Array, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], EditCategoryDialogComponent);
    return EditCategoryDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialog/edit-task-dialog/edit-task-dialog.component.css":
/*!************************************************************************!*\
  !*** ./src/app/dialog/edit-task-dialog/edit-task-dialog.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy9lZGl0LXRhc2stZGlhbG9nL2VkaXQtdGFzay1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/dialog/edit-task-dialog/edit-task-dialog.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dialog/edit-task-dialog/edit-task-dialog.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditTaskDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaskDialogComponent", function() { return EditTaskDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/dialog.es5.js");
/* harmony import */ var _service_data_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/data-handler.service */ "./src/app/service/data-handler.service.ts");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../confirm-dialog/confirm-dialog.component */ "./src/app/dialog/confirm-dialog/confirm-dialog.component.ts");





var EditTaskDialogComponent = (function () {
    function EditTaskDialogComponent(dialogRef, date, dataHandler, dialog) {
        this.dialogRef = dialogRef;
        this.date = date;
        this.dataHandler = dataHandler;
        this.dialog = dialog;
    }
    EditTaskDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.task = this.date[0];
        this.dialogTitle = this.date[1];
        this.tmpTitle = this.task.title;
        this.tmpCategory = this.task.category;
        this.tmpPriority = this.task.priority;
        this.tmpDate = this.task.date;
        this.dataHandler.getAllCategories().subscribe(function (items) { return (_this.categories = items); });
        this.dataHandler.getAllPriorities().subscribe(function (items) { return (_this.priorities = items); });
    };
    EditTaskDialogComponent.prototype.onConfirm = function () {
        this.task.title = this.tmpTitle;
        this.task.category = this.tmpCategory;
        this.task.priority = this.tmpPriority;
        this.task.date = this.tmpDate;
        this.dialogRef.close(this.task);
    };
    EditTaskDialogComponent.prototype.onCancel = function () {
        this.dialogRef.close(null);
    };
    EditTaskDialogComponent.prototype.delete = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogComponent"], {
            maxWidth: '500px',
            data: {
                dialogTitle: 'Подтвердите действие',
                message: "\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443: \"" + this.task.title + "\"?"
            },
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.dialogRef.close('delete');
            }
        });
    };
    EditTaskDialogComponent.prototype.complete = function () {
        this.dialogRef.close('complete');
    };
    EditTaskDialogComponent.prototype.activate = function () {
        this.dialogRef.close('activate');
    };
    EditTaskDialogComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _service_data_handler_service__WEBPACK_IMPORTED_MODULE_3__["DataHandlerService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
    EditTaskDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-task-dialog',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-task-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/edit-task-dialog/edit-task-dialog.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-task-dialog.component.css */ "./src/app/dialog/edit-task-dialog/edit-task-dialog.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Array, _service_data_handler_service__WEBPACK_IMPORTED_MODULE_3__["DataHandlerService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], EditTaskDialogComponent);
    return EditTaskDialogComponent;
}());



/***/ }),

/***/ "./src/app/model/Category.ts":
/*!***********************************!*\
  !*** ./src/app/model/Category.ts ***!
  \***********************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Category = (function () {
    function Category(id, title) {
        this.id = id;
        this.title = title;
    }
    return Category;
}());



/***/ }),

/***/ "./src/app/model/Task.ts":
/*!*******************************!*\
  !*** ./src/app/model/Task.ts ***!
  \*******************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Task = (function () {
    function Task(id, title, completed, priority, category, date) {
        this.id = id;
        this.title = title;
        this.completed = completed;
        this.priority = priority;
        this.category = category;
        this.date = date;
    }
    return Task;
}());



/***/ }),

/***/ "./src/app/pipe/task-date.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipe/task-date.pipe.ts ***!
  \****************************************/
/*! exports provided: TaskDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDatePipe", function() { return TaskDatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");



var TaskDatePipe = (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TaskDatePipe, _super);
    function TaskDatePipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskDatePipe.prototype.transform = function (date, format) {
        if (format === void 0) { format = 'mediumDate'; }
        if (date == null) {
            return 'Без срока';
        }
        date = new Date(date);
        var currentDate = new Date().getDate();
        if (date.getDate() === currentDate) {
            return 'Сегодня';
        }
        if (date.getDate() === currentDate - 1) {
            return 'Вчера';
        }
        if (date.getDate() === currentDate + 1) {
            return 'Завтра';
        }
        return new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]('ru-UA').transform(date, format);
    };
    TaskDatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"])({
            name: 'taskDate'
        })
    ], TaskDatePipe);
    return TaskDatePipe;
}(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]));



/***/ }),

/***/ "./src/app/service/data-handler.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/data-handler.service.ts ***!
  \*************************************************/
/*! exports provided: DataHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataHandlerService", function() { return DataHandlerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _data_dao_impl_CategoryDAOArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/dao/impl/CategoryDAOArray */ "./src/app/data/dao/impl/CategoryDAOArray.ts");
/* harmony import */ var _data_dao_impl_PriorityDAOArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/dao/impl/PriorityDAOArray */ "./src/app/data/dao/impl/PriorityDAOArray.ts");
/* harmony import */ var _data_dao_impl_TaskDAOArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/dao/impl/TaskDAOArray */ "./src/app/data/dao/impl/TaskDAOArray.ts");
/* harmony import */ var _data_TestData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/TestData */ "./src/app/data/TestData.ts");
/* harmony import */ var _model_Category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/Category */ "./src/app/model/Category.ts");








var DataHandlerService = (function () {
    function DataHandlerService() {
        this.tasksSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](_data_TestData__WEBPACK_IMPORTED_MODULE_6__["TestData"].tasks);
        this.categoriesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](_data_TestData__WEBPACK_IMPORTED_MODULE_6__["TestData"].categories);
        this.taskDaoArray = new _data_dao_impl_TaskDAOArray__WEBPACK_IMPORTED_MODULE_5__["TaskDAOArray"]();
        this.categoryDaoArray = new _data_dao_impl_CategoryDAOArray__WEBPACK_IMPORTED_MODULE_3__["CategoryDAOArray"]();
        this.priorityDaoArray = new _data_dao_impl_PriorityDAOArray__WEBPACK_IMPORTED_MODULE_4__["PriorityDAOArray"]();
        this.categoriesDaoArray = new _data_dao_impl_CategoryDAOArray__WEBPACK_IMPORTED_MODULE_3__["CategoryDAOArray"]();
        this.fillTasks();
    }
    DataHandlerService.prototype.fillTasks = function () {
        this.tasksSubject.next(_data_TestData__WEBPACK_IMPORTED_MODULE_6__["TestData"].tasks);
    };
    DataHandlerService.prototype.fillTasksByCategory = function (category) {
        var tasks = _data_TestData__WEBPACK_IMPORTED_MODULE_6__["TestData"].tasks.filter(function (task) { return task.category === category; });
        this.tasksSubject.next(tasks);
    };
    DataHandlerService.prototype.getAllTasks = function () {
        return this.taskDaoArray.getAll();
    };
    DataHandlerService.prototype.getAllCategories = function () {
        return this.categoriesDaoArray.getAll();
    };
    DataHandlerService.prototype.getAllPriorities = function () {
        return this.priorityDaoArray.getAll();
    };
    DataHandlerService.prototype.searchTasks = function (category, searchText, status, priority) {
        return this.taskDaoArray.search(category, searchText, status, priority);
    };
    DataHandlerService.prototype.updateTask = function (task) {
        return this.taskDaoArray.update(task);
    };
    DataHandlerService.prototype.deleteTask = function (id) {
        return this.taskDaoArray.delete(id);
    };
    DataHandlerService.prototype.updateCategory = function (category) {
        return this.categoriesDaoArray.update(category);
    };
    DataHandlerService.prototype.deleteCategory = function (id) {
        return this.categoriesDaoArray.delete(id);
    };
    DataHandlerService.prototype.addTask = function (task) {
        return this.taskDaoArray.add(task);
    };
    DataHandlerService.prototype.addCategory = function (title) {
        return this.categoryDaoArray.add(new _model_Category__WEBPACK_IMPORTED_MODULE_7__["Category"](null, title));
    };
    DataHandlerService.prototype.searchCategories = function (title) {
        return this.categoriesDaoArray.search(title);
    };
    DataHandlerService.prototype.getCompletedCountInCategory = function (category) {
        return this.taskDaoArray.getCompletedCountInCategory(category);
    };
    DataHandlerService.prototype.getUncompletedTotalCount = function () {
        return this.taskDaoArray.getUncompletedCountInCategory(null);
    };
    DataHandlerService.prototype.getUncompletedCountInCategory = function (category) {
        return this.taskDaoArray.getUncompletedCountInCategory(category);
    };
    DataHandlerService.prototype.getTotalCountInCategory = function (category) {
        return this.taskDaoArray.getTotalCountInCategory(category);
    };
    DataHandlerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataHandlerService);
    return DataHandlerService;
}());



/***/ }),

/***/ "./src/app/views/categories/categories.component.css":
/*!***********************************************************!*\
  !*** ./src/app/views/categories/categories.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pointer {\n    cursor: pointer;\n}\n.edit-category-icon-area{\n    width: 15%;\n    display: inline-block;\n    text-align: left;\n    font-size: 13px;\n}\n.category-title{\n    width: 70%;\n    display: inline-block;\n    font-size: 16px;\n}\n.all-category-title{\n    width: 85%;\n    display: inline-block;\n    font-size: 16px;\n}\n.edit-category-icon{\n    color: #dadada;\n}\n.add-icon{\n    cursor: pointer;\n    font-size: 25px;\n    vertical-align: middle;\n}\nspan.add-icon-area{\n    width: 15%;\n    display: inline-block;\n    text-align: left;\n}\n#categories{\n    width: 100%;\n    overflow-x: hidden;\n}\n.nav-title{\n    width: 85%;\n    display: inline-block;\n    font-size: 20px;\n    text-align: center;\n    vertical-align: middle;\n}\n.search-category-area {\n    padding-left: 20px;\n    padding-right: 20px;\n    border-radius: 6px;\n}\n.search-category-button {\n    margin-left: 10px;\n    font-size: 25px;\n}\n.sidebar-background {\n    background-image: url('sidebar-1.jpg');\n}\n.sidebar-background .mat-form-field {\n    padding-bottom: 0;\n}\n.uncompleted-count {\n    background-color: #eaeaea;\n    border-radius: 3px;\n    padding: 5px;\n    color: black;\n    width: 15%;\n    display: inline-block;\n    text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHNDQUEwRDtBQUM5RDtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb2ludGVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZWRpdC1jYXRlZ29yeS1pY29uLWFyZWF7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG4uY2F0ZWdvcnktdGl0bGV7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuLmFsbC1jYXRlZ29yeS10aXRsZXtcbiAgICB3aWR0aDogODUlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG4uZWRpdC1jYXRlZ29yeS1pY29ue1xuICAgIGNvbG9yOiAjZGFkYWRhO1xufVxuLmFkZC1pY29ue1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbnNwYW4uYWRkLWljb24tYXJlYXtcbiAgICB3aWR0aDogMTUlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuI2NhdGVnb3JpZXN7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuLm5hdi10aXRsZXtcbiAgICB3aWR0aDogODUlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uc2VhcmNoLWNhdGVnb3J5LWFyZWEge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5zZWFyY2gtY2F0ZWdvcnktYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG4uc2lkZWJhci1iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL3NpZGViYXItMS5qcGdcIik7XG59XG4uc2lkZWJhci1iYWNrZ3JvdW5kIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG59XG4udW5jb21wbGV0ZWQtY291bnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/views/categories/categories.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/categories/categories.component.ts ***!
  \**********************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/dialog.es5.js");
/* harmony import */ var _dialog_edit_category_dialog_edit_category_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dialog/edit-category-dialog/edit-category-dialog.component */ "./src/app/dialog/edit-category-dialog/edit-category-dialog.component.ts");
/* harmony import */ var _model_Category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/Category */ "./src/app/model/Category.ts");
/* harmony import */ var _service_data_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/data-handler.service */ "./src/app/service/data-handler.service.ts");
/* harmony import */ var _dialog_OperType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialog/OperType */ "./src/app/dialog/OperType.ts");







var CategoriesComponent = (function () {
    function CategoriesComponent(dataHandler, dialog) {
        this.dataHandler = dataHandler;
        this.dialog = dialog;
        this.selectCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.updateCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.searchCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(CategoriesComponent.prototype, "setCategoryMap", {
        set: function (categoryMap) {
            this.selectedCategoryMap = categoryMap;
        },
        enumerable: true,
        configurable: true
    });
    CategoriesComponent.prototype.ngOnInit = function () {
    };
    CategoriesComponent.prototype.showTasksByCategory = function (category) {
        if (this.selectedCategory === category) {
            return;
        }
        this.selectedCategory = category;
        this.selectCategory.emit(this.selectedCategory);
    };
    CategoriesComponent.prototype.showEditIcon = function (index) {
        this.indexMouseMove = index;
    };
    CategoriesComponent.prototype.openEditDialog = function (category) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialog_edit_category_dialog_edit_category_dialog_component__WEBPACK_IMPORTED_MODULE_3__["EditCategoryDialogComponent"], {
            data: [category.title, 'Редактирование категорий', _dialog_OperType__WEBPACK_IMPORTED_MODULE_6__["OperType"].EDIT],
            width: '400px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'delete') {
                _this.deleteCategory.emit(category);
                return;
            }
            if (typeof result === 'string') {
                category.title = result;
                _this.updateCategory.emit(category);
                return;
            }
        });
    };
    CategoriesComponent.prototype.openAddDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialog_edit_category_dialog_edit_category_dialog_component__WEBPACK_IMPORTED_MODULE_3__["EditCategoryDialogComponent"], { data: ['', 'Добавление категории', _dialog_OperType__WEBPACK_IMPORTED_MODULE_6__["OperType"].ADD], width: '400px' });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.addCategory.emit(result);
            }
        });
    };
    CategoriesComponent.prototype.search = function () {
        if (this.searchCategoryTitle === null) {
            return;
        }
        this.searchCategory.emit(this.searchCategoryTitle);
    };
    CategoriesComponent.ctorParameters = function () { return [
        { type: _service_data_handler_service__WEBPACK_IMPORTED_MODULE_5__["DataHandlerService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CategoriesComponent.prototype, "categories", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _model_Category__WEBPACK_IMPORTED_MODULE_4__["Category"])
    ], CategoriesComponent.prototype, "selectedCategory", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('categoryMap'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Map),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Map])
    ], CategoriesComponent.prototype, "setCategoryMap", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CategoriesComponent.prototype, "uncompletedTotal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CategoriesComponent.prototype, "selectCategory", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CategoriesComponent.prototype, "deleteCategory", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CategoriesComponent.prototype, "updateCategory", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CategoriesComponent.prototype, "addCategory", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CategoriesComponent.prototype, "searchCategory", void 0);
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/categories/categories.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categories.component.css */ "./src/app/views/categories/categories.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_data_handler_service__WEBPACK_IMPORTED_MODULE_5__["DataHandlerService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/views/footer/footer.component.css":
/*!***************************************************!*\
  !*** ./src/app/views/footer/footer.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/footer/footer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/footer/footer.component.ts ***!
  \**************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");
/* harmony import */ var _dialog_about_about_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dialog/about/about.dialog.component */ "./src/app/dialog/about/about.dialog.component.ts");




var FooterComponent = (function () {
    function FooterComponent(dialog) {
        this.dialog = dialog;
        this.git = 'https://github.com/olekprot';
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.year = new Date();
    };
    FooterComponent.prototype.openAboutDialog = function () {
        this.dialog.open(_dialog_about_about_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AboutDialogComponent"], {
            autoFocus: false,
            data: {
                dialogTitle: 'Мой GIT',
                message: 'Мой тестовый проект'
            },
            width: '400px'
        });
    };
    FooterComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/footer/footer.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/views/footer/footer.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/views/header/header.component.css":
/*!***************************************************!*\
  !*** ./src/app/views/header/header.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-icon {\r\n    cursor: pointer;\r\n    margin-right: 20px;\r\n}\r\n\r\n.settings button{\r\n    margin-right: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWljb24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uc2V0dGluZ3MgYnV0dG9ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/views/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var HeaderComponent = (function () {
    function HeaderComponent() {
        this.toggleStat = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onToggleStat = function () {
        this.toggleStat.emit(!this.showStat);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HeaderComponent.prototype, "categoryName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], HeaderComponent.prototype, "showStat", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "toggleStat", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/header/header.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/views/header/header.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/views/stat/stat-card/stat-card.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/stat/stat-card/stat-card.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-title {\r\n    font-size: 35px;\r\n}\r\n.stat-card-title{\r\n    margin-bottom: 0;\r\n    font-size: 16px;\r\n}\r\n.completed-card {\r\n    border: 3px solid #93d893 !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc3RhdC9zdGF0LWNhcmQvc3RhdC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvc3RhdC9zdGF0LWNhcmQvc3RhdC1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuLnN0YXQtY2FyZC10aXRsZXtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmNvbXBsZXRlZC1jYXJkIHtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICM5M2Q4OTMgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/views/stat/stat-card/stat-card.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/stat/stat-card/stat-card.component.ts ***!
  \*************************************************************/
/*! exports provided: StatCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatCardComponent", function() { return StatCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var StatCardComponent = (function () {
    function StatCardComponent() {
        this.completed = false;
    }
    StatCardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], StatCardComponent.prototype, "completed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StatCardComponent.prototype, "iconName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StatCardComponent.prototype, "count1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StatCardComponent.prototype, "countTotal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StatCardComponent.prototype, "title", void 0);
    StatCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stat-card',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stat-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/stat/stat-card/stat-card.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stat-card.component.css */ "./src/app/views/stat/stat-card/stat-card.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StatCardComponent);
    return StatCardComponent;
}());



/***/ }),

/***/ "./src/app/views/stat/stat.component.css":
/*!***********************************************!*\
  !*** ./src/app/views/stat/stat.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N0YXQvc3RhdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/stat/stat.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/stat/stat.component.ts ***!
  \**********************************************/
/*! exports provided: StatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatComponent", function() { return StatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var StatComponent = (function () {
    function StatComponent() {
    }
    StatComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], StatComponent.prototype, "totalTasksInCategory", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], StatComponent.prototype, "completeTasksInCategory", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], StatComponent.prototype, "uncompleteTasksInCategory", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], StatComponent.prototype, "showStat", void 0);
    StatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stat',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/stat/stat.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stat.component.css */ "./src/app/views/stat/stat.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StatComponent);
    return StatComponent;
}());



/***/ }),

/***/ "./src/app/views/tasks/tasks.component.css":
/*!*************************************************!*\
  !*** ./src/app/views/tasks/tasks.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".completed {\n    text-decoration: line-through;\n    color: #797979;\n}\n\n.novalue {\n    color: #b7b7b7;\n}\n\n.col-id {\n    width: 4%;\n    text-align: center;\n}\n\n.col-title {\n    width: 40%;\n}\n\n.col-priority {\n    width: 10%;\n}\n\n.col-category {\n    width: 10%;\n}\n\n.col-select {\n    width: 3%;\n}\n\n.col-operations {\n    width: 8%;\n}\n\n.col-color {\n    width: 1% !important;\n}\n\n.col-date {\n    width: 10% !important;\n}\n\n.delete-icon {\n    cursor: pointer;\n    color: #ea6561;\n    font-size: 18px;\n    margin-left: 3px;\n    margin-right: 3px;\n}\n\n.edit-icon {\n    cursor: pointer;\n    color: #9A9A9A;\n    font-size: 18px;\n    margin-left: 3px;\n    margin-right: 3px;\n}\n\n.mat-header-cell{\n    font-size: 1.063rem;\n    color: #9c27b0 !important;\n    font-weight: normal;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdGFza3MvdGFza3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2QjtJQUM3QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvdGFza3MvdGFza3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wbGV0ZWQge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIGNvbG9yOiAjNzk3OTc5O1xufVxuXG4ubm92YWx1ZSB7XG4gICAgY29sb3I6ICNiN2I3Yjc7XG59XG5cbi5jb2wtaWQge1xuICAgIHdpZHRoOiA0JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb2wtdGl0bGUge1xuICAgIHdpZHRoOiA0MCU7XG59XG5cbi5jb2wtcHJpb3JpdHkge1xuICAgIHdpZHRoOiAxMCU7XG59XG5cbi5jb2wtY2F0ZWdvcnkge1xuICAgIHdpZHRoOiAxMCU7XG59XG5cbi5jb2wtc2VsZWN0IHtcbiAgICB3aWR0aDogMyU7XG59XG5cbi5jb2wtb3BlcmF0aW9ucyB7XG4gICAgd2lkdGg6IDglO1xufVxuXG4uY29sLWNvbG9yIHtcbiAgICB3aWR0aDogMSUgIWltcG9ydGFudDtcbn1cblxuLmNvbC1kYXRlIHtcbiAgICB3aWR0aDogMTAlICFpbXBvcnRhbnQ7XG59XG4uZGVsZXRlLWljb24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogI2VhNjU2MTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbn1cbi5lZGl0LWljb24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogIzlBOUE5QTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbn1cbi5tYXQtaGVhZGVyLWNlbGx7XG4gICAgZm9udC1zaXplOiAxLjA2M3JlbTtcbiAgICBjb2xvcjogIzljMjdiMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/views/tasks/tasks.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/tasks/tasks.component.ts ***!
  \************************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/sort.es5.js");
/* harmony import */ var _dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialog/confirm-dialog/confirm-dialog.component */ "./src/app/dialog/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _dialog_edit_task_dialog_edit_task_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialog/edit-task-dialog/edit-task-dialog.component */ "./src/app/dialog/edit-task-dialog/edit-task-dialog.component.ts");
/* harmony import */ var _model_Category__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/Category */ "./src/app/model/Category.ts");
/* harmony import */ var _model_Task__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../model/Task */ "./src/app/model/Task.ts");
/* harmony import */ var _service_data_handler_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../service/data-handler.service */ "./src/app/service/data-handler.service.ts");











var TasksComponent = (function () {
    function TasksComponent(dataHandler, dialog) {
        this.displayedColumns = ['color', 'id', 'title', 'date', 'priority', 'category', 'operations', 'select'];
        this.selectedStatusFilter = null;
        this.selectedPriorityFilter = null;
        this.deleteTask = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.updateTask = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.filterByTitle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.filterByStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.filterByPriority = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addTask = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataHandler = dataHandler;
        this.dialog = dialog;
    }
    Object.defineProperty(TasksComponent.prototype, "setTasks", {
        set: function (tasks) {
            this.tasks = tasks;
            this.fillTable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TasksComponent.prototype, "setPriorities", {
        set: function (priorities) {
            this.priorities = priorities;
        },
        enumerable: true,
        configurable: true
    });
    TasksComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.onSelectCategory(null);
    };
    TasksComponent.prototype.getPriorityColor = function (task) {
        if (task.completed) {
            return '#F8F9FA';
        }
        if (task.priority && task.priority.color) {
            return task.priority.color;
        }
        return '#fff';
    };
    TasksComponent.prototype.fillTable = function () {
        if (!this.dataSource) {
            return;
        }
        this.dataSource.data = this.tasks;
        this.addTableObjects();
        this.dataSource.sortingDataAccessor = function (task, colName) {
            switch (colName) {
                case 'priority': {
                    return task.priority ? task.priority.id : null;
                }
                case 'category': {
                    return task.category ? task.category.title : null;
                }
                case 'date': {
                    return task.date ? task.date : null;
                }
                case 'title': {
                    return task.title;
                }
            }
        };
    };
    TasksComponent.prototype.addTableObjects = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    TasksComponent.prototype.onClickTask = function (task) {
        this.updateTask.emit(task);
    };
    TasksComponent.prototype.openEditTaskDialog = function (task) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialog_edit_task_dialog_edit_task_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditTaskDialogComponent"], {
            autoFocus: false,
            data: [task, 'Редактировать задачи']
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'delete') {
                _this.deleteTask.emit(task);
                return;
            }
            if (result === 'complete') {
                task.completed = true;
                _this.updateTask.emit(task);
            }
            if (result === 'activate') {
                task.completed = false;
                _this.updateTask.emit(task);
                return;
            }
            if (result) {
                _this.updateTask.emit(task);
                return;
            }
        });
    };
    TasksComponent.prototype.openDeleteDialog = function (task) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"], {
            maxWidth: '500px',
            data: { dialogTitle: 'Подтвердите действие', message: "\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443: \"" + task.title + "\"?" },
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.deleteTask.emit(task);
            }
        });
    };
    TasksComponent.prototype.onToggleStatus = function (task) {
        task.completed = !task.completed;
        this.updateTask.emit(task);
    };
    TasksComponent.prototype.onSelectCategory = function (category) {
        this.selectCategory.emit(category);
    };
    TasksComponent.prototype.onFilterByTitle = function () {
        this.filterByTitle.emit(this.searchTaskText);
    };
    TasksComponent.prototype.onFilterByStatus = function (value) {
        if (value !== this.selectedStatusFilter) {
            this.selectedStatusFilter = value;
            this.filterByStatus.emit(this.selectedStatusFilter);
        }
    };
    TasksComponent.prototype.onFilterByPriority = function (value) {
        if (value !== this.selectedPriorityFilter) {
            this.selectedPriorityFilter = value;
            this.filterByPriority.emit(this.selectedPriorityFilter);
        }
    };
    TasksComponent.prototype.openAddTaskDialog = function () {
        var _this = this;
        var task = new _model_Task__WEBPACK_IMPORTED_MODULE_9__["Task"](null, '', false, null, this.selectedCategory);
        var dialogRef = this.dialog.open(_dialog_edit_task_dialog_edit_task_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditTaskDialogComponent"], { data: [task, 'Добавление задачи'] });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.addTask.emit(task);
            }
        });
    };
    TasksComponent.ctorParameters = function () { return [
        { type: _service_data_handler_service__WEBPACK_IMPORTED_MODULE_10__["DataHandlerService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], TasksComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], TasksComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tasks'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
    ], TasksComponent.prototype, "setTasks", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('priorities'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
    ], TasksComponent.prototype, "setPriorities", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _model_Category__WEBPACK_IMPORTED_MODULE_8__["Category"])
    ], TasksComponent.prototype, "selectedCategory", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TasksComponent.prototype, "deleteTask", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TasksComponent.prototype, "updateTask", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TasksComponent.prototype, "selectCategory", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TasksComponent.prototype, "filterByTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TasksComponent.prototype, "filterByStatus", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TasksComponent.prototype, "filterByPriority", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TasksComponent.prototype, "addTask", void 0);
    TasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tasks',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tasks.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tasks/tasks.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tasks.component.css */ "./src/app/views/tasks/tasks.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_data_handler_service__WEBPACK_IMPORTED_MODULE_10__["DataHandlerService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var environment = {
    production: false,
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\prale\WebstormProjects\todo_list\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map