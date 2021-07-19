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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper \">\n\n    <app-categories (selectCategory)=\"onSelectCategory($event)\"\n                    (deleteCategory)=\"onDeleteCategory($event)\"\n                    (updateCategory)=\"onUpdateCategory($event)\"\n                    [selectedCategory]=\"selectedCategory\"\n                    [categories]=\"categories\"></app-categories>\n\n\n    <div class=\"main-panel\">\n        <!-- Navbar -->\n        <nav class=\"navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top \">\n            <div class=\"container-fluid\">\n                <div class=\"navbar-wrapper\">\n                    <a class=\"navbar-brand\" href=\"#\">Dashboard</a>\n                </div>\n                <button aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"\n                        class=\"navbar-toggler\" data-toggle=\"collapse\" type=\"button\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"navbar-toggler-icon icon-bar\"></span>\n                    <span class=\"navbar-toggler-icon icon-bar\"></span>\n                    <span class=\"navbar-toggler-icon icon-bar\"></span>\n                </button>\n                <div class=\"collapse navbar-collapse justify-content-end\">\n                    <form class=\"navbar-form\">\n                        <div class=\"input-group no-border\">\n                            <input class=\"form-control\" placeholder=\"Search...\" type=\"text\" value=\"\">\n                            <button class=\"btn btn-white btn-round btn-just-icon\" type=\"submit\">\n                                <i class=\"material-icons\">search</i>\n                                <div class=\"ripple-container\"></div>\n                            </button>\n                        </div>\n                    </form>\n                    <ul class=\"navbar-nav\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#pablo\">\n                                <i class=\"material-icons\">dashboard</i>\n                                <p class=\"d-lg-none d-md-block\">\n                                    Stats\n                                </p>\n                            </a>\n                        </li>\n                        <li class=\"nav-item dropdown\">\n                            <a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"nav-link\" data-toggle=\"dropdown\"\n                               href=\"http://example.com\" id=\"navbarDropdownMenuLink\">\n                                <i class=\"material-icons\">notifications</i>\n                                <span class=\"notification\">5</span>\n                                <p class=\"d-lg-none d-md-block\">\n                                    Some Actions\n                                </p>\n                            </a>\n                            <div aria-labelledby=\"navbarDropdownMenuLink\" class=\"dropdown-menu dropdown-menu-right\">\n                                <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\n                                <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\n                                <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\n                                <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\n                                <a class=\"dropdown-item\" href=\"#\">Another One</a>\n                            </div>\n                        </li>\n                        <li class=\"nav-item dropdown\">\n                            <a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"nav-link\" data-toggle=\"dropdown\"\n                               href=\"#pablo\" id=\"navbarDropdownProfile\">\n                                <i class=\"material-icons\">person</i>\n                                <p class=\"d-lg-none d-md-block\">\n                                    Account\n                                </p>\n                            </a>\n                            <div aria-labelledby=\"navbarDropdownProfile\" class=\"dropdown-menu dropdown-menu-right\">\n                                <a class=\"dropdown-item\" href=\"#\">Profile</a>\n                                <a class=\"dropdown-item\" href=\"#\">Settings</a>\n                                <div class=\"dropdown-divider\"></div>\n                                <a class=\"dropdown-item\" href=\"#\">Log out</a>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </nav>\n        <!-- End Navbar -->\n        <div class=\"content\">\n            <div class=\"container-fluid\">\n\n\n                <div class=\"row\">\n\n                    <div class=\"col-12\">\n                        <app-tasks [tasks]=\"tasks\"\n                        (updateTask)=\"onUpdateTask($event)\"\n                        (deleteTask)=\"onDeleteTask($event)\"\n                        (selectCategory)=\"onSelectCategory($event)\"\n                        ></app-tasks>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <footer class=\"footer\">\n            <div class=\"container-fluid\">\n                <nav class=\"float-left\">\n                    <ul>\n                        <li>\n                            <a href=\"#\">\n                                I am\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                About Us\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                Blog\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                Licenses\n                            </a>\n                        </li>\n                    </ul>\n                </nav>\n            </div>\n        </footer>\n    </div>\n</div>\n<div class=\"fixed-plugin\">\n    <div class=\"dropdown show-dropdown\">\n        <a data-toggle=\"dropdown\" href=\"#\">\n            <i class=\"fa fa-cog fa-2x\"> </i>\n        </a>\n        <ul class=\"dropdown-menu\">\n            <li class=\"header-title\"> Sidebar Filters</li>\n            <li class=\"adjustments-line\">\n                <a class=\"switch-trigger active-color\" href=\"javascript:void(0)\">\n                    <div class=\"badge-colors ml-auto mr-auto\">\n                        <span class=\"badge filter badge-purple\" data-color=\"purple\"></span>\n                        <span class=\"badge filter badge-azure\" data-color=\"azure\"></span>\n                        <span class=\"badge filter badge-green\" data-color=\"green\"></span>\n                        <span class=\"badge filter badge-warning\" data-color=\"orange\"></span>\n                        <span class=\"badge filter badge-danger\" data-color=\"danger\"></span>\n                        <span class=\"badge filter badge-rose active\" data-color=\"rose\"></span>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                </a>\n            </li>\n            <li class=\"header-title\">Images</li>\n            <li class=\"active\">\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img alt=\"\" src=\"../assets/img/sidebar-1.jpg\">\n                </a>\n            </li>\n            <li>\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img alt=\"\" src=\"../assets/img/sidebar-2.jpg\">\n                </a>\n            </li>\n            <li>\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img alt=\"\" src=\"../assets/img/sidebar-3.jpg\">\n                </a>\n            </li>\n            <li>\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img alt=\"\" src=\"../assets/img/sidebar-4.jpg\">\n                </a>\n            </li>\n            <li class=\"button-container\">\n                <a class=\"btn btn-primary btn-block\" href=\"https://www.creative-tim.com/product/material-dashboard\"\n                   target=\"_blank\">Free Download</a>\n            </li>\n            <li class=\"button-container\">\n                <a class=\"btn btn-default btn-block\"\n                   href=\"https://demos.creative-tim.com/material-dashboard/docs/2.1/getting-started/introduction.html\"\n                   target=\"_blank\">\n                    View Documentation\n                </a>\n            </li>\n            <li class=\"button-container github-star\">\n                <a aria-label=\"Star ntkme/github-buttons on GitHub\" class=\"github-button\" data-icon=\"octicon-star\"\n                   data-show-count=\"true\" data-size=\"large\"\n                   href=\"https://github.com/creativetimofficial/material-dashboard\">Star</a>\n            </li>\n            <li class=\"header-title\">Thank you for 95 shares!</li>\n            <li class=\"button-container text-center\">\n                <button class=\"btn btn-round btn-twitter\" id=\"twitter\"><i class=\"fa fa-twitter\"></i> &middot; 45\n                </button>\n                <button class=\"btn btn-round btn-facebook\" id=\"facebook\"><i class=\"fa fa-facebook-f\"></i> &middot; 50\n                </button>\n                <br>\n                <br>\n            </li>\n        </ul>\n    </div>\n</div>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content>\n  <p mat-dialog-title>{{dialogTitle}}</p>\n  <mat-form-field>\n    <mat-label> Название(15 символов)</mat-label>\n    <input #inputTitle\n      matInput maxlength=\"15\"\n      [(ngModel)]=\"categoryTitle\"\n      (keydown.enter)=\"onConfirm()\"/>\n    <button *ngIf=\"categoryTitle.trim().length > 0\"\n            class=\"clear-icon size25\"\n            mat-button  matSuffix mat-icon-button aria-label=\"Clear\"\n            (click)=\"categoryTitle= ''\">\n            <mat-icon>clear</mat-icon>\n    </button>\n  </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-action>\n  <div class=\"col-12 text-center\">\n    <button mat-raised-button color=\"primary\" (click)=\"onConfirm()\"\n            [disabled]=\"inputTitle.value.trim().length===0\">Сохранить</button>\n    <button mat-raised-button (click)=\"onCancel()\">Отмена</button>\n  </div>\n\n  <div class=\"col-12 text-center\">\n    <button\n            mat-button\n            (click)=\"delete()\"\n            class=\"red\">\n      Удалить\n    </button>\n  </div>\n</mat-dialog-action>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/edit-task-dialog/edit-task-dialog.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/edit-task-dialog/edit-task-dialog.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content>\n    <p mat-dialog-title>{{dialogTitle}}</p>\n    <mat-form-field>\n        <mat-label>Название (обязательно)</mat-label>\n\n        <input #inputTitle matInput [(ngModel)]=\"tmpTitle\"\n               (keydown.enter)=\"onConfirm()\">\n        <button *ngIf=\"tmpTitle.trim().length > 0\"\n                mat-button matSuffix mat-icon-button aria-label=\"Clear\"\n                (click)=\"tmpTitle=''\" class=\"size25\">\n            <mat-icon>clear</mat-icon>\n        </button>\n    </mat-form-field>\n    <mat-form-field>\n        <mat-label>Укажите категорию</mat-label>\n        <mat-select [(ngModel)]=\"tmpCategory\">\n            <mat-option [value]=\"null\">Без категории</mat-option>\n            <mat-option *ngFor=\"let cat of categories\" [value]=\"cat\">{{cat.title}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <mat-form-field>\n        <mat-label>Укажите приоритет</mat-label>\n        <mat-select [(ngModel)]=\"tmpPriority\">\n            <mat-option [value]=\"null\">Без приоритета</mat-option>\n            <mat-option *ngFor=\"let pri of priorities\" [value]=\"pri\">{{pri.title}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <mat-form-field>\n        <input\n        matInput placeholder=\"Укажите срок выполнения\" #inputDate\n        readonly=\"true\"\n        [matDatepicker]=\"picker\"\n        [(ngModel)]=\"tmpDate\"\n        (click)=\"picker.open()\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n        <button *ngIf=\"inputDate.value.trim().length > 0\"\n                mat-button matSuffix mat-icon-button aria-label=\"Clear\"\n                (click)=\"tmpDate = null\" class=\"size25\">\n                <mat-icon>clear</mat-icon>\n        </button>\n    </mat-form-field>\n</mat-dialog-content>\n\n<mat-dialog-action>\n    <div class=\"col-md-5 col-12\">\n        <button mat-raised-button color=\"primary\"\n                (click)=\"onConfirm()\"\n                [disabled]=\"inputTitle.value.trim().length==0\">\n            Сохранить\n        </button>\n        <button mat-raised-button (click)=\"onCancel()\">\n            Отмена\n        </button>\n    </div>\n    <div class=\"col-md-7 col-12 text-right\">\n        <button mat-button class=\"green\" (click)=\"complete()\" *ngIf=\"!task.completed\">\n            Завершить задачу\n        </button>\n        <button mat-button class=\"green\" (click)=\"activate()\" *ngIf=\"task.completed\">\n            Активировать\n        </button>\n        <button mat-button class=\"red\" (click)=\"delete()\">\n            Удалить задачу\n        </button>\n    </div>\n\n</mat-dialog-action>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/categories/categories.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/categories/categories.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sidebar\" data-background-color=\"white\" data-color=\"azure\" data-image=\"../assets/img/sidebar-1.jpg\">\n    <!--\n      Tip 1: You can change the color of the sidebar using: data-color=\"purple | azure | green | orange | danger\"\n\n      Tip 2: you can also add an image using data-image tag\n  -->\n    <div class=\"logo\">\n        <a class=\"simple-text logo-normal\">\n            Категории\n        </a>\n    </div>\n    <div class=\"sidebar-wrapper\">\n        <ul class=\"nav\">\n            <li class=\"nav-item category\" (click)=\"showTasksByCategory(null)\" [class.active]=\"selectedCategory\">\n                <a class=\"nav-link pointer\">\n                    <span class=\"all-category-title\">Все</span>\n                </a>\n            </li>\n            <div class=\"line\"></div>\n            <li (click)=\"showTasksByCategory(category)\"\n                *ngFor=\"let category of categories; let index = index\"  [class.active]=\"category === selectedCategory\"\n                (click)=\"showTasksByCategory(category)\"\n                (mouseleave)=\"showEditIcon(null)\"\n                (mouseenter)=\"showEditIcon(index)\"\n\n                class=\"nav-item pointer\">\n                <a class=\"nav-link\">\n                    <span class=\"category-title\">{{category.title}}</span>\n                    <span class=\"edit-category-icon-area\">\n                        <mat-icon *ngIf=\"indexMouseMove === index\" (click)=\"$event.stopPropagation(); openEditDialog(category)\"\n                         class=\"edit-category-icon\"> edit\n                        </mat-icon>\n                    </span>\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tasks/tasks.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/tasks/tasks.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-header card-header-warning\">\n        <h4 class=\"card-title\">Список задач</h4>\n    </div>\n    <div class=\"card-body table-responsive\" *ngIf='tasks && tasks.length > 0'>\n\n        <table [dataSource]=\"dataSource\" mat-table matSort>\n\n            <!--  цвет приоритета  -->\n            <ng-container matColumnDef=\"color\">\n                <th *matHeaderCellDef mat-header-cell></th>\n                <td *matCellDef=\"let task\" [style.background-color]=\"getPriorityColor(task)\" class=\"col-color\"\n                    mat-cell></td>\n            </ng-container>\n\n            <!-- нумерация-->\n            <ng-container matColumnDef=\"id\">\n                <th *matHeaderCellDef mat-header-cell></th>\n                <td *matCellDef=\"let index = index;\" class=\"col-id\" mat-cell>\n                    {{index + 1}}\n                </td>\n            </ng-container>\n\n            <!-- название задачи-->\n            <ng-container matColumnDef=\"title\">\n                <th *matHeaderCellDef mat-header-cell mat-sort-header> Название</th>\n                <td *matCellDef=\"let task\" [class.completed]=\"task.completed\" class=\"col-title pointer\" mat-cell\n                    (click)= \"openEditTaskDialog(task)\">\n                    {{task.title}}\n                </td>\n            </ng-container>\n\n            <!--дата выполнения-->\n            <ng-container matColumnDef=\"date\">\n                <th *matHeaderCellDef mat-header-cell mat-sort-header> Срок</th>\n                <td *matCellDef=\"let task\" [ngClass]=\"{'completed': task.completed, 'novalue': task.date == null}\"\n                    class=\"col-date\"\n                    mat-cell>\n                    {{task.date | taskDate}}\n                </td>\n            </ng-container>\n\n            <!--приоритет-->\n            <ng-container matColumnDef=\"priority\">\n                <th *matHeaderCellDef mat-header-cell mat-sort-header>Приоритет</th>\n                <td *matCellDef=\"let task\" class=\"col-priority\"\n                    [ngClass]=\"{'completed': task.completed, 'novalue': task.priority == null}\"\n                    mat-cell>\n                    {{task.priority ? task.priority.title : \"Без приоритета\"}}\n                </td>\n            </ng-container>\n\n            <!--категория-->\n            <ng-container matColumnDef=\"category\">\n                <th *matHeaderCellDef mat-header-cell mat-sort-header> Категория</th>\n                <td *matCellDef=\"let task\" class=\"col-category\"\n                    [ngClass]=\"{'completed': task.completed, 'novalue': task.category == null, 'link': !task.completed && task.category}\"\n                    (click)=\"!task.completed && task.category && onSelectCategory(task.category)\"\n                    mat-cell>\n                    {{task.category ? task.category.title : \"Без категории\"}}\n                </td>\n            </ng-container>\n            <ng-container matColumnDef=\"operations\">\n                <th mat-header-cell *matHeaderCellDef></th>\n                <td class=\"col-operations\" mat-cell *matCellDef=\"let task\" [class.completed]=\"task.completed\">\n                    <button mat-icon-button (click)=\"openDeleteDialog(task)\" class=\"delete-icon\">\n                        <mat-icon aria-hidden=\"false\">delete</mat-icon>\n                    </button>\n                    <button mat-icon-button (click)=\"openEditTaskDialog(task)\" class=\"edit-icon\">\n                        <mat-icon aria-hidden=\"false\">edit</mat-icon>\n                    </button>\n                </td>\n            </ng-container>\n            <ng-container matColumnDef=\"select\">\n                <th mat-header-cell *matHeaderCellDef></th>\n                <td class=\"col-select text-right\" mat-cell *matCellDef=\"let task\">\n                    <mat-checkbox (click)=\"$event.stopPropagation()\"\n                                  (change)=\"$event ? onToggleStatus(task) : null\"\n                                  [checked]=\"task.completed\">\n                    </mat-checkbox>\n                </td>\n            </ng-container>\n\n            <!--  заголовок таблицы-->\n            <tr *matHeaderRowDef=\"displayedColumns; \" mat-header-row></tr>\n\n            <!--  строки таблицы - набор строк из тегов td (порядок указывается в переменной displayedColumns) -->\n            <tr *matRowDef=\"let row; columns: displayedColumns;\" mat-row></tr>\n\n        </table>\n        <mat-paginator [pageSizeOptions]=\"[10, 20, 50, 100]\" showFirstLastButtons></mat-paginator>\n    </div>\n    <div *ngIf=\"tasks && tasks.length === 0\">\n        <p class=\"not_found\">Ничего не найдено</p>\n    </div>\n</div>\n");

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



var AppComponent = (function () {
    function AppComponent(dataHandler) {
        this.dataHandler = dataHandler;
        this.title = 'Todo';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataHandler.getAllCategories().subscribe(function (categories) { return (_this.categories = categories); });
        this.onSelectCategory(null);
    };
    AppComponent.prototype.onSelectCategory = function (category) {
        var _this = this;
        this.selectedCategory = category;
        this.dataHandler.searchTasks(this.selectedCategory, null, null, null).subscribe(function (tasks) {
            _this.tasks = tasks;
        });
    };
    AppComponent.prototype.onUpdateTask = function (task) {
        var _this = this;
        this.dataHandler.updateTask(task).subscribe(function () {
            _this.dataHandler.searchTasks(_this.selectedCategory, null, null, null).subscribe(function (tasks) {
                _this.tasks = tasks;
            });
        });
    };
    AppComponent.prototype.onDeleteTask = function (task) {
        var _this = this;
        this.dataHandler.deleteTask(task.id).subscribe(function () {
            _this.dataHandler.searchTasks(_this.selectedCategory, null, null, null).subscribe(function (tasks) {
                _this.tasks = tasks;
            });
        });
    };
    AppComponent.prototype.onDeleteCategory = function (category) {
        var _this = this;
        this.dataHandler.deleteCategory(category.id).subscribe(function (cat) {
            _this.selectedCategory = null;
            _this.onSelectCategory(_this.selectedCategory);
        });
    };
    AppComponent.prototype.onUpdateCategory = function (category) {
        var _this = this;
        this.dataHandler.updateCategory(category).subscribe(function () {
            _this.onSelectCategory(_this.selectedCategory);
        });
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
                _dialog_edit_category_dialog_edit_category_dialog_component__WEBPACK_IMPORTED_MODULE_21__["EditCategoryDialogComponent"]
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
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"]
            ],
            providers: [],
            entryComponents: [_dialog_edit_task_dialog_edit_task_dialog_component__WEBPACK_IMPORTED_MODULE_14__["EditTaskDialogComponent"], _dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_17__["ConfirmDialogComponent"], _dialog_edit_category_dialog_edit_category_dialog_component__WEBPACK_IMPORTED_MODULE_21__["EditCategoryDialogComponent"]],
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
    CategoryDAOArray.prototype.add = function (T) {
        return undefined;
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
        return undefined;
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
    TaskDAOArray.prototype.add = function (T) {
        return undefined;
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
        return undefined;
    };
    TaskDAOArray.prototype.getTotalCount = function () {
        return undefined;
    };
    TaskDAOArray.prototype.getTotalCountCategory = function (category) {
        return undefined;
    };
    TaskDAOArray.prototype.getUncompletedCountInCategory = function (category) {
        return undefined;
    };
    TaskDAOArray.prototype.search = function (category, searchText, status, priority) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.searchTodos(category, searchText, status, priority));
    };
    TaskDAOArray.prototype.searchTodos = function (category, searchText, status, priority) {
        var allTasks = _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].tasks;
        if (category !== null) {
            allTasks = allTasks.filter(function (todo) { return todo.category === category; });
        }
        return allTasks;
    };
    TaskDAOArray.prototype.update = function (T) {
        var taskTmp = _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].tasks.find(function (t) { return t.id === T.id; });
        _TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].tasks.splice(_TestData__WEBPACK_IMPORTED_MODULE_2__["TestData"].tasks.indexOf(taskTmp), 1, T);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(T);
    };
    return TaskDAOArray;
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




var EditCategoryDialogComponent = (function () {
    function EditCategoryDialogComponent(dialogRef, data, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialog = dialog;
    }
    EditCategoryDialogComponent.prototype.ngOnInit = function () {
        this.categoryTitle = this.data[0];
        this.dialogTitle = this.data[1];
        if (this.categoryTitle) {
            this.canDelete = false;
        }
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
/* harmony default export */ __webpack_exports__["default"] = (".pointer {\n    cursor: pointer;\n}\n.edit-category-icon-area{\n    width: 15%;\n    display: inline-block;\n    text-align: left;\n    font-size: 13px;\n}\n.category-title{\n    width: 70%;\n    display: inline-block;\n    font-size: 16px;\n}\n.all-category-title{\n    width: 85%;\n    display: inline-block;\n    font-size: 16px;\n}\n.edit-category-icon{\n    color: #dadada;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvaW50ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5lZGl0LWNhdGVnb3J5LWljb24tYXJlYXtcbiAgICB3aWR0aDogMTUlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5jYXRlZ29yeS10aXRsZXtcbiAgICB3aWR0aDogNzAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG4uYWxsLWNhdGVnb3J5LXRpdGxle1xuICAgIHdpZHRoOiA4NSU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5lZGl0LWNhdGVnb3J5LWljb257XG4gICAgY29sb3I6ICNkYWRhZGE7XG59XG4iXX0= */");

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






var CategoriesComponent = (function () {
    function CategoriesComponent(dataHandler, dialog) {
        this.dataHandler = dataHandler;
        this.dialog = dialog;
        this.selectCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.updateCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
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
            data: [category.title, 'Редактирование категорий'],
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
    CategoriesComponent.ctorParameters = function () { return [
        { type: _service_data_handler_service__WEBPACK_IMPORTED_MODULE_5__["DataHandlerService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CategoriesComponent.prototype, "categories", void 0);
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _model_Category__WEBPACK_IMPORTED_MODULE_4__["Category"])
    ], CategoriesComponent.prototype, "selectedCategory", void 0);
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
/* harmony import */ var _service_data_handler_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/data-handler.service */ "./src/app/service/data-handler.service.ts");









var TasksComponent = (function () {
    function TasksComponent(dataHandler, dialog) {
        this.displayedColumns = ['color', 'id', 'title', 'date', 'priority', 'category', 'operations', 'select'];
        this.deleteTask = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.updateTask = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
    TasksComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.fillTable();
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
    TasksComponent.ctorParameters = function () { return [
        { type: _service_data_handler_service__WEBPACK_IMPORTED_MODULE_8__["DataHandlerService"] },
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
    TasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tasks',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tasks.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tasks/tasks.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tasks.component.css */ "./src/app/views/tasks/tasks.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_data_handler_service__WEBPACK_IMPORTED_MODULE_8__["DataHandlerService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
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