(self["webpackChunktodo"] = self["webpackChunktodo"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

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
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 21571);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 94612);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _service_data_handler_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/data-handler.service */ 53962);
/* harmony import */ var _service_intro_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/intro.service */ 95661);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-device-detector */ 1135);
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-sidebar */ 41679);
/* harmony import */ var _views_categories_categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/categories/categories.component */ 47290);
/* harmony import */ var _views_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/header/header.component */ 3841);
/* harmony import */ var _views_stat_stat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/stat/stat.component */ 51014);
/* harmony import */ var _views_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/tasks/tasks.component */ 58451);
/* harmony import */ var _views_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/footer/footer.component */ 50259);












var AppComponent = (function () {
    function AppComponent(dataHandler, introService, deviceService) {
        this.dataHandler = dataHandler;
        this.introService = introService;
        this.deviceService = deviceService;
        this.title = 'TestTODO';
        this.categoryMap = new Map();
        this.showStat = true;
        this.selectedCategory = null;
        this.searchTasksText = '';
        this.searchCategoryText = '';
        this.isMobile = deviceService.isMobile();
        this.isTablet = deviceService.isTablet();
        this.showStat =  true ? !this.isMobile : 0;
        this.setMenuValues();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataHandler.getAllPriorities().subscribe(function (priorities) { return _this.priorities = priorities; });
        this.dataHandler.getAllCategories().subscribe(function (categories) { return _this.categories = categories; });
        this.fillCategories();
        this.onSelectCategory(null);
        if (!this.isMobile && !this.isTablet) {
            this.introService.startIntroJS(true);
        }
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
        this.dataHandler.deleteTask(task.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.concatMap)(function (task) {
            return _this.dataHandler.getUncompletedCountInCategory(task.category).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(function (count) {
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
        this.dataHandler.addTask(task).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.concatMap)(function (task) {
            return _this.dataHandler.getUncompletedCountInCategory(task.category).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(function (count) {
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
        (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.zip)(this.dataHandler.getTotalCountInCategory(this.selectedCategory), this.dataHandler.getCompletedCountInCategory(this.selectedCategory), this.dataHandler.getUncompletedCountInCategory(this.selectedCategory), this.dataHandler.getUncompletedTotalCount())
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
    AppComponent.prototype.onClosedMenu = function () {
        this.menuOpened = false;
    };
    AppComponent.prototype.setMenuValues = function () {
        this.menuPosition = 'left';
        if (this.isMobile) {
            this.menuOpened = false;
            this.menuMode = 'over';
            this.showBackdrop = true;
        }
        else {
            this.menuOpened = true;
            this.menuMode = 'push';
            this.showBackdrop = false;
        }
    };
    AppComponent.prototype.toggleMenu = function () {
        this.menuOpened = !this.menuOpened;
    };
    AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["????directiveInject"](_service_data_handler_service__WEBPACK_IMPORTED_MODULE_0__.DataHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["????directiveInject"](_service_intro_service__WEBPACK_IMPORTED_MODULE_1__.IntroService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["????directiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_12__.DeviceDetectorService)); };
    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_11__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 16, vars: 21, consts: [[2, "height", "100vh"], [3, "opened", "closeOnClickOutside", "closeOnClickBackdrop", "showBackdrop", "mode", "animate", "position", "autoFocus", "onClosed"], ["data-color", "purple", "data-step", "1", "data-intro", "\u0424\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u044F \u0437\u0430\u0434\u0430\u0447, \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435/\u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435/\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439", "data-position", "right", 1, "sidebar"], [3, "categoryMap", "uncompletedTotal", "selectedCategory", "categories", "selectCategory", "deleteCategory", "updateCategory", "addCategory", "searchCategory"], ["ng-sidebar-content", ""], [1, "main-panel"], [1, "navbar", "navbar-expand-lg", "navbar-transparent", "navbar-absolute", "fixed-top"], [3, "categoryName", "showStat", "toggleStat", "toggleMenu"], [1, "content"], [1, "container-fluid"], [3, "totalTasksInCategory", "completeTasksInCategory", "uncompleteTasksInCategory", "showStat"], [1, "row"], [1, "col-12"], ["data-step", "4", "data-intro", "\u0421\u043F\u0438\u0441\u043E\u043A \u0432\u0441\u0435\u0445 \u0437\u0430\u0434\u0430\u0447 \u0441 \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u0435\u0439", "data-position", "top"], [3, "selectedCategory", "tasks", "priorities", "updateTask", "deleteTask", "selectCategory", "addTask", "filterByTitle", "filterByStatus", "filterByPriority"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](0, "ng-sidebar-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](1, "ng-sidebar", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????listener"]("onClosed", function AppComponent_Template_ng_sidebar_onClosed_1_listener() { return ctx.onClosedMenu(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](3, "app-categories", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????listener"]("selectCategory", function AppComponent_Template_app_categories_selectCategory_3_listener($event) { return ctx.onSelectCategory($event); })("deleteCategory", function AppComponent_Template_app_categories_deleteCategory_3_listener($event) { return ctx.onDeleteCategory($event); })("updateCategory", function AppComponent_Template_app_categories_updateCategory_3_listener($event) { return ctx.onUpdateCategory($event); })("addCategory", function AppComponent_Template_app_categories_addCategory_3_listener($event) { return ctx.onAddCategory($event); })("searchCategory", function AppComponent_Template_app_categories_searchCategory_3_listener($event) { return ctx.onSearchCategory($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](6, "nav", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](7, "app-header", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????listener"]("toggleStat", function AppComponent_Template_app_header_toggleStat_7_listener($event) { return ctx.toggleStat($event); })("toggleMenu", function AppComponent_Template_app_header_toggleMenu_7_listener() { return ctx.toggleMenu(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](8, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](9, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????element"](10, "app-stat", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](11, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](12, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](13, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementStart"](14, "app-tasks", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????listener"]("updateTask", function AppComponent_Template_app_tasks_updateTask_14_listener($event) { return ctx.onUpdateTask($event); })("deleteTask", function AppComponent_Template_app_tasks_deleteTask_14_listener($event) { return ctx.onDeleteTask($event); })("selectCategory", function AppComponent_Template_app_tasks_selectCategory_14_listener($event) { return ctx.onSelectCategory($event); })("addTask", function AppComponent_Template_app_tasks_addTask_14_listener($event) { return ctx.onAddTask($event); })("filterByTitle", function AppComponent_Template_app_tasks_filterByTitle_14_listener($event) { return ctx.onSearchTasks($event); })("filterByStatus", function AppComponent_Template_app_tasks_filterByStatus_14_listener($event) { return ctx.onFilterTaskByStatus($event); })("filterByPriority", function AppComponent_Template_app_tasks_filterByPriority_14_listener($event) { return ctx.onFilterTasksByPriority($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????element"](15, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????elementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("opened", ctx.menuOpened)("closeOnClickOutside", false)("closeOnClickBackdrop", true)("showBackdrop", ctx.showBackdrop)("mode", ctx.menuMode)("animate", true)("position", ctx.menuPosition)("autoFocus", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("categoryMap", ctx.categoryMap)("uncompletedTotal", ctx.uncompletedTotalTasksCount)("selectedCategory", ctx.selectedCategory)("categories", ctx.categories);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("categoryName", ctx.selectedCategory ? ctx.selectedCategory.title : "\u0412\u0441\u0435")("showStat", ctx.showStat);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("totalTasksInCategory", ctx.totalTasksCountInCategory)("completeTasksInCategory", ctx.completedCountInCategory)("uncompleteTasksInCategory", ctx.uncompletedCountInCategory)("showStat", ctx.showStat);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["????property"]("selectedCategory", ctx.selectedCategory)("tasks", ctx.tasks)("priorities", ctx.priorities);
        } }, directives: [ng_sidebar__WEBPACK_IMPORTED_MODULE_2__.SidebarContainer, ng_sidebar__WEBPACK_IMPORTED_MODULE_2__.Sidebar, _views_categories_categories_component__WEBPACK_IMPORTED_MODULE_3__.CategoriesComponent, _views_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent, _views_stat_stat_component__WEBPACK_IMPORTED_MODULE_5__.StatComponent, _views_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_6__.TasksComponent, _views_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent], styles: ["nav[_ngcontent-%COMP%] { z-index: 0 !important; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxxQkFBcUIsRUFBRSIsImZpbGUiOiJhcHAuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHsgei1pbmRleDogMCAhaW1wb3J0YW50OyB9Il19 */"] });
    return AppComponent;
}());



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _dialog_edit_task_dialog_edit_task_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog/edit-task-dialog/edit-task-dialog.component */ 35362);
/* harmony import */ var _views_categories_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/categories/categories.component */ 47290);
/* harmony import */ var _views_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/tasks/tasks.component */ 58451);
/* harmony import */ var _dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog/confirm-dialog/confirm-dialog.component */ 29980);
/* harmony import */ var _pipe_task_date_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipe/task-date.pipe */ 66914);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_common_locales_ru_UA__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/ru-UA */ 7593);
/* harmony import */ var _angular_common_locales_ru_UA__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_ru_UA__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _dialog_edit_category_dialog_edit_category_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog/edit-category-dialog/edit-category-dialog.component */ 21710);
/* harmony import */ var _views_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/footer/footer.component */ 50259);
/* harmony import */ var _dialog_about_about_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dialog/about/about.dialog.component */ 34944);
/* harmony import */ var _views_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/header/header.component */ 3841);
/* harmony import */ var _views_stat_stat_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/stat/stat.component */ 51014);
/* harmony import */ var _views_stat_stat_card_stat_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/stat/stat-card/stat-card.component */ 3916);
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ngx-color-picker */ 61922);
/* harmony import */ var _dialog_settings_dialog_settings_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dialog/settings-dialog/settings-dialog.component */ 84218);
/* harmony import */ var _views_priorities_priorities_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/priorities/priorities.component */ 27021);
/* harmony import */ var _dialog_edit_priority_dialog_edit_priority_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dialog/edit-priority-dialog/edit-priority-dialog.component */ 7037);
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-sidebar */ 41679);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-device-detector */ 1135);
/* harmony import */ var _dialog_me_me_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dialog/me/me.component */ 84749);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 37716);







































(0,_angular_common__WEBPACK_IMPORTED_MODULE_18__.registerLocaleData)((_angular_common_locales_ru_UA__WEBPACK_IMPORTED_MODULE_6___default()));
var AppModule = (function () {
    function AppModule() {
    }
    AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["????defineInjector"]({ providers: [ngx_device_detector__WEBPACK_IMPORTED_MODULE_20__.DeviceDetectorService], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.BrowserModule,
                _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatTableModule,
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__.MatSortModule,
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__.MatPaginatorModule,
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__.BrowserAnimationsModule,
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__.MatDialogModule,
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatFormFieldModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormsModule,
                _angular_material_input__WEBPACK_IMPORTED_MODULE_29__.MatInputModule,
                _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatButtonModule,
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__.MatIconModule,
                _angular_material_core__WEBPACK_IMPORTED_MODULE_32__.MatOptionModule,
                _angular_material_select__WEBPACK_IMPORTED_MODULE_33__.MatSelectModule,
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_34__.MatDatepickerModule,
                _angular_material_core__WEBPACK_IMPORTED_MODULE_32__.MatNativeDateModule,
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_35__.MatCheckboxModule,
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_36__.ColorPickerModule,
                ng_sidebar__WEBPACK_IMPORTED_MODULE_16__.SidebarModule.forRoot(),
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _views_categories_categories_component__WEBPACK_IMPORTED_MODULE_2__.CategoriesComponent,
        _views_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_3__.TasksComponent,
        _dialog_edit_task_dialog_edit_task_dialog_component__WEBPACK_IMPORTED_MODULE_1__.EditTaskDialogComponent,
        _dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__.ConfirmDialogComponent,
        _pipe_task_date_pipe__WEBPACK_IMPORTED_MODULE_5__.TaskDatePipe,
        _dialog_edit_category_dialog_edit_category_dialog_component__WEBPACK_IMPORTED_MODULE_7__.EditCategoryDialogComponent,
        _views_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__.FooterComponent,
        _dialog_about_about_dialog_component__WEBPACK_IMPORTED_MODULE_9__.AboutDialogComponent,
        _views_header_header_component__WEBPACK_IMPORTED_MODULE_10__.HeaderComponent,
        _views_stat_stat_component__WEBPACK_IMPORTED_MODULE_11__.StatComponent,
        _views_stat_stat_card_stat_card_component__WEBPACK_IMPORTED_MODULE_12__.StatCardComponent,
        _dialog_settings_dialog_settings_dialog_component__WEBPACK_IMPORTED_MODULE_13__.SettingsDialogComponent,
        _views_priorities_priorities_component__WEBPACK_IMPORTED_MODULE_14__.PrioritiesComponent,
        _dialog_edit_priority_dialog_edit_priority_dialog_component__WEBPACK_IMPORTED_MODULE_15__.EditPriorityDialogComponent,
        _dialog_me_me_component__WEBPACK_IMPORTED_MODULE_17__.MeComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.BrowserModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__.MatSortModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__.MatPaginatorModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__.BrowserAnimationsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__.MatDialogModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatFormFieldModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_29__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__.MatIconModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_32__.MatOptionModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_33__.MatSelectModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_34__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_32__.MatNativeDateModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_35__.MatCheckboxModule,
        ngx_color_picker__WEBPACK_IMPORTED_MODULE_36__.ColorPickerModule, ng_sidebar__WEBPACK_IMPORTED_MODULE_16__.SidebarModule] }); })();


/***/ }),

/***/ 42435:
/*!**********************************!*\
  !*** ./src/app/data/TestData.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestData": function() { return /* binding */ TestData; }
/* harmony export */ });
var TestData = (function () {
    function TestData() {
    }
    TestData.categories = [
        { id: 1, title: '????????????' },
        { id: 2, title: '??????????' },
        { id: 3, title: '??????????' },
        { id: 4, title: '??????????' },
        { id: 5, title: '??????????' },
        { id: 6, title: '??????' },
        { id: 7, title: '??????????????' },
        { id: 8, title: '??????????????' },
        { id: 9, title: '????????????????' },
        { id: 10, title: '????????????????????' },
        { id: 11, title: '????????????' }
    ];
    TestData.priorities = [
        { id: 1, title: '????????????', color: '#e5e5e5' },
        { id: 2, title: '??????????????', color: '#85D1B2' },
        { id: 3, title: '??????????????', color: '#F1828D' },
        { id: 4, title: '?????????? ????????????!!', color: '#F1128D' }
    ];
    TestData.tasks = [
        {
            id: 1,
            title: '???????????? ???????????? ???????????? ??????',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[9],
            date: new Date('2019-04-10')
        },
        {
            id: 2,
            title: '???????????????? ???????????? ???????????????????? ????????????????????',
            priority: TestData.priorities[0],
            completed: false,
            category: TestData.categories[0],
            date: new Date('2019-04-11')
        },
        {
            id: 3,
            title: '???????????????? ?? ???????? ?? ??????????????, ???????????? ????????????????',
            priority: TestData.priorities[2],
            completed: true,
            category: TestData.categories[1]
        },
        {
            id: 4,
            title: '?????????????? ?? ???????? ?? ????????????, ???????????????????? ????????????',
            priority: TestData.priorities[1],
            completed: false,
            category: TestData.categories[1],
            date: new Date('2019-08-17')
        },
        {
            id: 5,
            title: '?????????? ?? ?????????????? ?????????????? ???? ?????????????????? ????????????',
            completed: false,
            category: TestData.categories[2]
        },
        {
            id: 6,
            title: '?????????????? ???? ?????????????? ???? ????????????????????????????????',
            priority: TestData.priorities[1],
            completed: true,
            category: TestData.categories[2],
            date: new Date('2019-06-11')
        },
        {
            id: 7,
            title: '?????????? ???????????? ?? ????????????, ?????????????? ??????????',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[3]
        },
        {
            id: 8,
            title: '?????????????????????? ???????? ?????? ???????? ?????????? (?????????? ?? ??????????????????)',
            completed: false,
            category: TestData.categories[5]
        },
        {
            id: 9,
            title: '?????????????????????? 10 ??????',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[4],
            date: new Date('2019-03-12')
        },
        {
            id: 10,
            title: '?????????????????? 100 ??',
            priority: TestData.priorities[0],
            completed: true,
            category: TestData.categories[4]
        },
        {
            id: 11,
            title: '???????????????????????? ?????????????? ???????????????? ',
            completed: false
        },
        {
            id: 12,
            title: '?????????????? ???? ???????????? "?????? ?????????????????? ?????????????????????????????? ???? Java"',
            priority: TestData.priorities[1],
            completed: false,
            category: TestData.categories[2]
        },
        {
            id: 13,
            title: '???????????? ???????????????? ???? ????????????',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[5],
            date: new Date('2019-05-11')
        },
        {
            id: 14,
            title: '???????????????? ???????????????? ???? ???????????? ???????? ????????????????',
            completed: true,
            category: TestData.categories[0]
        },
        {
            id: 15,
            title: '?????????? ?????????????? ???? Java',
            priority: TestData.priorities[2],
            completed: true
        },
        {
            id: 16,
            title: '???????????????? 100 000 ?? ?? ???????? ???? ??????????????',
            priority: TestData.priorities[3],
            completed: false,
            category: TestData.categories[6]
        },
        {
            id: 17,
            title: '?????????????????? ?????????? ???? ????????????',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[6]
        },
        {
            id: 18,
            title: '?????????? ??????????????, ?????????????????? ????????????????????',
            priority: TestData.priorities[3],
            completed: false,
            category: TestData.categories[8],
            date: new Date('2020-12-11')
        },
        {
            id: 19,
            title: '???????????????? ?????????? ?????????? ?? ??????????????????',
            priority: TestData.priorities[0],
            completed: false,
            category: TestData.categories[7],
            date: new Date('2019-10-11')
        },
        {
            id: 20,
            title: '???????????? ?? ????????????????????????',
            priority: TestData.priorities[0],
            completed: false,
            category: TestData.categories[4],
            date: new Date('2019-03-17')
        }
    ];
    return TestData;
}());



/***/ }),

/***/ 92487:
/*!***************************************************!*\
  !*** ./src/app/data/dao/impl/CategoryDAOArray.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryDAOArray": function() { return /* binding */ CategoryDAOArray; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var _TestData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../TestData */ 42435);


var CategoryDAOArray = (function () {
    function CategoryDAOArray() {
    }
    CategoryDAOArray.prototype.add = function (category) {
        if (category.id === null || category.id === 0) {
            category.id = this.getLastIdCategory();
        }
        _TestData__WEBPACK_IMPORTED_MODULE_0__.TestData.categories.push(category);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(category);
    };
    CategoryDAOArray.prototype.getLastIdCategory = function () {
        return Math.max.apply(Math, _TestData__WEBPACK_IMPORTED_MODULE_0__.TestData.categories.map(function (c) { return c.id; })) + 1;
    };
    CategoryDAOArray.prototype.delete = function (id) {
        _TestData__WEBPACK_IMPORTED_MODULE_0__.TestData.tasks.forEach(function (task) {
            if (task.category && task.category.id === id) {
                task.category = null;
            }
        });
        var tmpCategory = _TestData__WEBPACK_IMPORTED_MODULE_0__.TestData.categories.find(function (t) { return t.id === id; });
        _TestData__WEBPACK_IMPORTED_MODULE_0__.TestData.categories.splice(_TestData__WEBPACK_IMPORTED_MODULE_0__.TestData.categories.indexOf(tmpCategory), 1);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(tmpCategory);
    };
    CategoryDAOArray.prototype.get = function (id) {
        return undefined;
    };
    CategoryDAOArray.prototype.getAll = function () {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(_TestData__WEBPACK_IMPORTED_MODULE_0__.TestData.categories);
    };
    CategoryDAOArray.prototype.search = function (title) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(_TestData__WEBPACK_IMPORTED_MODULE_0__.TestData.categories.filter(function (cat) { return cat.title.toUpperCase().includes(title.toUpperCase()); })
            .sort(function (c1, c2) { return c1.title.localeCompare(c2.title); }));
    };
    CategoryDAOArray.prototype.update = function (category) {
        var tmpCategory = _TestData__WEBPACK_IMPORTED_MODULE_0__.TestData.categories.find(function (t) { return t.id === category.id; });
        _TestData__WEBPACK_IMPORTED_MODULE_0__.TestData.categories.splice(_TestData__WEBPACK_IMPORTED_MODULE_0__.TestData.categories.indexOf(tmpCategory), 1, category);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(tmpCategory);
    };
    return CategoryDAOArray;
}());



/***/ }),

/***/ 28164:
/*!***************************************************!*\
  !*** ./src/app/data/dao/impl/PriorityDAOArray.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PriorityDAOArray": function() { return /* binding */ PriorityDAOArray; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var _TestData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../TestData */ 42435);


var PriorityDAOArray = (function () {
    function PriorityDAOArray() {
    }
    PriorityDAOArray.prototype.get = function (id) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(_TestData__WEBPACK_IMPORTED_MODULE_0__.TestData.priorities.find(function (priority) { return priority.id === id; }));
    };
    PriorityDAOArray.prototype.getAll = function () {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(_TestData__WEBPACK_IMPORTED_MODULE_0__.TestData.priorities);
    };
    PriorityDAOArray.prototype.add = function (priority) {
        if (priority.id === null || priority.id === 0) {
            priority.id = this.getLastIdPriority();
        }
        _TestData__WEBPACK_IMPORTED_MODULE_0__.TestData.priorities.push(priority);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(priority);
    };
    PriorityDAOArray.prototype.delete = function (id) {
        _TestData__WEBPACK_IMPORTED_MODULE_0__.TestData.tasks.forEach(function (task) {
            if (task.priority && task.priority.id === id) {
                task.priority = null;
            }
        });
        var tmpPriority = _TestData__WEBPACK_IMPORTED_MODULE_0__.TestData.priorities.find(function (t) { return t.id === id; });
        _TestData__WEBPACK_IMPORTED_MODULE_0__.TestData.priorities.splice(_TestData__WEBPACK_IMPORTED_MODULE_0__.TestData.priorities.indexOf(tmpPriority), 1);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(tmpPriority);
    };
    PriorityDAOArray.prototype.update = function (priority) {
        var tmp = _TestData__WEBPACK_IMPORTED_MODULE_0__.TestData.priorities.find(function (t) { return t.id === priority.id; });
        _TestData__WEBPACK_IMPORTED_MODULE_0__.TestData.priorities.splice(_TestData__WEBPACK_IMPORTED_MODULE_0__.TestData.priorities.indexOf(tmp), 1, priority);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(priority);
    };
    PriorityDAOArray.prototype.getLastIdPriority = function () {
        return Math.max.apply(Math, _TestData__WEBPACK_IMPORTED_MODULE_0__.TestData.priorities.map(function (c) { return c.id; })) + 1;
    };
    return PriorityDAOArray;
}());



/***/ }),

/***/ 13113:
/*!***********************************************!*\
  !*** ./src/app/data/dao/impl/TaskDAOArray.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskDAOArray": function() { return /* binding */ TaskDAOArray; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var _TestData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../TestData */ 42435);


var TaskDAOArray = (function () {
    function TaskDAOArray() {
    }
    TaskDAOArray.prototype.add = function (task) {
        if (task.id === null || task.id === 0) {
            task.id = this.getLastIdTask();
        }
        _TestData__WEBPACK_IMPORTED_MODULE_0__.TestData.tasks.push(task);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(task);
    };
    TaskDAOArray.prototype.getLastIdTask = function () {
        return Math.max.apply(Math, _TestData__WEBPACK_IMPORTED_MODULE_0__.TestData.tasks.map(function (task) { return task.id; })) + 1;
    };
    TaskDAOArray.prototype.delete = function (id) {
        var taskTmp = _TestData__WEBPACK_IMPORTED_MODULE_0__.TestData.tasks.find(function (t) { return t.id === id; });
        _TestData__WEBPACK_IMPORTED_MODULE_0__.TestData.tasks.splice(_TestData__WEBPACK_IMPORTED_MODULE_0__.TestData.tasks.indexOf(taskTmp), 1);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(taskTmp);
    };
    TaskDAOArray.prototype.get = function (id) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(_TestData__WEBPACK_IMPORTED_MODULE_0__.TestData.tasks.find(function (todo) { return todo.id === id; }));
    };
    TaskDAOArray.prototype.getAll = function () {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(_TestData__WEBPACK_IMPORTED_MODULE_0__.TestData.tasks);
    };
    TaskDAOArray.prototype.getCompletedCountInCategory = function (category) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.searchTasks(category, null, true, null).length);
    };
    TaskDAOArray.prototype.getUncompletedCountInCategory = function (category) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.searchTasks(category, null, false, null).length);
    };
    TaskDAOArray.prototype.getTotalCountInCategory = function (category) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.searchTasks(category, null, null, null).length);
    };
    TaskDAOArray.prototype.getTotalCount = function () {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(_TestData__WEBPACK_IMPORTED_MODULE_0__.TestData.tasks.length);
    };
    TaskDAOArray.prototype.search = function (category, searchText, status, priority) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.searchTasks(category, searchText, status, priority));
    };
    TaskDAOArray.prototype.searchTasks = function (category, searchText, status, priority) {
        var allTasks = _TestData__WEBPACK_IMPORTED_MODULE_0__.TestData.tasks;
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
        var taskTmp = _TestData__WEBPACK_IMPORTED_MODULE_0__.TestData.tasks.find(function (t) { return t.id === T.id; });
        _TestData__WEBPACK_IMPORTED_MODULE_0__.TestData.tasks.splice(_TestData__WEBPACK_IMPORTED_MODULE_0__.TestData.tasks.indexOf(taskTmp), 1, T);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(T);
    };
    TaskDAOArray.prototype.getTotalCountCategory = function (category) {
        return undefined;
    };
    return TaskDAOArray;
}());



/***/ }),

/***/ 27587:
/*!*************************************!*\
  !*** ./src/app/dialog/DialogMet.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogMet": function() { return /* binding */ DialogMet; }
/* harmony export */ });
var DialogMet = (function () {
    function DialogMet(dialogRef) {
        this.dialogRef = dialogRef;
    }
    DialogMet.prototype.onCancel = function () {
        this.dialogRef.close(false);
    };
    return DialogMet;
}());



/***/ }),

/***/ 33674:
/*!****************************************!*\
  !*** ./src/app/dialog/ModalActions.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalActions": function() { return /* binding */ ModalActions; }
/* harmony export */ });
var ModalActions;
(function (ModalActions) {
    ModalActions["delete"] = "delete";
    ModalActions["activate"] = "activate";
    ModalActions["complete"] = "complete";
})(ModalActions || (ModalActions = {}));


/***/ }),

/***/ 52871:
/*!************************************!*\
  !*** ./src/app/dialog/OperType.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperType": function() { return /* binding */ OperType; }
/* harmony export */ });
var OperType;
(function (OperType) {
    OperType[OperType["ADD"] = 0] = "ADD";
    OperType[OperType["EDIT"] = 1] = "EDIT";
})(OperType || (OperType = {}));


/***/ }),

/***/ 34944:
/*!********************************************************!*\
  !*** ./src/app/dialog/about/about.dialog.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutDialogComponent": function() { return /* binding */ AboutDialogComponent; }
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 51095);




var AboutDialogComponent = (function () {
    function AboutDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialogTitle = data.dialogTitle;
        this.message = data.message;
    }
    AboutDialogComponent.prototype.ngOnInit = function () { };
    AboutDialogComponent.prototype.onConfirm = function () {
        this.dialogRef.close(true);
    };
    AboutDialogComponent.??fac = function AboutDialogComponent_Factory(t) { return new (t || AboutDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
    AboutDialogComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AboutDialogComponent, selectors: [["app-about-dialog"]], decls: 8, vars: 2, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function AboutDialogComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AboutDialogComponent_Template_button_click_6_listener() { return ctx.onConfirm(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Ok ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.dialogTitle, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.message);
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"] });
    return AboutDialogComponent;
}());



/***/ }),

/***/ 29980:
/*!*******************************************************************!*\
  !*** ./src/app/dialog/confirm-dialog/confirm-dialog.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmDialogComponent": function() { return /* binding */ ConfirmDialogComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _DialogMet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DialogMet */ 27587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 51095);






var ConfirmDialogComponent = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(ConfirmDialogComponent, _super);
    function ConfirmDialogComponent(dialogRef, data) {
        var _this = _super.call(this, dialogRef) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this.dialogTitle = data.dialogTitle;
        _this.message = data.message;
        return _this;
    }
    ConfirmDialogComponent.prototype.onConfirm = function () {
        this.dialogRef.close(true);
    };
    ConfirmDialogComponent.??fac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA)); };
    ConfirmDialogComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["????InheritDefinitionFeature"]], decls: 10, vars: 2, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-button", "", 3, "click"]], template: function ConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ConfirmDialogComponent_Template_button_click_6_listener() { return ctx.onConfirm(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "Ok");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ConfirmDialogComponent_Template_button_click_8_listener() { return ctx.onCancel(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, "\u041E\u0442\u043C\u0435\u043D\u0430");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx.dialogTitle);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx.message);
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"] });
    return ConfirmDialogComponent;
}(_DialogMet__WEBPACK_IMPORTED_MODULE_0__.DialogMet));



/***/ }),

/***/ 21710:
/*!*******************************************************************************!*\
  !*** ./src/app/dialog/edit-category-dialog/edit-category-dialog.component.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditCategoryDialogComponent": function() { return /* binding */ EditCategoryDialogComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../confirm-dialog/confirm-dialog.component */ 29980);
/* harmony import */ var _OperType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../OperType */ 52871);
/* harmony import */ var _DialogMet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DialogMet */ 27587);
/* harmony import */ var _ModalActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ModalActions */ 33674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 76627);














function EditCategoryDialogComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EditCategoryDialogComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r3.categoryTitle = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function EditCategoryDialogComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EditCategoryDialogComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r5.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " \u0423\u0434\u0430\u043B\u0438\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
var EditCategoryDialogComponent = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__extends)(EditCategoryDialogComponent, _super);
    function EditCategoryDialogComponent(dialogRef, data, dialog) {
        var _this = _super.call(this, dialogRef) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this.dialog = dialog;
        return _this;
    }
    EditCategoryDialogComponent.prototype.ngOnInit = function () {
        this.categoryTitle = this.data[0];
        this.dialogTitle = this.data[1];
        this.operType = this.data[2];
    };
    EditCategoryDialogComponent.prototype.onConfirm = function () {
        this.dialogRef.close(this.categoryTitle);
    };
    EditCategoryDialogComponent.prototype.delete = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogComponent, {
            maxWidth: '500px',
            data: {
                dialogTitle: '?????????????????????? ????????????????',
                message: "\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E: \"" + this.categoryTitle + "\"?"
            },
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.dialogRef.close(_ModalActions__WEBPACK_IMPORTED_MODULE_3__.ModalActions.delete);
            }
        });
    };
    EditCategoryDialogComponent.prototype.canDelete = function () {
        return this.operType === _OperType__WEBPACK_IMPORTED_MODULE_1__.OperType.EDIT;
    };
    EditCategoryDialogComponent.??fac = function EditCategoryDialogComponent_Factory(t) { return new (t || EditCategoryDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog)); };
    EditCategoryDialogComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: EditCategoryDialogComponent, selectors: [["app-edit-category-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["????InheritDefinitionFeature"]], decls: 17, vars: 5, consts: [["mat-dialog-title", ""], ["matInput", "", "maxlength", "15", 3, "ngModel", "ngModelChange", "keydown.enter"], ["inputTitle", ""], ["class", "clear-icon size25", "mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], [1, "col-12", "text-center"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["mat-raised-button", "", 3, "click"], ["mat-button", "", "class", "red", 3, "click", 4, "ngIf"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 1, "clear-icon", "size25", 3, "click"], ["mat-button", "", 1, "red", 3, "click"]], template: function EditCategoryDialogComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-dialog-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "p", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](5, " \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435(15 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432)");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "input", 1, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("ngModelChange", function EditCategoryDialogComponent_Template_input_ngModelChange_6_listener($event) { return ctx.categoryTitle = $event; })("keydown.enter", function EditCategoryDialogComponent_Template_input_keydown_enter_6_listener() { return ctx.onConfirm(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](8, EditCategoryDialogComponent_button_8_Template, 3, 0, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](9, "mat-dialog-actions");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](11, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EditCategoryDialogComponent_Template_button_click_11_listener() { return ctx.onConfirm(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](12, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](13, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EditCategoryDialogComponent_Template_button_click_13_listener() { return ctx.onCancel(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](14, "\u041E\u0442\u043C\u0435\u043D\u0430");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](15, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](16, EditCategoryDialogComponent_button_16_Template, 2, 0, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????reference"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](ctx.dialogTitle);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngModel", ctx.categoryTitle);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.categoryTitle.trim().length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("disabled", _r0.value.trim().length === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.canDelete());
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWNhdGVnb3J5LWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"] });
    return EditCategoryDialogComponent;
}(_DialogMet__WEBPACK_IMPORTED_MODULE_2__.DialogMet));



/***/ }),

/***/ 7037:
/*!*******************************************************************************!*\
  !*** ./src/app/dialog/edit-priority-dialog/edit-priority-dialog.component.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPriorityDialogComponent": function() { return /* binding */ EditPriorityDialogComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../confirm-dialog/confirm-dialog.component */ 29980);
/* harmony import */ var _OperType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../OperType */ 52871);
/* harmony import */ var _DialogMet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DialogMet */ 27587);
/* harmony import */ var _ModalActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ModalActions */ 33674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 76627);














function EditPriorityDialogComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EditPriorityDialogComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r3.priorityTitle = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function EditPriorityDialogComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EditPriorityDialogComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r5.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " \u0423\u0434\u0430\u043B\u0438\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
var EditPriorityDialogComponent = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__extends)(EditPriorityDialogComponent, _super);
    function EditPriorityDialogComponent(dialogRef, data, dialog) {
        var _this = _super.call(this, dialogRef) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this.dialog = dialog;
        return _this;
    }
    EditPriorityDialogComponent.prototype.ngOnInit = function () {
        this.priorityTitle = this.data[0];
        this.dialogTitle = this.data[1];
        this.operType = this.data[2];
    };
    EditPriorityDialogComponent.prototype.onConfirm = function () {
        this.dialogRef.close(this.priorityTitle);
    };
    EditPriorityDialogComponent.prototype.delete = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogComponent, {
            maxWidth: '500px',
            data: {
                dialogTitle: '?????????????????????? ????????????????',
                message: "\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442: \"" + this.priorityTitle + "\"? (\u0432 \u0437\u0430\u0434\u0430\u0447\u0438 \u043F\u0440\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u0441\u044F '')"
            },
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.dialogRef.close(_ModalActions__WEBPACK_IMPORTED_MODULE_3__.ModalActions.delete);
            }
        });
    };
    EditPriorityDialogComponent.prototype.canDelete = function () {
        return this.operType === _OperType__WEBPACK_IMPORTED_MODULE_1__.OperType.EDIT;
    };
    EditPriorityDialogComponent.??fac = function EditPriorityDialogComponent_Factory(t) { return new (t || EditPriorityDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog)); };
    EditPriorityDialogComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: EditPriorityDialogComponent, selectors: [["app-edit-priority-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["????InheritDefinitionFeature"]], decls: 17, vars: 5, consts: [["mat-dialog-title", ""], ["matInput", "", "maxlength", "20", 3, "ngModel", "keydown.enter", "ngModelChange"], ["inputTitle", ""], ["aria-label", "Clear", "class", "clear-icon size25", "mat-button", "", "mat-icon-button", "", "matSuffix", "", 3, "click", 4, "ngIf"], [1, "col-12", "text-center"], ["color", "primary", "mat-raised-button", "", 3, "disabled", "click"], ["mat-raised-button", "", 3, "click"], ["class", "red", "mat-button", "", 3, "click", 4, "ngIf"], ["aria-label", "Clear", "mat-button", "", "mat-icon-button", "", "matSuffix", "", 1, "clear-icon", "size25", 3, "click"], ["mat-button", "", 1, "red", 3, "click"]], template: function EditPriorityDialogComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-dialog-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "p", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](5, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 (20 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432)");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "input", 1, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("keydown.enter", function EditPriorityDialogComponent_Template_input_keydown_enter_6_listener() { return ctx.onConfirm(); })("ngModelChange", function EditPriorityDialogComponent_Template_input_ngModelChange_6_listener($event) { return ctx.priorityTitle = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](8, EditPriorityDialogComponent_button_8_Template, 3, 0, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](9, "mat-dialog-actions");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](11, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EditPriorityDialogComponent_Template_button_click_11_listener() { return ctx.onConfirm(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](12, " \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](13, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EditPriorityDialogComponent_Template_button_click_13_listener() { return ctx.onCancel(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](14, "\u041E\u0442\u043C\u0435\u043D\u0430");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](15, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](16, EditPriorityDialogComponent_button_16_Template, 2, 0, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????reference"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](ctx.dialogTitle);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngModel", ctx.priorityTitle);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.priorityTitle.trim().length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("disabled", _r0.value.trim().length === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.canDelete());
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXByaW9yaXR5LWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"] });
    return EditPriorityDialogComponent;
}(_DialogMet__WEBPACK_IMPORTED_MODULE_2__.DialogMet));



/***/ }),

/***/ 35362:
/*!***********************************************************************!*\
  !*** ./src/app/dialog/edit-task-dialog/edit-task-dialog.component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditTaskDialogComponent": function() { return /* binding */ EditTaskDialogComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../confirm-dialog/confirm-dialog.component */ 29980);
/* harmony import */ var _DialogMet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DialogMet */ 27587);
/* harmony import */ var _ModalActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ModalActions */ 33674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _service_data_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/data-handler.service */ 53962);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-device-detector */ 1135);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 76627);


















function EditTaskDialogComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EditTaskDialogComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r10.tmpTitle = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function EditTaskDialogComponent_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    var cat_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("value", cat_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](cat_r12.title);
} }
function EditTaskDialogComponent_mat_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    var pri_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("value", pri_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](pri_r13.title);
} }
function EditTaskDialogComponent_button_29_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EditTaskDialogComponent_button_29_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r15); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r14.tmpDate = null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function EditTaskDialogComponent_button_37_Template(rf, ctx) { if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EditTaskDialogComponent_button_37_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r17); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r16.complete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " \u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function EditTaskDialogComponent_button_38_Template(rf, ctx) { if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EditTaskDialogComponent_button_38_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r19); var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r18.activate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " \u0410\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function EditTaskDialogComponent_button_39_Template(rf, ctx) { if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EditTaskDialogComponent_button_39_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r21); var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r20.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
var _c0 = function (a0, a1) { return { "text-center": a0, "text-left": a1 }; };
var _c1 = function (a0, a1) { return { "text-center": a0, "text-right": a1 }; };
var EditTaskDialogComponent = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__extends)(EditTaskDialogComponent, _super);
    function EditTaskDialogComponent(dialogRef, data, dataHandler, dialog, deviceService) {
        var _this = _super.call(this, dialogRef) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this.dataHandler = dataHandler;
        _this.dialog = dialog;
        _this.deviceService = deviceService;
        _this.isMobile = deviceService.isMobile();
        return _this;
    }
    EditTaskDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.task = this.data[0];
        this.dialogTitle = this.data[1];
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
    EditTaskDialogComponent.prototype.delete = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogComponent, {
            maxWidth: '500px',
            data: {
                dialogTitle: '?????????????????????? ????????????????',
                message: "\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443: \"" + this.task.title + "\"?"
            },
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.dialogRef.close(_ModalActions__WEBPACK_IMPORTED_MODULE_2__.ModalActions.delete);
            }
        });
    };
    EditTaskDialogComponent.prototype.complete = function () {
        this.dialogRef.close(_ModalActions__WEBPACK_IMPORTED_MODULE_2__.ModalActions.complete);
    };
    EditTaskDialogComponent.prototype.activate = function () {
        this.dialogRef.close(_ModalActions__WEBPACK_IMPORTED_MODULE_2__.ModalActions.activate);
    };
    EditTaskDialogComponent.??fac = function EditTaskDialogComponent_Factory(t) { return new (t || EditTaskDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_service_data_handler_service__WEBPACK_IMPORTED_MODULE_3__.DataHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__.DeviceDetectorService)); };
    EditTaskDialogComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: EditTaskDialogComponent, selectors: [["app-edit-task-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["????InheritDefinitionFeature"]], decls: 40, vars: 25, consts: [["mat-dialog-title", ""], ["matInput", "", 3, "ngModel", "ngModelChange", "keydown.enter"], ["inputTitle", ""], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", "class", "size25", 3, "click", 4, "ngIf"], [3, "ngModel", "ngModelChange"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0441\u0440\u043E\u043A \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F", "readonly", "true", 3, "matDatepicker", "ngModel", "ngModelChange", "click"], ["inputDate", ""], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "col-md-5", "col-12", 3, "ngClass"], ["mat-raised-button", "", "color", "primary", 1, "edit-task_button", 3, "disabled", "click"], ["mat-raised-button", "", 1, "edit-task_button", 3, "click"], [1, "col-md-7", "col-12", "text-right", 3, "ngClass"], ["mat-button", "", "class", "green edit-task_button", 3, "click", 4, "ngIf"], ["mat-button", "", "class", "red edit-task_button", 3, "click", 4, "ngIf"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 1, "size25", 3, "click"], ["mat-button", "", 1, "green", "edit-task_button", 3, "click"], ["mat-button", "", 1, "red", "edit-task_button", 3, "click"]], template: function EditTaskDialogComponent_Template(rf, ctx) { if (rf & 1) {
            var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-dialog-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "p", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](5, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 (\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "input", 1, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("ngModelChange", function EditTaskDialogComponent_Template_input_ngModelChange_6_listener($event) { return ctx.tmpTitle = $event; })("keydown.enter", function EditTaskDialogComponent_Template_input_keydown_enter_6_listener() { return ctx.onConfirm(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](8, EditTaskDialogComponent_button_8_Template, 3, 0, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](9, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](11, "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](12, "mat-select", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("ngModelChange", function EditTaskDialogComponent_Template_mat_select_ngModelChange_12_listener($event) { return ctx.tmpCategory = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](13, "mat-option", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](14, "\u0411\u0435\u0437 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](15, EditTaskDialogComponent_mat_option_15_Template, 2, 2, "mat-option", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](16, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](17, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](18, "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](19, "mat-select", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("ngModelChange", function EditTaskDialogComponent_Template_mat_select_ngModelChange_19_listener($event) { return ctx.tmpPriority = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](20, "mat-option", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](21, "\u0411\u0435\u0437 \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u0430");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](22, EditTaskDialogComponent_mat_option_22_Template, 2, 2, "mat-option", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](23, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](24, "input", 7, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("ngModelChange", function EditTaskDialogComponent_Template_input_ngModelChange_24_listener($event) { return ctx.tmpDate = $event; })("click", function EditTaskDialogComponent_Template_input_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r22); var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????reference"](28); return _r5.open(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](26, "mat-datepicker-toggle", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](27, "mat-datepicker", null, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](29, EditTaskDialogComponent_button_29_Template, 3, 0, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](30, "mat-dialog-actions");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](31, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](32, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EditTaskDialogComponent_Template_button_click_32_listener() { return ctx.onConfirm(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](33, " \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](34, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EditTaskDialogComponent_Template_button_click_34_listener() { return ctx.onCancel(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](35, " \u041E\u0442\u043C\u0435\u043D\u0430 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](36, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](37, EditTaskDialogComponent_button_37_Template, 2, 0, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](38, EditTaskDialogComponent_button_38_Template, 2, 0, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](39, EditTaskDialogComponent_button_39_Template, 2, 0, "button", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????reference"](7);
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????reference"](25);
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????reference"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](ctx.dialogTitle);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngModel", ctx.tmpTitle);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.tmpTitle.trim().length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngModel", ctx.tmpCategory);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("value", null);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngForOf", ctx.categories);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngModel", ctx.tmpPriority);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("value", null);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngForOf", ctx.priorities);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("matDatepicker", _r5)("ngModel", ctx.tmpDate);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("for", _r5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", _r4.value.trim().length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction2"](19, _c0, ctx.isMobile, !ctx.isMobile));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("disabled", _r0.value.trim().length === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction2"](22, _c1, ctx.isMobile, !ctx.isMobile));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", !ctx.task.completed && ctx.task.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.task.completed);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.task.id);
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepicker, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon], styles: [".edit-task_button[_ngcontent-%COMP%]{\r\n    margin-top: 5px!important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtdGFzay1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJlZGl0LXRhc2stZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdC10YXNrX2J1dHRvbntcclxuICAgIG1hcmdpbi10b3A6IDVweCFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });
    return EditTaskDialogComponent;
}(_DialogMet__WEBPACK_IMPORTED_MODULE_1__.DialogMet));



/***/ }),

/***/ 84749:
/*!*******************************************!*\
  !*** ./src/app/dialog/me/me.component.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeComponent": function() { return /* binding */ MeComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _DialogMet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DialogMet */ 27587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 76627);






var MeComponent = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(MeComponent, _super);
    function MeComponent(dialogRef) {
        var _this = _super.call(this, dialogRef) || this;
        _this.dialogRef = dialogRef;
        return _this;
    }
    MeComponent.??fac = function MeComponent_Factory(t) { return new (t || MeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef)); };
    MeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: MeComponent, selectors: [["app-me"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["????InheritDefinitionFeature"]], decls: 12, vars: 0, consts: [[1, "text-right", "align-self-top"], ["mat-icon-button", "", 1, "header-icon", 3, "click"], [1, "download_text"], [1, "main_info"], [1, "buttons_download"], ["color", "primary", "mat-raised-button", ""]], template: function MeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function MeComponent_Template_button_click_1_listener() { return ctx.onCancel(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "close");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0440\u0435\u0437\u044E\u043C\u0435:");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, " PDF ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](11, " WORD ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon], styles: [".download_text[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    padding-top: 15px;\r\n    font-size: 20px;\r\n}\r\n.buttons_download[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.buttons_download[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    margin: 10px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoibWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZG93bmxvYWRfdGV4dHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5idXR0b25zX2Rvd25sb2Fke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0dG9uc19kb3dubG9hZCBidXR0b257XHJcbiAgICBtYXJnaW46IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });
    return MeComponent;
}(_DialogMet__WEBPACK_IMPORTED_MODULE_0__.DialogMet));



/***/ }),

/***/ 84218:
/*!*********************************************************************!*\
  !*** ./src/app/dialog/settings-dialog/settings-dialog.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsDialogComponent": function() { return /* binding */ SettingsDialogComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _service_data_handler_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/data-handler.service */ 53962);
/* harmony import */ var _views_priorities_priorities_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/priorities/priorities.component */ 27021);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 51095);





var SettingsDialogComponent = (function () {
    function SettingsDialogComponent(dialogRef, dataHandler) {
        this.dialogRef = dialogRef;
        this.dataHandler = dataHandler;
    }
    SettingsDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataHandler.getAllPriorities().subscribe(function (priorities) { return _this.priorities = priorities; });
    };
    SettingsDialogComponent.prototype.onClose = function () {
        this.dialogRef.close(false);
    };
    SettingsDialogComponent.prototype.onAddPriority = function (priority) {
        this.dataHandler.addPriority(priority).subscribe();
    };
    SettingsDialogComponent.prototype.onDeletePriority = function (priority) {
        this.dataHandler.deletePriority(priority.id).subscribe();
    };
    SettingsDialogComponent.prototype.onUpdatePriority = function (priority) {
        this.dataHandler.updatePriority(priority).subscribe();
    };
    SettingsDialogComponent.??fac = function SettingsDialogComponent_Factory(t) { return new (t || SettingsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_service_data_handler_service__WEBPACK_IMPORTED_MODULE_0__.DataHandlerService)); };
    SettingsDialogComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: SettingsDialogComponent, selectors: [["app-settings-dialog"]], decls: 9, vars: 1, consts: [["mat-dialog-title", "", 1, "settings-title", "with-subtitle"], [1, "little", "subtitle"], [3, "priorities", "addPriority", "deletePriority", "updatePriority"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function SettingsDialogComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-dialog-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "p", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u043E\u0432");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "p", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "* \u041F\u0440\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0438 - \u0446\u0432\u0435\u0442 \u0441\u0440\u0430\u0437\u0443 \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C\u0441\u044F \u0432 \u0442\u0430\u0431\u043B\u0438\u0446\u0435");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "app-priorities", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("addPriority", function SettingsDialogComponent_Template_app_priorities_addPriority_5_listener($event) { return ctx.onAddPriority($event); })("deletePriority", function SettingsDialogComponent_Template_app_priorities_deletePriority_5_listener($event) { return ctx.onDeletePriority($event); })("updatePriority", function SettingsDialogComponent_Template_app_priorities_updatePriority_5_listener($event) { return ctx.onUpdatePriority($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "mat-dialog-actions");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function SettingsDialogComponent_Template_button_click_7_listener() { return ctx.onClose(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](8, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("priorities", ctx.priorities);
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _views_priorities_priorities_component__WEBPACK_IMPORTED_MODULE_1__.PrioritiesComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"] });
    return SettingsDialogComponent;
}());



/***/ }),

/***/ 14041:
/*!***********************************!*\
  !*** ./src/app/model/Category.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Category": function() { return /* binding */ Category; }
/* harmony export */ });
var Category = (function () {
    function Category(id, title) {
        this.id = id;
        this.title = title;
    }
    return Category;
}());



/***/ }),

/***/ 48825:
/*!***********************************!*\
  !*** ./src/app/model/Priority.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Priority": function() { return /* binding */ Priority; }
/* harmony export */ });
var Priority = (function () {
    function Priority(id, title, color) {
        this.id = id;
        this.title = title;
        this.color = color;
    }
    return Priority;
}());



/***/ }),

/***/ 21050:
/*!*******************************!*\
  !*** ./src/app/model/Task.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": function() { return /* binding */ Task; }
/* harmony export */ });
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

/***/ 66914:
/*!****************************************!*\
  !*** ./src/app/pipe/task-date.pipe.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskDatePipe": function() { return /* binding */ TaskDatePipe; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);



var TaskDatePipe = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(TaskDatePipe, _super);
    function TaskDatePipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskDatePipe.prototype.transform = function (date, format) {
        if (format === void 0) { format = 'mediumDate'; }
        if (date == null) {
            return '?????? ??????????';
        }
        date = new Date(date);
        var currentDate = new Date().getDate();
        if (date.getDate() == currentDate) {
            return '??????????????';
        }
        if (date.getDate() == currentDate - 1) {
            return '??????????';
        }
        if (date.getDate() == currentDate + 1) {
            return '????????????';
        }
        return new _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe('ru-UA').transform(date, format);
    };
    TaskDatePipe.??fac = function () { var ??TaskDatePipe_BaseFactory; return function TaskDatePipe_Factory(t) { return (??TaskDatePipe_BaseFactory || (??TaskDatePipe_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getInheritedFactory"](TaskDatePipe)))(t || TaskDatePipe); }; }();
    TaskDatePipe.??pipe = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????definePipe"]({ name: "taskDate", type: TaskDatePipe, pure: true });
    return TaskDatePipe;
}(_angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe));



/***/ }),

/***/ 53962:
/*!*************************************************!*\
  !*** ./src/app/service/data-handler.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataHandlerService": function() { return /* binding */ DataHandlerService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var _data_dao_impl_CategoryDAOArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/dao/impl/CategoryDAOArray */ 92487);
/* harmony import */ var _data_dao_impl_PriorityDAOArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/dao/impl/PriorityDAOArray */ 28164);
/* harmony import */ var _data_dao_impl_TaskDAOArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/dao/impl/TaskDAOArray */ 13113);
/* harmony import */ var _data_TestData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/TestData */ 42435);
/* harmony import */ var _model_Category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/Category */ 14041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);







var DataHandlerService = (function () {
    function DataHandlerService() {
        this.tasksSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(_data_TestData__WEBPACK_IMPORTED_MODULE_3__.TestData.tasks);
        this.categoriesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(_data_TestData__WEBPACK_IMPORTED_MODULE_3__.TestData.categories);
        this.taskDaoArray = new _data_dao_impl_TaskDAOArray__WEBPACK_IMPORTED_MODULE_2__.TaskDAOArray();
        this.categoryDaoArray = new _data_dao_impl_CategoryDAOArray__WEBPACK_IMPORTED_MODULE_0__.CategoryDAOArray();
        this.priorityDaoArray = new _data_dao_impl_PriorityDAOArray__WEBPACK_IMPORTED_MODULE_1__.PriorityDAOArray();
        this.categoriesDaoArray = new _data_dao_impl_CategoryDAOArray__WEBPACK_IMPORTED_MODULE_0__.CategoryDAOArray();
        this.fillTasks();
    }
    DataHandlerService.prototype.fillTasks = function () {
        this.tasksSubject.next(_data_TestData__WEBPACK_IMPORTED_MODULE_3__.TestData.tasks);
    };
    DataHandlerService.prototype.fillTasksByCategory = function (category) {
        var tasks = _data_TestData__WEBPACK_IMPORTED_MODULE_3__.TestData.tasks.filter(function (task) { return task.category === category; });
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
    DataHandlerService.prototype.updatePriority = function (priority) {
        return this.priorityDaoArray.update(priority);
    };
    DataHandlerService.prototype.deleteCategory = function (id) {
        return this.categoriesDaoArray.delete(id);
    };
    DataHandlerService.prototype.deletePriority = function (id) {
        return this.priorityDaoArray.delete(id);
    };
    DataHandlerService.prototype.addTask = function (task) {
        return this.taskDaoArray.add(task);
    };
    DataHandlerService.prototype.addCategory = function (title) {
        return this.categoryDaoArray.add(new _model_Category__WEBPACK_IMPORTED_MODULE_4__.Category(null, title));
    };
    DataHandlerService.prototype.addPriority = function (priority) {
        return this.priorityDaoArray.add(priority);
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
    DataHandlerService.??fac = function DataHandlerService_Factory(t) { return new (t || DataHandlerService)(); };
    DataHandlerService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineInjectable"]({ token: DataHandlerService, factory: DataHandlerService.??fac, providedIn: 'root' });
    return DataHandlerService;
}());



/***/ }),

/***/ 95661:
/*!******************************************!*\
  !*** ./src/app/service/intro.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroService": function() { return /* binding */ IntroService; }
/* harmony export */ });
/* harmony import */ var intro_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! intro.js */ 92390);
/* harmony import */ var intro_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(intro_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


var IntroService = (function () {
    function IntroService() {
        this.introJS = intro_js__WEBPACK_IMPORTED_MODULE_0__();
    }
    IntroService.prototype.startIntroJS = function (checkViewed) {
        if (checkViewed === true && localStorage.getItem(IntroService.INTRO_VIEWED_KEY) === IntroService.INTRO_VIEWED_VALUE) {
            return;
        }
        this.introJS.setOptions({
            nextLabel: '????????. >',
            prevLabel: '< ????????.',
            doneLabel: '??????????',
            exitOnEsc: true,
            exitOnOverlayClick: false
        });
        this.introJS.start();
        this.introJS.onexit(function (_) { return localStorage.setItem(IntroService.INTRO_VIEWED_KEY, IntroService.INTRO_VIEWED_VALUE); });
    };
    IntroService.INTRO_VIEWED_KEY = 'intro-viewed';
    IntroService.INTRO_VIEWED_VALUE = 'done';
    IntroService.??fac = function IntroService_Factory(t) { return new (t || IntroService)(); };
    IntroService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: IntroService, factory: IntroService.??fac, providedIn: 'root' });
    return IntroService;
}());



/***/ }),

/***/ 47290:
/*!**********************************************************!*\
  !*** ./src/app/views/categories/categories.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesComponent": function() { return /* binding */ CategoriesComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _dialog_edit_category_dialog_edit_category_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dialog/edit-category-dialog/edit-category-dialog.component */ 21710);
/* harmony import */ var _dialog_OperType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dialog/OperType */ 52871);
/* harmony import */ var _dialog_ModalActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dialog/ModalActions */ 33674);
/* harmony import */ var _service_data_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/data-handler.service */ 53962);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-device-detector */ 1135);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);














function CategoriesComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function CategoriesComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); ctx_r4.searchCategoryTitle = ""; return ctx_r4.search(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function CategoriesComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](2, "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function CategoriesComponent_li_23_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function CategoriesComponent_li_23_mat_icon_5_Template_mat_icon_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r11); var mapValue_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]().$implicit; var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); $event.stopPropagation(); return ctx_r9.openEditDialog(mapValue_r6.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function CategoriesComponent_li_23_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function CategoriesComponent_li_23_Template_li_click_0_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r13); var mapValue_r6 = restoredCtx.$implicit; var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r12.showTasksByCategory(mapValue_r6.key); })("click", function CategoriesComponent_li_23_Template_li_click_0_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r13); var mapValue_r6 = restoredCtx.$implicit; var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r14.showTasksByCategory(mapValue_r6.key); })("mouseleave", function CategoriesComponent_li_23_Template_li_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r13); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r15.showEditIcon(null); })("mouseenter", function CategoriesComponent_li_23_Template_li_mouseenter_0_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r13); var index_r7 = restoredCtx.index; var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r16.showEditIcon(index_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](5, CategoriesComponent_li_23_mat_icon_5_Template, 2, 0, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    var mapValue_r6 = ctx.$implicit;
    var index_r7 = ctx.index;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????classProp"]("active", mapValue_r6.key === ctx_r3.selectedCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](mapValue_r6.key.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx_r3.indexMouseMove === index_r7 || ctx_r3.isMobile || ctx_r3.isTablet);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", mapValue_r6.value, "");
} }
var CategoriesComponent = (function () {
    function CategoriesComponent(dataHandler, dialog, deviceService) {
        this.dataHandler = dataHandler;
        this.dialog = dialog;
        this.deviceService = deviceService;
        this.selectCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.deleteCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.updateCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.addCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.searchCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.isMobile = deviceService.isMobile();
        this.isTablet = deviceService.isTablet();
    }
    Object.defineProperty(CategoriesComponent.prototype, "setCategoryMap", {
        set: function (categoryMap) {
            this.selectedCategoryMap = categoryMap;
        },
        enumerable: false,
        configurable: true
    });
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
        var dialogRef = this.dialog.open(_dialog_edit_category_dialog_edit_category_dialog_component__WEBPACK_IMPORTED_MODULE_0__.EditCategoryDialogComponent, {
            data: [category.title, '???????????????????????????? ??????????????????', _dialog_OperType__WEBPACK_IMPORTED_MODULE_1__.OperType.EDIT],
            width: '400px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === _dialog_ModalActions__WEBPACK_IMPORTED_MODULE_2__.ModalActions.delete) {
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
        var dialogRef = this.dialog.open(_dialog_edit_category_dialog_edit_category_dialog_component__WEBPACK_IMPORTED_MODULE_0__.EditCategoryDialogComponent, { data: ['', '???????????????????? ??????????????????', _dialog_OperType__WEBPACK_IMPORTED_MODULE_1__.OperType.ADD], width: '400px' });
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
    CategoriesComponent.??fac = function CategoriesComponent_Factory(t) { return new (t || CategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_service_data_handler_service__WEBPACK_IMPORTED_MODULE_3__.DataHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__.DeviceDetectorService)); };
    CategoriesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: CategoriesComponent, selectors: [["app-categories"]], inputs: { categories: "categories", selectedCategory: "selectedCategory", setCategoryMap: ["categoryMap", "setCategoryMap"], uncompletedTotal: "uncompletedTotal" }, outputs: { selectCategory: "selectCategory", deleteCategory: "deleteCategory", updateCategory: "updateCategory", addCategory: "addCategory", searchCategory: "searchCategory" }, decls: 26, vars: 9, consts: [["id", "categories"], [1, "logo"], [1, "nav-title"], [1, "add-icon-area"], ["mat-icon-button", "", 1, "add-icon", 3, "click"], [1, "sidebar-wrapper"], [1, "nav"], [1, "search-category-area"], [1, "example-full-width"], ["matInput", "", "maxlength", "256", "placeholder", "\u041F\u043E\u0438\u0441\u043A \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438", 3, "ngModel", "keydown.escape", "keyup", "ngModelChange"], ["inputSearchCategory", ""], ["aria-label", "Clear", "class", "search-category-button size25 gray", "mat-button", "", "mat-icon-button", "", "matSuffix", "", 3, "click", 4, "ngIf"], [1, "nav-item", "category", 3, "click"], [1, "nav-link", "pointer"], [1, "all-category-title"], [1, "uncompleted-count"], [1, "line"], [4, "ngIf"], ["class", "nav-item pointer", 3, "active", "click", "mouseleave", "mouseenter", 4, "ngFor", "ngForOf"], [1, "sidebar-background"], ["aria-label", "Clear", "mat-button", "", "mat-icon-button", "", "matSuffix", "", 1, "search-category-button", "size25", "gray", 3, "click"], [1, "not-found"], [1, "nav-item", "pointer", 3, "click", "mouseleave", "mouseenter"], [1, "nav-link"], [1, "category-title"], [1, "edit-category-icon-area"], ["class", "edit-category-icon", 3, "click", 4, "ngIf"], [1, "edit-category-icon", 3, "click"]], template: function CategoriesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function CategoriesComponent_Template_button_click_5_listener() { return ctx.openAddDialog(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](7, "add");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](9, "ul", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](11, "mat-form-field", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](12, "input", 9, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("keydown.escape", function CategoriesComponent_Template_input_keydown_escape_12_listener() { ctx.searchCategoryTitle = ""; return ctx.search(); })("keyup", function CategoriesComponent_Template_input_keyup_12_listener() { return ctx.search(); })("ngModelChange", function CategoriesComponent_Template_input_ngModelChange_12_listener($event) { return ctx.searchCategoryTitle = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](14, CategoriesComponent_button_14_Template, 3, 0, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](15, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function CategoriesComponent_Template_li_click_15_listener() { return ctx.showTasksByCategory(null); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](16, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](17, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](18, "\u0412\u0441\u0435");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](19, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](21, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](22, CategoriesComponent_div_22_Template, 3, 0, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](23, CategoriesComponent_li_23_Template, 8, 5, "li", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](24, "keyvalue");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](25, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????reference"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngModel", ctx.searchCategoryTitle);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", _r0.value.trim().length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????classProp"]("active", ctx.selectedCategory);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](ctx.uncompletedTotal);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.categories.length === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](24, 7, ctx.selectedCategoryMap));
        } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.KeyValuePipe], styles: [".pointer[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n.edit-category-icon-area[_ngcontent-%COMP%]{\n    width: 15%;\n    display: inline-block;\n    text-align: left;\n    font-size: 13px;\n}\n.category-title[_ngcontent-%COMP%]{\n    width: 70%;\n    display: inline-block;\n    font-size: 16px;\n}\n.all-category-title[_ngcontent-%COMP%]{\n    width: 85%;\n    display: inline-block;\n    font-size: 16px;\n}\n.edit-category-icon[_ngcontent-%COMP%]{\n    color: #dadada;\n}\n.add-icon[_ngcontent-%COMP%]{\n    cursor: pointer;\n    font-size: 25px;\n    vertical-align: middle;\n}\nspan.add-icon-area[_ngcontent-%COMP%]{\n    width: 15%;\n    display: inline-block;\n    text-align: left;\n}\n#categories[_ngcontent-%COMP%]{\n    width: 100%;\n    overflow-x: hidden;\n}\n.nav-title[_ngcontent-%COMP%]{\n    width: 85%;\n    display: inline-block;\n    font-size: 20px;\n    text-align: center;\n    vertical-align: middle;\n}\n.search-category-area[_ngcontent-%COMP%] {\n    padding-left: 20px;\n    padding-right: 20px;\n    border-radius: 6px;\n}\n.search-category-button[_ngcontent-%COMP%] {\n    margin-left: 10px;\n    font-size: 25px;\n}\n.sidebar-background[_ngcontent-%COMP%] {\n    background-image: url('sidebar-1.jpg');\n}\n.sidebar-background[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n    padding-bottom: 0;\n}\n.uncompleted-count[_ngcontent-%COMP%] {\n    background-color: #eaeaea;\n    border-radius: 3px;\n    padding: 5px;\n    color: black;\n    width: 15%;\n    display: inline-block;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksc0NBQTBEO0FBQzlEO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJjYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9pbnRlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmVkaXQtY2F0ZWdvcnktaWNvbi1hcmVhe1xuICAgIHdpZHRoOiAxNSU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuLmNhdGVnb3J5LXRpdGxle1xuICAgIHdpZHRoOiA3MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5hbGwtY2F0ZWdvcnktdGl0bGV7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuLmVkaXQtY2F0ZWdvcnktaWNvbntcbiAgICBjb2xvcjogI2RhZGFkYTtcbn1cbi5hZGQtaWNvbntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5zcGFuLmFkZC1pY29uLWFyZWF7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbiNjYXRlZ29yaWVze1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbi5uYXYtdGl0bGV7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLnNlYXJjaC1jYXRlZ29yeS1hcmVhIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4uc2VhcmNoLWNhdGVnb3J5LWJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuLnNpZGViYXItYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9zaWRlYmFyLTEuanBnXCIpO1xufVxuLnNpZGViYXItYmFja2dyb3VuZCAubWF0LWZvcm0tZmllbGQge1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xufVxuLnVuY29tcGxldGVkLWNvdW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHdpZHRoOiAxNSU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"] });
    return CategoriesComponent;
}());



/***/ }),

/***/ 50259:
/*!**************************************************!*\
  !*** ./src/app/views/footer/footer.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": function() { return /* binding */ FooterComponent; }
/* harmony export */ });
/* harmony import */ var _dialog_about_about_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dialog/about/about.dialog.component */ 34944);
/* harmony import */ var _dialog_me_me_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dialog/me/me.component */ 84749);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-device-detector */ 1135);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);






var _c0 = function (a0, a1) { return { "text-center": a0, "container-fluid": a1 }; };
var FooterComponent = (function () {
    function FooterComponent(dialog, deviceService) {
        this.dialog = dialog;
        this.deviceService = deviceService;
        this.git = 'https://github.com/olekprot';
        this.isMobile = deviceService.isMobile();
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.year = new Date();
    };
    FooterComponent.prototype.openAboutDialog = function () {
        this.dialog.open(_dialog_about_about_dialog_component__WEBPACK_IMPORTED_MODULE_0__.AboutDialogComponent, {
            autoFocus: false,
            data: {
                dialogTitle: '???????????? TODO-List',
                message: '?????? ???????????????? ????????????. ???????????????????? ?????????????? ???????????????????? ?? ???????????????? ?? ??????????????????????.' +
                    '?????????? ?????????????????? ???????????????????? ???? ???????????????????? ??????????.'
            },
            width: '400px'
        });
    };
    FooterComponent.prototype.openAboutMe = function () {
        this.dialog.open(_dialog_me_me_component__WEBPACK_IMPORTED_MODULE_1__.MeComponent, {
            autoFocus: false,
            width: '300px',
        });
    };
    FooterComponent.??fac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__.DeviceDetectorService)); };
    FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 13, vars: 5, consts: [["data-step", "5", "data-intro", "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043F\u0440\u043E \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430", "data-position", "top", 1, "footer", 3, "ngClass"], [1, "container-fluid"], [1, "float-left"], [1, "link", 3, "click"], [1, "link", 3, "href"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "footer", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "nav", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function FooterComponent_Template_a_click_5_listener() { return ctx.openAboutMe(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "\u041F\u0440\u043E \u043C\u0435\u043D\u044F");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, "My GIT");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function FooterComponent_Template_a_click_11_listener() { return ctx.openAboutDialog(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12, "\u041E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction2"](2, _c0, ctx.isMobile, !ctx.isMobile));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("href", ctx.git, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????sanitizeUrl"]);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
    return FooterComponent;
}());



/***/ }),

/***/ 3841:
/*!**************************************************!*\
  !*** ./src/app/views/header/header.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": function() { return /* binding */ HeaderComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _dialog_settings_dialog_settings_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dialog/settings-dialog/settings-dialog.component */ 84218);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _service_intro_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/intro.service */ 95661);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-device-detector */ 1135);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);









function HeaderComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function HeaderComponent_p_7_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r4.onToggleStat(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\u0421\u043A\u0440\u044B\u0442\u044C \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function HeaderComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function HeaderComponent_p_8_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r6.onToggleStat(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function HeaderComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function HeaderComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function HeaderComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r9); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r8.showIntroHelp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "help");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
var HeaderComponent = (function () {
    function HeaderComponent(dialog, introService, deviceDetector) {
        this.dialog = dialog;
        this.introService = introService;
        this.deviceDetector = deviceDetector;
        this.toggleStat = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.toggleMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.isMobile = deviceDetector.isMobile();
    }
    HeaderComponent.prototype.onToggleStat = function () {
        this.toggleStat.emit(!this.showStat);
    };
    HeaderComponent.prototype.showSettings = function () {
        this.dialog.open(_dialog_settings_dialog_settings_dialog_component__WEBPACK_IMPORTED_MODULE_0__.SettingsDialogComponent, {
            autoFocus: false,
            width: '500px'
        });
    };
    HeaderComponent.prototype.showIntroHelp = function () {
        this.introService.startIntroJS(false);
    };
    HeaderComponent.prototype.onToggleMenu = function () {
        this.toggleMenu.emit();
    };
    HeaderComponent.??fac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_service_intro_service__WEBPACK_IMPORTED_MODULE_1__.IntroService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__.DeviceDetectorService)); };
    HeaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { categoryName: "categoryName", showStat: "showStat" }, outputs: { toggleStat: "toggleStat", toggleMenu: "toggleMenu" }, decls: 15, vars: 5, consts: [["data-step", "2", "data-intro", "\u041F\u0430\u043D\u0435\u043B\u044C \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u043C", "data-position", "top", 1, "row", "settings"], [1, "col-8", "text-left", "align-self-top"], ["mat-icon-button", "", "type", "button", 3, "click"], [1, "navbar-brand"], ["class", "link navbar-brand", 3, "click", 4, "ngIf"], ["class", "col-2 text-right align-self-top", 4, "ngIf"], [1, "col-2", "text-right", "align-self-top"], ["mat-icon-button", "", 1, "header-icon", 3, "click"], ["mat-icon-button", "", "class", "header-icon", 3, "click", 4, "ngIf"], [1, "link", "navbar-brand", 3, "click"], ["mat-icon-button", "", 1, "header-icon"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function HeaderComponent_Template_button_click_2_listener() { return ctx.onToggleMenu(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](7, HeaderComponent_p_7_Template, 2, 0, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](8, HeaderComponent_p_8_Template, 2, 0, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](9, HeaderComponent_div_9_Template, 7, 0, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function HeaderComponent_Template_button_click_11_listener() { return ctx.showSettings(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](13, "settings");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](14, HeaderComponent_button_14_Template, 3, 0, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx.categoryName);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.showStat && !ctx.isMobile);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx.showStat && !ctx.isMobile);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx.isMobile);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx.isMobile);
        } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf], styles: [".header-icon[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    margin-right: 20px;\r\n}\r\n\r\n.settings[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    margin-right: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWljb24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uc2V0dGluZ3MgYnV0dG9ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4iXX0= */"] });
    return HeaderComponent;
}());



/***/ }),

/***/ 27021:
/*!**********************************************************!*\
  !*** ./src/app/views/priorities/priorities.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrioritiesComponent": function() { return /* binding */ PrioritiesComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _model_Priority__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/Priority */ 48825);
/* harmony import */ var _dialog_edit_category_dialog_edit_category_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dialog/edit-category-dialog/edit-category-dialog.component */ 21710);
/* harmony import */ var _dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dialog/confirm-dialog/confirm-dialog.component */ 29980);
/* harmony import */ var _dialog_edit_priority_dialog_edit_priority_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dialog/edit-priority-dialog/edit-priority-dialog.component */ 7037);
/* harmony import */ var _dialog_OperType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dialog/OperType */ 52871);
/* harmony import */ var _dialog_ModalActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dialog/ModalActions */ 33674);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-color-picker */ 61922);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 76627);












function PrioritiesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](3, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function PrioritiesComponent_div_0_Template_a_click_3_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r4); var priority_r1 = restoredCtx.$implicit; var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](); return ctx_r3.onEditPriority(priority_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](6, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("colorPickerChange", function PrioritiesComponent_div_0_Template_span_colorPickerChange_6_listener($event) { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r4); var priority_r1 = restoredCtx.$implicit; return priority_r1.color = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](8, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function PrioritiesComponent_div_0_Template_p_click_8_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r4); var priority_r1 = restoredCtx.$implicit; var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](); return ctx_r6.delete(priority_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](10, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](12, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function PrioritiesComponent_div_0_Template_p_click_12_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r4); var priority_r1 = restoredCtx.$implicit; var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](); return ctx_r7.onEditPriority(priority_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](14, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    var priority_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", priority_r1.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????styleProp"]("background", priority_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("colorPicker", priority_r1.color);
} }
var PrioritiesComponent = (function () {
    function PrioritiesComponent(dialog) {
        this.dialog = dialog;
        this.deletePriority = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.updatePriority = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.addPriority = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    }
    PrioritiesComponent.prototype.delete = function (priority) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmDialogComponent, {
            maxWidth: '500px',
            data: {
                dialogTitle: '?????????????????????? ????????????????',
                message: "\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E: \"" + priority.title + "\"? (\u0437\u0430\u0434\u0430\u0447\u0430\u043C \u043F\u0440\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u0441\u044F \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 '\u0411\u0435\u0437 \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u0430')"
            },
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.deletePriority.emit(priority);
            }
        });
    };
    PrioritiesComponent.prototype.onAddPriority = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialog_edit_category_dialog_edit_category_dialog_component__WEBPACK_IMPORTED_MODULE_1__.EditCategoryDialogComponent, {
            data: ['', '???????????????????? ????????????????????', _dialog_OperType__WEBPACK_IMPORTED_MODULE_4__.OperType.ADD],
            width: '400px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                var newPriority = new _model_Priority__WEBPACK_IMPORTED_MODULE_0__.Priority(null, result, PrioritiesComponent.defaultColor);
                _this.addPriority.emit(newPriority);
            }
        });
    };
    PrioritiesComponent.prototype.onEditPriority = function (priority) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialog_edit_priority_dialog_edit_priority_dialog_component__WEBPACK_IMPORTED_MODULE_3__.EditPriorityDialogComponent, { data: [priority.title, '???????????????????????????? ????????????????????', _dialog_OperType__WEBPACK_IMPORTED_MODULE_4__.OperType.EDIT] });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === _dialog_ModalActions__WEBPACK_IMPORTED_MODULE_5__.ModalActions.delete) {
                _this.deletePriority.emit(priority);
                return;
            }
            if (result) {
                priority.title = result;
                _this.updatePriority.emit(priority);
                return;
            }
        });
    };
    PrioritiesComponent.defaultColor = '#fff';
    PrioritiesComponent.??fac = function PrioritiesComponent_Factory(t) { return new (t || PrioritiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog)); };
    PrioritiesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineComponent"]({ type: PrioritiesComponent, selectors: [["app-priorities"]], inputs: { priorities: "priorities" }, outputs: { deletePriority: "deletePriority", updatePriority: "updatePriority", addPriority: "addPriority" }, decls: 3, vars: 1, consts: [["class", "vertical-middle priorities", 4, "ngFor", "ngForOf"], [1, "link", "little", 3, "click"], [1, "vertical-middle", "priorities"], [1, "row", "align-self-baseline"], [1, "col-7"], [1, "pointer", 3, "click"], [1, "col-2", "text-right"], [1, "color-circle", 3, "colorPicker", "colorPickerChange"], [1, "col-1", "text-left"], [1, "pointer", "gray", 3, "click"]], template: function PrioritiesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](0, PrioritiesComponent_div_0_Template, 15, 4, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "p", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function PrioritiesComponent_Template_p_click_1_listener() { return ctx.onAddPriority(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngForOf", ctx.priorities);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, ngx_color_picker__WEBPACK_IMPORTED_MODULE_9__.ColorPickerDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon], styles: [".priority-titles[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n    width: 150px;\r\n    float: left;\r\n}\r\n.priority-color[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n    width: 40px;\r\n    float: left\r\n}\r\n.color-circle[_ngcontent-%COMP%] {\r\n    height: 25px;\r\n    width: 25px;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n    border: 1px solid #dadada;\r\n}\r\n.priorities[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 0 !important;\r\n}\r\n.little[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    color: rgba(99, 99, 99, 0.98);\r\n    margin-top: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW9yaXRpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYO0FBQ0o7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoicHJpb3JpdGllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW9yaXR5LXRpdGxlcyB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLnByaW9yaXR5LWNvbG9yIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGZsb2F0OiBsZWZ0XHJcbn1cclxuLmNvbG9yLWNpcmNsZSB7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYWRhZGE7XHJcbn1cclxuLnByaW9yaXRpZXMgcCB7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxufVxyXG4ubGl0dGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiByZ2JhKDk5LCA5OSwgOTksIDAuOTgpO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"] });
    return PrioritiesComponent;
}());



/***/ }),

/***/ 3916:
/*!*************************************************************!*\
  !*** ./src/app/views/stat/stat-card/stat-card.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatCardComponent": function() { return /* binding */ StatCardComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 38583);


function StatCardComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\u0438\u0437 ", ctx_r0.countTotal, "");
} }
var _c0 = function (a0) { return { "completed-card": a0 }; };
var StatCardComponent = (function () {
    function StatCardComponent() {
        this.completed = false;
    }
    StatCardComponent.??fac = function StatCardComponent_Factory(t) { return new (t || StatCardComponent)(); };
    StatCardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: StatCardComponent, selectors: [["app-stat-card"]], inputs: { completed: "completed", iconName: "iconName", count1: "count1", countTotal: "countTotal", title: "title" }, decls: 13, vars: 7, consts: [[1, "card", "card-stats", 3, "ngClass"], [1, "card-header", "card-header-warning", "card-header-icon"], [1, "card-icon"], [1, "material-icons"], [1, "card-category"], [1, "card-title"], [4, "ngIf"], [1, "card-footer"], [1, "stats"], [1, "stat-card-title"]], template: function StatCardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h3", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, StatCardComponent_span_8_Template, 2, 1, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c0, ctx.completed));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.iconName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.count1, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.countTotal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.title);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".card-title[_ngcontent-%COMP%] {\r\n    font-size: 35px;\r\n}\r\n.stat-card-title[_ngcontent-%COMP%]{\r\n    margin-bottom: 0;\r\n    font-size: 16px;\r\n}\r\n.completed-card[_ngcontent-%COMP%] {\r\n    border: 3px solid #93d893 !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXQtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG9DQUFvQztBQUN4QyIsImZpbGUiOiJzdGF0LWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxufVxyXG4uc3RhdC1jYXJkLXRpdGxle1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uY29tcGxldGVkLWNhcmQge1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzkzZDg5MyAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });
    return StatCardComponent;
}());



/***/ }),

/***/ 51014:
/*!**********************************************!*\
  !*** ./src/app/views/stat/stat.component.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatComponent": function() { return /* binding */ StatComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _stat_card_stat_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stat-card/stat-card.component */ 3916);



function StatComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "app-stat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "app-stat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "app-stat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](5, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](6, "app-stat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](7, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("count1", ctx_r0.completeTasksInCategory)("countTotal", ctx_r0.totalTasksInCategory)("completed", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("count1", ctx_r0.uncompleteTasksInCategory)("countTotal", ctx_r0.totalTasksInCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("count1", ctx_r0.completeTasksInCategory ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](5, 8, ctx_r0.completeTasksInCategory / ctx_r0.totalTasksInCategory) : "0 %")("completed", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("count1", ctx_r0.uncompleteTasksInCategory ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](7, 10, ctx_r0.uncompleteTasksInCategory / ctx_r0.totalTasksInCategory) : "0 %");
} }
var StatComponent = (function () {
    function StatComponent() {
    }
    StatComponent.??fac = function StatComponent_Factory(t) { return new (t || StatComponent)(); };
    StatComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: StatComponent, selectors: [["app-stat"]], inputs: { totalTasksInCategory: "totalTasksInCategory", completeTasksInCategory: "completeTasksInCategory", uncompleteTasksInCategory: "uncompleteTasksInCategory", showStat: "showStat" }, decls: 1, vars: 1, consts: [["data-step", "3", "data-intro", "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0437\u0430\u0434\u0430\u0447", "data-position", "top", 4, "ngIf"], ["data-step", "3", "data-intro", "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0437\u0430\u0434\u0430\u0447", "data-position", "top"], [1, "row"], ["title", "\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438", "iconName", "done", 1, "col-lg-3", "col-md-6", "col-sm-6", 3, "count1", "countTotal", "completed"], ["title", "\u041D\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438", "iconName", "thumb_down_alt", 1, "col-lg-3", "col-md-6", "col-sm-6", 3, "count1", "countTotal"], ["title", "\u041F\u0440\u043E\u0446\u0435\u043D\u0442 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447", "iconName", "poll", 1, "col-lg-3", "col-md-6", "col-sm-6", "completed-card", 3, "count1", "completed"], ["title", "\u041F\u0440\u043E\u0446\u0435\u043D\u0442 \u043D\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447", "iconName", "thumb_down_alt", 1, "col-lg-3", "col-md-6", "col-sm-6", 3, "count1"]], template: function StatComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](0, StatComponent_div_0_Template, 8, 12, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.showStat);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _stat_card_stat_card_component__WEBPACK_IMPORTED_MODULE_0__.StatCardComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.PercentPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0LmNvbXBvbmVudC5jc3MifQ== */"] });
    return StatComponent;
}());



/***/ }),

/***/ 58451:
/*!************************************************!*\
  !*** ./src/app/views/tasks/tasks.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TasksComponent": function() { return /* binding */ TasksComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dialog/confirm-dialog/confirm-dialog.component */ 29980);
/* harmony import */ var _dialog_edit_task_dialog_edit_task_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dialog/edit-task-dialog/edit-task-dialog.component */ 35362);
/* harmony import */ var _model_Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/Task */ 21050);
/* harmony import */ var _dialog_ModalActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dialog/ModalActions */ 33674);
/* harmony import */ var _service_data_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/data-handler.service */ 53962);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-device-detector */ 1135);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var _pipe_task_date_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipe/task-date.pipe */ 66914);

























function TasksComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function TasksComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](); ctx_r10.searchTaskText = ""; return ctx_r10.onFilterByTitle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function TasksComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function TasksComponent_button_16_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r13); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](); $event.stopPropagation(); return ctx_r12.onFilterByStatus(null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function TasksComponent_mat_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    var priority_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("value", priority_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](priority_r14.title);
} }
function TasksComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function TasksComponent_button_23_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r16); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](); $event.stopPropagation(); return ctx_r15.onFilterByPriority(null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function TasksComponent_button_27_Template(rf, ctx) { if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function TasksComponent_button_27_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r18); var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](); $event.stopPropagation(); ctx_r17.onFilterByStatus(null); ctx_r17.onFilterByPriority(null); ctx_r17.searchTaskText = ""; return ctx_r17.onFilterByTitle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, " \u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function TasksComponent_div_32_div_4_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](0, "th", 50);
} }
function TasksComponent_div_32_div_4_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](0, "td", 51);
} if (rf & 2) {
    var task_r39 = ctx.$implicit;
    var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????styleProp"]("background-color", ctx_r22.getPriorityColor(task_r39));
} }
function TasksComponent_div_32_div_4_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](0, "th", 50);
} }
function TasksComponent_div_32_div_4_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    var index_r40 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", index_r40 + 1, " ");
} }
function TasksComponent_div_32_div_4_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, " \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function TasksComponent_div_32_div_4_td_10_Template(rf, ctx) { if (rf & 1) {
    var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function TasksComponent_div_32_div_4_td_10_Template_td_click_0_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r43); var task_r41 = restoredCtx.$implicit; var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r42.openEditTaskDialog(task_r41); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    var task_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????classProp"]("completed", task_r41.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", task_r41.title, " ");
} }
function TasksComponent_div_32_div_4_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, " \u0421\u0440\u043E\u043A");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
var _c0 = function (a0, a1) { return { "completed": a0, "novalue": a1 }; };
function TasksComponent_div_32_div_4_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](2, "taskDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    var task_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction2"](4, _c0, task_r44.completed, task_r44.date === null));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](2, 2, task_r44.date), " ");
} }
function TasksComponent_div_32_div_4_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function TasksComponent_div_32_div_4_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    var task_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction2"](2, _c0, task_r45.completed, task_r45.priority === null));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", task_r45.priority ? task_r45.priority.title : "\u0411\u0435\u0437 \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u0430", " ");
} }
function TasksComponent_div_32_div_4_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
var _c1 = function (a0, a1, a2) { return { "completed": a0, "novalue": a1, "link": a2 }; };
function TasksComponent_div_32_div_4_td_19_Template(rf, ctx) { if (rf & 1) {
    var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function TasksComponent_div_32_div_4_td_19_Template_td_click_0_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r48); var task_r46 = restoredCtx.$implicit; var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return !task_r46.completed && task_r46.category && ctx_r47.onSelectCategory(task_r46.category); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    var task_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction3"](2, _c1, task_r46.completed, task_r46.category === null, !task_r46.completed && task_r46.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", task_r46.category ? task_r46.category.title : "\u0411\u0435\u0437 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438", " ");
} }
function TasksComponent_div_32_div_4_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](0, "th", 50);
} }
function TasksComponent_div_32_div_4_td_22_Template(rf, ctx) { if (rf & 1) {
    var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function TasksComponent_div_32_div_4_td_22_Template_button_click_1_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r51); var task_r49 = restoredCtx.$implicit; var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r50.openDeleteDialog(task_r49); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "mat-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](4, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function TasksComponent_div_32_div_4_td_22_Template_button_click_4_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r51); var task_r49 = restoredCtx.$implicit; var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r52.openEditTaskDialog(task_r49); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](5, "mat-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    var task_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????classProp"]("completed", task_r49.completed);
} }
function TasksComponent_div_32_div_4_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](0, "th", 50);
} }
function TasksComponent_div_32_div_4_td_25_Template(rf, ctx) { if (rf & 1) {
    var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "mat-checkbox", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function TasksComponent_div_32_div_4_td_25_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function TasksComponent_div_32_div_4_td_25_Template_mat_checkbox_change_1_listener($event) { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r56); var task_r53 = restoredCtx.$implicit; var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return $event ? ctx_r55.onToggleStatus(task_r53) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    var task_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("checked", task_r53.completed);
} }
function TasksComponent_div_32_div_4_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](0, "tr", 64);
} }
function TasksComponent_div_32_div_4_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](0, "tr", 65);
} }
var _c2 = function () { return [10, 20, 50, 100]; };
function TasksComponent_div_32_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "table", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](2, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](3, TasksComponent_div_32_div_4_th_3_Template, 1, 0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](4, TasksComponent_div_32_div_4_td_4_Template, 1, 2, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](5, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](6, TasksComponent_div_32_div_4_th_6_Template, 1, 0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](7, TasksComponent_div_32_div_4_td_7_Template, 2, 1, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](8, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](9, TasksComponent_div_32_div_4_th_9_Template, 2, 0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](10, TasksComponent_div_32_div_4_td_10_Template, 2, 3, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](11, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](12, TasksComponent_div_32_div_4_th_12_Template, 2, 0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](13, TasksComponent_div_32_div_4_td_13_Template, 3, 7, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](14, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](15, TasksComponent_div_32_div_4_th_15_Template, 2, 0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](16, TasksComponent_div_32_div_4_td_16_Template, 2, 5, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](17, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](18, TasksComponent_div_32_div_4_th_18_Template, 2, 0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](19, TasksComponent_div_32_div_4_td_19_Template, 2, 6, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](20, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](21, TasksComponent_div_32_div_4_th_21_Template, 1, 0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](22, TasksComponent_div_32_div_4_td_22_Template, 7, 2, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](23, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](24, TasksComponent_div_32_div_4_th_24_Template, 1, 0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](25, TasksComponent_div_32_div_4_td_25_Template, 2, 1, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](26, TasksComponent_div_32_div_4_tr_26_Template, 1, 0, "tr", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](27, TasksComponent_div_32_div_4_tr_27_Template, 1, 0, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](28, "mat-paginator", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("dataSource", ctx_r19.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("matHeaderRowDef", ctx_r19.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("matRowDefColumns", ctx_r19.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction0"](4, _c2));
} }
function TasksComponent_div_32_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2, "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function TasksComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "h4", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3, "\u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u0434\u0430\u0447");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](4, TasksComponent_div_32_div_4_Template, 29, 5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](5, TasksComponent_div_32_div_5_Template, 3, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r7.tasks && ctx_r7.tasks.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r7.tasks && ctx_r7.tasks.length === 0);
} }
function TasksComponent_div_33_div_1_button_8_Template(rf, ctx) { if (rf & 1) {
    var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function TasksComponent_div_33_div_1_button_8_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r66); var task_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]().$implicit; var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2); $event.stopPropagation(); return ctx_r64.onToggleStatus(task_r59); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "mat-icon", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function TasksComponent_div_33_div_1_button_8_Template_mat_icon_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r66); var task_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]().$implicit; var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2); $event.stopPropagation(); return ctx_r67.onToggleStatus(task_r59); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2, " check_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function TasksComponent_div_33_div_1_button_9_Template(rf, ctx) { if (rf & 1) {
    var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function TasksComponent_div_33_div_1_button_9_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r71); var task_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]().$implicit; var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2); $event.stopPropagation(); return ctx_r69.onToggleStatus(task_r59); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "mat-icon", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
var _c3 = function (a0, a1) { return { "priority": a0, "completed": a1 }; };
function TasksComponent_div_33_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    var task_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]().$implicit;
    var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????styleProp"]("background-color", ctx_r63.getMobilePriorityBgColor(task_r59));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction2"](4, _c3, !task_r59.completed, task_r59.completed));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", task_r59.priority.title, " ");
} }
var _c4 = function (a0) { return { "completed": a0 }; };
var _c5 = function (a0) { return { "background-completed": a0 }; };
var _c6 = function (a0) { return { "category": a0 }; };
function TasksComponent_div_33_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function TasksComponent_div_33_div_1_Template_div_click_1_listener($event) { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r74); var task_r59 = restoredCtx.$implicit; var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2); $event.stopPropagation(); return ctx_r73.openEditTaskDialog(task_r59); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](2, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](4, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](5, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](7, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](8, TasksComponent_div_33_div_1_button_8_Template, 3, 0, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](9, TasksComponent_div_33_div_1_button_9_Template, 3, 0, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](10, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](11, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](12, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](13, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](15, TasksComponent_div_33_div_1_div_15_Template, 3, 7, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](16, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](18, "taskDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    var task_r59 = ctx.$implicit;
    var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction1"](18, _c4, task_r59.completed));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction1"](20, _c5, task_r59.completed));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????styleProp"]("background-color", ctx_r58.getPriorityColor(task_r59));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction1"](22, _c5, task_r59.completed));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????classProp"]("completed", task_r59.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](task_r59.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", !task_r59.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", task_r59.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction1"](24, _c4, task_r59.completed));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction1"](26, _c6, !task_r59.completed && task_r59.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", task_r59.category ? task_r59.category.title : "\u0411\u0435\u0437 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", task_r59.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction1"](28, _c4, task_r59.completed));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](18, 16, task_r59.date), " ");
} }
function TasksComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](1, TasksComponent_div_33_div_1_Template, 19, 30, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngForOf", ctx_r8.tasks);
} }
function TasksComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2, "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
var TasksComponent = (function () {
    function TasksComponent(dataHandler, dialog, deviceService) {
        this.dataHandler = dataHandler;
        this.dialog = dialog;
        this.deviceService = deviceService;
        this.displayedColumns = ['color', 'id', 'title', 'date', 'priority', 'category', 'operations', 'select'];
        this.selectedStatusFilter = null;
        this.selectedPriorityFilter = null;
        this.deleteTask = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.updateTask = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.selectCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.filterByTitle = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.filterByStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.filterByPriority = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.addTask = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.isMobile = this.deviceService.isMobile();
    }
    Object.defineProperty(TasksComponent.prototype, "setTasks", {
        set: function (tasks) {
            this.tasks = tasks;
            this.fillTable();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TasksComponent.prototype, "setPriorities", {
        set: function (priorities) {
            this.priorities = priorities;
        },
        enumerable: false,
        configurable: true
    });
    TasksComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource();
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
        var dialogRef = this.dialog.open(_dialog_edit_task_dialog_edit_task_dialog_component__WEBPACK_IMPORTED_MODULE_1__.EditTaskDialogComponent, {
            autoFocus: false,
            data: [task, '?????????????????????????? ????????????']
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === _dialog_ModalActions__WEBPACK_IMPORTED_MODULE_3__.ModalActions.delete) {
                _this.deleteTask.emit(task);
                return;
            }
            if (result === _dialog_ModalActions__WEBPACK_IMPORTED_MODULE_3__.ModalActions.complete) {
                task.completed = true;
                _this.updateTask.emit(task);
            }
            if (result === _dialog_ModalActions__WEBPACK_IMPORTED_MODULE_3__.ModalActions.activate) {
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
        var dialogRef = this.dialog.open(_dialog_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogComponent, {
            maxWidth: '500px',
            data: { dialogTitle: '?????????????????????? ????????????????', message: "\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443: \"" + task.title + "\"?" },
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
        var task = new _model_Task__WEBPACK_IMPORTED_MODULE_2__.Task(null, '', false, null, this.selectedCategory);
        var dialogRef = this.dialog.open(_dialog_edit_task_dialog_edit_task_dialog_component__WEBPACK_IMPORTED_MODULE_1__.EditTaskDialogComponent, { data: [task, '???????????????????? ????????????'] });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.addTask.emit(task);
            }
        });
    };
    TasksComponent.prototype.getMobilePriorityBgColor = function (task) {
        if (task.priority != null && !task.completed) {
            return task.priority.color;
        }
        return 'none';
    };
    TasksComponent.??fac = function TasksComponent_Factory(t) { return new (t || TasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_service_data_handler_service__WEBPACK_IMPORTED_MODULE_4__.DataHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_9__.DeviceDetectorService)); };
    TasksComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineComponent"]({ type: TasksComponent, selectors: [["app-tasks"]], viewQuery: function TasksComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????viewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????viewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, 5);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????loadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????loadQuery"]()) && (ctx.sort = _t.first);
        } }, inputs: { setTasks: ["tasks", "setTasks"], setPriorities: ["priorities", "setPriorities"], selectedCategory: "selectedCategory" }, outputs: { deleteTask: "deleteTask", updateTask: "updateTask", selectCategory: "selectCategory", filterByTitle: "filterByTitle", filterByStatus: "filterByStatus", filterByPriority: "filterByPriority", addTask: "addTask" }, decls: 35, vars: 15, consts: [[1, "row"], [1, "col-md-3", "col-sm-12"], ["matInput", "", "placeholder", "\u041F\u043E\u0438\u0441\u043A \u0432 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438", 3, "ngModel", "keydown.escape", "keyup", "ngModelChange"], ["filterInput", ""], ["aria-label", "Clear", "class", "clear-icon size25 gray", "mat-button", "", "mat-icon-button", "", "matSuffix", "", 3, "click", 4, "ngIf"], ["placeholder", "\u0424\u0438\u043B\u044C\u0442\u0440 \u043F\u043E \u0441\u0442\u0430\u0442\u0443\u0441\u0443", 3, "value", "valueChange"], ["statusFilter", ""], [3, "value"], ["placeholder", "\u0424\u0438\u043B\u044C\u0442\u0440 \u043F\u043E \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u0430\u043C", 3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "clear-icon size25 gray", "matSuffix", "", "mat-icon-button", "", "mat-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], [1, "col-md-3", "col-sm-12", "text-right"], [1, "row", "padding-top-10"], [1, "text-left", "col-6"], ["class", "nopadding-left", "matSuffix", "", "mat-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], [1, "text-right", "col-6"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "col-md-12", "task-list"], ["class", "card", 4, "ngIf"], [4, "ngIf"], ["aria-label", "Clear", "mat-button", "", "mat-icon-button", "", "matSuffix", "", 1, "clear-icon", "size25", "gray", 3, "click"], ["matSuffix", "", "mat-icon-button", "", "mat-button", "", "aria-label", "Clear", 1, "clear-icon", "size25", "gray", 3, "click"], ["matSuffix", "", "mat-button", "", "aria-label", "Clear", 1, "nopadding-left", 3, "click"], [1, "card"], [1, "card-header", "card-header-warning"], [1, "card-title"], ["class", "card-body table-responsive", 4, "ngIf"], [1, "card-body", "table-responsive"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "color"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "col-color", "mat-cell", "", 3, "background-color", 4, "matCellDef"], ["matColumnDef", "id"], ["class", "col-id", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "title"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "col-title pointer", "mat-cell", "", 3, "completed", "click", 4, "matCellDef"], ["matColumnDef", "date"], ["class", "col-date", "mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["matColumnDef", "priority"], ["class", "col-priority", "mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["matColumnDef", "category"], ["class", "col-category", "mat-cell", "", 3, "ngClass", "click", 4, "matCellDef"], ["matColumnDef", "operations"], ["class", "col-operations", "mat-cell", "", 3, "completed", 4, "matCellDef"], ["matColumnDef", "select"], ["class", "col-select text-right", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", "", 1, "col-color"], ["mat-cell", "", 1, "col-id"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "col-title", "pointer", 3, "click"], ["mat-cell", "", 1, "col-date", 3, "ngClass"], ["mat-cell", "", 1, "col-priority", 3, "ngClass"], ["mat-cell", "", 1, "col-category", 3, "ngClass", "click"], ["mat-cell", "", 1, "col-operations"], ["mat-icon-button", "", 1, "delete-icon", 3, "click"], ["aria-hidden", "false"], ["mat-icon-button", "", 1, "edit-icon", 3, "click"], ["mat-cell", "", 1, "col-select", "text-right"], [3, "checked", "click", "change"], ["mat-header-row", ""], ["mat-row", ""], [1, "not_found"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "card", "card-mobile", 3, "ngClass", "click"], [1, "mobile-priority-top", 3, "ngClass"], [1, "mobile-title-inner", "col-9", "col-md-10", "align-top"], [1, "mobile-title"], [1, "col-2", "col-md-1", "align-top", "mobile-check", "text-right"], ["class", "nowidth", "mat-icon-button", "", 3, "click", 4, "ngIf"], [1, "mobile-info-inner", "col-12", "align-top"], [1, "mobile-category", 3, "ngClass"], ["class", "mobile-priority", 4, "ngIf"], [1, "mobile-date", 3, "ngClass"], ["mat-icon-button", "", 1, "nowidth", 3, "click"], [1, "check-icon-notcompleted", 3, "click"], [1, "check-icon-completed"], [1, "mobile-priority"], [1, "not-found"]], template: function TasksComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](3, "input", 2, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("keydown.escape", function TasksComponent_Template_input_keydown_escape_3_listener() { ctx.searchTaskText = ""; return ctx.onFilterByTitle(); })("keyup", function TasksComponent_Template_input_keyup_3_listener() { return ctx.onFilterByTitle(); })("ngModelChange", function TasksComponent_Template_input_ngModelChange_3_listener($event) { return ctx.searchTaskText = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](5, TasksComponent_button_5_Template, 3, 0, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](6, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](7, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](8, "mat-select", 5, 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("valueChange", function TasksComponent_Template_mat_select_valueChange_8_listener($event) { return ctx.onFilterByStatus($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](10, "mat-option", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](11, "\u0412\u0441\u0435 \u0441\u0442\u0430\u0442\u0443\u0441\u044B");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](12, "mat-option", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](13, "\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](14, "mat-option", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](15, "\u041D\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](16, TasksComponent_button_16_Template, 3, 0, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](17, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](18, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](19, "mat-select", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("valueChange", function TasksComponent_Template_mat_select_valueChange_19_listener($event) { return ctx.onFilterByPriority($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](20, "mat-option", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](21, "\u0412\u0441\u0435 \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u044B");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](22, TasksComponent_mat_option_22_Template, 2, 2, "mat-option", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](23, TasksComponent_button_23_Template, 3, 0, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](24, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](25, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](26, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](27, TasksComponent_button_27_Template, 2, 0, "button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](28, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](29, "button", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function TasksComponent_Template_button_click_29_listener() { return ctx.openAddTaskDialog(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](30, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](31, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](32, TasksComponent_div_32_Template, 6, 2, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](33, TasksComponent_div_33_Template, 2, 1, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](34, TasksComponent_div_34_Template, 3, 0, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????reference"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngModel", ctx.searchTaskText);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", _r0.value.trim().length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("value", ctx.selectedStatusFilter);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("value", null);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("value", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("value", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.selectedStatusFilter != null);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("value", ctx.selectedPriorityFilter);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("value", null);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngForOf", ctx.priorities);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.selectedPriorityFilter != null);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.selectedStatusFilter != null || ctx.selectedPriorityFilter != null || ctx.searchTaskText != null && ctx.searchTaskText.trim() != "");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", !ctx.isMobile);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.isMobile && ctx.tasks.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.isMobile && ctx.tasks.length === 0);
        } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow], pipes: [_pipe_task_date_pipe__WEBPACK_IMPORTED_MODULE_5__.TaskDatePipe], styles: [".completed[_ngcontent-%COMP%] {\n    text-decoration: line-through;\n    color: #797979;\n    background-color: transparent !important;\n}\n\n.novalue[_ngcontent-%COMP%] {\n    color: #b7b7b7;\n}\n\n.col-id[_ngcontent-%COMP%] {\n    width: 4%;\n    text-align: center;\n}\n\n.col-title[_ngcontent-%COMP%] {\n    width: 40%;\n}\n\n.col-priority[_ngcontent-%COMP%] {\n    width: 10%;\n}\n\n.col-category[_ngcontent-%COMP%] {\n    width: 10%;\n}\n\n.col-select[_ngcontent-%COMP%] {\n    width: 3%;\n}\n\n.col-operations[_ngcontent-%COMP%] {\n    width: 8%;\n}\n\n.col-color[_ngcontent-%COMP%] {\n    width: 1% !important;\n}\n\n.col-date[_ngcontent-%COMP%] {\n    width: 10% !important;\n}\n\n.delete-icon[_ngcontent-%COMP%] {\n    cursor: pointer;\n    color: #ea6561;\n    font-size: 18px;\n    margin-left: 3px;\n    margin-right: 3px;\n}\n\n.edit-icon[_ngcontent-%COMP%] {\n    cursor: pointer;\n    color: #9A9A9A;\n    font-size: 18px;\n    margin-left: 3px;\n    margin-right: 3px;\n}\n\n.mat-header-cell[_ngcontent-%COMP%]{\n    font-size: 1.063rem;\n    color: #9c27b0 !important;\n    font-weight: normal;\n}\n\n.card-mobile[_ngcontent-%COMP%] {\n    border-radius: 5px;\n    margin-bottom: 10px;\n    margin-top: 20px;\n}\n\n.background-completed[_ngcontent-%COMP%] {\n    background-color: #94ada7 !important\n}\n\n.mobile-priority-top[_ngcontent-%COMP%] {\n    height: 5px;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n}\n\n.mobile-title-inner[_ngcontent-%COMP%] {\n    padding: 14px;\n    padding-left: 15px;\n    margin-left: 10px;\n    padding-bottom: 0;\n}\n\n.mobile-info-inner[_ngcontent-%COMP%] {\n    padding-bottom: 14px;\n    padding-left: 15px;\n    margin-left: 10px;\n}\n\n.mobile-category[_ngcontent-%COMP%] {\n    float: left;\n    display: inline-block;\n    text-align: left;\n    margin-top: 8px;\n    color: #8e8e8e;\n}\n\n.mobile-priority[_ngcontent-%COMP%] {\n    float: left;\n    display: inline-block;\n    text-align: left;\n    margin-top: 8px;\n    margin-left: 5px;\n    color: #8e8e8e;\n}\n\n.mobile-category[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 0;\n}\n\n.mobile-category[_ngcontent-%COMP%]   p.category[_ngcontent-%COMP%], p.priority[_ngcontent-%COMP%] {\n    display: inline;\n    padding: 5px;\n    background-color: rgba(227, 227, 227, 0.89);\n    color: rgba(78, 78, 78, 0.89);\n    border-radius: 4px;\n}\n\n.mobile-check[_ngcontent-%COMP%] {\n    padding-top: 14px;\n}\n\n.mobile-date[_ngcontent-%COMP%] {\n    float: left;\n    display: inline-block;\n    text-align: right;\n    font-size: 13px;\n    margin-top: 8px;\n    margin-left: 10px;\n    color: #8e8e8e;\n}\n\n.mobile-title[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 20px;\n    margin-top: 5px;\n    margin-bottom: 10px;\n}\n\n.check-icon-notcompleted[_ngcontent-%COMP%] {\n    font-size: 40px !important;\n    color: #dadada;\n}\n\n.check-icon-completed[_ngcontent-%COMP%] {\n    font-size: 40px !important;\n    color: rgba(167, 214, 182, 0.89);\n}\n\n.reset-search[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    font-size: 16px;\n    text-decoration: underline;\n    color: rgba(5, 83, 123, 0.98);\n    text-align: center;\n}\n\ndiv.card-mobile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 0 !important;\n}\n\n.nopadding-left[_ngcontent-%COMP%]{\n    padding-left: 0;\n}\n\n.padding-top-10[_ngcontent-%COMP%]{\n    padding-top: 10px;\n}\n\n.nowidth[_ngcontent-%COMP%] {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2tzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osMkNBQTJDO0lBQzNDLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoidGFza3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wbGV0ZWQge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIGNvbG9yOiAjNzk3OTc5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5ub3ZhbHVlIHtcbiAgICBjb2xvcjogI2I3YjdiNztcbn1cblxuLmNvbC1pZCB7XG4gICAgd2lkdGg6IDQlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbC10aXRsZSB7XG4gICAgd2lkdGg6IDQwJTtcbn1cblxuLmNvbC1wcmlvcml0eSB7XG4gICAgd2lkdGg6IDEwJTtcbn1cblxuLmNvbC1jYXRlZ29yeSB7XG4gICAgd2lkdGg6IDEwJTtcbn1cblxuLmNvbC1zZWxlY3Qge1xuICAgIHdpZHRoOiAzJTtcbn1cblxuLmNvbC1vcGVyYXRpb25zIHtcbiAgICB3aWR0aDogOCU7XG59XG5cbi5jb2wtY29sb3Ige1xuICAgIHdpZHRoOiAxJSAhaW1wb3J0YW50O1xufVxuXG4uY29sLWRhdGUge1xuICAgIHdpZHRoOiAxMCUgIWltcG9ydGFudDtcbn1cbi5kZWxldGUtaWNvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjZWE2NTYxO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xuICAgIG1hcmdpbi1yaWdodDogM3B4O1xufVxuLmVkaXQtaWNvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjOUE5QTlBO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xuICAgIG1hcmdpbi1yaWdodDogM3B4O1xufVxuLm1hdC1oZWFkZXItY2VsbHtcbiAgICBmb250LXNpemU6IDEuMDYzcmVtO1xuICAgIGNvbG9yOiAjOWMyN2IwICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5jYXJkLW1vYmlsZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmJhY2tncm91bmQtY29tcGxldGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRhZGE3ICFpbXBvcnRhbnRcbn1cblxuLm1vYmlsZS1wcmlvcml0eS10b3Age1xuICAgIGhlaWdodDogNXB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuXG4ubW9iaWxlLXRpdGxlLWlubmVyIHtcbiAgICBwYWRkaW5nOiAxNHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLm1vYmlsZS1pbmZvLWlubmVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5tb2JpbGUtY2F0ZWdvcnkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBjb2xvcjogIzhlOGU4ZTtcbn1cblxuLm1vYmlsZS1wcmlvcml0eSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgY29sb3I6ICM4ZThlOGU7XG59XG5cbi5tb2JpbGUtY2F0ZWdvcnkgcCB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ubW9iaWxlLWNhdGVnb3J5IHAuY2F0ZWdvcnksIHAucHJpb3JpdHkge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjcsIDIyNywgMjI3LCAwLjg5KTtcbiAgICBjb2xvcjogcmdiYSg3OCwgNzgsIDc4LCAwLjg5KTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5tb2JpbGUtY2hlY2sge1xuICAgIHBhZGRpbmctdG9wOiAxNHB4O1xufVxuXG4ubW9iaWxlLWRhdGUge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGNvbG9yOiAjOGU4ZThlO1xufVxuXG4ubW9iaWxlLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jaGVjay1pY29uLW5vdGNvbXBsZXRlZCB7XG4gICAgZm9udC1zaXplOiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNkYWRhZGE7XG59XG5cbi5jaGVjay1pY29uLWNvbXBsZXRlZCB7XG4gICAgZm9udC1zaXplOiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHJnYmEoMTY3LCAyMTQsIDE4MiwgMC44OSk7XG59XG5cbi5yZXNldC1zZWFyY2gge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGNvbG9yOiByZ2JhKDUsIDgzLCAxMjMsIDAuOTgpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZGl2LmNhcmQtbW9iaWxlIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLm5vcGFkZGluZy1sZWZ0e1xuICAgIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLnBhZGRpbmctdG9wLTEwe1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4ubm93aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"] });
    return TasksComponent;
}());



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
var environment = {
    production: false,
};


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(function (err) { return console.error(err); });


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map