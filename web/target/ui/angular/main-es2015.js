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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _branches_branch_form_branch_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./branches/branch-form/branch-form.component */ "./src/app/branches/branch-form/branch-form.component.ts");
/* harmony import */ var _branches_branches_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./branches/branches.component */ "./src/app/branches/branches.component.ts");
/* harmony import */ var _entities_entity_form_entity_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entities/entity-form/entity-form.component */ "./src/app/entities/entity-form/entity-form.component.ts");
/* harmony import */ var _entities_entities_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entities/entities.component */ "./src/app/entities/entities.component.ts");
/* harmony import */ var _users_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users/user-form/user-form.component */ "./src/app/users/user-form/user-form.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _customers_customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customers/customer-form/customer-form.component */ "./src/app/customers/customer-form/customer-form.component.ts");
/* harmony import */ var _dashboard_loan_form_loan_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/loan-form/loan-form.component */ "./src/app/dashboard/loan-form/loan-form.component.ts");
/* harmony import */ var _loan_products_loan_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loan-products/loan-products.component */ "./src/app/loan-products/loan-products.component.ts");
/* harmony import */ var _loan_products_loan_product_form_loan_product_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./loan-products/loan-product-form/loan-product-form.component */ "./src/app/loan-products/loan-product-form/loan-product-form.component.ts");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/edit-profile/edit-profile.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/reports/reports.component.ts");
/* harmony import */ var _auditing_auditing_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auditing/auditing.component */ "./src/app/auditing/auditing.component.ts");
/* harmony import */ var _logged_users_logged_users_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./logged-users/logged-users.component */ "./src/app/logged-users/logged-users.component.ts");





















const userRoutes = [
    { path: "loan_form" /* LOAN_FORM */, component: _dashboard_loan_form_loan_form_component__WEBPACK_IMPORTED_MODULE_10__["LoanFormComponent"], pathMatch: 'full' },
    { path: "loan_form" /* LOAN_FORM */ + '/:loanId', component: _dashboard_loan_form_loan_form_component__WEBPACK_IMPORTED_MODULE_10__["LoanFormComponent"], pathMatch: 'full' },
    { path: "customers" /* CUSTOMERS */, component: _customers_customers_component__WEBPACK_IMPORTED_MODULE_8__["CustomersComponent"], pathMatch: 'full' },
    { path: "customer_form" /* CUSTOMER_FORM */, component: _customers_customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_9__["CustomerFormComponent"], pathMatch: 'full' },
    { path: "customer_form" /* CUSTOMER_FORM */ + '/:customerId', component: _customers_customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_9__["CustomerFormComponent"], pathMatch: 'full' },
    { path: "dashboard" /* DASHBOARD */, component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["DashboardComponent"], pathMatch: 'full' },
    { path: "auditing" /* AUDITING */ + '/:loanId', component: _auditing_auditing_component__WEBPACK_IMPORTED_MODULE_17__["AuditingComponent"], pathMatch: 'full' },
];
const adminRoutes = [
    { path: "entities" /* ENTITIES */, component: _entities_entities_component__WEBPACK_IMPORTED_MODULE_5__["EntitiesComponent"], pathMatch: 'full' },
    { path: "entity_form" /* ENTITY_FORM */, component: _entities_entity_form_entity_form_component__WEBPACK_IMPORTED_MODULE_4__["EntityFormComponent"], pathMatch: 'full' },
    { path: "entity_form" /* ENTITY_FORM */ + '/:entityId', component: _entities_entity_form_entity_form_component__WEBPACK_IMPORTED_MODULE_4__["EntityFormComponent"], pathMatch: 'full' },
    { path: "branches" /* BRANCHES */, component: _branches_branches_component__WEBPACK_IMPORTED_MODULE_3__["BranchesComponent"], pathMatch: 'full' },
    { path: "branch_form" /* BRANCH_FORM */, component: _branches_branch_form_branch_form_component__WEBPACK_IMPORTED_MODULE_2__["BranchFormComponent"], pathMatch: 'full' },
    { path: "branch_form" /* BRANCH_FORM */ + '/:branchId', component: _branches_branch_form_branch_form_component__WEBPACK_IMPORTED_MODULE_2__["BranchFormComponent"], pathMatch: 'full' },
    { path: "users" /* USERS */, component: _users_users_component__WEBPACK_IMPORTED_MODULE_7__["UsersComponent"], pathMatch: 'full' },
    { path: "user_form" /* USER_FORM */ + '/:userId', component: _users_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_6__["UserFormComponent"], pathMatch: 'full' },
    { path: "loan_products" /* LOAN_PRODUCTS */, component: _loan_products_loan_products_component__WEBPACK_IMPORTED_MODULE_11__["LoanProductsComponent"], pathMatch: 'full' },
    { path: "loan_products_form" /* LOAN_PRODUCT_FORM */, component: _loan_products_loan_product_form_loan_product_form_component__WEBPACK_IMPORTED_MODULE_12__["LoanProductFormComponent"], pathMatch: 'full' },
    { path: "loan_products_form" /* LOAN_PRODUCT_FORM */ + '/:loanProductId', component: _loan_products_loan_product_form_loan_product_form_component__WEBPACK_IMPORTED_MODULE_12__["LoanProductFormComponent"], pathMatch: 'full' },
    { path: "edit" /* PROFILE_EDIT */, component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_13__["EditProfileComponent"], pathMatch: 'full' },
    { path: "home" /* HOME */, component: _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"], pathMatch: 'full' },
    { path: "reports" /* REPORTS */, component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_16__["ReportsComponent"], pathMatch: 'full' },
    { path: "logged" /* LOGGED_USERS */, component: _logged_users_logged_users_component__WEBPACK_IMPORTED_MODULE_18__["LoggedUsersComponent"], pathMatch: 'full' }
];
const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"], pathMatch: 'full' },
    ...adminRoutes,
    ...userRoutes
];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["loanlead-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'loanlead-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _entities_entities_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./entities/entities.module */ "./src/app/entities/entities.module.ts");
/* harmony import */ var _branches_branches_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./branches/branches.module */ "./src/app/branches/branches.module.ts");
/* harmony import */ var _loan_products_loan_products_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loan-products/loan-products.module */ "./src/app/loan-products/loan-products.module.ts");
/* harmony import */ var _customers_customers_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customers/customers.module */ "./src/app/customers/customers.module.ts");
/* harmony import */ var _users_users_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./users/users.module */ "./src/app/users/users.module.ts");
/* harmony import */ var _logged_users_logged_users_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./logged-users/logged-users.module */ "./src/app/logged-users/logged-users.module.ts");
/* harmony import */ var _reports_reports_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./reports/reports.module */ "./src/app/reports/reports.module.ts");
/* harmony import */ var _edit_profile_edit_profile_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./edit-profile/edit-profile.module */ "./src/app/edit-profile/edit-profile.module.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _auditing_auditing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auditing/auditing.module */ "./src/app/auditing/auditing.module.ts");



















class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"],
            _auditing_auditing_module__WEBPACK_IMPORTED_MODULE_17__["AuditingModule"],
            _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_16__["DashboardModule"],
            _entities_entities_module__WEBPACK_IMPORTED_MODULE_8__["EntitiesModule"],
            _branches_branches_module__WEBPACK_IMPORTED_MODULE_9__["BranchesModule"],
            _loan_products_loan_products_module__WEBPACK_IMPORTED_MODULE_10__["LoanProductsModule"],
            _customers_customers_module__WEBPACK_IMPORTED_MODULE_11__["CustomersModule"],
            _users_users_module__WEBPACK_IMPORTED_MODULE_12__["UsersModule"],
            _reports_reports_module__WEBPACK_IMPORTED_MODULE_14__["ReportsModule"],
            _logged_users_logged_users_module__WEBPACK_IMPORTED_MODULE_13__["LoggedUsersModule"],
            _edit_profile_edit_profile_module__WEBPACK_IMPORTED_MODULE_15__["EditProfileModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"],
        _auditing_auditing_module__WEBPACK_IMPORTED_MODULE_17__["AuditingModule"],
        _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_16__["DashboardModule"],
        _entities_entities_module__WEBPACK_IMPORTED_MODULE_8__["EntitiesModule"],
        _branches_branches_module__WEBPACK_IMPORTED_MODULE_9__["BranchesModule"],
        _loan_products_loan_products_module__WEBPACK_IMPORTED_MODULE_10__["LoanProductsModule"],
        _customers_customers_module__WEBPACK_IMPORTED_MODULE_11__["CustomersModule"],
        _users_users_module__WEBPACK_IMPORTED_MODULE_12__["UsersModule"],
        _reports_reports_module__WEBPACK_IMPORTED_MODULE_14__["ReportsModule"],
        _logged_users_logged_users_module__WEBPACK_IMPORTED_MODULE_13__["LoggedUsersModule"],
        _edit_profile_edit_profile_module__WEBPACK_IMPORTED_MODULE_15__["EditProfileModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"],
                    _auditing_auditing_module__WEBPACK_IMPORTED_MODULE_17__["AuditingModule"],
                    _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_16__["DashboardModule"],
                    _entities_entities_module__WEBPACK_IMPORTED_MODULE_8__["EntitiesModule"],
                    _branches_branches_module__WEBPACK_IMPORTED_MODULE_9__["BranchesModule"],
                    _loan_products_loan_products_module__WEBPACK_IMPORTED_MODULE_10__["LoanProductsModule"],
                    _customers_customers_module__WEBPACK_IMPORTED_MODULE_11__["CustomersModule"],
                    _users_users_module__WEBPACK_IMPORTED_MODULE_12__["UsersModule"],
                    _reports_reports_module__WEBPACK_IMPORTED_MODULE_14__["ReportsModule"],
                    _logged_users_logged_users_module__WEBPACK_IMPORTED_MODULE_13__["LoggedUsersModule"],
                    _edit_profile_edit_profile_module__WEBPACK_IMPORTED_MODULE_15__["EditProfileModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
                ],
                providers: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auditing/auditing.component.ts":
/*!************************************************!*\
  !*** ./src/app/auditing/auditing.component.ts ***!
  \************************************************/
/*! exports provided: AuditingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditingComponent", function() { return AuditingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_services_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/report.service */ "./src/app/core/services/report.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/navigation/navigation.component */ "./src/app/ui/navigation/navigation.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _common_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/pagination/pagination.component */ "./src/app/common/pagination/pagination.component.ts");









function AuditingComponent_ng_container_1_tr_35_Template(rf, ctx) { if (rf & 1) {
    const _r352 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AuditingComponent_ng_container_1_tr_35_Template_a_click_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r352); const report_r350 = ctx.$implicit; const ctx_r351 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r351.setUserBranches(report_r350.branches); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Branches");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const report_r350 = ctx.$implicit;
    const ctx_r348 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](report_r350.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](report_r350.customer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](report_r350.stage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](report_r350.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r348.format(ctx_r348.dateInstance(report_r350.actionedAt)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](report_r350.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](report_r350.comment);
} }
function AuditingComponent_ng_container_1_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " No comprehensive loans was found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AuditingComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r354 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\u00A0Auditing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Items Count");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function AuditingComponent_ng_container_1_Template_input_input_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r354); const ctx_r353 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r353.validate(); })("blur", function AuditingComponent_ng_container_1_Template_input_blur_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r354); const ctx_r355 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r355.filter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Stage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Actioned At");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Branches");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, AuditingComponent_ng_container_1_tr_35_Template, 18, 7, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, AuditingComponent_ng_container_1_div_36_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Export excel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const reports_r347 = ctx.ngIf;
    const ctx_r344 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx_r344.itemsCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", reports_r347);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !reports_r347.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("href", ctx_r344.reportLink(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
function AuditingComponent_ng_container_3_app_pagination_1_Template(rf, ctx) { if (rf & 1) {
    const _r359 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-pagination", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChanged", function AuditingComponent_ng_container_3_app_pagination_1_Template_app_pagination_pageChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r359); const ctx_r358 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r358.load($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const reportsCount_r356 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().ngIf;
    const ctx_r357 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("lastPage", ctx_r357.pagesCount(reportsCount_r356));
} }
function AuditingComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, AuditingComponent_ng_container_3_app_pagination_1_Template, 1, 1, "app-pagination", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const reportsCount_r356 = ctx.ngIf;
    const ctx_r345 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", reportsCount_r356 > ctx_r345.itemsCount.value);
} }
function AuditingComponent_ng_container_5_ul_10_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const branch_r364 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](branch_r364);
} }
function AuditingComponent_ng_container_5_ul_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, AuditingComponent_ng_container_5_ul_10_li_1_Template, 2, 1, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r361 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r361.userBranches);
} }
function AuditingComponent_ng_container_5_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " No loans was found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AuditingComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h4", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, AuditingComponent_ng_container_5_ul_10_Template, 2, 1, "ul", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, AuditingComponent_ng_container_5_div_11_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r346 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r346.userBranches.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r346.userBranches.length);
} }
class AuditingComponent {
    constructor(reportService, activatedRoute) {
        this.reportService = reportService;
        this.activatedRoute = activatedRoute;
        this.itemsCount = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](5, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(5),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(20),
        ]);
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((paramMap) => {
            this.loanId = Number.parseInt(paramMap.get('loanId'), 10);
            this.load(1);
            this.reportsCount$ = this.reportService.getReportsByLoanIdCount(this.loanId);
        });
    }
    load(page) {
        this.reports$ = this.reportService.getReportsByLoanId(this.loanId, page - 1, this.itemsCount.value);
        this.currentPage = page;
    }
    validate() {
        const input = document.getElementById('itemsCount');
        const labelSpan = document.querySelector('#itemsCount + .feedback');
        input.classList[this.itemsCount.errors ? 'add' : 'remove']('invalid');
        let textContent = '';
        if (this.itemsCount.errors) {
            Object.keys(this.itemsCount.errors).forEach((error) => {
                switch (error) {
                    case 'required':
                        textContent = 'Please, enter this field';
                        break;
                    case 'min':
                        textContent = 'Please, enter higher number';
                        break;
                    case 'max':
                        textContent = 'Please, enter lower number';
                        break;
                    default:
                        textContent = '';
                        break;
                }
            });
        }
        labelSpan.textContent = textContent;
        this.countChanged = true;
    }
    filter() {
        if (!this.itemsCount.errors && this.countChanged) {
            const page = 1;
            this.load(page);
            this.countChanged = false;
        }
    }
    pagesCount(reportsCount) {
        const result = reportsCount / this.itemsCount.value;
        return Math.round(result) < result ? Math.round(result) + 1 : Math.round(result);
    }
    setUserBranches(branches) {
        this.userBranches = branches;
    }
    reportLink() {
        return `/api/reports/report?loanId=${this.loanId}&page=${this.currentPage ? this.currentPage - 1 : 0}&itemsPerPage=${this.itemsCount.value}`;
    }
    format(date) {
        return ((date.getDate() < 10) ? '0' + date.getDate() : date.getDate()) +
            "/" + ((date.getMonth() < 10) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) +
            "/" + date.getFullYear() +
            " " + ((date.getHours() < 10) ? '0' + date.getHours() : date.getHours()) +
            ":" + ((date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()) +
            ":" + ((date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds());
    }
    dateInstance(date) {
        return new Date(date);
    }
}
AuditingComponent.??fac = function AuditingComponent_Factory(t) { return new (t || AuditingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
AuditingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AuditingComponent, selectors: [["loanlead-auditing"]], decls: 6, vars: 7, consts: [[4, "ngIf"], [1, "border", "border-secondary", "m-3", "p-3", "bg-white", "rounded", "animated", "fadeIn"], [1, "py-2", "page-body-heading", "justify-content-between"], [1, "rounded", "col-lg-2", "col-md-3", "col-12", "py-2", "page-heading", "d-flex", "align-items-center", "justify-content-center"], [1, "material-icons"], [1, "col-md-3", "col-12"], [1, "form-group"], ["for", "itemsCount"], ["id", "itemsCount", "type", "number", "placeholder", "Search", "data-placeholder", "Search", "required", "", 1, "form-control", 3, "formControl", "input", "blur"], [1, "feedback", "text-danger"], [1, "py-2", 2, "overflow-x", "auto"], ["id", "reportsTable", 1, "table", "table-striped", "table-hover", "table-bordered", "table-condensed", 2, "min-width", "1350px"], [4, "ngFor", "ngForOf"], ["class", "empty-list", 4, "ngIf"], [1, "py-2"], [1, "btn", "btn-primary", 3, "href"], ["href", "javascript:void(0);", "data-toggle", "modal", "data-target", "#branchesTableModal", 3, "click"], [1, "empty-list"], [3, "lastPage", "pageChanged", 4, "ngIf"], [3, "lastPage", "pageChanged"], ["tabindex", "-1", "role", "dialog", "id", "branchesTableModal", "aria-hidden", "true", 1, "modal", "fade", "bd-example-modal-lg"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-hidden", "true", 1, "close"], [1, "modal-body", 2, "overflow-x", "auto"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default"]], template: function AuditingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "loanlead-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, AuditingComponent_ng_container_1_Template, 40, 4, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, AuditingComponent_ng_container_3_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, AuditingComponent_ng_container_5_Template, 15, 2, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 3, ctx.reports$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](4, 5, ctx.reportsCount$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.userBranches);
    } }, directives: [_ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _common_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__["PaginationComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1ZGl0aW5nL2F1ZGl0aW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuditingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'loanlead-auditing',
                templateUrl: './auditing.component.html',
                styleUrls: ['./auditing.component.scss']
            }]
    }], function () { return [{ type: _core_services_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auditing/auditing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auditing/auditing.module.ts ***!
  \*********************************************/
/*! exports provided: AuditingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditingModule", function() { return AuditingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/navigation/navigation.module */ "./src/app/ui/navigation/navigation.module.ts");
/* harmony import */ var _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/pagination/pagination.module */ "./src/app/common/pagination/pagination.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auditing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auditing.component */ "./src/app/auditing/auditing.component.ts");








class AuditingModule {
}
AuditingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AuditingModule });
AuditingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AuditingModule_Factory(t) { return new (t || AuditingModule)(); }, imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AuditingModule, { declarations: [_auditing_component__WEBPACK_IMPORTED_MODULE_6__["AuditingComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuditingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_auditing_component__WEBPACK_IMPORTED_MODULE_6__["AuditingComponent"]],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/branches/branch-form/branch-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/branches/branch-form/branch-form.component.ts ***!
  \***************************************************************/
/*! exports provided: BranchFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchFormComponent", function() { return BranchFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_entity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/entity.service */ "./src/app/core/services/entity.service.ts");
/* harmony import */ var _core_services_branch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/branch.service */ "./src/app/core/services/branch.service.ts");
/* harmony import */ var _ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/navigation/navigation.component */ "./src/app/ui/navigation/navigation.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function BranchFormComponent_ng_container_1_option_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const entity_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", entity_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](entity_r3.name);
} }
function BranchFormComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\u00A0Branch Form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function BranchFormComponent_ng_container_1_Template_form_ngSubmit_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r4.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "fieldset", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "legend", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function BranchFormComponent_ng_container_1_Template_input_input_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r6.validate(); })("blur", function BranchFormComponent_ng_container_1_Template_input_blur_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r7.isUnique("name"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function BranchFormComponent_ng_container_1_Template_input_input_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r8.validate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "District");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function BranchFormComponent_ng_container_1_Template_input_input_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r9.validate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Town");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function BranchFormComponent_ng_container_1_Template_input_input_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r10.validate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Entity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function BranchFormComponent_ng_container_1_Template_select_change_45_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r11.validate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](46, BranchFormComponent_ng_container_1_option_46_Template, 2, 2, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "\u00A0Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const entities_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r0.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", entities_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx_r0.formGroup.valid);
} }
const toSpaceBetween = (s) => {
    return s.replace(/[A-Z]/g, (c) => ` ${c.toLowerCase()}`);
};
class BranchFormComponent {
    constructor(router, entityService, fb, branchService, activatedRoute) {
        this.router = router;
        this.entityService = entityService;
        this.fb = fb;
        this.branchService = branchService;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.entities$ = this.entityService.getAllEntities();
        this.formGroup = this.fb.group({
            name: [''],
            entityName: [''],
            type: [''],
            district: [''],
            town: [''],
        }, {
            validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
        });
        this.activatedRoute.paramMap
            .subscribe((paramMap) => {
            this.branchId = Number.parseInt(paramMap.get('branchId'));
            if (this.branchId) {
                this.branchService.getBranch(this.branchId)
                    .subscribe((branch) => {
                    if (branch != null) {
                        this.branch = branch;
                        this.formGroup.patchValue({
                            name: branch.name,
                            entityName: branch.entityName,
                            type: branch.type,
                            district: branch.district,
                            town: branch.town,
                        });
                    }
                });
            }
        });
    }
    isUnique(fieldType) {
        let result = true;
        const control = this.formGroup.get(fieldType);
        const form = document.querySelector('form');
        if (!control.errors && control.value) {
            this.branchService.getBranchByField(fieldType, control.value)
                .subscribe((data) => {
                if (data != null && (!this.branchId || data.id != this.branch.id)) {
                    if (control.errors) {
                        control.errors.notUnique = { notUnique: true };
                    }
                    else {
                        control.setErrors({ notUnique: true });
                    }
                }
                else {
                    if (control.errors) {
                        delete control.errors.notUnique;
                    }
                }
                result = this.validateFormControl(fieldType);
            });
        }
        return result;
    }
    validate() {
        let valid = true;
        const controls = this.formGroup.controls;
        Object.keys(controls).forEach((field) => {
            valid = this.validateFormControl(field);
        });
        return valid;
    }
    validateFormControl(field) {
        let result = true;
        const control = this.formGroup.get(field);
        const input = document.getElementById(field);
        const labelSpan = document
            .querySelector(`#${field} + .feedback`);
        input.classList[control.errors ? 'add' : 'remove']('invalid');
        let labelContent = '';
        if (control.errors) {
            Object.keys(control.errors).forEach((error) => {
                switch (error) {
                    case 'required':
                        labelContent = 'Please, enter this field';
                        break;
                    case 'email':
                        labelContent = 'Please, enter a valid email';
                        break;
                    case 'minlength':
                        labelContent = 'Please, enter more symbols';
                        break;
                    case 'maxlength':
                        labelContent = 'Please, enter less symbols';
                        break;
                    case 'notUnique':
                        labelContent = `This ${toSpaceBetween(field)} already exists`;
                        break;
                    case 'pattern':
                        if (!control.value.match(/[0-9]+/)) {
                            labelContent = 'Digits required';
                        }
                        else if (!control.value.match(/[A-Z]+/)) {
                            labelContent = 'Uppercase characters required';
                        }
                        else {
                            labelContent = 'Lowercase characters required';
                        }
                        break;
                    default:
                        labelContent = '';
                        break;
                }
            });
            result = false;
        }
        labelSpan.textContent = labelContent;
        return result;
    }
    submit() {
        const form = document.querySelector('form');
        if (!form.classList.contains('validated')) {
            form.classList.add('validated');
            this.branchService.getBranchByField('name', this.formGroup.get('name').value);
        }
        if (this.validate()) {
            const branch = {
                name: this.formGroup.get('name').value,
                entityName: this.formGroup.get('entityName').value,
                type: this.formGroup.get('type').value,
                district: this.formGroup.get('district').value,
                town: this.formGroup.get('town').value,
            };
            if (this.branch) {
                branch.id = this.branch.id;
                branch.createdAt = this.branch.createdAt;
            }
            const observable = this.branchService.save(branch);
            observable
                .subscribe((data) => {
                this.router.navigate(['/branches']);
            }, () => {
                alert("Error while saving branch");
            });
        }
    }
}
BranchFormComponent.??fac = function BranchFormComponent_Factory(t) { return new (t || BranchFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_entity_service__WEBPACK_IMPORTED_MODULE_3__["EntityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_branch_service__WEBPACK_IMPORTED_MODULE_4__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
BranchFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: BranchFormComponent, selectors: [["loanlead-branch-form"]], decls: 3, vars: 3, consts: [[4, "ngIf"], [1, "border", "border-secondary", "m-3", "p-3", "bg-white", "rounded", 2, "position", "relative", "z-index", "2"], [1, "py-2"], [1, "rounded", "col-lg-2", "col-md-3", "col-sm-6", "col", "py-2", "page-heading", "d-flex", "align-items-center", "justify-content-center"], [1, "material-icons"], ["action", "/branches", "method", "POST", 1, "form-horizontal", "form-with-image", 3, "formGroup", "ngSubmit"], [1, "border", "border-yellow", "rounded"], [1, "d-block", "w-auto", "ml-3", "text-dark-blue"], [1, "row", "px-4", "justify-content-center"], [1, "col-lg-5", "col-md-6", "col-12", "d-flex", "justify-content-center", "flex-column"], [1, "form-group", "pl-3"], ["for", "name"], ["id", "name", "type", "text", "placeholder", "Name", "formControlName", "name", "autocomplete", "off", "required", "", 1, "form-control", 3, "input", "blur"], [1, "feedback", "text-danger"], ["for", "type"], ["id", "type", "type", "text", "placeholder", "Type", "formControlName", "type", "autocomplete", "off", "required", "", 1, "form-control", 3, "input"], [1, "row", "px-4"], [1, "responsive-form-group", "w-100", "justify-content-center"], [1, "col-lg-4", "col-md-5", "col-12"], [1, "form-group"], ["for", "district"], ["id", "district", "type", "text", "placeholder", "District", "formControlName", "district", "autocomplete", "off", "required", "", 1, "form-control", 3, "input"], ["for", "town"], ["id", "town", "type", "text", "placeholder", "Town", "formControlName", "town", "autocomplete", "off", "required", "", 1, "form-control", 3, "input"], ["for", "entityName"], ["id", "entityName", "type", "text", "formControlName", "entityName", "autocomplete", "off", "required", "", 1, "form-control", 3, "change"], ["value", "", 3, "value", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-row", "pt-2", "pb-4", "justify-content-end"], ["routerLink", "/branches", 1, "no-decoration", "btn", "btn-secondary", "submit-button", "d-flex", "col-2", "align-items-center", "justify-content-center", "mr-4"], ["type", "submit", 1, "btn", "btn-primary", "submit-button", "d-flex", "col-2", "justify-content-center", "mr-4", 3, "disabled"], ["value", "", 3, "value"]], template: function BranchFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "loanlead-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, BranchFormComponent_ng_container_1_Template, 57, 3, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, ctx.entities$));
    } }, directives: [_ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyYW5jaGVzL2JyYW5jaC1mb3JtL2JyYW5jaC1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BranchFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'loanlead-branch-form',
                templateUrl: './branch-form.component.html',
                styleUrls: ['./branch-form.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _core_services_entity_service__WEBPACK_IMPORTED_MODULE_3__["EntityService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _core_services_branch_service__WEBPACK_IMPORTED_MODULE_4__["BranchService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/branches/branches.component.ts":
/*!************************************************!*\
  !*** ./src/app/branches/branches.component.ts ***!
  \************************************************/
/*! exports provided: BranchesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchesComponent", function() { return BranchesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/branch.service */ "./src/app/core/services/branch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/navigation/navigation.component */ "./src/app/ui/navigation/navigation.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _common_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/pagination/pagination.component */ "./src/app/common/pagination/pagination.component.ts");









const _c0 = function (a0) { return [a0]; };
function BranchesComponent_ng_container_1_div_1_tr_40_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BranchesComponent_ng_container_1_div_1_tr_40_Template_input_click_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r20); const branch_r18 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3); return ctx_r19.check(branch_r18.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const branch_r18 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](10, _c0, branch_r18.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](branch_r18.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](branch_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](branch_r18.entityName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](branch_r18.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](branch_r18.district);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](branch_r18.town);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r17.format(ctx_r17.dateInstance(branch_r18.createdAt)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](12, _c0, "/branch_form/" + branch_r18.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("checked", ctx_r17.selectAll);
} }
function BranchesComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\u00A0Branches");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Items Count");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function BranchesComponent_ng_container_1_div_1_Template_input_input_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r21.validate(); })("blur", function BranchesComponent_ng_container_1_div_1_Template_input_blur_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r23.filter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "\u00A0Create new branch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Entity name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "District");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Town");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Created at");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BranchesComponent_ng_container_1_div_1_Template_input_click_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22); const branches_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().ngIf; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r24.selectAllTrigger(branches_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](40, BranchesComponent_ng_container_1_div_1_tr_40_Template, 20, 14, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BranchesComponent_ng_container_1_div_1_Template_button_click_42_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r26.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Delete branches");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const branches_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().ngIf;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx_r15.itemsCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", branches_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx_r15.anySelected);
} }
function BranchesComponent_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " No branches was found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function BranchesComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, BranchesComponent_ng_container_1_div_1_Template, 44, 3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, BranchesComponent_ng_container_1_div_2_Template, 2, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const branches_r14 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", branches_r14.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !branches_r14.length);
} }
function BranchesComponent_ng_container_3_app_pagination_1_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-pagination", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChanged", function BranchesComponent_ng_container_3_app_pagination_1_Template_app_pagination_pageChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r30.load($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const branchesCount_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().ngIf;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("lastPage", ctx_r29.pagesCount(branchesCount_r28));
} }
function BranchesComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, BranchesComponent_ng_container_3_app_pagination_1_Template, 1, 1, "app-pagination", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const branchesCount_r28 = ctx.ngIf;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", branchesCount_r28 > ctx_r13.itemsCount.value);
} }
class BranchesComponent {
    constructor(branchService, router) {
        this.branchService = branchService;
        this.router = router;
        this.searchValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.itemsCount = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](5, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(5),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(20),
        ]);
    }
    ngOnInit() {
        this.load(1);
        this.branchesCount$ = this.branchService.getBranchesCount();
        this.selectAll = false;
        this.entitiesToDelete = [];
    }
    check(id) {
        if (id) {
            if (this.entitiesToDelete.includes(id)) {
                this.entitiesToDelete.splice(this.entitiesToDelete.indexOf(id), 1);
            }
            else {
                this.entitiesToDelete.push(id);
            }
        }
        this.anySelected = this.entitiesToDelete.length > 0;
    }
    load(page) {
        this.branches$ = this.branchService.getBranches(page - 1, this.itemsCount.value);
    }
    validate() {
        const input = document.getElementById('itemsCount');
        const labelSpan = document.querySelector('#itemsCount + .feedback');
        input.classList[this.itemsCount.errors ? 'add' : 'remove']('invalid');
        let textContent = '';
        if (this.itemsCount.errors) {
            Object.keys(this.itemsCount.errors).forEach((error) => {
                switch (error) {
                    case 'required':
                        textContent = 'Please, enter this field';
                        break;
                    case 'min':
                        textContent = 'Please, enter higher number';
                        break;
                    case 'max':
                        textContent = 'Please, enter lower number';
                        break;
                    default:
                        textContent = '';
                        break;
                }
            });
        }
        labelSpan.textContent = textContent;
        this.countChanged = true;
    }
    filter() {
        if (!this.itemsCount.errors && this.countChanged) {
            const page = 1;
            this.load(page);
            this.countChanged = false;
        }
    }
    pagesCount(branchesCount) {
        let result = branchesCount / this.itemsCount.value;
        return Math.round(result) < result ? Math.round(result) + 1 : Math.round(result);
    }
    selectAllTrigger(branches) {
        this.selectAll = !this.selectAll;
        if (this.selectAll) {
            this.entitiesToDelete = branches.map(branch => branch.id);
        }
        else {
            this.entitiesToDelete = [];
        }
        this.anySelected = this.selectAll;
    }
    format(date) {
        return ((date.getDate() < 10) ? '0' + date.getDate() : date.getDate()) +
            "/" + ((date.getMonth() < 10) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) +
            "/" + date.getFullYear() +
            " " + ((date.getHours() < 10) ? '0' + date.getHours() : date.getHours()) +
            ":" + ((date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()) +
            ":" + ((date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds());
    }
    dateInstance(date) {
        return new Date(date);
    }
    delete() {
        this.branchService.deleteBranches(this.entitiesToDelete).subscribe((data) => {
            if (data.err) {
                alert(`Request error with code ${data.err.status}`);
            }
            else {
                this.load(1);
                this.branchesCount$ = this.branchService.getBranchesCount();
            }
        });
    }
}
BranchesComponent.??fac = function BranchesComponent_Factory(t) { return new (t || BranchesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
BranchesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: BranchesComponent, selectors: [["loanlead-branches"]], decls: 5, vars: 6, consts: [[4, "ngIf"], ["class", "border border-secondary m-3 p-3 bg-white rounded animated fadeIn", 4, "ngIf"], ["class", "empty-list", 4, "ngIf"], [1, "border", "border-secondary", "m-3", "p-3", "bg-white", "rounded", "animated", "fadeIn"], [1, "py-2", "page-body-heading", "justify-content-between"], [1, "rounded", "col-lg-2", "col-md-3", "col-12", "py-2", "page-heading", "d-flex", "align-items-center", "justify-content-center"], [1, "material-icons"], [1, "col-md-3", "col-12"], [1, "form-group"], ["for", "itemsCount"], ["id", "itemsCount", "type", "number", "placeholder", "Search", "data-placeholder", "Search", "required", "", 1, "form-control", 3, "formControl", "input", "blur"], [1, "feedback", "text-danger"], [1, "py-2", "d-flex", "justify-content-end"], ["routerLink", "../branch_form", 1, "btn", "btn-primary", "d-flex", "align-items-center", "col-lg-2", "col-md-3", "col-sm-4", "col-12", "justify-content-center", "py-2"], [1, "py-2", 2, "overflow-x", "auto"], ["id", "contentTable", 1, "table", "table-striped", "table-hover", "table-bordered", "table-condensed", 2, "min-width", "1595px"], ["type", "checkbox", "id", "select-all", 3, "click"], [3, "id", 4, "ngFor", "ngForOf"], [1, "py-2"], ["type", "button", "id", "deleteButton", 1, "btn", "btn-primary", 3, "disabled", "click"], [3, "id"], [3, "routerLink"], ["type", "checkbox", 3, "checked", "click"], [1, "empty-list"], [3, "lastPage", "pageChanged", 4, "ngIf"], [3, "lastPage", "pageChanged"]], template: function BranchesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "loanlead-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, BranchesComponent_ng_container_1_Template, 3, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, BranchesComponent_ng_container_3_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](4, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 2, ctx.branches$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](4, 4, ctx.branchesCount$));
    } }, directives: [_ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _common_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__["PaginationComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyYW5jaGVzL2JyYW5jaGVzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BranchesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'loanlead-branches',
                templateUrl: './branches.component.html',
                styleUrls: ['./branches.component.scss']
            }]
    }], function () { return [{ type: _core_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/branches/branches.module.ts":
/*!*********************************************!*\
  !*** ./src/app/branches/branches.module.ts ***!
  \*********************************************/
/*! exports provided: BranchesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchesModule", function() { return BranchesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _branches_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./branches.component */ "./src/app/branches/branches.component.ts");
/* harmony import */ var _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/navigation/navigation.module */ "./src/app/ui/navigation/navigation.module.ts");
/* harmony import */ var _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/pagination/pagination.module */ "./src/app/common/pagination/pagination.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _branch_form_branch_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./branch-form/branch-form.component */ "./src/app/branches/branch-form/branch-form.component.ts");









class BranchesModule {
}
BranchesModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: BranchesModule });
BranchesModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function BranchesModule_Factory(t) { return new (t || BranchesModule)(); }, imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_4__["NavigationModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BranchesModule, { declarations: [_branches_component__WEBPACK_IMPORTED_MODULE_3__["BranchesComponent"], _branch_form_branch_form_component__WEBPACK_IMPORTED_MODULE_7__["BranchFormComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_4__["NavigationModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BranchesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_branches_component__WEBPACK_IMPORTED_MODULE_3__["BranchesComponent"], _branch_form_branch_form_component__WEBPACK_IMPORTED_MODULE_7__["BranchFormComponent"]],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_4__["NavigationModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/common/pagination/pagination.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/common/pagination/pagination.component.ts ***!
  \***********************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function PaginationComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PaginationComponent_div_0_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PaginationComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r390 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PaginationComponent_div_0_Template_div_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r390); const ctx_r389 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r389.changePage(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, PaginationComponent_div_0_div_5_Template, 3, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PaginationComponent_div_0_Template_div_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r390); const ctx_r391 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r391.changePage(ctx_r391.getDivPage() - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PaginationComponent_div_0_Template_div_click_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r390); const ctx_r392 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r392.changePage(ctx_r392.getDivPage()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PaginationComponent_div_0_Template_div_click_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r390); const ctx_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r393.changePage(ctx_r393.getDivPage() + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, PaginationComponent_div_0_div_15_Template, 3, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PaginationComponent_div_0_Template_div_click_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r390); const ctx_r394 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r394.changePage(ctx_r394.lastPage); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r385 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r385.currentPage > 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "page_" + (ctx_r385.getDivPage() - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r385.getDivPage() - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "page_" + ctx_r385.getDivPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r385.getDivPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "page_" + (ctx_r385.getDivPage() + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r385.getDivPage() + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r385.currentPage < ctx_r385.lastPage - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "page_" + ctx_r385.lastPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r385.lastPage);
} }
function PaginationComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r398 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PaginationComponent_div_1_div_2_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r398); const i_r396 = ctx.$implicit; const ctx_r397 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r397.changePage(i_r396); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const i_r396 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("active", i_r396 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "page_" + i_r396);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](i_r396);
} }
function PaginationComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, PaginationComponent_div_1_div_2_Template, 3, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r386 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r386.defaultPages());
} }
class PaginationComponent {
    constructor() {
        this.currentPage = 1;
        this.previousPage = 1;
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngDoCheck() {
        if (this.currentPage !== this.previousPage) {
            if (this.lastPage > 5) {
                document.querySelector('.active').classList.remove('active');
                if (this.currentPage < 3 || this.currentPage > this.lastPage - 2) {
                    document.getElementById(`page_${this.currentPage}`).classList.add('active');
                }
                else {
                    const midPage = document.querySelector('.mid-page');
                    if (!midPage.classList.contains('active')) {
                        midPage.classList.add('active');
                    }
                }
            }
            else {
                document.querySelector('.pagination > .active').classList.remove('active');
                document.getElementById(`page_${this.currentPage}`).classList.add('active');
            }
            this.previousPage = this.currentPage;
        }
    }
    changePage(newPageNumber) {
        this.currentPage = newPageNumber;
        this.pageChanged.emit(this.currentPage);
    }
    getDivPage() {
        if (this.currentPage < 3) {
            return 3;
        }
        else if (this.currentPage > this.lastPage - 3) {
            return this.lastPage - 2;
        }
        else {
            return this.currentPage;
        }
    }
    defaultPages() {
        return (new Array(this.lastPage)).fill(undefined).map((_, i) => i + 1);
    }
}
PaginationComponent.??fac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(); };
PaginationComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PaginationComponent, selectors: [["app-pagination"]], inputs: { lastPage: "lastPage" }, outputs: { pageChanged: "pageChanged" }, decls: 2, vars: 2, consts: [["class", "pagination-container", 4, "ngIf"], [1, "pagination-container"], [1, "pagination"], ["id", "page_1", 1, "active", 3, "click"], [4, "ngIf"], [3, "id", "click"], [1, "mid-page", 3, "id", "click"], [3, "active", "id", "click", 4, "ngFor", "ngForOf"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, PaginationComponent_div_0_Template, 19, 10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, PaginationComponent_div_1_Template, 3, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.lastPage > 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.lastPage <= 5);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".pagination-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n  height: 40px;\n  margin-top: 20px;\n}\n.pagination-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n}\n.pagination-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 40px;\n  height: 100%;\n  margin: 0 10px;\n  border-radius: 50%;\n  box-shadow: 0 0 10px #999;\n  font-size: 14px;\n  color: #2129BF;\n  background-color: #eddd53;\n  cursor: pointer;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n.pagination-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]    > *.active[_ngcontent-%COMP%] {\n  color: #eddd53;\n  background-color: #2129BF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3BhZ2luYXRpb24vQzpcXFVzZXJzXFwxMUJvcm4yRGllMTFcXElkZWFQcm9qZWN0c1xcbG9hbmxlYWRcXHdlYlxcc3JjXFxhbmd1bGFyL3NyY1xcYXBwXFxjb21tb25cXHBhZ2luYXRpb25cXHBhZ2luYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0k7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0FDQ1I7QURDUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBRUEsa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFFQSxlQUFBO0VBRUEsd0JBQUE7RUFBQSxnQkFBQTtBQ0haO0FES1k7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QUNIaEIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2luYXRpb24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gICAgLnBhZ2luYXRpb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgPiAqIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG5cbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICM5OTk7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzIxMjlCRjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGRkNTM7XG5cbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjNzO1xuXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNlZGRkNTM7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjlCRjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi5wYWdpbmF0aW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnBhZ2luYXRpb24tY29udGFpbmVyIC5wYWdpbmF0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnBhZ2luYXRpb24tY29udGFpbmVyIC5wYWdpbmF0aW9uID4gKiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDAgMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAjOTk5O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMjEyOUJGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRkZDUzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG4ucGFnaW5hdGlvbi1jb250YWluZXIgLnBhZ2luYXRpb24gPiAqLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZWRkZDUzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyOUJGO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pagination',
                templateUrl: './pagination.component.html',
                styleUrls: ['./pagination.component.scss']
            }]
    }], function () { return []; }, { lastPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/common/pagination/pagination.module.ts":
/*!********************************************************!*\
  !*** ./src/app/common/pagination/pagination.module.ts ***!
  \********************************************************/
/*! exports provided: PaginationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationModule", function() { return PaginationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pagination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination.component */ "./src/app/common/pagination/pagination.component.ts");




class PaginationModule {
}
PaginationModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: PaginationModule });
PaginationModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function PaginationModule_Factory(t) { return new (t || PaginationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](PaginationModule, { declarations: [_pagination_component__WEBPACK_IMPORTED_MODULE_2__["PaginationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_pagination_component__WEBPACK_IMPORTED_MODULE_2__["PaginationComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PaginationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_pagination_component__WEBPACK_IMPORTED_MODULE_2__["PaginationComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _pagination_component__WEBPACK_IMPORTED_MODULE_2__["PaginationComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/common.ts":
/*!********************************!*\
  !*** ./src/app/core/common.ts ***!
  \********************************/
/*! exports provided: log, clone, Strings, removeWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Strings", function() { return Strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeWrapper", function() { return removeWrapper; });
function log(...message) {
    console.log(...message);
}
function clone(data) {
    return JSON.parse(JSON.stringify(data));
}
class Strings {
    static isBlank(str) {
        return (!str || /^\s*$/.test(str));
    }
}
function removeWrapper(data) {
    return data.map((e) => e[Object.keys(e)[0]]);
}


/***/ }),

/***/ "./src/app/core/services/branch.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/branch.service.ts ***!
  \*************************************************/
/*! exports provided: BranchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchService", function() { return BranchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/core/services/data.service.ts");






class BranchService {
    constructor(http, dataService) {
        this.http = http;
        this.dataService = dataService;
    }
    getBranch(id) {
        return this.dataService.get(`/api/branches/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    getBranches(page, itemsPerPage) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('page', page)
            .set('itemsPerPage', itemsPerPage);
        return this.dataService.get(`/api/branches`, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    getBranchesCount() {
        return this.dataService.get(`/api/branches/count`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    getAllBranches() {
        return this.dataService.get(`/api/branches/all`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    save(branch) {
        return this.dataService.post(`/api/branches`, branch).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    getBranchByField(fieldType, fieldValue) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('fieldName', fieldType)
            .set('value', fieldValue);
        return this.dataService.get(`/api/branches/unique`, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    deleteBranches(ids) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        ids.forEach(id => params = params.append('ids', `${id}`));
        return this.dataService.post('/api/branches/delete', params);
    }
}
BranchService.??fac = function BranchService_Factory(t) { return new (t || BranchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
BranchService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: BranchService, factory: BranchService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BranchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/customer.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/customer.service.ts ***!
  \***************************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/core/services/data.service.ts");






class CustomerService {
    constructor(http, dataService) {
        this.http = http;
        this.dataService = dataService;
    }
    getCustomer(id) {
        return this.dataService.get(`/api/customers/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    getAllCustomers() {
        return this.dataService.get(`/api/customers/all`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    getCustomers(page, itemsPerPage) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('page', page)
            .set('itemsPerPage', itemsPerPage);
        return this.dataService.get(`/api/customers`, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    getCustomersCount() {
        return this.dataService.get(`/api/customers/count`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    save(customer) {
        return this.dataService.post('/api/customers', customer).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    getCustomerByField(fieldType, fieldValue) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("fieldName", fieldType)
            .set('value', fieldValue);
        return this.dataService.get(`/api/customers/unique`, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    deleteCustomers(ids) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        ids.forEach(id => params = params.append('ids', `${id}`));
        return this.dataService.post('/api/customers/delete', params);
    }
}
CustomerService.??fac = function CustomerService_Factory(t) { return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
CustomerService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: CustomerService, factory: CustomerService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CustomerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/data.service.ts ***!
  \***********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _model_server_resp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/server-resp */ "./src/app/model/server-resp.ts");
/* harmony import */ var _model_ui_components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/ui/components/footer */ "./src/app/model/ui/components/footer.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







class DataService {
    constructor(http) {
        this.http = http;
    }
    getCurrentUser() {
        return this.get(`/api/users/current_user`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            return data.data;
        }));
    }
    performAction(method, url, data) {
        let resp;
        switch (method) {
            case _model_ui_components_footer__WEBPACK_IMPORTED_MODULE_4__["HTTPMethod"].GET:
                resp = this.get(url);
                break;
            case _model_ui_components_footer__WEBPACK_IMPORTED_MODULE_4__["HTTPMethod"].POST:
                resp = this.post(url, data);
                break;
            case _model_ui_components_footer__WEBPACK_IMPORTED_MODULE_4__["HTTPMethod"].PUT:
                resp = this.put(url, data);
                break;
            case _model_ui_components_footer__WEBPACK_IMPORTED_MODULE_4__["HTTPMethod"].PATCH:
                resp = this.patch(url, data);
                break;
            case _model_ui_components_footer__WEBPACK_IMPORTED_MODULE_4__["HTTPMethod"].DELETE:
                resp = this.delete(url);
            default:
                throw `Http method '${method}' not supported`;
        }
        return resp.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            return data.data;
        }));
    }
    get(url, params) {
        return this.http.get(url, { params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => _model_server_resp__WEBPACK_IMPORTED_MODULE_3__["ServerResp"].forData(data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_model_server_resp__WEBPACK_IMPORTED_MODULE_3__["ServerResp"].withError(err))));
    }
    post(url, body, options) {
        return this.http.post(url, body, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => _model_server_resp__WEBPACK_IMPORTED_MODULE_3__["ServerResp"].forData(data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_model_server_resp__WEBPACK_IMPORTED_MODULE_3__["ServerResp"].withError(err))));
    }
    put(url, body) {
        return this.http.put(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => _model_server_resp__WEBPACK_IMPORTED_MODULE_3__["ServerResp"].forData(data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_model_server_resp__WEBPACK_IMPORTED_MODULE_3__["ServerResp"].withError(err))));
    }
    patch(url, body) {
        return this.http.patch(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => _model_server_resp__WEBPACK_IMPORTED_MODULE_3__["ServerResp"].forData(data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_model_server_resp__WEBPACK_IMPORTED_MODULE_3__["ServerResp"].withError(err))));
    }
    delete(url) {
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => _model_server_resp__WEBPACK_IMPORTED_MODULE_3__["ServerResp"].forData(data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_model_server_resp__WEBPACK_IMPORTED_MODULE_3__["ServerResp"].withError(err))));
    }
}
DataService.??fac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
DataService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: DataService, factory: DataService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/entity.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/entity.service.ts ***!
  \*************************************************/
/*! exports provided: EntityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityService", function() { return EntityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/core/services/data.service.ts");






class EntityService {
    constructor(http, dataService) {
        this.http = http;
        this.dataService = dataService;
    }
    getEntity(id) {
        return this.dataService.get(`/api/entities/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    getAllEntities() {
        return this.dataService.get(`/api/entities/all`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    getEntities(page, itemsPerPage) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('page', page)
            .set('itemsPerPage', itemsPerPage);
        return this.dataService.get(`/api/entities`, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    getEntitiesCount() {
        return this.dataService.get(`/api/entities/count`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    save(entity) {
        return this.dataService.post('/api/entities', entity).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    getEntityByField(fieldType, fieldValue) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("fieldName", fieldType)
            .set('value', fieldValue);
        return this.dataService.get(`/api/entities/unique`, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    deleteEntities(ids) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        ids.forEach(id => params = params.append('ids', `${id}`));
        return this.dataService.post('/api/entities/delete', params);
    }
}
EntityService.??fac = function EntityService_Factory(t) { return new (t || EntityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
EntityService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: EntityService, factory: EntityService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EntityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/loan-product.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/services/loan-product.service.ts ***!
  \*******************************************************/
/*! exports provided: LoanProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanProductService", function() { return LoanProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/core/services/data.service.ts");






class LoanProductService {
    constructor(http, dataService) {
        this.http = http;
        this.dataService = dataService;
    }
    getLoanProduct(id) {
        return this.dataService.get(`/api/loan-products/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    getLoanProducts(page, itemsPerPage) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('page', page)
            .set('itemsPerPage', itemsPerPage);
        return this.dataService.get(`/api/loan-products`, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    getLoanProductsCount() {
        return this.dataService.get(`/api/loan-products/count`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    save(loanProduct) {
        return this.dataService.post(`/api/loan-products`, loanProduct).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    getLoanProductByField(fieldType, fieldValue) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("fieldName", fieldType)
            .set('value', fieldValue);
        return this.dataService.get(`/api/loan-products/unique`, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    deleteLoanProducts(ids) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        ids.forEach(id => params = params.append('ids', `${id}`));
        return this.dataService.post('/api/loan-products/delete', params);
    }
    getAllLoanProducts() {
        return this.dataService.get(`/api/loan-products/all`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => data.data));
    }
}
LoanProductService.??fac = function LoanProductService_Factory(t) { return new (t || LoanProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
LoanProductService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: LoanProductService, factory: LoanProductService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoanProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/loan.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/loan.service.ts ***!
  \***********************************************/
/*! exports provided: LoanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanService", function() { return LoanService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/core/services/data.service.ts");






class LoanService {
    constructor(http, dataService) {
        this.http = http;
        this.dataService = dataService;
    }
    getMainPageLoans(page, itemsPerPage) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('page', page)
            .set('itemsPerPage', itemsPerPage);
        return this.dataService.get(`/api/loans/main`, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    getMainPageLoansCount() {
        return this.dataService.get(`/api/loans/main/count`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    getMainLoansCount() {
        return this.dataService.get(`/api/main/count`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    getReports(reportForm) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        for (const reportFormKey of Object.keys(reportForm)) {
            params = params.append(reportFormKey, reportForm[reportFormKey]);
        }
        return this.dataService.get(`/api/loans/reports`, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    getReportsCount(reportForm) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        for (const reportFormKey of Object.keys(reportForm)) {
            params = params.append(reportFormKey, reportForm[reportFormKey]);
        }
        return this.dataService.get(`/api/loans/reports/count`, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    getComprehensiveReports(reportForm) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        for (const reportFormKey of Object.keys(reportForm)) {
            params = params.append(reportFormKey, reportForm[reportFormKey]);
        }
        return this.dataService.get(`/api/loans/comprehensive/report`, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    getComprehensiveReportsCount(reportForm) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        for (const reportFormKey of Object.keys(reportForm)) {
            params = params.append(reportFormKey, reportForm[reportFormKey]);
        }
        return this.dataService.get(`/api/loans/comprehensive/report/count`, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    getForwardedLoans() {
        return this.dataService.get(`/api/loans/forwarded`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    getReceivedLoans() {
        return this.dataService.get(`/api/loans/received`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    receiveLoan(loanId) {
        return this.dataService.get(`/api/loans/receive/${loanId}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    save(loan) {
        return this.dataService.post(`/api/loans`, loan).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    find(loanId) {
        return this.dataService.get(`/api/loans/${loanId}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => data.data));
    }
}
LoanService.??fac = function LoanService_Factory(t) { return new (t || LoanService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
LoanService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: LoanService, factory: LoanService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoanService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/report.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/report.service.ts ***!
  \*************************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/core/services/data.service.ts");






class ReportService {
    constructor(http, dataService) {
        this.http = http;
        this.dataService = dataService;
    }
    getReportsByLoanId(loanId, page, itemsPerPage) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .append('page', page.toString())
            .append('itemsPerPage', itemsPerPage.toString());
        return this.dataService.get(`/api/reports/${loanId}`, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => data.data));
    }
    getReportsByLoanIdCount(loanId) {
        return this.dataService.get(`/api/reports/${loanId}/count`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => data.data));
    }
    report(loanId, page, itemsPerPage) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .append('loanId', loanId.toString())
            .append('page', page.toString())
            .append('itemsPerPage', itemsPerPage.toString());
        this.dataService.get(`/api/reports/report`, params);
    }
}
ReportService.??fac = function ReportService_Factory(t) { return new (t || ReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
ReportService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: ReportService, factory: ReportService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ReportService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/role.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/role.service.ts ***!
  \***********************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/core/services/data.service.ts");





class RoleService {
    constructor(http, dataService) {
        this.http = http;
        this.dataService = dataService;
    }
    getAllRoles() {
        return this.dataService.get(`/api/roles`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => data.data));
    }
}
RoleService.??fac = function RoleService_Factory(t) { return new (t || RoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
RoleService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: RoleService, factory: RoleService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RoleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./src/app/core/common.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data.service */ "./src/app/core/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");










class UserService {
    constructor(dataService, router, titleService, httpClient) {
        this.dataService = dataService;
        this.router = router;
        this.titleService = titleService;
        this.httpClient = httpClient;
        this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        this.dataService.getCurrentUser().subscribe((data) => {
            this.setUser(data);
        });
    }
    getCurrentUser() {
        return this.dataService.getCurrentUser();
    }
    save(formData) {
        return this.dataService.post(`/api/users`, formData);
    }
    getUser(id) {
        return this.dataService.get(`/api/users/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    getUsers(page, itemsPerPage) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
            .set('page', page)
            .set('itemsPerPage', itemsPerPage);
        return this.dataService.get(`/api/users`, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    getUsersCount() {
        return this.dataService.get(`/api/users/count`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    getAllUsers() {
        return this.dataService.get(`/api/users/all`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    getNewUsers(page, itemsPerPage) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
            .set('page', page)
            .set('itemsPerPage', itemsPerPage);
        return this.dataService.get(`/api/users/new`, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    getNewUsersCount() {
        return this.dataService.get(`/api/users/new/count`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    approveUser(user) {
        return this.dataService.post(`/api/users/approve`, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    getLoggedUsers() {
        return this.dataService.get(`/api/users/logged`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    getUserByField(fieldType, fieldValue) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
            .set('fieldName', fieldType)
            .set('value', fieldValue);
        return this.dataService.get(`/api/users/unique`, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data));
    }
    deleteUsers(ids) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]();
        ids.forEach(id => params = params.append('ids', `${id}`));
        return this.dataService.post('/api/users/delete', params);
    }
    logoutUser(employeeId) {
        return this.dataService.post(`/api/users/logout/${employeeId}`, {});
    }
    setUser(data) {
        this.user = Object(_common__WEBPACK_IMPORTED_MODULE_3__["clone"])(data);
        this.user$.next(Object(_common__WEBPACK_IMPORTED_MODULE_3__["clone"])(data));
    }
    copyOfUser() {
        return JSON.parse(JSON.stringify((this.user)));
    }
}
UserService.??fac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
UserService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: UserService, factory: UserService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/customers/customer-form/customer-form.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/customers/customer-form/customer-form.component.ts ***!
  \********************************************************************/
/*! exports provided: CustomerFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerFormComponent", function() { return CustomerFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/customer.service */ "./src/app/core/services/customer.service.ts");
/* harmony import */ var _ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/navigation/navigation.component */ "./src/app/ui/navigation/navigation.component.ts");







const toSpaceBetween = (s) => {
    return s.replace(/[A-Z]/g, (c) => ` ${c.toLowerCase()}`);
};
class CustomerFormComponent {
    constructor(router, customerService, fb, activatedRoute) {
        this.router = router;
        this.customerService = customerService;
        this.fb = fb;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.formGroup = this.fb.group({
            name: [''],
            document: [''],
            documentType: ['national id'],
            phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('07[0-9]{8}')],
            optionalPhoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('07[0-9]{8}')],
        }, {
            validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
        });
        this.activatedRoute.paramMap
            .subscribe((paramMap) => {
            this.customerId = Number.parseInt(paramMap.get('customerId'));
            if (this.customerId) {
                this.customerService.getCustomer(this.customerId)
                    .subscribe((customer) => {
                    if (customer != null) {
                        this.customer = customer;
                        this.formGroup.patchValue({
                            name: customer.name,
                            document: customer.document,
                            documentType: customer.documentType,
                            phoneNumber: customer.phoneNumber,
                            optionalPhoneNumber: customer.optionalPhoneNumber
                        });
                    }
                });
            }
        });
    }
    validate() {
        let result = true;
        const controls = this.formGroup.controls;
        Object.keys(controls).forEach((controlName) => {
            result = this.validateFormControl(controlName);
        });
        return result;
    }
    validateDocument() {
        const documentControl = this.formGroup.get('document');
        if (!documentControl.errors && documentControl.value) {
            let invalid = false;
            switch (this.formGroup.get('documentType').value) {
                case 'national id':
                    if (!documentControl.value.toString().match(/C[A-Z0-9]{13}/g)) {
                        invalid = true;
                    }
                    break;
                case 'passport':
                    if (!documentControl.value.toString().match(/B\d{9}/g)) {
                        invalid = true;
                    }
                    break;
                case 'driving permit':
                    if (!documentControl.value.toString().match(/\d{8}\/\d\/\d/g)) {
                        invalid = true;
                    }
                    break;
            }
            if (invalid) {
                documentControl.setErrors({ invalid: true });
            }
        }
        this.validateFormControl('document');
    }
    validateFormControl(controlName) {
        let result = true;
        const control = this.formGroup.get(controlName);
        const input = document.getElementById(controlName);
        const labelSpan = document
            .querySelector(`#${controlName} + .feedback`);
        input.classList[control.errors ? 'add' : 'remove']('invalid');
        let textContent = '';
        if (control.errors) {
            result = false;
            Object.keys(control.errors).forEach((error) => {
                switch (error) {
                    case 'required':
                        textContent = 'Please, enter this field';
                        break;
                    case 'invalid':
                        textContent = 'Please, enter valid field';
                        break;
                    case 'notUnique':
                        textContent = `This ${toSpaceBetween(controlName)} already exists`;
                        break;
                    case 'pattern':
                        textContent = `Invalid ${toSpaceBetween(controlName)} format`;
                        break;
                    default:
                        textContent = '';
                        break;
                }
            });
        }
        labelSpan.textContent = textContent;
        return result;
    }
    isUnique(fieldType) {
        let result = true;
        const control = this.formGroup.get(fieldType);
        const form = document.querySelector('form');
        if (!control.errors && control.value) {
            this.customerService.getCustomerByField(fieldType, control.value)
                .subscribe((data) => {
                if (data != null && (!this.customerId || data.id != this.customer.id)) {
                    if (control.errors) {
                        control.errors.notUnique = { notUnique: true };
                    }
                    else {
                        control.setErrors({ notUnique: true });
                    }
                }
                else {
                    if (control.errors) {
                        delete control.errors.notUnique;
                    }
                }
                result = this.validateFormControl(fieldType);
            });
        }
        return result;
    }
    submit() {
        const form = document.querySelector('form');
        if (!form.classList.contains('validated')) {
            form.classList.add('validated');
            this.isUnique('name');
        }
        if (this.validate()) {
            const customer = {
                name: this.formGroup.get('name').value,
                document: this.formGroup.get('document').value,
                documentType: this.formGroup.get('documentType').value,
                phoneNumber: this.formGroup.get('phoneNumber').value,
                optionalPhoneNumber: this.formGroup.get('optionalPhoneNumber').value
            };
            if (this.customer) {
                customer.id = this.customer.id;
                customer.createdAt = this.customer.createdAt;
            }
            const observable = this.customerService.save(customer);
            observable
                .subscribe((data) => {
                this.router.navigate(['/customers']);
            }, () => {
                alert("Error while saving customer");
            });
        }
    }
}
CustomerFormComponent.??fac = function CustomerFormComponent_Factory(t) { return new (t || CustomerFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
CustomerFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CustomerFormComponent, selectors: [["loanlead-customer-form"]], decls: 64, vars: 2, consts: [[1, "border", "border-secondary", "m-3", "p-3", "bg-white", "rounded", 2, "position", "relative", "z-index", "2"], [1, "py-2"], [1, "rounded", "col-lg-2", "col-md-3", "col-sm-6", "col", "py-2", "page-heading", "d-flex", "align-items-center", "justify-content-center"], [1, "material-icons"], ["action", "/customers", "method", "POST", 1, "form-horizontal", "form-with-image", 3, "formGroup", "ngSubmit"], [1, "border", "border-yellow", "rounded"], [1, "d-block", "w-auto", "ml-3", "text-dark-blue"], [1, "row", "px-4", "justify-content-center"], [1, "col-lg-5", "col-md-6", "col-12", "d-flex", "justify-content-center", "flex-column"], [1, "form-group", "pl-3"], ["for", "name"], ["id", "name", "type", "text", "placeholder", "Name", "formControlName", "name", "autocomplete", "off", "required", "", 1, "form-control", 3, "input", "blur"], [1, "feedback", "text-danger"], [1, "form-group"], ["for", "documentType"], ["id", "documentType", "formControlName", "documentType", "required", "", 1, "form-control", 3, "change"], ["value", "national id"], ["value", "passport"], ["value", "driving permit"], ["value", "village id"], [1, "row", "px-4"], [1, "responsive-form-group", "w-100", "justify-content-center"], [1, "col-lg-4", "col-md-5", "col-12"], ["for", "document"], ["id", "document", "type", "text", "placeholder", "Document", "formControlName", "document", "autocomplete", "off", "required", "", 1, "form-control", 3, "input", "blur"], ["for", "phoneNumber"], ["id", "phoneNumber", "type", "text", "placeholder", "First Phone Number", "formControlName", "phoneNumber", "autocomplete", "off", "required", "", 1, "form-control", 3, "input", "blur"], ["for", "optionalPhoneNumber"], ["id", "optionalPhoneNumber", "type", "text", "placeholder", "Second Phone Number", "formControlName", "optionalPhoneNumber", "autocomplete", "off", 1, "form-control", 3, "input", "blur"], [1, "d-flex", "flex-row", "pt-2", "pb-4", "justify-content-end"], ["routerLink", "/customers", 1, "no-decoration", "btn", "btn-secondary", "submit-button", "d-flex", "col-2", "align-items-center", "justify-content-center", "mr-4"], ["type", "submit", 1, "btn", "btn-primary", "submit-button", "d-flex", "col-2", "justify-content-center", "mr-4", 3, "disabled"]], template: function CustomerFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "loanlead-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\u00A0Customer Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function CustomerFormComponent_Template_form_ngSubmit_9_listener($event) { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "fieldset", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "legend", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function CustomerFormComponent_Template_input_input_18_listener($event) { return ctx.validate(); })("blur", function CustomerFormComponent_Template_input_blur_18_listener($event) { return ctx.isUnique("name"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Document Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function CustomerFormComponent_Template_select_change_23_listener($event) { return ctx.validateDocument(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "National ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Passport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Driving Permit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Village Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function CustomerFormComponent_Template_input_input_39_listener($event) { return ctx.validateDocument(); })("blur", function CustomerFormComponent_Template_input_blur_39_listener($event) { return ctx.isUnique("document"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "First Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function CustomerFormComponent_Template_input_input_44_listener($event) { return ctx.validate(); })("blur", function CustomerFormComponent_Template_input_blur_44_listener($event) { return ctx.isUnique("phoneNumber"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Second Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function CustomerFormComponent_Template_input_input_53_listener($event) { return ctx.validate(); })("blur", function CustomerFormComponent_Template_input_blur_53_listener($event) { return ctx.isUnique("optionalPhoneNumber"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "\u00A0Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx.formGroup.valid);
    } }, directives: [_ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jdXN0b21lci1mb3JtL2N1c3RvbWVyLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CustomerFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'loanlead-customer-form',
                templateUrl: './customer-form.component.html',
                styleUrls: ['./customer-form.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _core_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/customers/customers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/customers/customers.component.ts ***!
  \**************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/customer.service */ "./src/app/core/services/customer.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/navigation/navigation.component */ "./src/app/ui/navigation/navigation.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _common_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/pagination/pagination.component */ "./src/app/common/pagination/pagination.component.ts");












function CustomersComponent_ng_container_4_div_1_ng_container_21_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomersComponent_ng_container_4_div_1_ng_container_21_th_16_Template(rf, ctx) { if (rf & 1) {
    const _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomersComponent_ng_container_4_div_1_ng_container_21_th_16_Template_input_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r146); const customers_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3).ngIf; const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r144.selectAllTrigger(customers_r136); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
const _c0 = function (a0) { return [a0]; };
function CustomersComponent_ng_container_4_div_1_ng_container_21_tr_18_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const customer_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](1, _c0, "/customer_form/" + customer_r147.id));
} }
function CustomersComponent_ng_container_4_div_1_ng_container_21_tr_18_td_13_Template(rf, ctx) { if (rf & 1) {
    const _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomersComponent_ng_container_4_div_1_ng_container_21_tr_18_td_13_Template_input_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r153); const customer_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit; const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4); return ctx_r151.check(customer_r147.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("checked", ctx_r149.selectAll);
} }
function CustomersComponent_ng_container_4_div_1_ng_container_21_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomersComponent_ng_container_4_div_1_ng_container_21_tr_18_Template_a_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r155); const customer_r147 = ctx.$implicit; const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4); return ctx_r154.setCustomerLoans(customer_r147); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, CustomersComponent_ng_container_4_div_1_ng_container_21_tr_18_td_12_Template, 3, 3, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, CustomersComponent_ng_container_4_div_1_ng_container_21_tr_18_td_13_Template, 2, 1, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const customer_r147 = ctx.$implicit;
    const currentUser_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().ngIf;
    const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](8, _c0, customer_r147.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](customer_r147.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](customer_r147.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](customer_r147.loans.length == 0 ? "Has no loans" : customer_r147.loans.length == 1 ? "First time borrower" : "Repeat borrower");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](customer_r147.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r143.format(ctx_r143.dateInstance(customer_r147.createdAt)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", currentUser_r140.roles.includes("Application"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", currentUser_r140.roles.includes("Application"));
} }
function CustomersComponent_ng_container_4_div_1_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Phone number 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Created at");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, CustomersComponent_ng_container_4_div_1_ng_container_21_th_15_Template, 2, 0, "th", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, CustomersComponent_ng_container_4_div_1_ng_container_21_th_16_Template, 2, 0, "th", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, CustomersComponent_ng_container_4_div_1_ng_container_21_tr_18_Template, 14, 10, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const currentUser_r140 = ctx.ngIf;
    const customers_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", currentUser_r140.roles.includes("Application"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", currentUser_r140.roles.includes("Application"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", customers_r136);
} }
function CustomersComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\u00A0Customers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Items Count");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function CustomersComponent_ng_container_4_div_1_Template_input_input_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r159); const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r158.validate(); })("blur", function CustomersComponent_ng_container_4_div_1_Template_input_blur_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r159); const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r160.filter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function CustomersComponent_ng_container_4_div_1_Template_input_input_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r159); const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r161.filterLoans($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "\u00A0Create new customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, CustomersComponent_ng_container_4_div_1_ng_container_21_Template, 19, 3, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](22, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomersComponent_ng_container_4_div_1_Template_button_click_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r159); const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r162.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Delete customers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx_r137.itemsCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](22, 3, ctx_r137.currentUser$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx_r137.anySelected);
} }
function CustomersComponent_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " No customers was found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomersComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CustomersComponent_ng_container_4_div_1_Template, 26, 5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, CustomersComponent_ng_container_4_div_2_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const customers_r136 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", customers_r136.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !customers_r136.length);
} }
function CustomersComponent_ng_container_6_app_pagination_1_Template(rf, ctx) { if (rf & 1) {
    const _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-pagination", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChanged", function CustomersComponent_ng_container_6_app_pagination_1_Template_app_pagination_pageChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r166); const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r165.load($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const customersCount_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().ngIf;
    const ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("lastPage", ctx_r164.pagesCount(customersCount_r163));
} }
function CustomersComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CustomersComponent_ng_container_6_app_pagination_1_Template, 1, 1, "app-pagination", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const customersCount_r163 = ctx.ngIf;
    const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", customersCount_r163 > ctx_r133.itemsCount.value);
} }
function CustomersComponent_ng_container_8_table_10_tr_26_Template(rf, ctx) { if (rf & 1) {
    const _r173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomersComponent_ng_container_8_table_10_tr_26_Template_a_click_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r173); const loan_r171 = ctx.$implicit; const ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3); return ctx_r172.setUserBranches(loan_r171.user.branches); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Branches");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const loan_r171 = ctx.$implicit;
    const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](loan_r171.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](loan_r171.customer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](loan_r171.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](loan_r171.tenure);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r170.modifyAmount(loan_r171.amount.toString()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](loan_r171.role.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](loan_r171.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](loan_r171.user.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r170.format(ctx_r170.dateInstance(loan_r171.stagedAt)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r170.format(ctx_r170.dateInstance(loan_r171.createdAt)));
} }
function CustomersComponent_ng_container_8_table_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "table", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Tenure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Stage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Branch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Stage at");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Created at");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, CustomersComponent_ng_container_8_table_10_tr_26_Template, 24, 10, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r168.customerLoans);
} }
function CustomersComponent_ng_container_8_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " No loans was found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomersComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h4", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Loans");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, CustomersComponent_ng_container_8_table_10_Template, 27, 1, "table", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, CustomersComponent_ng_container_8_div_11_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r134.customerLoans.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r134.customerLoans.length);
} }
function CustomersComponent_ng_container_9_ul_10_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const branch_r177 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](branch_r177);
} }
function CustomersComponent_ng_container_9_ul_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CustomersComponent_ng_container_9_ul_10_li_1_Template, 2, 1, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r174.userBranches);
} }
function CustomersComponent_ng_container_9_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " No loans was found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomersComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h4", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, CustomersComponent_ng_container_9_ul_10_Template, 2, 1, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, CustomersComponent_ng_container_9_div_11_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r135.userBranches.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r135.userBranches.length);
} }
class CustomersComponent {
    constructor(customerService, userService, spinner) {
        this.customerService = customerService;
        this.userService = userService;
        this.spinner = spinner;
        this.searchValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.itemsCount = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](5, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1),
        ]);
    }
    ngOnInit() {
        this.spinner.show();
        this.load(1);
        this.customersCount$ = this.customerService.getCustomersCount();
        this.currentUser$ = this.userService.getCurrentUser();
        this.selectAll = false;
        this.entitiesToDelete = [];
    }
    check(id) {
        if (id) {
            if (this.entitiesToDelete.includes(id)) {
                this.entitiesToDelete.splice(this.entitiesToDelete.indexOf(id), 1);
            }
            else {
                this.entitiesToDelete.push(id);
            }
        }
        this.anySelected = this.entitiesToDelete.length > 0;
    }
    load(page) {
        this.customers$ = this.customerService.getCustomers(page - 1, this.itemsCount.value).pipe(customers => {
            this.spinner.hide();
            return customers;
        });
    }
    validate() {
        const input = document.getElementById('itemsCount');
        const labelSpan = document.querySelector('#itemsCount + .feedback');
        input.classList[this.itemsCount.errors ? 'add' : 'remove']('invalid');
        let textContent = '';
        if (this.itemsCount.errors) {
            Object.keys(this.itemsCount.errors).forEach((error) => {
                switch (error) {
                    case 'required':
                        textContent = 'Please, enter this field';
                        break;
                    case 'min':
                        textContent = 'Please, enter higher number';
                        break;
                    case 'max':
                        textContent = 'Please, enter lower number';
                        break;
                    default:
                        textContent = '';
                        break;
                }
            });
        }
        labelSpan.textContent = textContent;
        this.countChanged = true;
    }
    filter() {
        if (!this.itemsCount.errors && this.countChanged) {
            const page = 1;
            this.load(page);
            this.countChanged = false;
        }
    }
    pagesCount(customersCount) {
        const result = customersCount / this.itemsCount.value;
        return Math.round(result) < result ? Math.round(result) + 1 : Math.round(result);
    }
    selectAllTrigger(customers) {
        this.selectAll = !this.selectAll;
        if (this.selectAll) {
            this.entitiesToDelete = customers.map(customer => customer.id);
        }
        else {
            this.entitiesToDelete = [];
        }
        this.anySelected = this.selectAll;
    }
    format(date) {
        return ((date.getDate() < 10) ? '0' + date.getDate() : date.getDate()) +
            '/' + ((date.getMonth() < 10) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) +
            '/' + date.getFullYear() +
            ' ' + ((date.getHours() < 10) ? '0' + date.getHours() : date.getHours()) +
            ':' + ((date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()) +
            ':' + ((date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds());
    }
    dateInstance(date) {
        return new Date(date);
    }
    modifyAmount(amount) {
        return amount.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    setCustomerLoans(customer) {
        this.customerLoans = customer.loans;
    }
    setUserBranches(branches) {
        this.userBranches = branches;
    }
    delete() {
        this.customerService.deleteCustomers(this.entitiesToDelete).subscribe((data) => {
            if (data.err) {
                alert(`Request error with code ${data.err.status}`);
            }
            else {
                this.load(1);
                this.customersCount$ = this.customerService.getCustomersCount();
            }
        });
    }
    filterLoans(event) {
        jquery__WEBPACK_IMPORTED_MODULE_2__('#contentTable tbody tr').filter(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__(this).toggle(jquery__WEBPACK_IMPORTED_MODULE_2__(this).text().toLowerCase().indexOf(jquery__WEBPACK_IMPORTED_MODULE_2__(event.target).val().toLowerCase()) > -1);
        });
    }
}
CustomersComponent.??fac = function CustomersComponent_Factory(t) { return new (t || CustomersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"])); };
CustomersComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CustomersComponent, selectors: [["loanlead-customers"]], decls: 10, vars: 8, consts: [["bgColor", "#FFFFFF", "size", "medium", "color", "#2129BF", "type", "ball-clip-rotate"], [1, "text-light", 2, "font-size", "20px"], [4, "ngIf"], ["class", "border border-secondary m-3 p-3 bg-white rounded animated fadeIn", 4, "ngIf"], ["class", "empty-list", 4, "ngIf"], [1, "border", "border-secondary", "m-3", "p-3", "bg-white", "rounded", "animated", "fadeIn"], [1, "py-2", "page-body-heading", "justify-content-between"], [1, "rounded", "col-lg-2", "col-md-3", "col-12", "py-2", "page-heading", "d-flex", "align-items-center", "justify-content-center"], [1, "material-icons"], [1, "col-md-3", "col-12"], [1, "form-group"], ["for", "itemsCount"], ["id", "itemsCount", "type", "number", "placeholder", "Search", "data-placeholder", "Search", "required", "", 1, "form-control", 3, "formControl", "input", "blur"], [1, "feedback", "text-danger"], [1, "form-group", "col-lg-4", "col-md-5", "col-12", "py-2", "pr-0", "pl-md-2", "pl-0"], ["for", "filterInput"], ["type", "text", "id", "filterInput", "placeholder", "Loan", 1, "form-control", "w-100", 3, "input"], [1, "py-2", "d-flex", "justify-content-end"], ["routerLink", "../customer_form", 1, "btn", "btn-primary", "d-flex", "align-items-center", "col-lg-2", "col-md-3", "col-sm-4", "col-12", "justify-content-center", "py-2"], [1, "py-2"], ["type", "button", "id", "deleteButton", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "py-2", 2, "overflow-x", "auto"], ["id", "contentTable", 1, "table", "table-striped", "table-hover", "table-bordered", "table-condensed", 2, "min-width", "1595px"], [3, "id", 4, "ngFor", "ngForOf"], ["type", "checkbox", "id", "select-all", 3, "click"], [3, "id"], ["href", "javascript:void(0);", "data-toggle", "modal", "data-target", "#loansTableModal", 3, "click"], [3, "routerLink"], ["type", "checkbox", 3, "checked", "click"], [1, "empty-list"], [3, "lastPage", "pageChanged", 4, "ngIf"], [3, "lastPage", "pageChanged"], ["tabindex", "-1", "role", "dialog", "id", "loansTableModal", "aria-hidden", "true", 1, "modal", "fade", "bd-example-modal-lg"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-hidden", "true", 1, "close"], [1, "modal-body", 2, "overflow-x", "auto"], ["id", "loansTable", "class", "table table-striped table-hover table-bordered table-condensed", "style", "min-width: 1350px;", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default"], ["id", "loansTable", 1, "table", "table-striped", "table-hover", "table-bordered", "table-condensed", 2, "min-width", "1350px"], [4, "ngFor", "ngForOf"], ["href", "javascript:void(0);", "data-toggle", "modal", "data-target", "#branchesTableModal", 3, "click"], ["tabindex", "-1", "role", "dialog", "id", "branchesTableModal", "aria-hidden", "true", 1, "modal", "fade", "bd-example-modal-lg"]], template: function CustomersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "loanlead-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, CustomersComponent_ng_container_4_Template, 3, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, CustomersComponent_ng_container_6_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, CustomersComponent_ng_container_8_Template, 15, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, CustomersComponent_ng_container_9_Template, 15, 2, "ng-container", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](5, 4, ctx.customers$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](7, 6, ctx.customersCount$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.customerLoans);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.userBranches);
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerComponent"], _ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _common_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__["PaginationComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jdXN0b21lcnMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CustomersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'loanlead-customers',
                templateUrl: './customers.component.html',
                styleUrls: ['./customers.component.scss']
            }]
    }], function () { return [{ type: _core_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"] }, { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/customers/customers.module.ts":
/*!***********************************************!*\
  !*** ./src/app/customers/customers.module.ts ***!
  \***********************************************/
/*! exports provided: CustomersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersModule", function() { return CustomersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/navigation/navigation.module */ "./src/app/ui/navigation/navigation.module.ts");
/* harmony import */ var _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/pagination/pagination.module */ "./src/app/common/pagination/pagination.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _customers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer-form/customer-form.component */ "./src/app/customers/customer-form/customer-form.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");










class CustomersModule {
}
CustomersModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: CustomersModule });
CustomersModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function CustomersModule_Factory(t) { return new (t || CustomersModule)(); }, imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](CustomersModule, { declarations: [_customers_component__WEBPACK_IMPORTED_MODULE_6__["CustomersComponent"], _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_7__["CustomerFormComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CustomersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_customers_component__WEBPACK_IMPORTED_MODULE_6__["CustomersComponent"], _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_7__["CustomerFormComponent"]],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_loan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/loan.service */ "./src/app/core/services/loan.service.ts");
/* harmony import */ var _core_services_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/role.service */ "./src/app/core/services/role.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/navigation/navigation.component */ "./src/app/ui/navigation/navigation.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");











function DashboardComponent_ng_container_3_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\u00A0Create a loan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function DashboardComponent_ng_container_3_ng_container_16_tr_26_Template(rf, ctx) { if (rf & 1) {
    const _r265 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_ng_container_3_ng_container_16_tr_26_Template_a_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r265); const forwardedLoan_r263 = ctx.$implicit; const ctx_r264 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3); return ctx_r264.receive(forwardedLoan_r263.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Receive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_ng_container_3_ng_container_16_tr_26_Template_a_click_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r265); const forwardedLoan_r263 = ctx.$implicit; const ctx_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3); return ctx_r266.setUserBranches(forwardedLoan_r263.user.branches); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Branches");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const forwardedLoan_r263 = ctx.$implicit;
    const ctx_r262 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", forwardedLoan_r263.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](forwardedLoan_r263.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](forwardedLoan_r263.customer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](forwardedLoan_r263.loanProduct.loanProduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](forwardedLoan_r263.tenure);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r262.modifyAmount(forwardedLoan_r263.amount.toString()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](forwardedLoan_r263.role.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](forwardedLoan_r263.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](forwardedLoan_r263.user.fullName);
} }
function DashboardComponent_ng_container_3_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "table", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Receive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Tenure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Stage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Branches");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, DashboardComponent_ng_container_3_ng_container_16_tr_26_Template, 31, 9, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const forwardedLoans_r261 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", forwardedLoans_r261);
} }
function DashboardComponent_ng_container_3_ng_container_19_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
const _c0 = function (a0, a1) { return { "disabled text-secondary": a0, "text-success": a1 }; };
function DashboardComponent_ng_container_3_ng_container_19_tr_25_td_1_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r280 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_ng_container_3_ng_container_19_tr_25_td_1_a_5_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r280); const receivedLoan_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit; const ctx_r278 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3); return ctx_r278.updateStatus("Approved", receivedLoan_r270); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Approve ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const receivedLoan_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](1, _c0, receivedLoan_r270.status !== "Received", receivedLoan_r270.status === "Received"));
} }
function DashboardComponent_ng_container_3_ng_container_19_tr_25_td_1_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r284 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_ng_container_3_ng_container_19_tr_25_td_1_a_6_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r284); const receivedLoan_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit; const ctx_r282 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3); return ctx_r282.defer(receivedLoan_r270); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Defer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const receivedLoan_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](1, _c0, receivedLoan_r270.status !== "Received", receivedLoan_r270.status === "Received"));
} }
function DashboardComponent_ng_container_3_ng_container_19_tr_25_td_1_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r288 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_ng_container_3_ng_container_19_tr_25_td_1_a_7_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r288); const receivedLoan_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit; const ctx_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3); return ctx_r286.updateStatus("Rejected", receivedLoan_r270); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "block");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Reject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const receivedLoan_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](1, _c0, receivedLoan_r270.status !== "Received", receivedLoan_r270.status === "Received"));
} }
const _c1 = function (a0) { return [a0]; };
function DashboardComponent_ng_container_3_ng_container_19_tr_25_td_1_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const receivedLoan_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](1, _c1, "/loan_form/" + receivedLoan_r270.id));
} }
const _c2 = function () { return [2, 4, 6, 7, 8, 10, 12]; };
function DashboardComponent_ng_container_3_ng_container_19_tr_25_td_1_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r293 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_ng_container_3_ng_container_19_tr_25_td_1_a_9_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r293); const receivedLoan_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit; const ctx_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3); return ctx_r291.forward(receivedLoan_r270); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Forward ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const receivedLoan_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](3, _c0, receivedLoan_r270.status === "Received" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c2).includes(receivedLoan_r270.role.id), receivedLoan_r270.status !== "Received" || !_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](2, _c2).includes(receivedLoan_r270.role.id)));
} }
function DashboardComponent_ng_container_3_ng_container_19_tr_25_td_1_a_10_Template(rf, ctx) { if (rf & 1) {
    const _r297 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_ng_container_3_ng_container_19_tr_25_td_1_a_10_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r297); const receivedLoan_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit; const ctx_r295 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3); return ctx_r295.updateStatus("Disbursed", receivedLoan_r270); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Disburse ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const receivedLoan_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](1, _c0, receivedLoan_r270.status !== "Approved", receivedLoan_r270.status === "Approved"));
} }
const _c3 = function () { return [2, 4, 6]; };
function DashboardComponent_ng_container_3_ng_container_19_tr_25_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DashboardComponent_ng_container_3_ng_container_19_tr_25_td_1_a_5_Template, 4, 4, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, DashboardComponent_ng_container_3_ng_container_19_tr_25_td_1_a_6_Template, 4, 4, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, DashboardComponent_ng_container_3_ng_container_19_tr_25_td_1_a_7_Template, 4, 4, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, DashboardComponent_ng_container_3_ng_container_19_tr_25_td_1_a_8_Template, 2, 3, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, DashboardComponent_ng_container_3_ng_container_19_tr_25_td_1_a_9_Template, 4, 6, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, DashboardComponent_ng_container_3_ng_container_19_tr_25_td_1_a_10_Template, 4, 4, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const receivedLoan_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](8, _c1, "actionMenu" + receivedLoan_r270.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-labelledby", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](10, _c1, "actionMenu" + receivedLoan_r270.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](12, _c2).includes(receivedLoan_r270.role.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](13, _c2).includes(receivedLoan_r270.role.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](14, _c3).includes(receivedLoan_r270.role.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", receivedLoan_r270.role.displayName === "Application");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", receivedLoan_r270.role.displayName !== "Disbursement");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", receivedLoan_r270.role.displayName === "Disbursement");
} }
function DashboardComponent_ng_container_3_ng_container_19_tr_25_Template(rf, ctx) { if (rf & 1) {
    const _r301 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, DashboardComponent_ng_container_3_ng_container_19_tr_25_td_1_Template, 11, 15, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_ng_container_3_ng_container_19_tr_25_Template_a_click_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r301); const receivedLoan_r270 = ctx.$implicit; const ctx_r300 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3); return ctx_r300.setUserBranches(receivedLoan_r270.user.branches); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Branches");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const receivedLoan_r270 = ctx.$implicit;
    const ctx_r269 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", receivedLoan_r270.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r269.roles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](receivedLoan_r270.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](receivedLoan_r270.customer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](receivedLoan_r270.loanProduct.loanProduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](receivedLoan_r270.tenure);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r269.modifyAmount(receivedLoan_r270.amount.toString()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](receivedLoan_r270.role.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](receivedLoan_r270.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](receivedLoan_r270.user.fullName);
} }
function DashboardComponent_ng_container_3_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "table", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DashboardComponent_ng_container_3_ng_container_19_th_5_Template, 2, 0, "th", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Tenure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Stage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Branches");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, DashboardComponent_ng_container_3_ng_container_19_tr_25_Template, 29, 10, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const receivedLoans_r267 = ctx.ngIf;
    const ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r260.roles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", receivedLoans_r267);
} }
function DashboardComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "loanlead-navigation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "fieldset", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "legend", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Forwarded");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Received");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, DashboardComponent_ng_container_3_li_13_Template, 5, 0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, DashboardComponent_ng_container_3_ng_container_16_Template, 27, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, DashboardComponent_ng_container_3_ng_container_19_Template, 26, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](20, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const currentUser_r257 = ctx.ngIf;
    const ctx_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](currentUser_r257.roles.join(", "));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", currentUser_r257.roles.includes("Application"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](17, 4, ctx_r254.forwardedLoans$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](20, 6, ctx_r254.receivedLoans$));
} }
function DashboardComponent_ng_container_5_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Application");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r302 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx_r302.deferStage);
} }
function DashboardComponent_ng_container_5_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Branch Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r303 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx_r303.deferStage);
} }
function DashboardComponent_ng_container_5_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Regional Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r304 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx_r304.deferStage);
} }
function DashboardComponent_ng_container_5_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r305 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx_r305.deferStage);
} }
const _c4 = function () { return [4, 6]; };
function DashboardComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r307 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Choose the stage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, DashboardComponent_ng_container_5_div_10_Template, 4, 1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, DashboardComponent_ng_container_5_div_11_Template, 4, 1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, DashboardComponent_ng_container_5_div_12_Template, 4, 1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, DashboardComponent_ng_container_5_div_13_Template, 2, 1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "textarea", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Loan deferred.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_ng_container_5_Template_button_click_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r307); const ctx_r306 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r306.action(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Defer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](5, _c3).includes(ctx_r255.loanToAction.role.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](6, _c4).includes(ctx_r255.loanToAction.role.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r255.loanToAction.role.id === 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r255.loanToAction.role.id > 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx_r255.comment);
} }
function DashboardComponent_ng_container_36_ul_10_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const branch_r311 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](branch_r311);
} }
function DashboardComponent_ng_container_36_ul_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, DashboardComponent_ng_container_36_ul_10_li_1_Template, 2, 1, "li", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r308 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r308.userBranches);
} }
function DashboardComponent_ng_container_36_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " No loans was found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function DashboardComponent_ng_container_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, DashboardComponent_ng_container_36_ul_10_Template, 2, 1, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, DashboardComponent_ng_container_36_div_11_Template, 2, 0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r256.userBranches.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r256.userBranches.length);
} }
class DashboardComponent {
    constructor(userService, loanService, roleService, spinner) {
        this.userService = userService;
        this.loanService = loanService;
        this.roleService = roleService;
        this.spinner = spinner;
        this.comment = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.deferStage = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
    }
    ngOnInit() {
        let loadedEntitiesCount = 0;
        this.spinner.show();
        this.currentUser$ = this.userService.getCurrentUser().pipe(user => {
            loadedEntitiesCount++;
            return user;
        });
        this.forwardedLoans$ = this.loanService.getForwardedLoans().pipe(loans => {
            loadedEntitiesCount++;
            return loans;
        });
        this.receivedLoans$ = this.loanService.getReceivedLoans().pipe(loans => {
            loadedEntitiesCount++;
            return loans;
        });
        this.roleService.getAllRoles().subscribe((roles) => {
            this.roles = roles;
        });
        setInterval(() => {
            if (loadedEntitiesCount === 3) {
                this.spinner.hide();
            }
        }, 1000);
    }
    setLoanToAction(loan) {
        this.loanToAction = loan;
    }
    action(deferred) {
        if (deferred) {
            this.loanToAction.role = this.roles.find(role => role.id === Number.parseInt(this.deferStage.value, 10));
        }
        this.loanToAction.comment = this.comment.value;
        this.loanService.save(this.loanToAction).subscribe(() => {
            this.forwardedLoans$ = this.loanService.getForwardedLoans();
            this.receivedLoans$ = this.loanService.getReceivedLoans();
        });
    }
    receive(loanId) {
        this.loanService.receiveLoan(loanId).subscribe(() => {
            this.forwardedLoans$ = this.loanService.getForwardedLoans();
            this.receivedLoans$ = this.loanService.getReceivedLoans();
        });
    }
    updateStatus(status, loan) {
        loan = JSON.parse(JSON.stringify(loan));
        loan.status = status;
        this.loanToAction = loan;
    }
    forward(loan) {
        loan = JSON.parse(JSON.stringify(loan));
        loan.status = 'Forwarded';
        loan.role = this.roles.find(role => role.id === this.stageToForward(loan));
        this.loanToAction = loan;
    }
    defer(loan) {
        loan = JSON.parse(JSON.stringify(loan));
        this.deferStage.setValue(loan.role.id > 6 ? '6' : '1');
        loan.status = 'Deferred';
        loan.deferStage = loan.role.id;
        this.loanToAction = loan;
    }
    setUserBranches(branches) {
        this.userBranches = branches;
    }
    modifyAmount(amount) {
        return amount.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    stageToForward(loan) {
        if (loan.type === 'Deduction At Source') {
            if (loan.role.id === 1) {
                return 3;
            }
            else if (loan.role.id === 3) {
                return 5;
            }
            else if (loan.role.id === 5) {
                return 9;
            }
            else {
                return loan.role.id + 1;
            }
        }
        else {
            if (loan.amount < 3000000) {
                if (loan.role.id < 3) {
                    return loan.role.id + 1;
                }
                else if (loan.role.id === 3) {
                    return 5;
                }
                else if (loan.role.id === 5) {
                    return 8;
                }
                else {
                    return loan.role.id + 1;
                }
            }
            else if (loan.amount < 10000000) {
                if (loan.role.id < 5) {
                    return loan.role.id + 1;
                }
                else if (loan.role.id === 5) {
                    return 8;
                }
                else {
                    return loan.role.id + 1;
                }
            }
            else {
                return loan.role.id + 1;
            }
        }
    }
}
DashboardComponent.??fac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_loan_service__WEBPACK_IMPORTED_MODULE_3__["LoanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"])); };
DashboardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DashboardComponent, selectors: [["loanlead-dashboard"]], decls: 37, vars: 6, consts: [["bgColor", "#FFFFFF", "size", "medium", "color", "#2129BF", "type", "ball-clip-rotate"], [1, "text-light", 2, "font-size", "20px"], [4, "ngIf"], ["id", "comment", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-hidden", "true", 1, "close"], [1, "modal-body"], [1, "form-group"], ["for", "actionComment"], ["name", "comment", "id", "actionComment", "rows", "5", 1, "form-control", 3, "formControl"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default", 3, "click"], ["id", "forward-message-modal", "tabindex", "-1", 1, "modal", "fade"], ["id", "forward-message"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default"], [1, "border", "border-secondary", "m-3", "p-3", "bg-white", "rounded", "animated", "fadeInUp"], [1, "border", "border-yellow", "rounded", "px-3"], [1, "d-block", "w-auto", "ml-3", "text-dark-blue"], ["id", "user-dashboard-tab", "role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item", "order-sm-1", "order-3"], ["id", "forwarded-loans-tab", "data-toggle", "tab", "href", "#forwarded", "role", "tab", "aria-controls", "forwarded", "aria-selected", "true", 1, "nav-link", "active"], [1, "nav-item", "order-sm-2", "order-4"], ["id", "received-loans-tab", "data-toggle", "tab", "href", "#received", "role", "tab", "aria-controls", "received", "aria-selected", "false", 1, "nav-link"], ["class", "nav-item order-sm-3 order-1 col-sm-auto nav-item pb-sm-0 pr-0 pl-sm-2 pl-0 pb-2 ml-auto", 4, "ngIf"], ["id", "user-dashboard-tab-content", 1, "tab-content"], ["id", "forwarded", "role", "tabpanel", "aria-labelledby", "forwarded-loans-tab", 1, "tab-pane", "fade", "show", "active"], ["id", "received", "role", "tabpanel", "aria-labelledby", "received-loans-tab", 1, "tab-pane", "fade"], [1, "nav-item", "order-sm-3", "order-1", "col-sm-auto", "nav-item", "pb-sm-0", "pr-0", "pl-sm-2", "pl-0", "pb-2", "ml-auto"], ["routerLink", "../loan_form", 1, "btn", "btn-primary", "text-light", "d-flex", "align-items-center", "justify-content-center", "p-2", "align-items-start", 2, "height", "83.5%"], [1, "material-icons"], [1, "py-2", 2, "overflow-x", "auto"], ["id", "forwardedLoans", 1, "table", "table-striped", "table-hover", "table-bordered", "table-condensed", 2, "min-width", "1350px"], [3, "id", 4, "ngFor", "ngForOf"], [3, "id"], [1, "btn", "btn-purple", "text-yellow", 3, "click"], ["href", "#", 1, "text-dark-blue"], ["href", "#", 1, "text-dark-blue", "amount"], ["href", "#", "data-toggle", "modal", "data-target", "#branchesTableModal", 1, "text-dark-blue", 3, "click"], ["id", "receivedLoans", 1, "table", "table-striped", "table-hover", "table-bordered", "table-condensed", 2, "min-width", "1350px"], ["class", "dropdown", 4, "ngIf"], [1, "dropdown"], ["href", "#", "data-toggle", "dropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "false", 1, "text-dark-blue", 3, "id"], [1, "dropdown-menu", "position-absolute"], ["data-toggle", "modal", "data-target", "#comment", "class", "dropdown-item d-flex align-items-center no-decoration", 3, "ngClass", "click", 4, "ngIf"], ["href", "javascript:void(0);", "data-toggle", "modal", "data-target", "#defer", "class", "dropdown-item d-flex align-items-center no-decoration", 3, "ngClass", "click", 4, "ngIf"], ["href", "javascript:void(0);", "data-toggle", "modal", "data-target", "#comment", "class", "dropdown-item d-flex align-items-center no-decoration", 3, "ngClass", "click", 4, "ngIf"], ["class", "dropdown-item d-flex text-success align-items-center no-decoration", 3, "routerLink", 4, "ngIf"], ["data-toggle", "modal", "data-target", "#comment", 1, "dropdown-item", "d-flex", "align-items-center", "no-decoration", 3, "ngClass", "click"], ["href", "javascript:void(0);", "data-toggle", "modal", "data-target", "#defer", 1, "dropdown-item", "d-flex", "align-items-center", "no-decoration", 3, "ngClass", "click"], ["href", "javascript:void(0);", "data-toggle", "modal", "data-target", "#comment", 1, "dropdown-item", "d-flex", "align-items-center", "no-decoration", 3, "ngClass", "click"], [1, "dropdown-item", "d-flex", "text-success", "align-items-center", "no-decoration", 3, "routerLink"], ["id", "defer", 1, "modal", "fade"], ["type", "button", "data-dismiss", "modal", 1, "close"], ["class", "form-group", 4, "ngIf"], ["class", "form-group", "hidden", "", 4, "ngIf"], ["for", "deferComment"], ["id", "deferComment", "name", "comment", "rows", "5", 1, "form-control", 3, "formControl"], ["type", "radio", "id", "application", "name", "stage", "value", "1", 3, "formControl"], ["for", "application"], ["type", "radio", "id", "branch-approval", "name", "stage", "value", "2", 3, "formControl"], ["for", "branch-approval"], ["type", "radio", "id", "regional-approval", "name", "stage", "value", "4", 3, "formControl"], ["for", "regional-approval"], ["hidden", "", 1, "form-group"], ["type", "radio", "name", "stage", "value", "6", 3, "formControl"], ["tabindex", "-1", "role", "dialog", "id", "branchesTableModal", "aria-hidden", "true", 1, "modal", "fade", "bd-example-modal-lg"], [1, "modal-dialog", "modal-lg"], [1, "modal-body", 2, "overflow-x", "auto"], ["class", "empty-list", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "empty-list"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, DashboardComponent_ng_container_3_Template, 21, 8, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DashboardComponent_ng_container_5_Template, 22, 7, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Comment your action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_Template_button_click_21_listener($event) { return ctx.action(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Done ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, DashboardComponent_ng_container_36_Template, 15, 2, "ng-container", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](4, 4, ctx.currentUser$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loanToAction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx.comment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.userBranches);
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'loanlead-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return [{ type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _core_services_loan_service__WEBPACK_IMPORTED_MODULE_3__["LoanService"] }, { type: _core_services_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/navigation/navigation.module */ "./src/app/ui/navigation/navigation.module.ts");
/* harmony import */ var _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/pagination/pagination.module */ "./src/app/common/pagination/pagination.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _loan_form_loan_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loan-form/loan-form.component */ "./src/app/dashboard/loan-form/loan-form.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");










class DashboardModule {
}
DashboardModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: DashboardModule });
DashboardModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _loan_form_loan_form_component__WEBPACK_IMPORTED_MODULE_7__["LoanFormComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _loan_form_loan_form_component__WEBPACK_IMPORTED_MODULE_7__["LoanFormComponent"]],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboard/loan-form/loan-form.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/loan-form/loan-form.component.ts ***!
  \************************************************************/
/*! exports provided: LoanFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanFormComponent", function() { return LoanFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_services_loan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/loan.service */ "./src/app/core/services/loan.service.ts");
/* harmony import */ var _core_services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/customer.service */ "./src/app/core/services/customer.service.ts");
/* harmony import */ var _core_services_loan_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/loan-product.service */ "./src/app/core/services/loan-product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function LoanFormComponent_ng_container_43_ul_7_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LoanFormComponent_ng_container_43_ul_7_li_1_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r184); const customer_r182 = ctx.$implicit; const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3); return ctx_r183.setCustomer(customer_r182.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const customer_r182 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", customer_r182.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](customer_r182.name);
} }
function LoanFormComponent_ng_container_43_ul_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, LoanFormComponent_ng_container_43_ul_7_li_1_Template, 2, 2, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r180.matchingCustomers);
} }
function LoanFormComponent_ng_container_43_Template(rf, ctx) { if (rf & 1) {
    const _r186 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function LoanFormComponent_ng_container_43_Template_input_input_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r186); const ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r185.filterCustomers(); })("blur", function LoanFormComponent_ng_container_43_Template_input_blur_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r186); const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r187.customerExists(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, LoanFormComponent_ng_container_43_ul_7_Template, 2, 1, "ul", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r178.matchingCustomers);
} }
function LoanFormComponent_ng_container_44_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const loanProduct_r189 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", loanProduct_r189.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](loanProduct_r189.loanProduct);
} }
function LoanFormComponent_ng_container_44_Template(rf, ctx) { if (rf & 1) {
    const _r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function LoanFormComponent_ng_container_44_Template_select_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r191); const ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r190.validate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Chose loan type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, LoanFormComponent_ng_container_44_option_8_Template, 2, 2, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r179.loanProducts);
} }
const toSpaceBetween = (s) => {
    return s.replace(/[A-Z]/g, (c) => ` ${c.toLowerCase()}`);
};
class LoanFormComponent {
    constructor(loanService, customerService, loanProductService, activatedRoute, fb, router) {
        this.loanService = loanService;
        this.customerService = customerService;
        this.loanProductService = loanProductService;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.router = router;
    }
    ngOnInit() {
        this.formGroup = this.fb.group({
            type: [''],
            amount: [''],
            tenure: [''],
            customer: [''],
            loanProduct: [''],
            securityTypes: ['']
        }, {
            validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
        });
        this.loanProductService.getAllLoanProducts().subscribe((loanProducts) => {
            this.loanProducts = loanProducts;
        });
        const customers$ = this.customerService.getAllCustomers();
        this.activatedRoute.paramMap.subscribe((paramMap) => {
            this.loanId = Number.parseInt(paramMap.get('loanId'), 10);
            if (this.loanId) {
                this.loanService.find(this.loanId).subscribe(loan => {
                    this.loan = loan;
                    this.formGroup.patchValue({
                        type: loan.type,
                        amount: loan.amount,
                        tenure: loan.tenure,
                        customer: loan.customer,
                        loanProduct: loan.loanProduct.id,
                        securityTypes: loan.securityTypes
                    });
                    customers$.subscribe((customers) => {
                        this.customers = customers;
                        this.matchingCustomers = customers.filter(customer => customer.name === loan.customer);
                    });
                });
            }
            else {
                customers$.subscribe((customers) => {
                    this.customers = this.matchingCustomers = customers;
                });
            }
        });
    }
    validate() {
        let valid = true;
        const controls = this.formGroup.controls;
        Object.keys(controls).forEach((field) => {
            valid = this.validateFormControl(field);
        });
        return valid;
    }
    setCustomer(customer) {
        this.formGroup.get('customer').setValue(customer);
    }
    validateFormControl(field) {
        let result = true;
        const control = this.formGroup.get(field);
        const input = document.getElementById(field);
        const labelSpan = document
            .querySelector(`#${field} + .feedback`);
        input.classList[control.errors ? 'add' : 'remove']('invalid');
        let labelContent = '';
        if (control.errors) {
            Object.keys(control.errors).forEach((error) => {
                switch (error) {
                    case 'required':
                        labelContent = 'Please, enter this field';
                        break;
                    case 'notExists':
                        labelContent = `This ${toSpaceBetween(field)} does not exist`;
                        break;
                    default:
                        labelContent = '';
                        break;
                }
            });
            result = false;
        }
        labelSpan.textContent = labelContent;
        return result;
    }
    filterCustomers() {
        this.matchingCustomers = this.customers.filter(customer => customer.name.indexOf(this.formGroup.get('customer').value) > -1);
    }
    customerExists() {
        const control = this.formGroup.get('customer');
        if (!control.errors && control.value) {
            if (!this.customers.find(customer => customer.name === control.value)) {
                if (control.errors) {
                    control.errors.notUnique = { notExists: true };
                }
                else {
                    control.setErrors({ notExists: true });
                }
            }
            else {
                if (control.errors) {
                    delete control.errors.notExists;
                }
            }
            this.validateFormControl('customer');
        }
    }
    submit() {
        if (this.validate()) {
            const loan = {
                type: this.formGroup.get('type').value,
                tenure: this.formGroup.get('tenure').value,
                amount: this.formGroup.get('amount').value,
                customer: this.formGroup.get('customer').value,
                loanProduct: this.loanProducts.find(loanProduct => loanProduct.id === Number.parseInt(this.formGroup.get('loanProduct').value, 10)),
                securityTypes: this.formGroup.get('securityTypes').value
            };
            if (this.loan) {
                loan.id = this.loan.id;
                loan.role = this.loan.role;
                loan.stagedAt = this.loan.stagedAt;
                loan.receiveTimestamp = this.loan.receiveTimestamp;
                loan.deferStage = this.loan.deferStage;
                loan.typeChanged = this.loan.typeChanged;
                loan.status = this.loan.status;
                loan.comment = this.loan.comment;
            }
            else {
                loan.status = 'Created';
                loan.comment = 'Loan created';
            }
            const observable = this.loanService.save(loan);
            observable
                .subscribe((data) => {
                this.router.navigate(['/dashboard']);
            }, () => {
                alert('Error while saving loan product');
            });
        }
    }
}
LoanFormComponent.??fac = function LoanFormComponent_Factory(t) { return new (t || LoanFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_loan_service__WEBPACK_IMPORTED_MODULE_2__["LoanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_loan_product_service__WEBPACK_IMPORTED_MODULE_4__["LoanProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
LoanFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LoanFormComponent, selectors: [["loanlead-loan-form"]], decls: 80, vars: 4, consts: [[1, "border", "border-secondary", "m-3", "p-3", "bg-white", "rounded", 2, "position", "relative", "z-index", "2"], [1, "py-2"], [1, "rounded", "col-lg-2", "col-md-3", "col-sm-6", "col", "py-2", "page-heading", "d-flex", "align-items-center", "justify-content-center"], [1, "material-icons"], ["action", "/loan", "method", "post", 1, "form-horizontal", "form-with-image", 3, "formGroup", "ngSubmit"], [1, "border", "border-yellow", "rounded"], [1, "d-block", "w-auto", "ml-3", "text-dark-blue"], [1, "row", "px-4"], [1, "responsive-form-group", "w-100", "justify-content-center"], [1, "col-lg-4", "col-md-5", "col-12"], [1, "form-group"], ["for", "type"], ["id", "type", "formControlName", "type", 1, "item_text3", "form-control", 3, "change"], ["value", "", "disabled", "", "selected", ""], ["value", "Group Loans"], ["value", "MSE"], [1, "feedback", "text-danger"], ["for", "amount"], ["type", "number", "id", "amount", "placeholder", "Amount", "formControlName", "amount", 1, "form-control", 3, "input"], ["for", "tenure"], ["type", "number", "id", "tenure", "placeholder", "Tenure", "formControlName", "tenure", 1, "form-control", 3, "input"], [4, "ngIf"], ["for", "securityTypes"], ["multiple", "", "id", "securityTypes", "name", "securityTypes", "formControlName", "securityTypes", 1, "form-control"], ["value", "Household chattels", "selected", ""], ["value", "Motor vehicle"], ["value", "Land sale agreement"], ["value", "Land title"], ["value", "Equipment"], ["value", "Cash"], ["value", "Salary"], ["value", "Group guarantee"], ["value", "Unsecure"], [1, "d-flex", "flex-row", "pt-2", "pb-4", "justify-content-end"], ["routerLink", "/dashboard", 1, "no-decoration", "btn", "btn-secondary", "submit-button", "d-flex", "col-2", "align-items-center", "justify-content-center", "mr-4"], ["type", "submit", 1, "btn", "btn-primary", "submit-button", "d-flex", "col-2", "justify-content-center", "mr-4", 3, "disabled"], [1, "form-group", "dropdown"], ["for", "customer"], ["type", "text", "id", "customer", "placeholder", "Customer", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "autocomplete", "off", "formControlName", "customer", 1, "dropdown-toggle", "form-control", 3, "input", "blur"], ["class", "dropdown-menu", "aria-labelledby", "customer", "id", "customersList", 4, "ngIf"], ["aria-labelledby", "customer", "id", "customersList", 1, "dropdown-menu"], ["class", "dropdown-item", 3, "id", "click", 4, "ngFor", "ngForOf"], [1, "dropdown-item", 3, "id", "click"], ["for", "loanProduct"], ["id", "loanProduct", "formControlName", "loanProduct", 1, "item_text3", "form-control", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function LoanFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\u00A0Loan Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LoanFormComponent_Template_form_ngSubmit_8_listener($event) { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "fieldset", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "legend", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Loan Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function LoanFormComponent_Template_select_change_18_listener($event) { return ctx.validate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Chose loan group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Group Loans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "MSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function LoanFormComponent_Template_input_input_33_listener($event) { return ctx.validate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Tenure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function LoanFormComponent_Template_input_input_39_listener($event) { return ctx.validate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](43, LoanFormComponent_ng_container_43_Template, 8, 1, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](44, LoanFormComponent_ng_container_44_Template, 10, 1, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Type Of Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Household chattels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Motor vehicle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Land sale agreement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Land title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Equipment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Cash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Salary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Group guarantee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Unsecure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "\u00A0Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.customers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loanProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx.formGroup.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectMultipleControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9sb2FuLWZvcm0vbG9hbi1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoanFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'loanlead-loan-form',
                templateUrl: './loan-form.component.html',
                styleUrls: ['./loan-form.component.scss']
            }]
    }], function () { return [{ type: _core_services_loan_service__WEBPACK_IMPORTED_MODULE_2__["LoanService"] }, { type: _core_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"] }, { type: _core_services_loan_product_service__WEBPACK_IMPORTED_MODULE_4__["LoanProductService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.component.ts ***!
  \********************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/navigation/navigation.component */ "./src/app/ui/navigation/navigation.component.ts");








function EditProfileComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r215 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "loanlead-navigation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "em", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "\u00A0Edit profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function EditProfileComponent_ng_container_0_Template_form_ngSubmit_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r215); const ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r214.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "fieldset", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "legend", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function EditProfileComponent_ng_container_0_Template_input_change_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r215); const ctx_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r216.onFileChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Employee ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function EditProfileComponent_ng_container_0_Template_input_input_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r215); const ctx_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r217.validate(); })("blur", function EditProfileComponent_ng_container_0_Template_input_blur_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r215); const ctx_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r218.isUnique("employeeId"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function EditProfileComponent_ng_container_0_Template_input_input_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r215); const ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r219.validate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Full name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function EditProfileComponent_ng_container_0_Template_input_input_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r215); const ctx_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r220.validate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function EditProfileComponent_ng_container_0_Template_input_input_43_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r215); const ctx_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r221.validate(); })("blur", function EditProfileComponent_ng_container_0_Template_input_blur_43_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r215); const ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r222.isUnique("email"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function EditProfileComponent_ng_container_0_Template_input_input_51_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r215); const ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r223.validate(); })("blur", function EditProfileComponent_ng_container_0_Template_input_blur_51_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r215); const ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r224.isUnique("phoneNumber"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Optional Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function EditProfileComponent_ng_container_0_Template_input_input_57_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r215); const ctx_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r225.validate(); })("blur", function EditProfileComponent_ng_container_0_Template_input_blur_57_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r215); const ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r226.isUnique("optionalPhoneNumber"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "\u00A0Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r213 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r213.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r213.user.picturePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx_r213.formGroup.valid);
} }
const toSpaceBetween = (s) => {
    return s.replace(/[A-Z]/g, (c) => ` ${c.toLowerCase()}`);
};
class EditProfileComponent {
    constructor(userService, cd, router) {
        this.userService = userService;
        this.cd = cd;
        this.router = router;
        this.file = null;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            employeeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('07[0-9]{8}')]),
            optionalPhoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('07[0-9]{8}')),
        });
    }
    ngOnInit() {
        this.userService.getCurrentUser().subscribe((user) => {
            this.user = user;
            this.formGroup.patchValue({
                employeeId: user.employeeId,
                password: user.password,
                fullName: user.fullName,
                email: user.email,
                phoneNumber: user.phoneNumber,
                optionalPhoneNumber: user.optionalPhoneNumber
            });
        });
    }
    validate() {
        let result = true;
        const controls = this.formGroup.controls;
        Object.keys(controls).forEach((controlName) => {
            result = this.validateFormControl(controlName);
        });
        return result;
    }
    validateFormControl(controlName) {
        let result = true;
        const control = this.formGroup.get(controlName);
        const input = document.getElementById(controlName);
        const labelSpan = document
            .querySelector(`#${controlName} + .feedback`);
        input.classList[control.errors ? 'add' : 'remove']('invalid');
        let textContent = '';
        if (control.errors) {
            result = false;
            Object.keys(control.errors).forEach((error) => {
                switch (error) {
                    case 'required':
                        textContent = 'Please, enter this field';
                        break;
                    case 'notUnique':
                        textContent = `This ${toSpaceBetween(controlName)} already exists`;
                        break;
                    case 'pattern':
                        textContent = `Invalid ${toSpaceBetween(controlName)} format`;
                        break;
                    default:
                        textContent = '';
                        break;
                }
            });
        }
        labelSpan.textContent = textContent;
        return result;
    }
    isUnique(fieldType) {
        let result = true;
        const control = this.formGroup.get(fieldType);
        if (!control.errors && control.value) {
            this.userService.getUserByField(fieldType, control.value)
                .subscribe((data) => {
                if (data != null && data.id !== this.user.id) {
                    if (control.errors) {
                        control.errors.notUnique = { notUnique: true };
                    }
                    else {
                        control.setErrors({ notUnique: true });
                    }
                }
                else {
                    if (control.errors) {
                        delete control.errors.notUnique;
                    }
                }
                result = this.validateFormControl(fieldType);
            });
        }
        return result;
    }
    submit() {
        if (this.validate()) {
            const formData = new FormData();
            formData.append('file', this.file);
            formData.append('id', this.user.id.toString());
            formData.append('employeeId', this.formGroup.get('employeeId').value);
            formData.append('password', this.formGroup.get('password').value);
            formData.append('fullName', this.formGroup.get('fullName').value);
            formData.append('email', this.formGroup.get('email').value);
            formData.append('status', this.user.status);
            formData.append('phoneNumber', this.formGroup.get('phoneNumber').value);
            formData.append('optionalPhoneNumber', this.formGroup.get('optionalPhoneNumber').value);
            this.user.roles.forEach(role => formData.append('roles', role));
            this.user.branches.forEach(branch => formData.append('branches', branch));
            if (!this.file) {
                formData.append('picturePath', this.user.picturePath);
            }
            this.userService.save(formData)
                .subscribe((data) => {
                if (!data.err) {
                    this.router.navigate(['/home']);
                }
                else {
                    alert('Error while saving user');
                }
            });
        }
    }
    onFileChange(event) {
        if (event.target.files && event.target.files.length) {
            this.file = event.target.files[0];
        }
    }
}
EditProfileComponent.??fac = function EditProfileComponent_Factory(t) { return new (t || EditProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
EditProfileComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: EditProfileComponent, selectors: [["loanlead-edit-profile"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "border", "border-secondary", "m-3", "p-3", "bg-white", "rounded", 2, "position", "relative", "z-index", "2"], [1, "py-2"], [1, "rounded", "col-lg-2", "col-md-3", "col-sm-6", "col", "py-2", "page-heading", "d-flex", "align-items-center", "justify-content-center"], [1, "material-icons"], ["action", "/users", "method", "POST", "enctype", "multipart/form-data", 1, "form-horizontal", "form-with-image", 3, "formGroup", "ngSubmit"], [1, "border", "border-yellow", "rounded"], [1, "d-block", "w-auto", "ml-3", "text-dark-blue"], [1, "row", "px-4", "justify-content-center"], [1, "col-lg-3", "col-md-4", "col-12", "d-flex", "justify-content-center", "p-3"], ["for", "picture", 1, "image-input", "rounded-circle"], [1, "rounded-circle", 3, "src"], ["type", "file", "name", "file", "id", "picture", "hidden", "", 3, "change"], [1, "col-lg-5", "col-md-6", "col-12", "d-flex", "justify-content-center", "flex-column"], [1, "col-lg-4", "col-md-5", "col-12"], [1, "form-group"], ["for", "employeeId"], ["id", "employeeId", "type", "text", "placeholder", "Employee Id", "formControlName", "employeeId", "required", "", 1, "form-control", 3, "input", "blur"], [1, "feedback", "text-danger"], [1, "form-group", "pl-3"], ["for", "password"], ["tabindex", "0", "type", "password", "id", "password", "placeholder", "Password", "formControlName", "password", "data-toggle", "popover", 1, "form-control", 3, "input"], [1, "row", "px-4"], [1, "responsive-form-group", "w-100", "justify-content-center"], ["for", "fullName"], ["id", "fullName", "type", "text", "placeholder", "Full name", "formControlName", "fullName", "required", "", 1, "form-control", 3, "input"], ["for", "email"], ["id", "email", "type", "email", "placeholder", "Email", "formControlName", "email", "required", "", 1, "form-control", 3, "input", "blur"], ["for", "phoneNumber"], ["id", "phoneNumber", "type", "text", "placeholder", "Phone Number", "formControlName", "phoneNumber", "required", "", 1, "form-control", 3, "input", "blur"], ["for", "optionalPhoneNumber"], ["id", "optionalPhoneNumber", "type", "text", "placeholder", "Phone Number", "formControlName", "optionalPhoneNumber", 1, "form-control", 3, "input", "blur"], [1, "d-flex", "flex-row", "pt-2", "pb-4", "justify-content-end"], ["routerLink", "/home", 1, "no-decoration", "btn", "btn-secondary", "submit-button", "d-flex", "col-2", "align-items-center", "justify-content-center", "mr-4"], ["type", "submit", 1, "btn", "btn-primary", "submit-button", "d-flex", "col-2", "justify-content-center", "mr-4", 3, "disabled"]], template: function EditProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, EditProfileComponent_ng_container_0_Template, 67, 3, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EditProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'loanlead-edit-profile',
                templateUrl: './edit-profile.component.html',
                styleUrls: ['./edit-profile.component.scss']
            }]
    }], function () { return [{ type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/edit-profile/edit-profile.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.module.ts ***!
  \*****************************************************/
/*! exports provided: EditProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileModule", function() { return EditProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/navigation/navigation.module */ "./src/app/ui/navigation/navigation.module.ts");
/* harmony import */ var _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/pagination/pagination.module */ "./src/app/common/pagination/pagination.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _edit_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-profile.component */ "./src/app/edit-profile/edit-profile.component.ts");








class EditProfileModule {
}
EditProfileModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: EditProfileModule });
EditProfileModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function EditProfileModule_Factory(t) { return new (t || EditProfileModule)(); }, imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](EditProfileModule, { declarations: [_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__["EditProfileComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EditProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__["EditProfileComponent"]],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/entities/entities.component.ts":
/*!************************************************!*\
  !*** ./src/app/entities/entities.component.ts ***!
  \************************************************/
/*! exports provided: EntitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntitiesComponent", function() { return EntitiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_services_entity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/entity.service */ "./src/app/core/services/entity.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/navigation/navigation.component */ "./src/app/ui/navigation/navigation.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _common_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/pagination/pagination.component */ "./src/app/common/pagination/pagination.component.ts");










const _c0 = function (a0) { return [a0]; };
function EntitiesComponent_ng_container_4_div_1_tr_42_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EntitiesComponent_ng_container_4_div_1_tr_42_Template_input_click_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r41); const entity_r39 = ctx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3); return ctx_r40.check(entity_r39.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const entity_r39 = ctx.$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](11, _c0, entity_r39.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](entity_r39.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](entity_r39.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](entity_r39.shortName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](entity_r39.boxNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](entity_r39.plotNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](entity_r39.branchesNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](entity_r39.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r38.format(ctx_r38.dateInstance(entity_r39.createdAt)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](13, _c0, "/entity_form/" + entity_r39.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("checked", ctx_r38.selectAll);
} }
function EntitiesComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\u00A0Entities");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Items Count");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function EntitiesComponent_ng_container_4_div_1_Template_input_input_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r42.validate(); })("blur", function EntitiesComponent_ng_container_4_div_1_Template_input_blur_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r43); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r44.filter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "\u00A0Create new entity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Short name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Box number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Plot number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Branches number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Created at");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EntitiesComponent_ng_container_4_div_1_Template_input_click_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r43); const entities_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().ngIf; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r45.selectAllTrigger(entities_r35); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, EntitiesComponent_ng_container_4_div_1_tr_42_Template, 22, 15, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EntitiesComponent_ng_container_4_div_1_Template_button_click_44_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r43); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r47.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Delete entities");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const entities_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().ngIf;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx_r36.itemsCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", entities_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx_r36.anySelected);
} }
function EntitiesComponent_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " No entities was found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function EntitiesComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, EntitiesComponent_ng_container_4_div_1_Template, 46, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, EntitiesComponent_ng_container_4_div_2_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const entities_r35 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", entities_r35.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !entities_r35.length);
} }
function EntitiesComponent_ng_container_6_app_pagination_1_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-pagination", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChanged", function EntitiesComponent_ng_container_6_app_pagination_1_Template_app_pagination_pageChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r51.load($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const entitiesCount_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().ngIf;
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("lastPage", ctx_r50.pagesCount(entitiesCount_r49));
} }
function EntitiesComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, EntitiesComponent_ng_container_6_app_pagination_1_Template, 1, 1, "app-pagination", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const entitiesCount_r49 = ctx.ngIf;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", entitiesCount_r49 > ctx_r34.itemsCount.value);
} }
class EntitiesComponent {
    constructor(entityService, router, spinner) {
        this.entityService = entityService;
        this.router = router;
        this.spinner = spinner;
        this.searchValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.itemsCount = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](5, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(5),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(20),
        ]);
    }
    ngOnInit() {
        this.spinner.show();
        this.load(1);
        this.entitiesCount$ = this.entityService.getEntitiesCount();
        this.selectAll = false;
        this.entitiesToDelete = [];
    }
    check(id) {
        if (id) {
            if (this.entitiesToDelete.includes(id)) {
                this.entitiesToDelete.splice(this.entitiesToDelete.indexOf(id), 1);
            }
            else {
                this.entitiesToDelete.push(id);
            }
        }
        this.anySelected = this.entitiesToDelete.length > 0;
    }
    load(page) {
        this.entities$ = this.entityService.getEntities(page - 1, this.itemsCount.value).pipe(entities => {
            this.spinner.hide();
            return entities;
        });
    }
    validate() {
        const input = document.getElementById('itemsCount');
        const labelSpan = document.querySelector('#itemsCount + .feedback');
        input.classList[this.itemsCount.errors ? 'add' : 'remove']('invalid');
        let textContent = '';
        if (this.itemsCount.errors) {
            Object.keys(this.itemsCount.errors).forEach((error) => {
                switch (error) {
                    case 'required':
                        textContent = 'Please, enter this field';
                        break;
                    case 'min':
                        textContent = 'Please, enter higher number';
                        break;
                    case 'max':
                        textContent = 'Please, enter lower number';
                        break;
                    default:
                        textContent = '';
                        break;
                }
            });
        }
        labelSpan.textContent = textContent;
        this.countChanged = true;
    }
    filter() {
        if (!this.itemsCount.errors && this.countChanged) {
            const page = 1;
            this.load(page);
            this.countChanged = false;
        }
    }
    pagesCount(entitiesCount) {
        let result = entitiesCount / this.itemsCount.value;
        return Math.round(result) < result ? Math.round(result) + 1 : Math.round(result);
    }
    selectAllTrigger(entities) {
        this.selectAll = !this.selectAll;
        if (this.selectAll) {
            this.entitiesToDelete = entities.map(entity => entity.id);
        }
        else {
            this.entitiesToDelete = [];
        }
        this.anySelected = this.selectAll;
    }
    format(date) {
        return ((date.getDate() < 10) ? '0' + date.getDate() : date.getDate()) +
            "/" + ((date.getMonth() < 10) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) +
            "/" + date.getFullYear() +
            " " + ((date.getHours() < 10) ? '0' + date.getHours() : date.getHours()) +
            ":" + ((date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()) +
            ":" + ((date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds());
    }
    dateInstance(date) {
        return new Date(date);
    }
    delete() {
        this.entityService.deleteEntities(this.entitiesToDelete).subscribe((data) => {
            if (data.err) {
                alert(`Request error with code ${data.err.status}`);
            }
            else {
                this.load(1);
                this.entitiesCount$ = this.entityService.getEntitiesCount();
            }
        });
    }
}
EntitiesComponent.??fac = function EntitiesComponent_Factory(t) { return new (t || EntitiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_entity_service__WEBPACK_IMPORTED_MODULE_2__["EntityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"])); };
EntitiesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: EntitiesComponent, selectors: [["loanlead-entities"]], decls: 8, vars: 6, consts: [["bgColor", "#FFFFFF", "size", "medium", "color", "#2129BF", "type", "ball-clip-rotate"], [1, "text-light", 2, "font-size", "20px"], [4, "ngIf"], ["class", "border border-secondary m-3 p-3 bg-white rounded animated fadeIn", 4, "ngIf"], ["class", "empty-list", 4, "ngIf"], [1, "border", "border-secondary", "m-3", "p-3", "bg-white", "rounded", "animated", "fadeIn"], [1, "py-2", "page-body-heading", "justify-content-between"], [1, "rounded", "col-lg-2", "col-md-3", "col-12", "py-2", "page-heading", "d-flex", "align-items-center", "justify-content-center"], [1, "material-icons"], [1, "col-md-3", "col-12"], [1, "form-group"], ["for", "itemsCount"], ["id", "itemsCount", "type", "number", "placeholder", "Search", "data-placeholder", "Search", "required", "", 1, "form-control", 3, "formControl", "input", "blur"], [1, "feedback", "text-danger"], [1, "py-2", "d-flex", "justify-content-end"], ["routerLink", "../entity_form", 1, "btn", "btn-primary", "d-flex", "align-items-center", "col-lg-2", "col-md-3", "col-sm-4", "col-12", "justify-content-center", "py-2"], [1, "py-2", 2, "overflow-x", "auto"], ["id", "contentTable", 1, "table", "table-striped", "table-hover", "table-bordered", "table-condensed", 2, "min-width", "1595px"], ["type", "checkbox", "id", "select-all", 3, "click"], [3, "id", 4, "ngFor", "ngForOf"], [1, "py-2"], ["type", "button", "id", "deleteButton", 1, "btn", "btn-primary", 3, "disabled", "click"], [3, "id"], [3, "routerLink"], ["type", "checkbox", 3, "checked", "click"], [1, "empty-list"], [3, "lastPage", "pageChanged", 4, "ngIf"], [3, "lastPage", "pageChanged"]], template: function EntitiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "loanlead-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, EntitiesComponent_ng_container_4_Template, 3, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, EntitiesComponent_ng_container_6_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](7, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](5, 2, ctx.entities$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](7, 4, ctx.entitiesCount$));
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerComponent"], _ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _common_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__["PaginationComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2VudGl0aWVzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EntitiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'loanlead-entities',
                templateUrl: './entities.component.html',
                styleUrls: ['./entities.component.scss']
            }]
    }], function () { return [{ type: _core_services_entity_service__WEBPACK_IMPORTED_MODULE_2__["EntityService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/entities/entities.module.ts":
/*!*********************************************!*\
  !*** ./src/app/entities/entities.module.ts ***!
  \*********************************************/
/*! exports provided: EntitiesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntitiesModule", function() { return EntitiesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _entities_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entities.component */ "./src/app/entities/entities.component.ts");
/* harmony import */ var _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/navigation/navigation.module */ "./src/app/ui/navigation/navigation.module.ts");
/* harmony import */ var _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/pagination/pagination.module */ "./src/app/common/pagination/pagination.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _entity_form_entity_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./entity-form/entity-form.component */ "./src/app/entities/entity-form/entity-form.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");










class EntitiesModule {
}
EntitiesModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: EntitiesModule });
EntitiesModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function EntitiesModule_Factory(t) { return new (t || EntitiesModule)(); }, imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_4__["NavigationModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](EntitiesModule, { declarations: [_entities_component__WEBPACK_IMPORTED_MODULE_3__["EntitiesComponent"], _entity_form_entity_form_component__WEBPACK_IMPORTED_MODULE_7__["EntityFormComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_4__["NavigationModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EntitiesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_entities_component__WEBPACK_IMPORTED_MODULE_3__["EntitiesComponent"], _entity_form_entity_form_component__WEBPACK_IMPORTED_MODULE_7__["EntityFormComponent"]],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_4__["NavigationModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/entities/entity-form/entity-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/entities/entity-form/entity-form.component.ts ***!
  \***************************************************************/
/*! exports provided: EntityFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityFormComponent", function() { return EntityFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_entity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/entity.service */ "./src/app/core/services/entity.service.ts");
/* harmony import */ var _ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/navigation/navigation.component */ "./src/app/ui/navigation/navigation.component.ts");







const toSpaceBetween = (s) => {
    return s.replace(/[A-Z]/g, (c) => ` ${c.toLowerCase()}`);
};
class EntityFormComponent {
    constructor(router, entityService, fb, activatedRoute) {
        this.router = router;
        this.entityService = entityService;
        this.fb = fb;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.formGroup = this.fb.group({
            name: [''],
            shortName: [''],
            boxNumber: [''],
            plotNumber: [''],
            branchesNumber: [''],
            description: [''],
        }, {
            validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
        });
        this.activatedRoute.paramMap
            .subscribe((paramMap) => {
            this.entityId = Number.parseInt(paramMap.get('entityId'));
            if (this.entityId) {
                this.entityService.getEntity(this.entityId)
                    .subscribe((entity) => {
                    if (entity != null) {
                        this.entity = entity;
                        this.formGroup.patchValue({
                            name: entity.name,
                            shortName: entity.shortName,
                            boxNumber: entity.boxNumber,
                            plotNumber: entity.plotNumber,
                            branchesNumber: entity.branchesNumber,
                            description: entity.description,
                        });
                    }
                });
            }
        });
    }
    validate() {
        let result = true;
        const controls = this.formGroup.controls;
        if (controls.branchesNumber.value) {
            controls.branchesNumber.setValue(controls.branchesNumber.value.toString()
                .replace(/[^0-9]/g, ''));
        }
        Object.keys(controls).forEach((controlName) => {
            result = this.validateFormControl(controlName);
        });
        return result;
    }
    validateFormControl(controlName) {
        let result = true;
        const control = this.formGroup.get(controlName);
        const input = document.getElementById(controlName);
        const labelSpan = document
            .querySelector(`#${controlName} + .feedback`);
        input.classList[control.errors ? 'add' : 'remove']('invalid');
        let textContent = '';
        if (control.errors) {
            result = false;
            Object.keys(control.errors).forEach((error) => {
                switch (error) {
                    case 'required':
                        textContent = 'Please, enter this field';
                        break;
                    case 'notUnique':
                        textContent = `This ${toSpaceBetween(controlName)} already exists`;
                        break;
                    default:
                        textContent = '';
                        break;
                }
            });
        }
        labelSpan.textContent = textContent;
        return result;
    }
    isUnique(fieldType) {
        let result = true;
        const control = this.formGroup.get(fieldType);
        const form = document.querySelector('form');
        if (!control.errors && control.value) {
            this.entityService.getEntityByField(fieldType, control.value)
                .subscribe((data) => {
                if (data != null && (!this.entityId || data.id != this.entity.id)) {
                    if (control.errors) {
                        control.errors.notUnique = { notUnique: true };
                    }
                    else {
                        control.setErrors({ notUnique: true });
                    }
                }
                else {
                    if (control.errors) {
                        delete control.errors.notUnique;
                    }
                }
                result = this.validateFormControl(fieldType);
            });
        }
        return result;
    }
    submit() {
        const form = document.querySelector('form');
        if (!form.classList.contains('validated')) {
            form.classList.add('validated');
            this.isUnique('name');
        }
        if (this.validate()) {
            const entity = {
                name: this.formGroup.get('name').value,
                shortName: this.formGroup.get('shortName').value,
                boxNumber: this.formGroup.get('boxNumber').value,
                plotNumber: this.formGroup.get('plotNumber').value,
                branchesNumber: this.formGroup.get('branchesNumber').value,
                description: this.formGroup.get('description').value,
            };
            if (this.entity) {
                entity.id = this.entity.id;
                entity.createdAt = this.entity.createdAt;
            }
            const observable = this.entityService.save(entity);
            observable
                .subscribe((data) => {
                this.router.navigate(['/entities']);
            }, () => {
                alert("Error while saving entity");
            });
        }
    }
}
EntityFormComponent.??fac = function EntityFormComponent_Factory(t) { return new (t || EntityFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_entity_service__WEBPACK_IMPORTED_MODULE_3__["EntityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
EntityFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: EntityFormComponent, selectors: [["loanlead-entity-form"]], decls: 65, vars: 2, consts: [[1, "border", "border-secondary", "m-3", "p-3", "bg-white", "rounded", 2, "position", "relative", "z-index", "2"], [1, "py-2"], [1, "rounded", "col-lg-2", "col-md-3", "col-sm-6", "col", "py-2", "page-heading", "d-flex", "align-items-center", "justify-content-center"], [1, "material-icons"], ["action", "/entities", "method", "POST", 1, "form-horizontal", "form-with-image", 3, "formGroup", "ngSubmit"], [1, "border", "border-yellow", "rounded"], [1, "d-block", "w-auto", "ml-3", "text-dark-blue"], [1, "row", "px-4", "justify-content-center"], [1, "col-lg-5", "col-md-6", "col-12", "d-flex", "justify-content-center", "flex-column"], [1, "form-group", "pl-3"], ["for", "name"], ["id", "name", "type", "text", "placeholder", "Name", "formControlName", "name", "autocomplete", "off", "required", "", 1, "form-control", 3, "input", "blur"], [1, "feedback", "text-danger"], ["for", "shortName"], ["id", "shortName", "type", "text", "placeholder", "Short Name", "formControlName", "shortName", "autocomplete", "off", "required", "", 1, "form-control", 3, "input"], [1, "row", "px-4"], [1, "responsive-form-group", "w-100", "justify-content-center"], [1, "col-lg-4", "col-md-5", "col-12"], [1, "form-group"], ["for", "boxNumber"], ["id", "boxNumber", "type", "text", "placeholder", "Box Number", "formControlName", "boxNumber", "autocomplete", "off", "required", "", 1, "form-control", 3, "input"], ["for", "plotNumber"], ["id", "plotNumber", "type", "text", "placeholder", "Plot Number", "formControlName", "plotNumber", "autocomplete", "off", "required", "", 1, "form-control", 3, "input"], ["for", "branchesNumber"], ["id", "branchesNumber", "type", "text", "placeholder", "Branches Number", "formControlName", "branchesNumber", "autocomplete", "off", "required", "", 1, "form-control", 3, "input"], [1, "col-12"], ["for", "description"], ["id", "description", "rows", "4", "placeholder", "Description", "formControlName", "description", 1, "form-control"], [1, "d-flex", "flex-row", "pt-2", "pb-4", "justify-content-end"], ["routerLink", "/entities", 1, "no-decoration", "btn", "btn-secondary", "submit-button", "d-flex", "col-2", "align-items-center", "justify-content-center", "mr-4"], ["type", "submit", 1, "btn", "btn-primary", "submit-button", "d-flex", "col-2", "justify-content-center", "mr-4", 3, "disabled"]], template: function EntityFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "loanlead-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\u00A0Entity Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function EntityFormComponent_Template_form_ngSubmit_9_listener($event) { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "fieldset", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "legend", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function EntityFormComponent_Template_input_input_18_listener($event) { return ctx.validate(); })("blur", function EntityFormComponent_Template_input_blur_18_listener($event) { return ctx.isUnique("name"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Short Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function EntityFormComponent_Template_input_input_23_listener($event) { return ctx.validate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Box Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function EntityFormComponent_Template_input_input_31_listener($event) { return ctx.validate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Plot Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function EntityFormComponent_Template_input_input_37_listener($event) { return ctx.validate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Branches Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function EntityFormComponent_Template_input_input_45_listener($event) { return ctx.validate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "textarea", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "\u00A0Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx.formGroup.valid);
    } }, directives: [_ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2VudGl0eS1mb3JtL2VudGl0eS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EntityFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'loanlead-entity-form',
                templateUrl: './entity-form.component.html',
                styleUrls: ['./entity-form.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _core_services_entity_service__WEBPACK_IMPORTED_MODULE_3__["EntityService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_services_loan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/loan.service */ "./src/app/core/services/loan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/navigation/navigation.component */ "./src/app/ui/navigation/navigation.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _common_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/pagination/pagination.component */ "./src/app/common/pagination/pagination.component.ts");












const _c0 = function (a0) { return [a0]; };
function HomeComponent_ng_container_4_div_1_tr_47_Template(rf, ctx) { if (rf & 1) {
    const _r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_ng_container_4_div_1_tr_47_Template_tr_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r237); const loan_r235 = ctx.$implicit; const ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3); return ctx_r236.auditing(loan_r235.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_ng_container_4_div_1_tr_47_Template_a_click_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r237); const loan_r235 = ctx.$implicit; const ctx_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3); return ctx_r238.setUserBranches(loan_r235.user.branches); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Branches");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const loan_r235 = ctx.$implicit;
    const ctx_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](29, _c0, loan_r235.id))("ngClass", ctx_r234.getTrColorClass(loan_r235));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx_r234.getLinkClass(loan_r235));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](loan_r235.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx_r234.getLinkClass(loan_r235));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](loan_r235.customer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx_r234.getLinkClass(loan_r235));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](loan_r235.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx_r234.getLinkClass(loan_r235));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](loan_r235.loanProduct.loanProduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx_r234.getLinkClass(loan_r235));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](loan_r235.tenure);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx_r234.getLinkClass(loan_r235));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r234.modifyAmount(loan_r235.amount.toString()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx_r234.getLinkClass(loan_r235))("id", loan_r235.role.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](loan_r235.role.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx_r234.getLinkClass(loan_r235));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](loan_r235.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx_r234.getLinkClass(loan_r235));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](loan_r235.user.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx_r234.getLinkClass(loan_r235));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r234.format(ctx_r234.dateInstance(loan_r235.stagedAt)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx_r234.getLinkClass(loan_r235));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r234.age(ctx_r234.dateNow(), ctx_r234.dateInstance(loan_r235.stagedAt).getTime()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx_r234.getLinkClass(loan_r235));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r234.format(ctx_r234.dateInstance(loan_r235.createdAt)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx_r234.getLinkClass(loan_r235));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r234.age(ctx_r234.dateNow(), ctx_r234.dateInstance(loan_r235.createdAt).getTime()));
} }
function HomeComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r240 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\u00A0Loans");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Items Count");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function HomeComponent_ng_container_4_div_1_Template_input_input_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r240); const ctx_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r239.validate(); })("blur", function HomeComponent_ng_container_4_div_1_Template_input_blur_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r240); const ctx_r241 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r241.filter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function HomeComponent_ng_container_4_div_1_Template_input_input_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r240); const ctx_r242 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r242.filterLoans($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "table", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Loan Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Loan Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Tenure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Stage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Loan Moves");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Stage at");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Age at Stage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Created at");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Total Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](47, HomeComponent_ng_container_4_div_1_tr_47_Template, 43, 31, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const loans_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().ngIf;
    const ctx_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx_r232.itemsCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", loans_r231);
} }
function HomeComponent_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " No loans was found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function HomeComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, HomeComponent_ng_container_4_div_1_Template, 48, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, HomeComponent_ng_container_4_div_2_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const loans_r231 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", loans_r231.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !loans_r231.length);
} }
function HomeComponent_ng_container_6_app_pagination_1_Template(rf, ctx) { if (rf & 1) {
    const _r247 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-pagination", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChanged", function HomeComponent_ng_container_6_app_pagination_1_Template_app_pagination_pageChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r247); const ctx_r246 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r246.load($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const loansCount_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().ngIf;
    const ctx_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("lastPage", ctx_r245.pagesCount(loansCount_r244));
} }
function HomeComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, HomeComponent_ng_container_6_app_pagination_1_Template, 1, 1, "app-pagination", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const loansCount_r244 = ctx.ngIf;
    const ctx_r228 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", loansCount_r244 > ctx_r228.itemsCount.value);
} }
function HomeComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h5", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "trending_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\u00A0Statistics:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Running: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Approved: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Deferred: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Rejected: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Disbursed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Designed And Built By Stat Solutions Research Network Ltd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const loanCounts_r249 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](loanCounts_r249.runningLoansCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](loanCounts_r249.approvedLoansCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](loanCounts_r249.deferredLoansCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](loanCounts_r249.rejectedLoansCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](loanCounts_r249.disbursedLoansCount);
} }
function HomeComponent_ng_container_10_ul_10_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const branch_r253 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](branch_r253);
} }
function HomeComponent_ng_container_10_ul_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, HomeComponent_ng_container_10_ul_10_li_1_Template, 2, 1, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r250 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r250.userBranches);
} }
function HomeComponent_ng_container_10_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " No loans was found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function HomeComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h4", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, HomeComponent_ng_container_10_ul_10_Template, 2, 1, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, HomeComponent_ng_container_10_div_11_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r230.userBranches.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r230.userBranches.length);
} }
class HomeComponent {
    constructor(loanService, router, userService, spinner) {
        this.loanService = loanService;
        this.router = router;
        this.userService = userService;
        this.spinner = spinner;
        this.itemsCount = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](5, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)
        ]);
    }
    ngOnInit() {
        this.spinner.show();
        this.loans$ = this.loanService.getMainPageLoans(0, 5).pipe(loans => {
            this.spinner.hide();
            return loans;
        });
        this.loansCount$ = this.loanService.getMainPageLoansCount();
        this.loanCounts$ = this.loanService.getMainLoansCount();
    }
    load(page) {
        this.loans$ = this.loanService.getMainPageLoans(page - 1, this.itemsCount.value);
    }
    validate() {
        const input = document.getElementById('itemsCount');
        const labelSpan = document.querySelector('#itemsCount + .feedback');
        input.classList[this.itemsCount.errors ? 'add' : 'remove']('invalid');
        let textContent = '';
        if (this.itemsCount.errors) {
            Object.keys(this.itemsCount.errors).forEach((error) => {
                switch (error) {
                    case 'required':
                        textContent = 'Please, enter this field';
                        break;
                    case 'min':
                        textContent = 'Please, enter higher number';
                        break;
                    default:
                        textContent = '';
                        break;
                }
            });
        }
        labelSpan.textContent = textContent;
        this.countChanged = true;
    }
    filter() {
        if (!this.itemsCount.errors && this.countChanged) {
            const page = 1;
            this.load(page);
            this.countChanged = false;
        }
    }
    pagesCount(loansCount) {
        const result = loansCount / this.itemsCount.value;
        return Math.round(result) < result ? Math.round(result) + 1 : Math.round(result);
    }
    getTrColorClass(loan) {
        if (this.difference(this.dateNow(), this.dateInstance(loan.createdAt).getTime()) > loan.loanProduct.timeThreshold) {
            return 'bg-danger';
        }
        else if (loan.status === 'Deferred') {
            return 'bg-warning';
        }
        else if (loan.role.id > 4) {
            return 'bg-pink';
        }
        else {
            return 'bg-success';
        }
    }
    getLinkClass(loan) {
        if (['bg-danger', 'bg-pink', 'bg-success'].includes(this.getTrColorClass(loan))) {
            return 'text-light';
        }
        else {
            return 'text-dark-blue';
        }
    }
    format(date) {
        return ((date.getDate() < 10) ? '0' + date.getDate() : date.getDate()) +
            '/' + ((date.getMonth() < 10) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) +
            '/' + date.getFullYear() +
            ' ' + ((date.getHours() < 10) ? '0' + date.getHours() : date.getHours()) +
            ':' + ((date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()) +
            ':' + ((date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds());
    }
    difference(firstDate, lastDate) {
        const milliseconds = firstDate - lastDate;
        return Math.floor(milliseconds / 1000 / 3600 / 24);
    }
    age(firstDate, lastDate) {
        const milliseconds = firstDate - lastDate;
        const hours = Math.floor(milliseconds / 1000 / 3600);
        const days = Math.floor(hours / 24);
        return days + ' days ' + (hours - days * 24) + ' hours';
    }
    dateNow() {
        return Date.now();
    }
    dateInstance(date) {
        return new Date(date);
    }
    auditing(id) {
        this.router.navigate(['/auditing', id]);
    }
    modifyAmount(amount) {
        return amount.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    setUserBranches(branches) {
        this.userBranches = branches;
    }
    filterLoans(event) {
        jquery__WEBPACK_IMPORTED_MODULE_2__('#contentTable tbody tr').filter(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__(this).toggle(jquery__WEBPACK_IMPORTED_MODULE_2__(this).text().toLowerCase().indexOf(jquery__WEBPACK_IMPORTED_MODULE_2__(event.target).val().toLowerCase()) > -1);
        });
    }
}
HomeComponent.??fac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_loan_service__WEBPACK_IMPORTED_MODULE_3__["LoanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"])); };
HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HomeComponent, selectors: [["loanlead-user-home"]], decls: 11, vars: 10, consts: [["bgColor", "#FFFFFF", "size", "medium", "color", "#2129BF", "type", "ball-clip-rotate"], [1, "text-light", 2, "font-size", "20px"], [4, "ngIf"], ["class", "border border-secondary m-3 p-3 bg-white rounded animated fadeIn", 4, "ngIf"], ["class", "empty-list", 4, "ngIf"], [1, "border", "border-secondary", "m-3", "p-3", "bg-white", "rounded", "animated", "fadeIn"], [1, "py-2", "page-body-heading", "justify-content-between"], [1, "rounded", "col-lg-2", "col-md-3", "col-12", "py-2", "page-heading", "d-flex", "align-items-center", "justify-content-center"], [1, "material-icons"], [1, "col-md-3", "col-12"], [1, "form-group"], ["for", "itemsCount"], ["id", "itemsCount", "type", "number", "placeholder", "Search", "data-placeholder", "Search", "required", "", 1, "form-control", 3, "formControl", "input", "blur"], [1, "feedback", "text-danger"], [1, "form-group", "col-lg-4", "col-md-5", "col-12", "py-2", "pr-0", "pl-md-2", "pl-0"], ["for", "filterInput"], ["type", "text", "id", "filterInput", "placeholder", "Loan", 1, "form-control", "w-100", 3, "input"], [1, "py-2", 2, "overflow-x", "auto"], ["id", "contentTable", 1, "table", "table-striped", "table-hover", "table-bordered", "table-condensed", 2, "min-width", "1595px"], ["colspan", "2"], [3, "id", "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "id", "ngClass", "click"], ["href", "javascript:void(0);", 3, "ngClass"], ["href", "javascript:void(0);", 1, "amount", 3, "ngClass"], ["href", "javascript:void(0);", 1, "stage", 3, "ngClass", "id"], ["href", "javascript:void(0);", 1, "status", 3, "ngClass"], ["href", "javascript:void(0);", "data-toggle", "modal", "data-target", "#branchesTableModal", 3, "click"], ["href", "javascript:void(0);", 1, "stage-timestamp", 3, "ngClass"], [1, "empty-list"], [3, "lastPage", "pageChanged", 4, "ngIf"], [3, "lastPage", "pageChanged"], [1, "py-2"], [1, "d-flex", "align-items-center"], [1, "d-flex", "row", "justify-content-between"], [1, "text-dark-blue"], ["id", "runningCount"], ["id", "approvedCount"], ["id", "deferredCount"], ["id", "rejectedCount"], ["id", "disbursedCount"], [1, "font-weight-bold", "d-flex", "align-items-end", "px-3"], ["tabindex", "-1", "role", "dialog", "id", "branchesTableModal", "aria-hidden", "true", 1, "modal", "fade", "bd-example-modal-lg"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-hidden", "true", 1, "close"], [1, "modal-body", 2, "overflow-x", "auto"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default"], [4, "ngFor", "ngForOf"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "loanlead-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, HomeComponent_ng_container_4_Template, 3, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, HomeComponent_ng_container_6_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, HomeComponent_ng_container_8_Template, 30, 5, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, HomeComponent_ng_container_10_Template, 15, 2, "ng-container", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](5, 4, ctx.loans$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](7, 6, ctx.loansCount$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](9, 8, ctx.loanCounts$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.userBranches);
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerComponent"], _ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _common_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__["PaginationComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'loanlead-user-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _core_services_loan_service__WEBPACK_IMPORTED_MODULE_3__["LoanService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/navigation/navigation.module */ "./src/app/ui/navigation/navigation.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/pagination/pagination.module */ "./src/app/common/pagination/pagination.module.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");








class HomeModule {
}
HomeModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: HomeModule });
HomeModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/loan-products/loan-product-form/loan-product-form.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/loan-products/loan-product-form/loan-product-form.component.ts ***!
  \********************************************************************************/
/*! exports provided: LoanProductFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanProductFormComponent", function() { return LoanProductFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_loan_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/loan-product.service */ "./src/app/core/services/loan-product.service.ts");
/* harmony import */ var _ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/navigation/navigation.component */ "./src/app/ui/navigation/navigation.component.ts");







const toSpaceBetween = (s) => {
    return s.replace(/[A-Z]/g, (c) => ` ${c.toLowerCase()}`);
};
class LoanProductFormComponent {
    constructor(router, fb, loanProductService, activatedRoute) {
        this.router = router;
        this.fb = fb;
        this.loanProductService = loanProductService;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.formGroup = this.fb.group({
            loanProduct: [''],
            maxAmount: [''],
            maxTenure: [''],
            timeThreshold: [''],
        }, {
            validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
        });
        this.activatedRoute.paramMap
            .subscribe((paramMap) => {
            this.loanProductId = Number.parseInt(paramMap.get('loanProductId'), 10);
            if (this.loanProductId) {
                this.loanProductService.getLoanProduct(this.loanProductId)
                    .subscribe((loanProduct) => {
                    if (loanProduct != null) {
                        this.loanProduct = loanProduct;
                        this.formGroup.patchValue({
                            loanProduct: loanProduct.loanProduct,
                            maxAmount: loanProduct.maxAmount,
                            maxTenure: loanProduct.maxTenure,
                            timeThreshold: loanProduct.timeThreshold,
                        });
                    }
                });
            }
        });
    }
    isUnique(fieldType) {
        let result = true;
        const control = this.formGroup.get(fieldType);
        if (!control.errors && control.value) {
            this.loanProductService.getLoanProductByField(fieldType, control.value)
                .subscribe((data) => {
                if (data != null && (!this.loanProductId || data.id !== this.loanProduct.id)) {
                    if (control.errors) {
                        control.errors.notUnique = { notUnique: true };
                    }
                    else {
                        control.setErrors({ notUnique: true });
                    }
                }
                else {
                    if (control.errors) {
                        delete control.errors.notUnique;
                    }
                }
                result = this.validateFormControl(fieldType);
            });
        }
        return result;
    }
    validate() {
        let valid = true;
        const controls = this.formGroup.controls;
        Object.keys(controls).forEach((field) => {
            valid = this.validateFormControl(field);
        });
        return valid;
    }
    validateFormControl(field) {
        let result = true;
        const control = this.formGroup.get(field);
        const input = document.getElementById(field);
        const labelSpan = document
            .querySelector(`#${field} + .feedback`);
        input.classList[control.errors ? 'add' : 'remove']('invalid');
        let labelContent = '';
        if (control.errors) {
            Object.keys(control.errors).forEach((error) => {
                switch (error) {
                    case 'required':
                        labelContent = 'Please, enter this field';
                        break;
                    case 'email':
                        labelContent = 'Please, enter a valid email';
                        break;
                    case 'minlength':
                        labelContent = 'Please, enter more symbols';
                        break;
                    case 'maxlength':
                        labelContent = 'Please, enter less symbols';
                        break;
                    case 'notUnique':
                        labelContent = `This ${toSpaceBetween(field)} already exists`;
                        break;
                    case 'pattern':
                        if (!control.value.match(/[0-9]+/)) {
                            labelContent = 'Digits required';
                        }
                        else if (!control.value.match(/[A-Z]+/)) {
                            labelContent = 'Uppercase characters required';
                        }
                        else {
                            labelContent = 'Lowercase characters required';
                        }
                        break;
                    default:
                        labelContent = '';
                        break;
                }
            });
            result = false;
        }
        labelSpan.textContent = labelContent;
        return result;
    }
    submit() {
        const form = document.querySelector('form');
        if (!form.classList.contains('validated')) {
            form.classList.add('validated');
            this.isUnique('loanProduct');
        }
        if (this.validate()) {
            const loanProduct = {
                loanProduct: this.formGroup.get('loanProduct').value,
                maxAmount: this.formGroup.get('maxAmount').value,
                maxTenure: this.formGroup.get('maxTenure').value,
                timeThreshold: this.formGroup.get('timeThreshold').value
            };
            if (this.loanProduct) {
                loanProduct.id = this.loanProduct.id;
            }
            const observable = this.loanProductService.save(loanProduct);
            observable
                .subscribe((data) => {
                this.router.navigate(['/loan_products']);
            }, () => {
                alert('Error while saving loan product');
            });
        }
    }
}
LoanProductFormComponent.??fac = function LoanProductFormComponent_Factory(t) { return new (t || LoanProductFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_loan_product_service__WEBPACK_IMPORTED_MODULE_3__["LoanProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
LoanProductFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LoanProductFormComponent, selectors: [["loanlead-loan-product-form"]], decls: 47, vars: 2, consts: [[1, "border", "border-secondary", "m-3", "p-3", "bg-white", "rounded", 2, "position", "relative", "z-index", "2"], [1, "py-2"], [1, "rounded", "col-lg-2", "col-md-3", "col-sm-6", "col", "py-2", "page-heading", "d-flex", "align-items-center", "justify-content-center"], [1, "material-icons"], ["action", "/loan-products", "method", "POST", 1, "form-horizontal", "form-with-image", 3, "formGroup", "ngSubmit"], [1, "border", "border-yellow", "rounded"], [1, "d-block", "w-auto", "ml-3", "text-dark-blue"], [1, "row", "px-4", "justify-content-center"], [1, "col-lg-5", "col-md-6", "col-12", "d-flex", "justify-content-center", "flex-column"], [1, "form-group", "pl-3"], ["for", "loanProduct"], ["id", "loanProduct", "type", "text", "placeholder", "Loan Product", "formControlName", "loanProduct", "autocomplete", "off", "required", "", 1, "form-control", 3, "input", "blur"], [1, "feedback", "text-danger"], ["for", "maxAmount"], ["id", "maxAmount", "type", "text", "placeholder", "Max Amount", "formControlName", "maxAmount", "autocomplete", "off", "required", "", 1, "form-control", 3, "input"], [1, "row", "px-4"], [1, "responsive-form-group", "w-100", "justify-content-center"], [1, "col-lg-4", "col-md-5", "col-12"], [1, "form-group"], ["for", "maxTenure"], ["id", "maxTenure", "type", "text", "placeholder", "Max Tenure", "formControlName", "maxTenure", "autocomplete", "off", "required", "", 1, "form-control", 3, "input"], ["for", "timeThreshold"], ["id", "timeThreshold", "type", "text", "placeholder", "Time Threshold", "formControlName", "timeThreshold", "autocomplete", "off", "required", "", 1, "form-control", 3, "input"], [1, "d-flex", "flex-row", "pt-2", "pb-4", "justify-content-end"], ["routerLink", "/loan_products", 1, "no-decoration", "btn", "btn-secondary", "submit-button", "d-flex", "col-2", "align-items-center", "justify-content-center", "mr-4"], ["type", "submit", 1, "btn", "btn-primary", "submit-button", "d-flex", "col-2", "justify-content-center", "mr-4", 3, "disabled"]], template: function LoanProductFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "loanlead-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\u00A0Loan Product Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LoanProductFormComponent_Template_form_ngSubmit_9_listener($event) { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "fieldset", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "legend", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Loan Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function LoanProductFormComponent_Template_input_input_18_listener($event) { return ctx.validate(); })("blur", function LoanProductFormComponent_Template_input_blur_18_listener($event) { return ctx.isUnique("loanProduct"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Max Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function LoanProductFormComponent_Template_input_input_23_listener($event) { return ctx.validate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Max Tenure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function LoanProductFormComponent_Template_input_input_31_listener($event) { return ctx.validate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Time Threshold(Days)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function LoanProductFormComponent_Template_input_input_37_listener($event) { return ctx.validate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "\u00A0Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx.formGroup.valid);
    } }, directives: [_ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvYW4tcHJvZHVjdHMvbG9hbi1wcm9kdWN0LWZvcm0vbG9hbi1wcm9kdWN0LWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoanProductFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'loanlead-loan-product-form',
                templateUrl: './loan-product-form.component.html',
                styleUrls: ['./loan-product-form.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _core_services_loan_product_service__WEBPACK_IMPORTED_MODULE_3__["LoanProductService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/loan-products/loan-products.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/loan-products/loan-products.component.ts ***!
  \**********************************************************/
/*! exports provided: LoanProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanProductsComponent", function() { return LoanProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_services_loan_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/loan-product.service */ "./src/app/core/services/loan-product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/navigation/navigation.component */ "./src/app/ui/navigation/navigation.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _common_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/pagination/pagination.component */ "./src/app/common/pagination/pagination.component.ts");










const _c0 = function (a0) { return [a0]; };
function LoanProductsComponent_ng_container_4_div_1_tr_36_Template(rf, ctx) { if (rf & 1) {
    const _r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LoanProductsComponent_ng_container_4_div_1_tr_36_Template_input_click_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r200); const loanProduct_r198 = ctx.$implicit; const ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3); return ctx_r199.check(loanProduct_r198.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const loanProduct_r198 = ctx.$implicit;
    const ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](8, _c0, loanProduct_r198.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](loanProduct_r198.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](loanProduct_r198.loanProduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](loanProduct_r198.maxAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](loanProduct_r198.maxTenure);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](loanProduct_r198.timeThreshold);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](10, _c0, "/loan_products_form/" + loanProduct_r198.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("checked", ctx_r197.selectAll);
} }
function LoanProductsComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\u00A0Loan Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Items Count");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function LoanProductsComponent_ng_container_4_div_1_Template_input_input_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r202); const ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r201.validate(); })("blur", function LoanProductsComponent_ng_container_4_div_1_Template_input_blur_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r202); const ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r203.filter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "\u00A0Create new loan product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Loan Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Max Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Max Tenure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Time Threshold");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LoanProductsComponent_ng_container_4_div_1_Template_input_click_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r202); const loanProducts_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().ngIf; const ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r204.selectAllTrigger(loanProducts_r194); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, LoanProductsComponent_ng_container_4_div_1_tr_36_Template, 16, 12, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LoanProductsComponent_ng_container_4_div_1_Template_button_click_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r202); const ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r206.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Delete loan products");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Export excel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const loanProducts_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().ngIf;
    const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx_r195.itemsCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", loanProducts_r194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx_r195.anySelected);
} }
function LoanProductsComponent_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " No loanProducts was found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function LoanProductsComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, LoanProductsComponent_ng_container_4_div_1_Template, 43, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, LoanProductsComponent_ng_container_4_div_2_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const loanProducts_r194 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", loanProducts_r194.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !loanProducts_r194.length);
} }
function LoanProductsComponent_ng_container_6_app_pagination_1_Template(rf, ctx) { if (rf & 1) {
    const _r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-pagination", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChanged", function LoanProductsComponent_ng_container_6_app_pagination_1_Template_app_pagination_pageChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r211); const ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r210.load($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const loanProductsCount_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().ngIf;
    const ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("lastPage", ctx_r209.pagesCount(loanProductsCount_r208));
} }
function LoanProductsComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, LoanProductsComponent_ng_container_6_app_pagination_1_Template, 1, 1, "app-pagination", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const loanProductsCount_r208 = ctx.ngIf;
    const ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", loanProductsCount_r208 > ctx_r193.itemsCount.value);
} }
class LoanProductsComponent {
    constructor(loanProductService, router, spinner) {
        this.loanProductService = loanProductService;
        this.router = router;
        this.spinner = spinner;
        this.searchValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.itemsCount = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](5, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(5),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(20),
        ]);
    }
    ngOnInit() {
        this.spinner.show();
        this.load(1);
        this.loanProductsCount$ = this.loanProductService.getLoanProductsCount();
        this.selectAll = false;
        this.entitiesToDelete = [];
    }
    check(id) {
        if (id) {
            if (this.entitiesToDelete.includes(id)) {
                this.entitiesToDelete.splice(this.entitiesToDelete.indexOf(id), 1);
            }
            else {
                this.entitiesToDelete.push(id);
            }
        }
        this.anySelected = this.entitiesToDelete.length > 0;
    }
    load(page) {
        this.loanProducts$ = this.loanProductService.getLoanProducts(page - 1, this.itemsCount.value).pipe(loanProducts => {
            this.spinner.hide();
            return loanProducts;
        });
    }
    validate() {
        const input = document.getElementById('itemsCount');
        const labelSpan = document.querySelector('#itemsCount + .feedback');
        input.classList[this.itemsCount.errors ? 'add' : 'remove']('invalid');
        let textContent = '';
        if (this.itemsCount.errors) {
            Object.keys(this.itemsCount.errors).forEach((error) => {
                switch (error) {
                    case 'required':
                        textContent = 'Please, enter this field';
                        break;
                    case 'min':
                        textContent = 'Please, enter higher number';
                        break;
                    case 'max':
                        textContent = 'Please, enter lower number';
                        break;
                    default:
                        textContent = '';
                        break;
                }
            });
        }
        labelSpan.textContent = textContent;
        this.countChanged = true;
    }
    filter() {
        if (!this.itemsCount.errors && this.countChanged) {
            const page = 1;
            this.load(page);
            this.countChanged = false;
        }
    }
    pagesCount(loanProductsCount) {
        let result = loanProductsCount / this.itemsCount.value;
        return Math.round(result) < result ? Math.round(result) + 1 : Math.round(result);
    }
    selectAllTrigger(loanProducts) {
        this.selectAll = !this.selectAll;
        if (this.selectAll) {
            this.entitiesToDelete = loanProducts.map(loanProduct => loanProduct.id);
        }
        else {
            this.entitiesToDelete = [];
        }
        this.anySelected = this.selectAll;
    }
    delete() {
        this.loanProductService.deleteLoanProducts(this.entitiesToDelete).subscribe((data) => {
            if (data.err) {
                alert(`Request error with code ${data.err.status}`);
            }
            else {
                this.load(1);
                this.loanProductsCount$ = this.loanProductService.getLoanProductsCount();
            }
        });
    }
}
LoanProductsComponent.??fac = function LoanProductsComponent_Factory(t) { return new (t || LoanProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_loan_product_service__WEBPACK_IMPORTED_MODULE_2__["LoanProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"])); };
LoanProductsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LoanProductsComponent, selectors: [["loanlead-loan-products"]], decls: 8, vars: 6, consts: [["bgColor", "#FFFFFF", "size", "medium", "color", "#2129BF", "type", "ball-clip-rotate"], [1, "text-light", 2, "font-size", "20px"], [4, "ngIf"], ["class", "border border-secondary m-3 p-3 bg-white rounded animated fadeIn", 4, "ngIf"], ["class", "empty-list", 4, "ngIf"], [1, "border", "border-secondary", "m-3", "p-3", "bg-white", "rounded", "animated", "fadeIn"], [1, "py-2", "page-body-heading", "justify-content-between"], [1, "rounded", "col-lg-2", "col-md-3", "col-12", "py-2", "page-heading", "d-flex", "align-items-center", "justify-content-center"], [1, "material-icons"], [1, "col-md-3", "col-12"], [1, "form-group"], ["for", "itemsCount"], ["id", "itemsCount", "type", "number", "placeholder", "Search", "data-placeholder", "Search", "required", "", 1, "form-control", 3, "formControl", "input", "blur"], [1, "feedback", "text-danger"], [1, "py-2", "d-flex", "justify-content-end"], ["routerLink", "../loan_products_form", 1, "btn", "btn-primary", "d-flex", "align-items-center", "col-lg-2", "col-md-3", "col-sm-4", "col-12", "justify-content-center", "py-2"], [1, "py-2", 2, "overflow-x", "auto"], ["id", "contentTable", 1, "table", "table-striped", "table-hover", "table-bordered", "table-condensed", 2, "min-width", "1595px"], ["type", "checkbox", "id", "select-all", 3, "click"], [3, "id", 4, "ngFor", "ngForOf"], [1, "py-2"], ["type", "button", "id", "deleteButton", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "p-2"], ["href", "/api/reports/loan-product", 1, "btn", "btn-primary"], [3, "id"], [3, "routerLink"], ["type", "checkbox", 3, "checked", "click"], [1, "empty-list"], [3, "lastPage", "pageChanged", 4, "ngIf"], [3, "lastPage", "pageChanged"]], template: function LoanProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "loanlead-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, LoanProductsComponent_ng_container_4_Template, 3, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, LoanProductsComponent_ng_container_6_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](7, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](5, 2, ctx.loanProducts$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](7, 4, ctx.loanProductsCount$));
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerComponent"], _ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _common_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__["PaginationComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvYW4tcHJvZHVjdHMvbG9hbi1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoanProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'loanlead-loan-products',
                templateUrl: './loan-products.component.html',
                styleUrls: ['./loan-products.component.scss']
            }]
    }], function () { return [{ type: _core_services_loan_product_service__WEBPACK_IMPORTED_MODULE_2__["LoanProductService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/loan-products/loan-products.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/loan-products/loan-products.module.ts ***!
  \*******************************************************/
/*! exports provided: LoanProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanProductsModule", function() { return LoanProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/navigation/navigation.module */ "./src/app/ui/navigation/navigation.module.ts");
/* harmony import */ var _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/pagination/pagination.module */ "./src/app/common/pagination/pagination.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _loan_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loan-products.component */ "./src/app/loan-products/loan-products.component.ts");
/* harmony import */ var _loan_product_form_loan_product_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loan-product-form/loan-product-form.component */ "./src/app/loan-products/loan-product-form/loan-product-form.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");










class LoanProductsModule {
}
LoanProductsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: LoanProductsModule });
LoanProductsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function LoanProductsModule_Factory(t) { return new (t || LoanProductsModule)(); }, imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](LoanProductsModule, { declarations: [_loan_products_component__WEBPACK_IMPORTED_MODULE_6__["LoanProductsComponent"], _loan_product_form_loan_product_form_component__WEBPACK_IMPORTED_MODULE_7__["LoanProductFormComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoanProductsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_loan_products_component__WEBPACK_IMPORTED_MODULE_6__["LoanProductsComponent"], _loan_product_form_loan_product_form_component__WEBPACK_IMPORTED_MODULE_7__["LoanProductFormComponent"]],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/logged-users/logged-users.component.ts":
/*!********************************************************!*\
  !*** ./src/app/logged-users/logged-users.component.ts ***!
  \********************************************************/
/*! exports provided: LoggedUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedUsersComponent", function() { return LoggedUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/navigation/navigation.component */ "./src/app/ui/navigation/navigation.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function LoggedUsersComponent_ng_container_4_tr_29_Template(rf, ctx) { if (rf & 1) {
    const _r370 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LoggedUsersComponent_ng_container_4_tr_29_Template_a_click_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r370); const user_r368 = ctx.$implicit; const ctx_r369 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r369.setUserBranches(user_r368.branches); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Branches");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LoggedUsersComponent_ng_container_4_tr_29_Template_a_click_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r370); const user_r368 = ctx.$implicit; const ctx_r371 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r371.logoutUser(user_r368.employeeId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Logout user");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const user_r368 = ctx.$implicit;
    const ctx_r367 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](user_r368.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](user_r368.employeeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](user_r368.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](user_r368.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](user_r368.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r367.format(ctx_r367.dateInstance(user_r368.createdAt)));
} }
function LoggedUsersComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "account_balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\u00A0Logged Users ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "User Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Contact nr. 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Branches");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Created at");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Logout user");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, LoggedUsersComponent_ng_container_4_tr_29_Template, 19, 6, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Export excel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r365 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r365.users);
} }
function LoggedUsersComponent_ng_container_5_ul_10_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const branch_r375 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](branch_r375);
} }
function LoggedUsersComponent_ng_container_5_ul_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, LoggedUsersComponent_ng_container_5_ul_10_li_1_Template, 2, 1, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r372 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r372.userBranches);
} }
function LoggedUsersComponent_ng_container_5_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " No loans was found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function LoggedUsersComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, LoggedUsersComponent_ng_container_5_ul_10_Template, 2, 1, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, LoggedUsersComponent_ng_container_5_div_11_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r366 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r366.userBranches.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r366.userBranches.length);
} }
class LoggedUsersComponent {
    constructor(userService, spinner) {
        this.userService = userService;
        this.spinner = spinner;
    }
    ngOnInit() {
        this.spinner.show();
        this.userService.getLoggedUsers()
            .subscribe(users => {
            this.spinner.hide();
            this.users = users;
        });
    }
    format(date) {
        return ((date.getDate() < 10) ? '0' + date.getDate() : date.getDate()) +
            "/" + ((date.getMonth() < 10) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) +
            "/" + date.getFullYear() +
            " " + ((date.getHours() < 10) ? '0' + date.getHours() : date.getHours()) +
            ":" + ((date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()) +
            ":" + ((date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds());
    }
    dateInstance(date) {
        return new Date(date);
    }
    logoutUser(employeeId) {
        this.userService.logoutUser(employeeId)
            .subscribe(data => {
            if (!data.err) {
                this.users = data.data;
            }
            else {
                alert(data.err.message);
            }
        });
    }
    setUserBranches(branches) {
        this.userBranches = branches;
    }
}
LoggedUsersComponent.??fac = function LoggedUsersComponent_Factory(t) { return new (t || LoggedUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"])); };
LoggedUsersComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LoggedUsersComponent, selectors: [["loanlead-logged-users"]], decls: 6, vars: 2, consts: [["bgColor", "#FFFFFF", "size", "medium", "color", "#2129BF", "type", "ball-clip-rotate"], [1, "text-light", 2, "font-size", "20px"], [4, "ngIf"], [1, "border", "border-secondary", "m-3", "p-3", "bg-white", "rounded", "animated", "fadeInUp"], [1, "py-2", "page-body-heading", "justify-content-between"], [1, "rounded", "col-lg-2", "col-md-3", "col-12", "py-2", "page-heading", "d-flex", "align-items-center", "justify-content-center"], [1, "material-icons"], [1, "py-2", 2, "overflow-x", "auto"], ["id", "contentTable", 1, "table", "table-striped", "table-hover", "table-bordered", "table-condensed"], [4, "ngFor", "ngForOf"], [1, "p-2"], ["href", "/api/reports/logged", 1, "btn", "btn-primary"], ["href", "javascript:void(0);", "data-toggle", "modal", "data-target", "#branchesTableModal", 3, "click"], ["href", "javascript:void(0);", 3, "click"], ["tabindex", "-1", "role", "dialog", "id", "branchesTableModal", "aria-hidden", "true", 1, "modal", "fade", "bd-example-modal-lg"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-hidden", "true", 1, "close"], [1, "modal-body", 2, "overflow-x", "auto"], ["class", "empty-list", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default"], [1, "empty-list"]], template: function LoggedUsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "loanlead-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, LoggedUsersComponent_ng_container_4_Template, 33, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, LoggedUsersComponent_ng_container_5_Template, 15, 2, "ng-container", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.userBranches);
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerComponent"], _ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2dlZC11c2Vycy9sb2dnZWQtdXNlcnMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoggedUsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'loanlead-logged-users',
                templateUrl: './logged-users.component.html',
                styleUrls: ['./logged-users.component.scss']
            }]
    }], function () { return [{ type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/logged-users/logged-users.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/logged-users/logged-users.module.ts ***!
  \*****************************************************/
/*! exports provided: LoggedUsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedUsersModule", function() { return LoggedUsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/navigation/navigation.module */ "./src/app/ui/navigation/navigation.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _logged_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logged-users.component */ "./src/app/logged-users/logged-users.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");








class LoggedUsersModule {
}
LoggedUsersModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: LoggedUsersModule });
LoggedUsersModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function LoggedUsersModule_Factory(t) { return new (t || LoggedUsersModule)(); }, imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](LoggedUsersModule, { declarations: [_logged_users_component__WEBPACK_IMPORTED_MODULE_5__["LoggedUsersComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoggedUsersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_logged_users_component__WEBPACK_IMPORTED_MODULE_5__["LoggedUsersComponent"]],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/model/server-resp.ts":
/*!**************************************!*\
  !*** ./src/app/model/server-resp.ts ***!
  \**************************************/
/*! exports provided: ServerResp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerResp", function() { return ServerResp; });
class ServerResp {
    constructor(data, err) {
        this.data = data;
        this.err = err;
    }
    static forData(data) {
        return new ServerResp(data, undefined);
    }
    static withError(err) {
        return new ServerResp(undefined, err);
    }
}


/***/ }),

/***/ "./src/app/model/ui/components/footer.ts":
/*!***********************************************!*\
  !*** ./src/app/model/ui/components/footer.ts ***!
  \***********************************************/
/*! exports provided: HTTPMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTPMethod", function() { return HTTPMethod; });
var HTTPMethod;
(function (HTTPMethod) {
    HTTPMethod[HTTPMethod["GET"] = 0] = "GET";
    HTTPMethod[HTTPMethod["POST"] = 1] = "POST";
    HTTPMethod[HTTPMethod["PUT"] = 2] = "PUT";
    HTTPMethod[HTTPMethod["PATCH"] = 3] = "PATCH";
    HTTPMethod[HTTPMethod["DELETE"] = 4] = "DELETE";
})(HTTPMethod || (HTTPMethod = {}));


/***/ }),

/***/ "./src/app/reports/reports.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reports/reports.component.ts ***!
  \**********************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_services_loan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/loan.service */ "./src/app/core/services/loan.service.ts");
/* harmony import */ var _core_services_branch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/branch.service */ "./src/app/core/services/branch.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/navigation/navigation.component */ "./src/app/ui/navigation/navigation.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _common_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/pagination/pagination.component */ "./src/app/common/pagination/pagination.component.ts");












function ReportsComponent_div_52_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const entity_r318 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", entity_r318.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](entity_r318.name);
} }
function ReportsComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Stage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Select entity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, ReportsComponent_div_52_option_7_Template, 2, 2, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r312 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r312.entities);
} }
function ReportsComponent_ng_container_64_table_5_tr_28_Template(rf, ctx) { if (rf & 1) {
    const _r325 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ReportsComponent_ng_container_64_table_5_tr_28_Template_a_click_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r325); const loan_r323 = ctx.$implicit; const ctx_r324 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3); return ctx_r324.setUserBranches(loan_r323.user.branches); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Branches");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const loan_r323 = ctx.$implicit;
    const ctx_r322 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](loan_r323.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](loan_r323.customer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](loan_r323.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](loan_r323.tenure);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r322.modifyAmount(loan_r323.amount.toString()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](loan_r323.role.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](loan_r323.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](loan_r323.user.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r322.format(ctx_r322.dateInstance(loan_r323.stagedAt)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r322.format(ctx_r322.dateInstance(loan_r323.createdAt)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](loan_r323.comment);
} }
function ReportsComponent_ng_container_64_table_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "table", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Tenure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Stage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Branches");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Stage at");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Created at");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, ReportsComponent_ng_container_64_table_5_tr_28_Template, 26, 11, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const loans_r319 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", loans_r319);
} }
function ReportsComponent_ng_container_64_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " No loans was found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ReportsComponent_ng_container_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ngx-spinner", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, ReportsComponent_ng_container_64_table_5_Template, 29, 1, "table", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, ReportsComponent_ng_container_64_div_6_Template, 2, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const loans_r319 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", loans_r319.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !loans_r319.length);
} }
function ReportsComponent_ng_container_66_table_2_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r333 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ReportsComponent_ng_container_66_table_2_tr_20_Template_a_click_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r333); const comprehensiveLoan_r331 = ctx.$implicit; const ctx_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3); return ctx_r332.setUserBranches(comprehensiveLoan_r331.branches); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Branches");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const comprehensiveLoan_r331 = ctx.$implicit;
    const ctx_r330 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](comprehensiveLoan_r331.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](comprehensiveLoan_r331.customer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](comprehensiveLoan_r331.stage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](comprehensiveLoan_r331.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r330.format(ctx_r330.dateInstance(comprehensiveLoan_r331.actionedAt)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](comprehensiveLoan_r331.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](comprehensiveLoan_r331.comment);
} }
function ReportsComponent_ng_container_66_table_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "table", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Stage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Actioned At");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Branches");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, ReportsComponent_ng_container_66_table_2_tr_20_Template, 18, 7, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const comprehensiveLoans_r327 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", comprehensiveLoans_r327);
} }
function ReportsComponent_ng_container_66_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " No comprehensive loans was found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ReportsComponent_ng_container_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ReportsComponent_ng_container_66_table_2_Template, 21, 1, "table", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, ReportsComponent_ng_container_66_div_3_Template, 2, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const comprehensiveLoans_r327 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", comprehensiveLoans_r327.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !comprehensiveLoans_r327.length);
} }
function ReportsComponent_ng_container_68_app_pagination_1_Template(rf, ctx) { if (rf & 1) {
    const _r338 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-pagination", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChanged", function ReportsComponent_ng_container_68_app_pagination_1_Template_app_pagination_pageChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r338); const ctx_r337 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r337.load($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const loansCount_r335 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().ngIf;
    const ctx_r336 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("lastPage", ctx_r336.pagesCount(loansCount_r335));
} }
function ReportsComponent_ng_container_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ReportsComponent_ng_container_68_app_pagination_1_Template, 1, 1, "app-pagination", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const loansCount_r335 = ctx.ngIf;
    const ctx_r315 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", loansCount_r335 > ctx_r315.getItemsCount());
} }
function ReportsComponent_ng_container_73_ul_10_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const branch_r343 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](branch_r343);
} }
function ReportsComponent_ng_container_73_ul_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ReportsComponent_ng_container_73_ul_10_li_1_Template, 2, 1, "li", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r340.userBranches);
} }
function ReportsComponent_ng_container_73_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " No loans was found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ReportsComponent_ng_container_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h4", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, ReportsComponent_ng_container_73_ul_10_Template, 2, 1, "ul", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, ReportsComponent_ng_container_73_div_11_Template, 2, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r316.userBranches.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r316.userBranches.length);
} }
class ReportsComponent {
    constructor(fb, loanService, branchService, userService, spinner) {
        this.fb = fb;
        this.loanService = loanService;
        this.branchService = branchService;
        this.userService = userService;
        this.spinner = spinner;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            reportType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            itemsCount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('5', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)])
        });
        this.entities = [];
        this.userBranches = [];
    }
    ngOnInit() {
    }
    validate() {
        let result = true;
        const controls = this.formGroup.controls;
        Object.keys(controls).forEach((controlName) => {
            result = this.validateFormControl(controlName);
        });
        return result;
    }
    validateFormControl(controlName) {
        console.log(controlName);
        let result = true;
        const control = this.formGroup.get(controlName);
        const input = document.getElementById(controlName);
        const labelSpan = document
            .querySelector(`#${controlName} + .feedback`);
        input.classList[control.errors ? 'add' : 'remove']('invalid');
        let textContent = '';
        if (control.errors) {
            result = false;
            Object.keys(control.errors).forEach((error) => {
                switch (error) {
                    case 'required':
                        textContent = 'Please, enter this field';
                        break;
                    case 'min':
                        textContent = 'Please, provide higher value';
                        break;
                    case 'max':
                        textContent = 'Please, provide lower value';
                        break;
                    default:
                        textContent = '';
                        break;
                }
            });
        }
        labelSpan.textContent = textContent;
        return result;
    }
    reportTypeUpdate() {
        this.entities = [];
        switch (this.formGroup.get('reportType').value) {
            case 'user':
                this.userService.getAllUsers().subscribe((users) => this.entities = users.map((user) => ({
                    id: user.id,
                    name: user.fullName
                })));
                break;
            case 'branch':
                this.branchService.getAllBranches().subscribe((branches) => this.entities = branches.map((branch) => ({
                    id: branch.id,
                    name: branch.name
                })));
                break;
            case 'stage':
                this.entities = [
                    { id: 1, name: 'Application' },
                    { id: 2, name: 'Branch Approval' },
                    { id: 3, name: 'Branch Exit' },
                    { id: 4, name: 'Regional Approval' },
                    { id: 5, name: 'Head Office Entry' },
                    { id: 6, name: 'Credit Analysis' },
                    { id: 7, name: 'Head Office Approval' },
                    { id: 8, name: 'Legal Review' },
                    { id: 9, name: 'Loan Administration Entry' },
                    { id: 10, name: 'Loan Administration Verification' },
                    { id: 11, name: 'Loan Administration Exit' },
                    { id: 12, name: 'Disbursement' },
                ];
        }
    }
    load(page) {
        this.currentPage = page;
        const reportForm = {
            startDate: this.formGroup.get('startDate').value,
            endDate: this.formGroup.get('endDate').value,
            reportType: this.formGroup.get('reportType').value,
            itemsPerPage: this.formGroup.get('itemsCount').value,
            page: this.currentPage ? this.currentPage - 1 : 0
        };
        if (document.getElementById('entityId')) {
            reportForm.entityId = Number.parseInt(jquery__WEBPACK_IMPORTED_MODULE_2__('#entityId').val());
        }
        this.loadLoans(reportForm);
    }
    reload() {
        const reportForm = {
            startDate: this.formGroup.get('startDate').value,
            endDate: this.formGroup.get('endDate').value,
            reportType: this.formGroup.get('reportType').value,
            itemsPerPage: this.formGroup.get('itemsCount').value,
            page: this.currentPage ? this.currentPage - 1 : 0
        };
        if (document.getElementById('entityId')) {
            reportForm.entityId = Number.parseInt(jquery__WEBPACK_IMPORTED_MODULE_2__('#entityId').val());
        }
        this.loans$ = null;
        this.comprehensiveLoans$ = null;
        this.loansCount$ = reportForm.reportType === 'comprehensive'
            ? this.loanService.getComprehensiveReportsCount(reportForm)
            : this.loanService.getReportsCount(reportForm);
        this.loadLoans(reportForm);
    }
    loadLoans(reportForm) {
        this.spinner.show();
        if (reportForm.reportType === 'comprehensive') {
            this.comprehensiveLoans$ = this.loanService.getComprehensiveReports(reportForm).pipe(reports => {
                this.spinner.hide();
                return reports;
            });
        }
        else {
            this.loans$ = this.loanService.getReports(reportForm).pipe(reports => {
                this.spinner.hide();
                return reports;
            });
        }
    }
    pagesCount(customersCount) {
        const result = customersCount / Number.parseInt(this.formGroup.get('itemsCount').value, 10);
        return Math.round(result) < result ? Math.round(result) + 1 : Math.round(result);
    }
    setUserBranches(branches) {
        this.userBranches = branches;
    }
    getItemsCount() {
        return this.formGroup.get('itemsCount').value;
    }
    reportLink() {
        let resultLink = '/api/reports/specific?';
        const fields = ['startDate', 'endDate', 'reportType'];
        resultLink += fields.map(field => field + '=' + this.formGroup.get(field).value).join('&');
        resultLink += '&itemsPerPage=' + this.formGroup.get('itemsCount').value;
        resultLink += '&page=' + (this.currentPage ? this.currentPage - 1 : 0);
        if (document.getElementById('entityId')) {
            resultLink += '&entityId=' + jquery__WEBPACK_IMPORTED_MODULE_2__('#entityId').val();
        }
        return resultLink;
    }
    format(date) {
        return ((date.getDate() < 10) ? '0' + date.getDate() : date.getDate()) +
            "/" + ((date.getMonth() < 10) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) +
            "/" + date.getFullYear() +
            " " + ((date.getHours() < 10) ? '0' + date.getHours() : date.getHours()) +
            ":" + ((date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()) +
            ":" + ((date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds());
    }
    dateInstance(date) {
        return new Date(date);
    }
    modifyAmount(amount) {
        return amount.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
}
ReportsComponent.??fac = function ReportsComponent_Factory(t) { return new (t || ReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_loan_service__WEBPACK_IMPORTED_MODULE_3__["LoanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_branch_service__WEBPACK_IMPORTED_MODULE_4__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"])); };
ReportsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ReportsComponent, selectors: [["loanlead-reports"]], decls: 74, vars: 13, consts: [[1, "border", "border-secondary", "m-3", "p-3", "bg-white", "rounded", "animated", "fadeInUp"], [1, "py-2", "page-body-heading", "justify-content-between"], [1, "rounded", "col-lg-2", "col-md-3", "col-12", "py-2", "page-heading", "d-flex", "align-items-center", "justify-content-center"], [1, "material-icons"], ["id", "reportForm", "action", "javascript:void(0);", "method", "get", 1, "form-horizontal", "form-with-image", 3, "formGroup"], [1, "py-2"], [1, "border", "border-yellow", "rounded"], [1, "d-block", "w-auto", "ml-3", "text-dark-blue"], [1, "row", "px-4"], [1, "col-md-3", "col-12"], [1, "form-group"], ["for", "startDate"], ["type", "date", "name", "startDate", "id", "startDate", "formControlName", "startDate", 1, "form-control", 3, "change"], [1, "feedback", "text-danger"], ["for", "endDate"], ["type", "date", "name", "endDate", "id", "endDate", "formControlName", "endDate", 1, "form-control", 3, "change"], ["for", "reportType"], ["name", "reportType", "id", "reportType", "formControlName", "reportType", 1, "item_in", "form-control", 3, "change"], ["value", "", "selected", "", "disabled", ""], ["value", "comprehensive"], ["value", "running"], ["value", "forwarded"], ["value", "rejected"], ["value", "deferred"], ["value", "disbursed"], ["value", "stage"], ["value", "user"], ["value", "branch"], ["id", "stageFormGroup", "class", "col-md-3 col-12", 4, "ngIf"], ["for", "itemsCount"], ["id", "itemsCount", "type", "number", "placeholder", "Search", "data-placeholder", "Search", "formControlName", "itemsCount", "required", "", 1, "form-control", 3, "input"], [1, "col-md-3", "col-12", "d-flex", "align-items-end"], [1, "form-group", "w-100", "d-flex"], ["id", "filterButton", "type", "button", 1, "btn", "btn-primary", "col-md-6", "col-12", 3, "click"], [4, "ngIf"], [1, "btn", "btn-primary", 3, "href"], ["id", "stageFormGroup", 1, "col-md-3", "col-12"], ["for", "entityId", "id", "entityLabel"], ["name", "entityId", "id", "entityId", 1, "item_in", "form-control"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["bgColor", "#FFFFFF", "size", "medium", "color", "#2129BF", "type", "ball-clip-rotate"], [1, "text-light", 2, "font-size", "20px"], [1, "py-2", 2, "overflow-x", "auto"], ["id", "reportTable", "class", "table table-striped table-hover table-bordered table-condensed", "style", "min-width: 1350px;", 4, "ngIf"], ["class", "empty-list", 4, "ngIf"], ["id", "reportTable", 1, "table", "table-striped", "table-hover", "table-bordered", "table-condensed", 2, "min-width", "1350px"], [4, "ngFor", "ngForOf"], ["href", "javascript:void(0);", "data-toggle", "modal", "data-target", "#branchesTableModal", 3, "click"], [1, "empty-list"], ["id", "comprehensiveReportTable", "class", "table table-striped table-hover table-bordered table-condensed", "style", "min-width: 1350px;", 4, "ngIf"], ["id", "comprehensiveReportTable", 1, "table", "table-striped", "table-hover", "table-bordered", "table-condensed", 2, "min-width", "1350px"], [3, "lastPage", "pageChanged", 4, "ngIf"], [3, "lastPage", "pageChanged"], ["tabindex", "-1", "role", "dialog", "id", "branchesTableModal", "aria-hidden", "true", 1, "modal", "fade", "bd-example-modal-lg"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-hidden", "true", 1, "close"], [1, "modal-body", 2, "overflow-x", "auto"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default"]], template: function ReportsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "loanlead-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\u00A0Loans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "fieldset", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "legend", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Start Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ReportsComponent_Template_input_change_18_listener($event) { return ctx.validate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "End Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ReportsComponent_Template_input_change_24_listener($event) { return ctx.validate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Report Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ReportsComponent_Template_select_change_30_listener($event) { return ctx.reportTypeUpdate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Select report type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Comprehensive Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "List Of Running Loans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "List Of Forwarded Loans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "List Of loans Rejected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "List Of loans Deferred");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "List Of loans Disbursed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Loans Running By Movement Stage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Loans Running By User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Loans Running By Branch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](52, ReportsComponent_div_52_Template, 9, 1, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Items Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function ReportsComponent_Template_input_input_57_listener($event) { return ctx.validate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ReportsComponent_Template_button_click_61_listener($event) { return ctx.reload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, " Filter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](64, ReportsComponent_ng_container_64_Template, 7, 2, "ng-container", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](65, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](66, ReportsComponent_ng_container_66_Template, 4, 2, "ng-container", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](67, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](68, ReportsComponent_ng_container_68_Template, 2, 1, "ng-container", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](69, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Export excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](73, ReportsComponent_ng_container_73_Template, 15, 2, "ng-container", 34);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.entities.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](65, 7, ctx.loans$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](67, 9, ctx.comprehensiveLoans$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](69, 11, ctx.loansCount$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("href", ctx.reportLink(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.userBranches.length);
    } }, directives: [_ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerComponent"], _common_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__["PaginationComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ReportsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'loanlead-reports',
                templateUrl: './reports.component.html',
                styleUrls: ['./reports.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _core_services_loan_service__WEBPACK_IMPORTED_MODULE_3__["LoanService"] }, { type: _core_services_branch_service__WEBPACK_IMPORTED_MODULE_4__["BranchService"] }, { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/reports/reports.module.ts":
/*!*******************************************!*\
  !*** ./src/app/reports/reports.module.ts ***!
  \*******************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/navigation/navigation.module */ "./src/app/ui/navigation/navigation.module.ts");
/* harmony import */ var _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/pagination/pagination.module */ "./src/app/common/pagination/pagination.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reports.component */ "./src/app/reports/reports.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");









class ReportsModule {
}
ReportsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: ReportsModule });
ReportsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function ReportsModule_Factory(t) { return new (t || ReportsModule)(); }, imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ReportsModule, { declarations: [_reports_component__WEBPACK_IMPORTED_MODULE_6__["ReportsComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ReportsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_reports_component__WEBPACK_IMPORTED_MODULE_6__["ReportsComponent"]],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/ui/navigation/navigation.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/ui/navigation/navigation.component.ts ***!
  \*******************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function NavigationComponent_ng_container_0_a_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "report");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Logged Users ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function NavigationComponent_ng_container_0_a_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Entities ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function NavigationComponent_ng_container_0_a_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Branches ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function NavigationComponent_ng_container_0_a_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Loan Products ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function NavigationComponent_ng_container_0_a_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Users ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function NavigationComponent_ng_container_0_a_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "User Dashboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function NavigationComponent_ng_container_0_a_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Customers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
const _c0 = function () { return ["Administrator"]; };
const _c1 = function (a0) { return [a0]; };
function NavigationComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nav", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Loanlead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "\u00A0Home ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "\u00A0Entities ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Edit Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "report");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Reports ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, NavigationComponent_ng_container_0_a_30_Template, 4, 0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, NavigationComponent_ng_container_0_a_31_Template, 4, 0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, NavigationComponent_ng_container_0_a_32_Template, 4, 0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, NavigationComponent_ng_container_0_a_33_Template, 4, 0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, NavigationComponent_ng_container_0_a_34_Template, 4, 0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, NavigationComponent_ng_container_0_a_35_Template, 4, 0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, NavigationComponent_ng_container_0_a_36_Template, 4, 0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const user_r377 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", user_r377.roles.includes("Administrator"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", user_r377.roles.includes("Administrator"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", user_r377.roles.includes("Administrator"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", user_r377.roles.includes("Administrator"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", user_r377.roles.includes("Administrator"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", user_r377.roles !== _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", user_r377.roles !== _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](10, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](11, _c1, user_r377.picturePath), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" \u00A0", user_r377.fullName, " ");
} }
class NavigationComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.user$ = this.userService.getCurrentUser();
    }
}
NavigationComponent.??fac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
NavigationComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NavigationComponent, selectors: [["loanlead-navigation"]], decls: 2, vars: 3, consts: [[4, "ngIf"], ["id", "header", 1, "navbar", "navbar-default", "navbar-expand-md", "navbar-fixed-top", "animated", "fadeInDown"], [1, "container-fluid"], ["routerLink", "../home", 1, "text-yellow", "d-flex", "align-items-center", "no-decoration"], ["data-toggle", "collapse", "data-target", ".navbar-collapse", 1, "navbar-toggler", "text-yellow"], [1, "material-icons"], [1, "navbar-collapse", "collapse", "justify-content-end"], [1, "navbar-nav"], [1, "nav-item"], ["routerLink", "../home", 1, "nav-link", "text-yellow", "d-flex", "align-items-center", "no-decoration"], [1, "nav-item", "dropdown"], ["href", "javascript:void(0);", "data-toggle", "dropdown", "role", "button", "id", "entitiesMenuLink", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "text-yellow", "d-flex", "align-items-center", "dropdown-toggle", "no-decoration"], ["aria-labelledby", "entitiesMenuLink", 1, "dropdown-menu", "fade"], ["routerLink", "../edit", 1, "dropdown-item", "text-secondary", "d-flex", "align-items-center", "no-decoration"], ["routerLink", "../reports", 1, "dropdown-item", "text-secondary", "d-flex", "align-items-center", "no-decoration"], ["routerLink", "../logged", "class", "dropdown-item text-secondary d-flex align-items-center no-decoration", 4, "ngIf"], ["routerLink", "../entities", "class", "dropdown-item text-secondary d-flex align-items-center no-decoration", 4, "ngIf"], ["routerLink", "../branches", "class", "dropdown-item text-secondary d-flex align-items-center no-decoration", 4, "ngIf"], ["routerLink", "../loan_products", "class", "dropdown-item text-secondary d-flex align-items-center no-decoration", 4, "ngIf"], ["routerLink", "../users", "class", "dropdown-item text-secondary d-flex align-items-center no-decoration", 4, "ngIf"], ["routerLink", "../dashboard", "class", "dropdown-item text-secondary d-flex align-items-center no-decoration", 4, "ngIf"], ["routerLink", "../customers", "class", "dropdown-item text-secondary d-flex align-items-center no-decoration", 4, "ngIf"], ["href", "javascript:void(0);", "data-toggle", "dropdown", "role", "button", "id", "userAccountMenuLink", "aria-haspopup", "true", "aria-expanded", "false", 1, "text-yellow", "dropdown-toggle", "d-flex", "align-items-center", "h-100", "no-decoration", "nav-menu-header"], [1, "rounded-circle", "nav-image", 3, "src"], ["aria-labelledby", "userAccountMenuLink", 1, "dropdown-menu"], ["href", "/logout", 1, "dropdown-item", "text-secondary", "d-flex", "align-items-center", "no-decoration"], ["routerLink", "../logged", 1, "dropdown-item", "text-secondary", "d-flex", "align-items-center", "no-decoration"], ["routerLink", "../entities", 1, "dropdown-item", "text-secondary", "d-flex", "align-items-center", "no-decoration"], ["routerLink", "../branches", 1, "dropdown-item", "text-secondary", "d-flex", "align-items-center", "no-decoration"], ["routerLink", "../loan_products", 1, "dropdown-item", "text-secondary", "d-flex", "align-items-center", "no-decoration"], ["routerLink", "../users", 1, "dropdown-item", "text-secondary", "d-flex", "align-items-center", "no-decoration"], ["routerLink", "../dashboard", 1, "dropdown-item", "text-secondary", "d-flex", "align-items-center", "no-decoration"], ["routerLink", "../customers", 1, "dropdown-item", "text-secondary", "d-flex", "align-items-center", "no-decoration"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, NavigationComponent_ng_container_0_Template, 46, 13, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](1, 1, ctx.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'loanlead-navigation',
                templateUrl: './navigation.component.html',
                styleUrls: ['./navigation.component.scss']
            }]
    }], function () { return [{ type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ui/navigation/navigation.module.ts":
/*!****************************************************!*\
  !*** ./src/app/ui/navigation/navigation.module.ts ***!
  \****************************************************/
/*! exports provided: NavigationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationModule", function() { return NavigationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation.component */ "./src/app/ui/navigation/navigation.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class NavigationModule {
}
NavigationModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: NavigationModule });
NavigationModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function NavigationModule_Factory(t) { return new (t || NavigationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](NavigationModule, { declarations: [_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NavigationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"]],
                exports: [
                    _navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/users/user-form/user-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/users/user-form/user-form.component.ts ***!
  \********************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/role.service */ "./src/app/core/services/role.service.ts");
/* harmony import */ var _core_services_branch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/branch.service */ "./src/app/core/services/branch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/navigation/navigation.component */ "./src/app/ui/navigation/navigation.component.ts");










function UserFormComponent_ng_container_0_ng_container_61_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const role_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", role_r59.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](role_r59.displayName);
} }
function UserFormComponent_ng_container_0_ng_container_61_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function UserFormComponent_ng_container_0_ng_container_61_Template_select_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r60.validate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, UserFormComponent_ng_container_0_ng_container_61_option_6_Template, 2, 2, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const roles_r57 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", roles_r57);
} }
function UserFormComponent_ng_container_0_ng_container_63_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const branch_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", branch_r64.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](branch_r64.name);
} }
function UserFormComponent_ng_container_0_ng_container_63_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Branches");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function UserFormComponent_ng_container_0_ng_container_63_Template_select_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r65.validate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, UserFormComponent_ng_container_0_ng_container_63_option_6_Template, 2, 2, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const branches_r62 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", branches_r62);
} }
function UserFormComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "loanlead-navigation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "em", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "\u00A0User Form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function UserFormComponent_ng_container_0_Template_form_ngSubmit_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r67.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "fieldset", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "legend", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function UserFormComponent_ng_container_0_Template_input_change_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r68); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r69.onFileChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Employee ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function UserFormComponent_ng_container_0_Template_input_input_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r68); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r70.validate(); })("blur", function UserFormComponent_ng_container_0_Template_input_blur_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r68); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r71.isUnique("employeeId"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function UserFormComponent_ng_container_0_Template_input_input_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r68); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r72.validate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Full name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function UserFormComponent_ng_container_0_Template_input_input_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r68); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r73.validate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function UserFormComponent_ng_container_0_Template_input_input_43_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r68); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r74.validate(); })("blur", function UserFormComponent_ng_container_0_Template_input_blur_43_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r68); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r75.isUnique("email"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function UserFormComponent_ng_container_0_Template_input_input_51_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r68); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r76.validate(); })("blur", function UserFormComponent_ng_container_0_Template_input_blur_51_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r68); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r77.isUnique("phoneNumber"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Optional Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function UserFormComponent_ng_container_0_Template_input_input_57_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r68); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r78.validate(); })("blur", function UserFormComponent_ng_container_0_Template_input_blur_57_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r68); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r79.isUnique("optionalPhoneNumber"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](61, UserFormComponent_ng_container_0_ng_container_61_Template, 8, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](62, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](63, UserFormComponent_ng_container_0_ng_container_63_Template, 8, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](64, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "\u00A0Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r54.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r54.user.picturePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](62, 5, ctx_r54.roles$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](64, 7, ctx_r54.branches$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx_r54.formGroup.valid);
} }
const toSpaceBetween = (s) => {
    return s.replace(/[A-Z]/g, (c) => ` ${c.toLowerCase()}`);
};
class UserFormComponent {
    constructor(userService, roleService, branchService, cd, router, activatedRoute) {
        this.userService = userService;
        this.roleService = roleService;
        this.branchService = branchService;
        this.cd = cd;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.file = null;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            employeeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('07[0-9]{8}')]),
            optionalPhoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('07[0-9]{8}')),
            roles: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([''], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            branches: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([''], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    ngOnInit() {
        this.roles$ = this.roleService.getAllRoles();
        this.branches$ = this.branchService.getAllBranches();
        this.activatedRoute.paramMap.subscribe((paramMap) => {
            this.userId = Number.parseInt(paramMap.get('userId'), 10);
            if (this.userId) {
                this.userService.getUser(this.userId).subscribe((user) => {
                    this.user = user;
                    this.formGroup.patchValue({
                        employeeId: user.employeeId,
                        password: user.password,
                        fullName: user.fullName,
                        email: user.email,
                        phoneNumber: user.phoneNumber,
                        optionalPhoneNumber: user.optionalPhoneNumber,
                        roles: user.roles,
                        branches: user.branches
                    });
                });
            }
        });
    }
    validate() {
        let result = true;
        const controls = this.formGroup.controls;
        Object.keys(controls).forEach((controlName) => {
            result = this.validateFormControl(controlName);
        });
        return result;
    }
    validateFormControl(controlName) {
        let result = true;
        const control = this.formGroup.get(controlName);
        const input = document.getElementById(controlName);
        const labelSpan = document
            .querySelector(`#${controlName} + .feedback`);
        input.classList[control.errors ? 'add' : 'remove']('invalid');
        let textContent = '';
        if (control.errors) {
            result = false;
            Object.keys(control.errors).forEach((error) => {
                switch (error) {
                    case 'required':
                        textContent = 'Please, enter this field';
                        break;
                    case 'notUnique':
                        textContent = `This ${toSpaceBetween(controlName)} already exists`;
                        break;
                    case 'pattern':
                        textContent = `Invalid ${toSpaceBetween(controlName)} format`;
                        break;
                    default:
                        textContent = '';
                        break;
                }
            });
        }
        labelSpan.textContent = textContent;
        return result;
    }
    isUnique(fieldType) {
        let result = true;
        const control = this.formGroup.get(fieldType);
        const form = document.querySelector('form');
        if (!control.errors && control.value) {
            this.userService.getUserByField(fieldType, control.value)
                .subscribe((data) => {
                if (data != null && data.id !== this.user.id) {
                    if (control.errors) {
                        control.errors.notUnique = { notUnique: true };
                    }
                    else {
                        control.setErrors({ notUnique: true });
                    }
                }
                else {
                    if (control.errors) {
                        delete control.errors.notUnique;
                    }
                }
                result = this.validateFormControl(fieldType);
            });
        }
        return result;
    }
    submit() {
        if (this.validate()) {
            const formData = new FormData();
            formData.append('file', this.file);
            formData.append('id', this.user.id.toString());
            formData.append('employeeId', this.formGroup.get('employeeId').value);
            formData.append('password', this.formGroup.get('password').value);
            formData.append('fullName', this.formGroup.get('fullName').value);
            formData.append('status', this.user.status);
            formData.append('email', this.formGroup.get('email').value);
            formData.append('phoneNumber', this.formGroup.get('phoneNumber').value);
            formData.append('optionalPhoneNumber', this.formGroup.get('optionalPhoneNumber').value);
            this.formGroup.get('roles').value.forEach((role) => formData.append('roles', role));
            this.formGroup.get('branches').value.forEach((branch) => formData.append('branches', branch));
            if (!this.file) {
                formData.append('picturePath', this.user.picturePath);
            }
            this.userService.save(formData)
                .subscribe((data) => {
                if (!data.err) {
                    this.router.navigate(['/users']);
                }
                else {
                    alert('Error while saving user');
                }
            });
        }
    }
    onFileChange(event) {
        if (event.target.files && event.target.files.length) {
            this.file = event.target.files[0];
        }
    }
}
UserFormComponent.??fac = function UserFormComponent_Factory(t) { return new (t || UserFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_branch_service__WEBPACK_IMPORTED_MODULE_4__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
UserFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: UserFormComponent, selectors: [["loanlead-user-form"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "border", "border-secondary", "m-3", "p-3", "bg-white", "rounded", 2, "position", "relative", "z-index", "2"], [1, "py-2"], [1, "rounded", "col-lg-2", "col-md-3", "col-sm-6", "col", "py-2", "page-heading", "d-flex", "align-items-center", "justify-content-center"], [1, "material-icons"], ["action", "/users", "method", "POST", "enctype", "multipart/form-data", 1, "form-horizontal", "form-with-image", 3, "formGroup", "ngSubmit"], [1, "border", "border-yellow", "rounded"], [1, "d-block", "w-auto", "ml-3", "text-dark-blue"], [1, "row", "px-4", "justify-content-center"], [1, "col-lg-3", "col-md-4", "col-12", "d-flex", "justify-content-center", "p-3"], ["for", "picture", 1, "image-input", "rounded-circle"], [1, "rounded-circle", 3, "src"], ["type", "file", "name", "file", "id", "picture", "hidden", "", 3, "change"], [1, "col-lg-5", "col-md-6", "col-12", "d-flex", "justify-content-center", "flex-column"], [1, "col-lg-4", "col-md-5", "col-12"], [1, "form-group"], ["for", "employeeId"], ["id", "employeeId", "type", "text", "placeholder", "Employee Id", "formControlName", "employeeId", "required", "", 1, "form-control", 3, "input", "blur"], [1, "feedback", "text-danger"], [1, "form-group", "pl-3"], ["for", "password"], ["tabindex", "0", "type", "password", "id", "password", "placeholder", "Password", "formControlName", "password", "data-toggle", "popover", 1, "form-control", 3, "input"], [1, "row", "px-4"], [1, "responsive-form-group", "w-100", "justify-content-center"], ["for", "fullName"], ["id", "fullName", "type", "text", "placeholder", "Full name", "formControlName", "fullName", "required", "", 1, "form-control", 3, "input"], ["for", "email"], ["id", "email", "type", "email", "placeholder", "Email", "formControlName", "email", "required", "", 1, "form-control", 3, "input", "blur"], ["for", "phoneNumber"], ["id", "phoneNumber", "type", "text", "placeholder", "Phone Number", "formControlName", "phoneNumber", "required", "", 1, "form-control", 3, "input", "blur"], ["for", "optionalPhoneNumber"], ["id", "optionalPhoneNumber", "type", "text", "placeholder", "Optional Phone Number", "formControlName", "optionalPhoneNumber", 1, "form-control", 3, "input", "blur"], [1, "d-flex", "flex-row", "pt-2", "pb-4", "justify-content-end"], ["routerLink", "/users", 1, "no-decoration", "btn", "btn-secondary", "submit-button", "d-flex", "col-2", "align-items-center", "justify-content-center", "mr-4"], ["type", "submit", 1, "btn", "btn-primary", "submit-button", "d-flex", "col-2", "justify-content-center", "mr-4", 3, "disabled"], ["for", "roles"], ["id", "roles", "type", "text", "formControlName", "roles", "autocomplete", "off", "required", "", "multiple", "", 1, "form-control", 3, "change"], ["value", "", 3, "value", 4, "ngFor", "ngForOf"], ["value", "", 3, "value"], ["for", "branches"], ["id", "branches", "type", "text", "formControlName", "branches", "autocomplete", "off", "required", "", "multiple", "", 1, "form-control", 3, "change"]], template: function UserFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, UserFormComponent_ng_container_0_Template, 73, 9, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectMultipleControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXItZm9ybS91c2VyLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'loanlead-user-form',
                templateUrl: './user-form.component.html',
                styleUrls: ['./user-form.component.scss']
            }]
    }], function () { return [{ type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _core_services_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"] }, { type: _core_services_branch_service__WEBPACK_IMPORTED_MODULE_4__["BranchService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/role.service */ "./src/app/core/services/role.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/navigation/navigation.component */ "./src/app/ui/navigation/navigation.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _common_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/pagination/pagination.component */ "./src/app/common/pagination/pagination.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");











const _c0 = function (a0) { return [a0]; };
function UsersComponent_ng_container_4_div_1_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UsersComponent_ng_container_4_div_1_tr_31_Template_a_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r92); const user_r90 = ctx.$implicit; const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3); return ctx_r91.setUserRoles(user_r90); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UsersComponent_ng_container_4_div_1_tr_31_Template_a_click_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r92); const user_r90 = ctx.$implicit; const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3); return ctx_r93.approveUser(user_r90); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const user_r90 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](6, _c0, user_r90.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](user_r90.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](user_r90.employeeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](user_r90.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](user_r90.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](user_r90.email);
} }
function UsersComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\u00A0New Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Items Count");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function UsersComponent_ng_container_4_div_1_Template_input_input_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r95); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r94.validateNewUsersItemsCount(); })("blur", function UsersComponent_ng_container_4_div_1_Template_input_blur_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r95); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r96.filterNewUsers(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "User Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Contact nr. 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, UsersComponent_ng_container_4_div_1_tr_31_Template, 17, 8, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const newUsers_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().ngIf;
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx_r87.newUsersItemsCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", newUsers_r86);
} }
function UsersComponent_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " No new users was found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function UsersComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, UsersComponent_ng_container_4_div_1_Template, 32, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, UsersComponent_ng_container_4_div_2_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const newUsers_r86 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", newUsers_r86.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !newUsers_r86.length);
} }
function UsersComponent_ng_container_6_app_pagination_1_Template(rf, ctx) { if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-pagination", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChanged", function UsersComponent_ng_container_6_app_pagination_1_Template_app_pagination_pageChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r101); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r100.loadNewUsers($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const newUsersCount_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().ngIf;
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("lastPage", ctx_r99.newUsersPagesCount(newUsersCount_r98));
} }
function UsersComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, UsersComponent_ng_container_6_app_pagination_1_Template, 1, 1, "app-pagination", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const newUsersCount_r98 = ctx.ngIf;
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", newUsersCount_r98 > ctx_r81.usersItemsCount.value);
} }
function UsersComponent_ng_container_8_div_1_tr_33_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UsersComponent_ng_container_8_div_1_tr_33_Template_a_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r109); const user_r107 = ctx.$implicit; const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3); return ctx_r108.setUserRoles(user_r107); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UsersComponent_ng_container_8_div_1_tr_33_Template_input_click_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r109); const user_r107 = ctx.$implicit; const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3); return ctx_r110.check(user_r107.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const user_r107 = ctx.$implicit;
    const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](8, _c0, user_r107.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](user_r107.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](user_r107.employeeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](user_r107.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](user_r107.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](user_r107.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](10, _c0, "/user_form/" + user_r107.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("checked", ctx_r106.selectAll);
} }
function UsersComponent_ng_container_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\u00A0Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Items Count");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function UsersComponent_ng_container_8_div_1_Template_input_input_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r112); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r111.validateUsersItemsCount(); })("blur", function UsersComponent_ng_container_8_div_1_Template_input_blur_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r112); const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r113.filterUsers(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "table", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "User Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Contact nr. 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UsersComponent_ng_container_8_div_1_Template_input_click_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r112); const users_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().ngIf; const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r114.selectAllTrigger(users_r103); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, UsersComponent_ng_container_8_div_1_tr_33_Template, 19, 12, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UsersComponent_ng_container_8_div_1_Template_button_click_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r112); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r116.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " Delete users ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Export excel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const users_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().ngIf;
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx_r104.usersItemsCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", users_r103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx_r104.anySelected);
} }
function UsersComponent_ng_container_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " No users was found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function UsersComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, UsersComponent_ng_container_8_div_1_Template, 40, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, UsersComponent_ng_container_8_div_2_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const users_r103 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", users_r103.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !users_r103.length);
} }
function UsersComponent_ng_container_10_app_pagination_1_Template(rf, ctx) { if (rf & 1) {
    const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-pagination", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChanged", function UsersComponent_ng_container_10_app_pagination_1_Template_app_pagination_pageChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r121); const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r120.loadUsers($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const usersCount_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().ngIf;
    const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("lastPage", ctx_r119.usersPagesCount(usersCount_r118));
} }
function UsersComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, UsersComponent_ng_container_10_app_pagination_1_Template, 1, 1, "app-pagination", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const usersCount_r118 = ctx.ngIf;
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", usersCount_r118 > ctx_r83.usersItemsCount.value);
} }
function UsersComponent_ng_container_12_ul_10_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const role_r126 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](role_r126);
} }
function UsersComponent_ng_container_12_ul_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, UsersComponent_ng_container_12_ul_10_li_1_Template, 2, 1, "li", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r123.userRoles);
} }
function UsersComponent_ng_container_12_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " No loans was found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function UsersComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h4", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, UsersComponent_ng_container_12_ul_10_Template, 2, 1, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, UsersComponent_ng_container_12_div_11_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r84.userRoles.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r84.userRoles.length);
} }
function UsersComponent_ng_container_13_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const role_r129 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", role_r129.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](role_r129.displayName);
} }
function UsersComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    const _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h4", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "select", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Select user roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, UsersComponent_ng_container_13_option_16_Template, 2, 2, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UsersComponent_ng_container_13_Template_button_click_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r131); const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r130.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Done ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const roles_r127 = ctx.ngIf;
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx_r85.userToApproveRoles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", roles_r127);
} }
class UsersComponent {
    constructor(userService, roleService, spinner) {
        this.userService = userService;
        this.roleService = roleService;
        this.spinner = spinner;
        this.searchValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.usersItemsCount = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](5, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(5),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(20),
        ]);
        this.newUsersItemsCount = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](5, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(5),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(20),
        ]);
        this.userToApproveRoles = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
    }
    ngOnInit() {
        this.spinner.show();
        this.loadUsers(1);
        this.loadNewUsers(1);
        this.roles$ = this.roleService.getAllRoles();
        this.usersCount$ = this.userService.getUsersCount();
        this.newUsersCount$ = this.userService.getNewUsersCount();
        this.selectAll = false;
        this.entitiesToDelete = [];
    }
    check(id) {
        if (id) {
            if (this.entitiesToDelete.includes(id)) {
                this.entitiesToDelete.splice(this.entitiesToDelete.indexOf(id), 1);
            }
            else {
                this.entitiesToDelete.push(id);
            }
        }
        this.anySelected = this.entitiesToDelete.length > 0;
    }
    loadUsers(page) {
        this.users$ = this.userService.getUsers(page - 1, this.usersItemsCount.value).pipe(users => {
            this.spinner.hide();
            return users;
        });
    }
    loadNewUsers(page) {
        this.newUsers$ = this.userService.getNewUsers(page - 1, this.newUsersItemsCount.value);
    }
    validateUsersItemsCount() {
        const input = document.getElementById('usersItemsCount');
        const labelSpan = document.querySelector('#usersItemsCount + .feedback');
        input.classList[this.usersItemsCount.errors ? 'add' : 'remove']('invalid');
        let textContent = '';
        if (this.usersItemsCount.errors) {
            Object.keys(this.usersItemsCount.errors).forEach((error) => {
                switch (error) {
                    case 'required':
                        textContent = 'Please, enter this field';
                        break;
                    case 'min':
                        textContent = 'Please, enter higher number';
                        break;
                    case 'max':
                        textContent = 'Please, enter lower number';
                        break;
                    default:
                        textContent = '';
                        break;
                }
            });
        }
        labelSpan.textContent = textContent;
        this.countChanged = true;
    }
    validateNewUsersItemsCount() {
        const input = document.getElementById('newUsersItemsCount');
        const labelSpan = document.querySelector('#newUsersItemsCount + .feedback');
        input.classList[this.newUsersItemsCount.errors ? 'add' : 'remove']('invalid');
        let textContent = '';
        if (this.newUsersItemsCount.errors) {
            Object.keys(this.newUsersItemsCount.errors).forEach((error) => {
                switch (error) {
                    case 'required':
                        textContent = 'Please, enter this field';
                        break;
                    case 'min':
                        textContent = 'Please, enter higher number';
                        break;
                    case 'max':
                        textContent = 'Please, enter lower number';
                        break;
                    default:
                        textContent = '';
                        break;
                }
            });
        }
        labelSpan.textContent = textContent;
        this.countChanged = true;
    }
    filterUsers() {
        if (!this.usersItemsCount.errors && this.countChanged) {
            const page = 1;
            this.loadUsers(page);
            this.countChanged = false;
        }
    }
    filterNewUsers() {
        if (!this.newUsersItemsCount.errors && this.countChanged) {
            const page = 1;
            this.loadNewUsers(page);
            this.countChanged = false;
        }
    }
    usersPagesCount(usersCount) {
        let result = usersCount / this.newUsersItemsCount.value;
        return Math.round(result) < result ? Math.round(result) + 1 : Math.round(result);
    }
    newUsersPagesCount(usersCount) {
        let result = usersCount / this.newUsersItemsCount.value;
        return Math.round(result) < result ? Math.round(result) + 1 : Math.round(result);
    }
    selectAllTrigger(users) {
        this.selectAll = !this.selectAll;
        if (this.selectAll) {
            this.entitiesToDelete = users.map(user => user.id);
        }
        else {
            this.entitiesToDelete = [];
        }
        this.anySelected = this.selectAll;
    }
    format(date) {
        return ((date.getDate() < 10) ? '0' + date.getDate() : date.getDate()) +
            "/" + ((date.getMonth() < 10) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) +
            "/" + date.getFullYear() +
            " " + ((date.getHours() < 10) ? '0' + date.getHours() : date.getHours()) +
            ":" + ((date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()) +
            ":" + ((date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds());
    }
    dateInstance(date) {
        return new Date(date);
    }
    setUserRoles(user) {
        this.userRoles = user.roles;
    }
    approveUser(user) {
        user.newlyCreated = false;
        this.userToApprove = user;
    }
    save() {
        this.userToApprove.roles = this.userToApproveRoles.value;
        this.userService.approveUser(this.userToApprove).subscribe((data) => {
            if (data) {
                this.ngOnInit();
            }
        });
    }
    delete() {
        this.userService.deleteUsers(this.entitiesToDelete).subscribe((data) => {
            if (data.err) {
                alert(`Request error with code ${data.err.status}`);
            }
            else {
                this.loadUsers(1);
                this.usersCount$ = this.userService.getUsersCount();
            }
        });
    }
}
UsersComponent.??fac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"])); };
UsersComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: UsersComponent, selectors: [["loanlead-users"]], decls: 15, vars: 16, consts: [["bgColor", "#FFFFFF", "size", "medium", "color", "#2129BF", "type", "ball-clip-rotate"], [1, "text-light", 2, "font-size", "20px"], [4, "ngIf"], ["class", "border border-secondary m-3 p-3 bg-white rounded animated fadeIn", 4, "ngIf"], ["class", "empty-list", 4, "ngIf"], [1, "border", "border-secondary", "m-3", "p-3", "bg-white", "rounded", "animated", "fadeIn"], [1, "py-2", "page-body-heading", "justify-content-between"], [1, "rounded", "col-lg-2", "col-md-3", "col-12", "py-2", "page-heading", "d-flex", "align-items-center", "justify-content-center"], [1, "material-icons"], [1, "col-md-3", "col-12"], [1, "form-group"], ["for", "newUsersItemsCount"], ["id", "newUsersItemsCount", "type", "number", "placeholder", "Search", "data-placeholder", "Search", "required", "", 1, "form-control", 3, "formControl", "input", "blur"], [1, "feedback", "text-danger"], [1, "py-2", 2, "overflow-x", "auto"], [1, "table", "table-striped", "table-hover", "table-bordered", "table-condensed", 2, "min-width", "1595px"], [3, "id", 4, "ngFor", "ngForOf"], [3, "id"], ["href", "javascript:void(0);", "data-toggle", "modal", "data-target", "#rolesTableModal", 3, "click"], ["href", "javascript:void(0);", "data-toggle", "modal", "data-target", "#rolesModal", 3, "click"], [1, "empty-list"], [3, "lastPage", "pageChanged", 4, "ngIf"], [3, "lastPage", "pageChanged"], ["for", "usersItemsCount"], ["id", "usersItemsCount", "type", "number", "placeholder", "Search", "data-placeholder", "Search", "required", "", 1, "form-control", 3, "formControl", "input", "blur"], ["id", "contentTable", 1, "table", "table-striped", "table-hover", "table-bordered", "table-condensed", 2, "min-width", "1595px"], ["type", "checkbox", "id", "select-all", 3, "click"], [1, "py-2"], ["type", "button", "id", "deleteButton", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "p-2"], ["href", "/api/reports/user", 1, "btn", "btn-primary"], [3, "routerLink"], ["type", "checkbox", 3, "checked", "click"], ["tabindex", "-1", "role", "dialog", "id", "rolesTableModal", "aria-hidden", "true", 1, "modal", "fade", "bd-example-modal-lg"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-hidden", "true", 1, "close"], [1, "modal-body", 2, "overflow-x", "auto"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default"], [4, "ngFor", "ngForOf"], ["id", "rolesModal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-body"], ["for", "roles"], ["name", "roles", "id", "roles", "multiple", "", 1, "form-control", 3, "formControl"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default", 3, "click"], [3, "value"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "loanlead-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, UsersComponent_ng_container_4_Template, 3, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, UsersComponent_ng_container_6_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, UsersComponent_ng_container_8_Template, 3, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, UsersComponent_ng_container_10_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, UsersComponent_ng_container_12_Template, 15, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, UsersComponent_ng_container_13_Template, 20, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](14, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](5, 6, ctx.newUsers$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](7, 8, ctx.newUsersCount$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](9, 10, ctx.users$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](11, 12, ctx.usersCount$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.userRoles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](14, 14, ctx.roles$));
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerComponent"], _ui_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _common_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__["PaginationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'loanlead-users',
                templateUrl: './users.component.html',
                styleUrls: ['./users.component.scss']
            }]
    }], function () { return [{ type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _core_services_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/users/users.module.ts":
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/navigation/navigation.module */ "./src/app/ui/navigation/navigation.module.ts");
/* harmony import */ var _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/pagination/pagination.module */ "./src/app/common/pagination/pagination.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-form/user-form.component */ "./src/app/users/user-form/user-form.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");










class UsersModule {
}
UsersModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: UsersModule });
UsersModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function UsersModule_Factory(t) { return new (t || UsersModule)(); }, imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](UsersModule, { declarations: [_users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"], _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__["UserFormComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UsersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"], _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__["UserFormComponent"]],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _common_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"]
                ]
            }]
    }], null, null); })();


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\11Born2Die11\IdeaProjects\loanlead\web\src\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map