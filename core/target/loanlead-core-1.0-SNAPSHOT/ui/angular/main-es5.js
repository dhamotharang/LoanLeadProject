function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/admin-home/admin-home.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/admin-home/admin-home.component.ts ***!
    \****************************************************/

  /*! exports provided: AdminHomeComponent */

  /***/
  function srcAppAdminHomeAdminHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminHomeComponent", function () {
      return AdminHomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AdminHomeComponent =
    /*#__PURE__*/
    function () {
      function AdminHomeComponent() {
        _classCallCheck(this, AdminHomeComponent);
      }

      _createClass(AdminHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminHomeComponent;
    }();

    AdminHomeComponent.ɵfac = function AdminHomeComponent_Factory(t) {
      return new (t || AdminHomeComponent)();
    };

    AdminHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminHomeComponent,
      selectors: [["eim-admin-home"]],
      decls: 11,
      vars: 0,
      consts: [[1, "border", "border-secondary", "m-3", "p-3", "bg-white", "rounded", "h-80"], [1, "py-2", "page-body-heading", "justify-content-between"], [1, "rounded", "col-lg-3", "col-md-4", "col-12", "py-2", "page-heading", "d-flex", "align-items-center", "justify-content-center"], [1, "material-icons"], [1, "py-2"], [1, "alert", "alert-success"], [1, "alert", "alert-info"]],
      template: function AdminHomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xA0Administration Panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "You've successfully logged in as administrator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "To see the list of all entities press Entities in navigation bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWhvbWUvYWRtaW4taG9tZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-admin-home',
          templateUrl: './admin-home.component.html',
          styleUrls: ['./admin-home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ui_admin_navigation_admin_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ui/admin-navigation/admin-navigation.component */
    "./src/app/ui/admin-navigation/admin-navigation.component.ts");
    /* harmony import */


    var _ui_user_navigation_user_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ui/user-navigation/user-navigation.component */
    "./src/app/ui/user-navigation/user-navigation.component.ts");
    /* harmony import */


    var _branch_form_branch_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./branch-form/branch-form.component */
    "./src/app/branch-form/branch-form.component.ts");
    /* harmony import */


    var _branches_branches_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./branches/branches.component */
    "./src/app/branches/branches.component.ts");
    /* harmony import */


    var _entity_form_entity_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./entity-form/entity-form.component */
    "./src/app/entity-form/entity-form.component.ts");
    /* harmony import */


    var _entities_entities_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./entities/entities.component */
    "./src/app/entities/entities.component.ts");
    /* harmony import */


    var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./user-form/user-form.component */
    "./src/app/user-form/user-form.component.ts");
    /* harmony import */


    var _users_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./users/users.component */
    "./src/app/users/users.component.ts");
    /* harmony import */


    var _customers_customers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./customers/customers.component */
    "./src/app/customers/customers.component.ts");
    /* harmony import */


    var _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./customer-form/customer-form.component */
    "./src/app/customer-form/customer-form.component.ts");
    /* harmony import */


    var _loan_form_loan_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./loan-form/loan-form.component */
    "./src/app/loan-form/loan-form.component.ts");
    /* harmony import */


    var _loan_products_loan_products_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./loan-products/loan-products.component */
    "./src/app/loan-products/loan-products.component.ts");
    /* harmony import */


    var _loan_product_form_loan_product_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./loan-product-form/loan-product-form.component */
    "./src/app/loan-product-form/loan-product-form.component.ts");
    /* harmony import */


    var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./edit-profile/edit-profile.component */
    "./src/app/edit-profile/edit-profile.component.ts");
    /* harmony import */


    var _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./admin-home/admin-home.component */
    "./src/app/admin-home/admin-home.component.ts");
    /* harmony import */


    var _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./user-home/user-home.component */
    "./src/app/user-home/user-home.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _reports_reports_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./reports/reports.component */
    "./src/app/reports/reports.component.ts");
    /* harmony import */


    var _auditing_auditing_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./auditing/auditing.component */
    "./src/app/auditing/auditing.component.ts");

    var userRoutes = [{
      path: "loan_form"
      /* LOAN_FORM */
      ,
      component: _loan_form_loan_form_component__WEBPACK_IMPORTED_MODULE_12__["LoanFormComponent"],
      pathMatch: 'full'
    }, {
      path: "customers"
      /* CUSTOMERS */
      ,
      component: _customers_customers_component__WEBPACK_IMPORTED_MODULE_10__["CustomersComponent"],
      pathMatch: 'full'
    }, {
      path: "customer_form"
      /* CUSTOMER_FORM */
      ,
      component: _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_11__["CustomerFormComponent"],
      pathMatch: 'full'
    }, {
      path: "dashboard"
      /* DASHBOARD */
      ,
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"],
      pathMatch: 'full'
    }, {
      path: "reports"
      /* REPORTS */
      ,
      component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_19__["ReportsComponent"],
      pathMatch: 'full'
    }, {
      path: "auditing"
      /* AUDITING */
      ,
      component: _auditing_auditing_component__WEBPACK_IMPORTED_MODULE_20__["AuditingComponent"],
      pathMatch: 'full'
    }, {
      path: "home"
      /* USER_HOME */
      ,
      component: _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_17__["UserHomeComponent"],
      pathMatch: 'full'
    }];
    var adminRoutes = [{
      path: "entities"
      /* ENTITIES */
      ,
      component: _entities_entities_component__WEBPACK_IMPORTED_MODULE_7__["EntitiesComponent"],
      pathMatch: 'full'
    }, {
      path: "entity_form"
      /* ENTITY_FORM */
      ,
      component: _entity_form_entity_form_component__WEBPACK_IMPORTED_MODULE_6__["EntityFormComponent"],
      pathMatch: 'full'
    }, {
      path: "branches"
      /* BRANCHES */
      ,
      component: _branches_branches_component__WEBPACK_IMPORTED_MODULE_5__["BranchesComponent"],
      pathMatch: 'full'
    }, {
      path: "branch_form"
      /* BRANCH_FORM */
      ,
      component: _branch_form_branch_form_component__WEBPACK_IMPORTED_MODULE_4__["BranchFormComponent"],
      pathMatch: 'full'
    }, {
      path: "users"
      /* USERS */
      ,
      component: _users_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"],
      pathMatch: 'full'
    }, {
      path: "user_form"
      /* USER_FORM */
      ,
      component: _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_8__["UserFormComponent"],
      pathMatch: 'full'
    }, {
      path: "loan_products"
      /* LOAN_PRODUCTS */
      ,
      component: _loan_products_loan_products_component__WEBPACK_IMPORTED_MODULE_13__["LoanProductsComponent"],
      pathMatch: 'full'
    }, {
      path: "loan_product_form"
      /* LOAN_PRODUCT_FORM */
      ,
      component: _loan_product_form_loan_product_form_component__WEBPACK_IMPORTED_MODULE_14__["LoanProductFormComponent"],
      pathMatch: 'full'
    }, {
      path: "edit"
      /* PROFILE_EDIT */
      ,
      component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_15__["EditProfileComponent"],
      pathMatch: 'full'
    }, {
      path: "home"
      /* ADMIN_HOME */
      ,
      component: _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_16__["AdminHomeComponent"],
      pathMatch: 'full'
    }];
    var adminEnvironment = [{
      path: "admin"
      /* ADMIN */
      ,
      component: _ui_admin_navigation_admin_navigation_component__WEBPACK_IMPORTED_MODULE_2__["AdminNavigationComponent"],
      children: [{
        path: '',
        redirectTo: "home"
        /* ADMIN_HOME */
        ,
        pathMatch: 'full'
      }].concat(adminRoutes)
    }];
    var userEnvironment = [{
      path: "user"
      /* USER */
      ,
      component: _ui_user_navigation_user_navigation_component__WEBPACK_IMPORTED_MODULE_3__["UserNavigationComponent"],
      children: [{
        path: '',
        redirectTo: "home"
        /* USER_HOME */
        ,
        pathMatch: 'full'
      }].concat(userRoutes)
    }];
    var routes = [].concat(adminEnvironment, userEnvironment);

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        useHash: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            useHash: true
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["loanlead-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'loanlead-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _entities_entities_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./entities/entities.component */
    "./src/app/entities/entities.component.ts");
    /* harmony import */


    var _branches_branches_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./branches/branches.component */
    "./src/app/branches/branches.component.ts");
    /* harmony import */


    var _customers_customers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./customers/customers.component */
    "./src/app/customers/customers.component.ts");
    /* harmony import */


    var _entity_form_entity_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./entity-form/entity-form.component */
    "./src/app/entity-form/entity-form.component.ts");
    /* harmony import */


    var _branch_form_branch_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./branch-form/branch-form.component */
    "./src/app/branch-form/branch-form.component.ts");
    /* harmony import */


    var _users_users_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./users/users.component */
    "./src/app/users/users.component.ts");
    /* harmony import */


    var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./user-form/user-form.component */
    "./src/app/user-form/user-form.component.ts");
    /* harmony import */


    var _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./customer-form/customer-form.component */
    "./src/app/customer-form/customer-form.component.ts");
    /* harmony import */


    var _loan_form_loan_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./loan-form/loan-form.component */
    "./src/app/loan-form/loan-form.component.ts");
    /* harmony import */


    var _loan_products_loan_products_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./loan-products/loan-products.component */
    "./src/app/loan-products/loan-products.component.ts");
    /* harmony import */


    var _loan_product_form_loan_product_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./loan-product-form/loan-product-form.component */
    "./src/app/loan-product-form/loan-product-form.component.ts");
    /* harmony import */


    var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./edit-profile/edit-profile.component */
    "./src/app/edit-profile/edit-profile.component.ts");
    /* harmony import */


    var _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./admin-home/admin-home.component */
    "./src/app/admin-home/admin-home.component.ts");
    /* harmony import */


    var _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./user-home/user-home.component */
    "./src/app/user-home/user-home.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _reports_reports_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./reports/reports.component */
    "./src/app/reports/reports.component.ts");
    /* harmony import */


    var _auditing_auditing_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./auditing/auditing.component */
    "./src/app/auditing/auditing.component.ts");
    /* harmony import */


    var _ui_user_navigation_user_navigation_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./ui/user-navigation/user-navigation.module */
    "./src/app/ui/user-navigation/user-navigation.module.ts");
    /* harmony import */


    var _ui_admin_navigation_admin_navigation_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./ui/admin-navigation/admin-navigation.module */
    "./src/app/ui/admin-navigation/admin-navigation.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _ui_user_navigation_user_navigation_module__WEBPACK_IMPORTED_MODULE_23__["UserNavigationModule"], _ui_admin_navigation_admin_navigation_module__WEBPACK_IMPORTED_MODULE_24__["AdminNavigationModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _entities_entities_component__WEBPACK_IMPORTED_MODULE_6__["EntitiesComponent"], _branches_branches_component__WEBPACK_IMPORTED_MODULE_7__["BranchesComponent"], _customers_customers_component__WEBPACK_IMPORTED_MODULE_8__["CustomersComponent"], _entity_form_entity_form_component__WEBPACK_IMPORTED_MODULE_9__["EntityFormComponent"], _branch_form_branch_form_component__WEBPACK_IMPORTED_MODULE_10__["BranchFormComponent"], _users_users_component__WEBPACK_IMPORTED_MODULE_11__["UsersComponent"], _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_12__["UserFormComponent"], _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_13__["CustomerFormComponent"], _loan_form_loan_form_component__WEBPACK_IMPORTED_MODULE_14__["LoanFormComponent"], _loan_products_loan_products_component__WEBPACK_IMPORTED_MODULE_15__["LoanProductsComponent"], _loan_product_form_loan_product_form_component__WEBPACK_IMPORTED_MODULE_16__["LoanProductFormComponent"], _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_17__["EditProfileComponent"], _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_18__["AdminHomeComponent"], _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_19__["UserHomeComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"], _reports_reports_component__WEBPACK_IMPORTED_MODULE_21__["ReportsComponent"], _auditing_auditing_component__WEBPACK_IMPORTED_MODULE_22__["AuditingComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _ui_user_navigation_user_navigation_module__WEBPACK_IMPORTED_MODULE_23__["UserNavigationModule"], _ui_admin_navigation_admin_navigation_module__WEBPACK_IMPORTED_MODULE_24__["AdminNavigationModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _entities_entities_component__WEBPACK_IMPORTED_MODULE_6__["EntitiesComponent"], _branches_branches_component__WEBPACK_IMPORTED_MODULE_7__["BranchesComponent"], _customers_customers_component__WEBPACK_IMPORTED_MODULE_8__["CustomersComponent"], _entity_form_entity_form_component__WEBPACK_IMPORTED_MODULE_9__["EntityFormComponent"], _branch_form_branch_form_component__WEBPACK_IMPORTED_MODULE_10__["BranchFormComponent"], _users_users_component__WEBPACK_IMPORTED_MODULE_11__["UsersComponent"], _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_12__["UserFormComponent"], _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_13__["CustomerFormComponent"], _loan_form_loan_form_component__WEBPACK_IMPORTED_MODULE_14__["LoanFormComponent"], _loan_products_loan_products_component__WEBPACK_IMPORTED_MODULE_15__["LoanProductsComponent"], _loan_product_form_loan_product_form_component__WEBPACK_IMPORTED_MODULE_16__["LoanProductFormComponent"], _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_17__["EditProfileComponent"], _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_18__["AdminHomeComponent"], _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_19__["UserHomeComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"], _reports_reports_component__WEBPACK_IMPORTED_MODULE_21__["ReportsComponent"], _auditing_auditing_component__WEBPACK_IMPORTED_MODULE_22__["AuditingComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _ui_user_navigation_user_navigation_module__WEBPACK_IMPORTED_MODULE_23__["UserNavigationModule"], _ui_admin_navigation_admin_navigation_module__WEBPACK_IMPORTED_MODULE_24__["AdminNavigationModule"]],
          providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auditing/auditing.component.ts":
  /*!************************************************!*\
    !*** ./src/app/auditing/auditing.component.ts ***!
    \************************************************/

  /*! exports provided: AuditingComponent */

  /***/
  function srcAppAuditingAuditingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuditingComponent", function () {
      return AuditingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AuditingComponent =
    /*#__PURE__*/
    function () {
      function AuditingComponent() {
        _classCallCheck(this, AuditingComponent);
      }

      _createClass(AuditingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AuditingComponent;
    }();

    AuditingComponent.ɵfac = function AuditingComponent_Factory(t) {
      return new (t || AuditingComponent)();
    };

    AuditingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AuditingComponent,
      selectors: [["eim-auditing"]],
      decls: 2,
      vars: 0,
      template: function AuditingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "auditing works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1ZGl0aW5nL2F1ZGl0aW5nLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuditingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-auditing',
          templateUrl: './auditing.component.html',
          styleUrls: ['./auditing.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/branch-form/branch-form.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/branch-form/branch-form.component.ts ***!
    \******************************************************/

  /*! exports provided: BranchFormComponent */

  /***/
  function srcAppBranchFormBranchFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BranchFormComponent", function () {
      return BranchFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BranchFormComponent =
    /*#__PURE__*/
    function () {
      function BranchFormComponent() {
        _classCallCheck(this, BranchFormComponent);
      }

      _createClass(BranchFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BranchFormComponent;
    }();

    BranchFormComponent.ɵfac = function BranchFormComponent_Factory(t) {
      return new (t || BranchFormComponent)();
    };

    BranchFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BranchFormComponent,
      selectors: [["eim-branch-form"]],
      decls: 2,
      vars: 0,
      template: function BranchFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "branch-form works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyYW5jaC1mb3JtL2JyYW5jaC1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BranchFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-branch-form',
          templateUrl: './branch-form.component.html',
          styleUrls: ['./branch-form.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/branches/branches.component.ts":
  /*!************************************************!*\
    !*** ./src/app/branches/branches.component.ts ***!
    \************************************************/

  /*! exports provided: BranchesComponent */

  /***/
  function srcAppBranchesBranchesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BranchesComponent", function () {
      return BranchesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BranchesComponent =
    /*#__PURE__*/
    function () {
      function BranchesComponent() {
        _classCallCheck(this, BranchesComponent);
      }

      _createClass(BranchesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BranchesComponent;
    }();

    BranchesComponent.ɵfac = function BranchesComponent_Factory(t) {
      return new (t || BranchesComponent)();
    };

    BranchesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BranchesComponent,
      selectors: [["eim-branches"]],
      decls: 2,
      vars: 0,
      template: function BranchesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "branches works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyYW5jaGVzL2JyYW5jaGVzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BranchesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-branches',
          templateUrl: './branches.component.html',
          styleUrls: ['./branches.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/common.ts":
  /*!********************************!*\
    !*** ./src/app/core/common.ts ***!
    \********************************/

  /*! exports provided: log, clone, Strings, removeWrapper */

  /***/
  function srcAppCoreCommonTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "log", function () {
      return log;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "clone", function () {
      return clone;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Strings", function () {
      return Strings;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "removeWrapper", function () {
      return removeWrapper;
    });

    function log() {
      var _console;

      (_console = console).log.apply(_console, arguments);
    }

    function clone(data) {
      return JSON.parse(JSON.stringify(data));
    }

    var Strings =
    /*#__PURE__*/
    function () {
      function Strings() {
        _classCallCheck(this, Strings);
      }

      _createClass(Strings, null, [{
        key: "isBlank",
        value: function isBlank(str) {
          return !str || /^\s*$/.test(str);
        }
      }]);

      return Strings;
    }();

    function removeWrapper(data) {
      return data.map(function (e) {
        return e[Object.keys(e)[0]];
      });
    }
    /***/

  },

  /***/
  "./src/app/core/services/data.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/core/services/data.service.ts ***!
    \***********************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppCoreServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _model_server_resp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../model/server-resp */
    "./src/app/model/server-resp.ts");
    /* harmony import */


    var _model_ui_components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../model/ui/components/footer */
    "./src/app/model/ui/components/footer.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var DataService =
    /*#__PURE__*/
    function () {
      function DataService(http) {
        _classCallCheck(this, DataService);

        this.http = http;
      }

      _createClass(DataService, [{
        key: "getCurrentUser",
        value: function getCurrentUser() {
          return this.get("/api/users/current_user").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data.data;
          }));
        }
      }, {
        key: "getWorkspace",
        value: function getWorkspace() {
          return this.get("assets/mock/workspace.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data.data;
          }));
        }
      }, {
        key: "getOptionalResources",
        value: function getOptionalResources() {
          return this.get('/eim/api/resources/optional').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data.data || [];
          }));
        }
      }, {
        key: "getResources",
        value: function getResources() {
          return this.get("/eim/api/resources").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data.data || [];
          }));
        }
      }, {
        key: "saveUser",
        value: function saveUser(user) {
          return this.post('/api/user', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data.data;
          }));
        }
      }, {
        key: "performAction",
        value: function performAction(method, url, data) {
          var resp;

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
              throw "Http method '".concat(method, "' not supported");
          }

          return resp.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data.data;
          }));
        }
      }, {
        key: "get",
        value: function get(url) {
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return _model_server_resp__WEBPACK_IMPORTED_MODULE_3__["ServerResp"].forData(data);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_model_server_resp__WEBPACK_IMPORTED_MODULE_3__["ServerResp"].withError(err));
          }));
        }
      }, {
        key: "post",
        value: function post(url, body) {
          return this.http.post(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return _model_server_resp__WEBPACK_IMPORTED_MODULE_3__["ServerResp"].forData(data);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_model_server_resp__WEBPACK_IMPORTED_MODULE_3__["ServerResp"].withError(err));
          }));
        }
      }, {
        key: "put",
        value: function put(url, body) {
          return this.http.put(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return _model_server_resp__WEBPACK_IMPORTED_MODULE_3__["ServerResp"].forData(data);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_model_server_resp__WEBPACK_IMPORTED_MODULE_3__["ServerResp"].withError(err));
          }));
        }
      }, {
        key: "patch",
        value: function patch(url, body) {
          return this.http.patch(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return _model_server_resp__WEBPACK_IMPORTED_MODULE_3__["ServerResp"].forData(data);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_model_server_resp__WEBPACK_IMPORTED_MODULE_3__["ServerResp"].withError(err));
          }));
        }
      }, {
        key: "delete",
        value: function _delete(url) {
          return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return _model_server_resp__WEBPACK_IMPORTED_MODULE_3__["ServerResp"].forData(data);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_model_server_resp__WEBPACK_IMPORTED_MODULE_3__["ServerResp"].withError(err));
          }));
        }
      }]);

      return DataService;
    }();

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]));
    };

    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/services/user.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/core/services/user.service.ts ***!
    \***********************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppCoreServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../common */
    "./src/app/core/common.ts");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./data.service */
    "./src/app/core/services/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(dataService, router, titleService) {
        var _this = this;

        _classCallCheck(this, UserService);

        this.dataService = dataService;
        this.router = router;
        this.titleService = titleService;
        this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        this.dataService.getCurrentUser().subscribe(function (data) {
          console.log(data);

          _this.setUser(data);
        });
      }

      _createClass(UserService, [{
        key: "getCurrentUser",
        value: function getCurrentUser() {
          return this.user$;
        }
      }, {
        key: "save",
        value: function save(user) {
          var _this2 = this;

          return this.dataService.saveUser(user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            _this2.setUser(data);

            return _this2.copyOfUser();
          }));
        }
      }, {
        key: "setUser",
        value: function setUser(data) {
          this.user = Object(_common__WEBPACK_IMPORTED_MODULE_3__["clone"])(data);
          this.user$.next(Object(_common__WEBPACK_IMPORTED_MODULE_3__["clone"])(data));
        }
      }, {
        key: "copyOfUser",
        value: function copyOfUser() {
          return JSON.parse(JSON.stringify(this.user));
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/customer-form/customer-form.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/customer-form/customer-form.component.ts ***!
    \**********************************************************/

  /*! exports provided: CustomerFormComponent */

  /***/
  function srcAppCustomerFormCustomerFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerFormComponent", function () {
      return CustomerFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CustomerFormComponent =
    /*#__PURE__*/
    function () {
      function CustomerFormComponent() {
        _classCallCheck(this, CustomerFormComponent);
      }

      _createClass(CustomerFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CustomerFormComponent;
    }();

    CustomerFormComponent.ɵfac = function CustomerFormComponent_Factory(t) {
      return new (t || CustomerFormComponent)();
    };

    CustomerFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CustomerFormComponent,
      selectors: [["eim-customer-form"]],
      decls: 2,
      vars: 0,
      template: function CustomerFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "customer-form works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyLWZvcm0vY3VzdG9tZXItZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-customer-form',
          templateUrl: './customer-form.component.html',
          styleUrls: ['./customer-form.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/customers/customers.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/customers/customers.component.ts ***!
    \**************************************************/

  /*! exports provided: CustomersComponent */

  /***/
  function srcAppCustomersCustomersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomersComponent", function () {
      return CustomersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CustomersComponent =
    /*#__PURE__*/
    function () {
      function CustomersComponent() {
        _classCallCheck(this, CustomersComponent);
      }

      _createClass(CustomersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CustomersComponent;
    }();

    CustomersComponent.ɵfac = function CustomersComponent_Factory(t) {
      return new (t || CustomersComponent)();
    };

    CustomersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CustomersComponent,
      selectors: [["eim-customers"]],
      decls: 2,
      vars: 0,
      template: function CustomersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "customers works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jdXN0b21lcnMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-customers',
          templateUrl: './customers.component.html',
          styleUrls: ['./customers.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)();
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["eim-dashboard"]],
      decls: 2,
      vars: 0,
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dashboard works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/edit-profile/edit-profile.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/edit-profile/edit-profile.component.ts ***!
    \********************************************************/

  /*! exports provided: EditProfileComponent */

  /***/
  function srcAppEditProfileEditProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function () {
      return EditProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EditProfileComponent =
    /*#__PURE__*/
    function () {
      function EditProfileComponent() {
        _classCallCheck(this, EditProfileComponent);
      }

      _createClass(EditProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EditProfileComponent;
    }();

    EditProfileComponent.ɵfac = function EditProfileComponent_Factory(t) {
      return new (t || EditProfileComponent)();
    };

    EditProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditProfileComponent,
      selectors: [["eim-edit-profile"]],
      decls: 2,
      vars: 0,
      template: function EditProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "edit-profile works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-edit-profile',
          templateUrl: './edit-profile.component.html',
          styleUrls: ['./edit-profile.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/entities/entities.component.ts":
  /*!************************************************!*\
    !*** ./src/app/entities/entities.component.ts ***!
    \************************************************/

  /*! exports provided: EntitiesComponent */

  /***/
  function srcAppEntitiesEntitiesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntitiesComponent", function () {
      return EntitiesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EntitiesComponent =
    /*#__PURE__*/
    function () {
      function EntitiesComponent() {
        _classCallCheck(this, EntitiesComponent);
      }

      _createClass(EntitiesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EntitiesComponent;
    }();

    EntitiesComponent.ɵfac = function EntitiesComponent_Factory(t) {
      return new (t || EntitiesComponent)();
    };

    EntitiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EntitiesComponent,
      selectors: [["eim-entities"]],
      decls: 2,
      vars: 0,
      template: function EntitiesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "entities works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2VudGl0aWVzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntitiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-entities',
          templateUrl: './entities.component.html',
          styleUrls: ['./entities.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/entity-form/entity-form.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/entity-form/entity-form.component.ts ***!
    \******************************************************/

  /*! exports provided: EntityFormComponent */

  /***/
  function srcAppEntityFormEntityFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntityFormComponent", function () {
      return EntityFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EntityFormComponent =
    /*#__PURE__*/
    function () {
      function EntityFormComponent() {
        _classCallCheck(this, EntityFormComponent);
      }

      _createClass(EntityFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EntityFormComponent;
    }();

    EntityFormComponent.ɵfac = function EntityFormComponent_Factory(t) {
      return new (t || EntityFormComponent)();
    };

    EntityFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EntityFormComponent,
      selectors: [["eim-entity-form"]],
      decls: 2,
      vars: 0,
      template: function EntityFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "entity-form works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0eS1mb3JtL2VudGl0eS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntityFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-entity-form',
          templateUrl: './entity-form.component.html',
          styleUrls: ['./entity-form.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/loan-form/loan-form.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/loan-form/loan-form.component.ts ***!
    \**************************************************/

  /*! exports provided: LoanFormComponent */

  /***/
  function srcAppLoanFormLoanFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoanFormComponent", function () {
      return LoanFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoanFormComponent =
    /*#__PURE__*/
    function () {
      function LoanFormComponent() {
        _classCallCheck(this, LoanFormComponent);
      }

      _createClass(LoanFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoanFormComponent;
    }();

    LoanFormComponent.ɵfac = function LoanFormComponent_Factory(t) {
      return new (t || LoanFormComponent)();
    };

    LoanFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoanFormComponent,
      selectors: [["eim-loan-form"]],
      decls: 2,
      vars: 0,
      template: function LoanFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "loan-form works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvYW4tZm9ybS9sb2FuLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoanFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-loan-form',
          templateUrl: './loan-form.component.html',
          styleUrls: ['./loan-form.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/loan-product-form/loan-product-form.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/loan-product-form/loan-product-form.component.ts ***!
    \******************************************************************/

  /*! exports provided: LoanProductFormComponent */

  /***/
  function srcAppLoanProductFormLoanProductFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoanProductFormComponent", function () {
      return LoanProductFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoanProductFormComponent =
    /*#__PURE__*/
    function () {
      function LoanProductFormComponent() {
        _classCallCheck(this, LoanProductFormComponent);
      }

      _createClass(LoanProductFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoanProductFormComponent;
    }();

    LoanProductFormComponent.ɵfac = function LoanProductFormComponent_Factory(t) {
      return new (t || LoanProductFormComponent)();
    };

    LoanProductFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoanProductFormComponent,
      selectors: [["eim-loan-product-form"]],
      decls: 2,
      vars: 0,
      template: function LoanProductFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "loan-product-form works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvYW4tcHJvZHVjdC1mb3JtL2xvYW4tcHJvZHVjdC1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoanProductFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-loan-product-form',
          templateUrl: './loan-product-form.component.html',
          styleUrls: ['./loan-product-form.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/loan-products/loan-products.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/loan-products/loan-products.component.ts ***!
    \**********************************************************/

  /*! exports provided: LoanProductsComponent */

  /***/
  function srcAppLoanProductsLoanProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoanProductsComponent", function () {
      return LoanProductsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoanProductsComponent =
    /*#__PURE__*/
    function () {
      function LoanProductsComponent() {
        _classCallCheck(this, LoanProductsComponent);
      }

      _createClass(LoanProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoanProductsComponent;
    }();

    LoanProductsComponent.ɵfac = function LoanProductsComponent_Factory(t) {
      return new (t || LoanProductsComponent)();
    };

    LoanProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoanProductsComponent,
      selectors: [["eim-loan-products"]],
      decls: 2,
      vars: 0,
      template: function LoanProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "loan-products works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvYW4tcHJvZHVjdHMvbG9hbi1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoanProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-loan-products',
          templateUrl: './loan-products.component.html',
          styleUrls: ['./loan-products.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/model/server-resp.ts":
  /*!**************************************!*\
    !*** ./src/app/model/server-resp.ts ***!
    \**************************************/

  /*! exports provided: ServerResp */

  /***/
  function srcAppModelServerRespTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServerResp", function () {
      return ServerResp;
    });

    var ServerResp =
    /*#__PURE__*/
    function () {
      function ServerResp(data, err) {
        _classCallCheck(this, ServerResp);

        this.data = data;
        this.err = err;
      }

      _createClass(ServerResp, null, [{
        key: "forData",
        value: function forData(data) {
          return new ServerResp(data, undefined);
        }
      }, {
        key: "withError",
        value: function withError(err) {
          return new ServerResp(undefined, err);
        }
      }]);

      return ServerResp;
    }();
    /***/

  },

  /***/
  "./src/app/model/ui/components/footer.ts":
  /*!***********************************************!*\
    !*** ./src/app/model/ui/components/footer.ts ***!
    \***********************************************/

  /*! exports provided: HTTPMethod */

  /***/
  function srcAppModelUiComponentsFooterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HTTPMethod", function () {
      return HTTPMethod;
    });

    var HTTPMethod;

    (function (HTTPMethod) {
      HTTPMethod[HTTPMethod["GET"] = 0] = "GET";
      HTTPMethod[HTTPMethod["POST"] = 1] = "POST";
      HTTPMethod[HTTPMethod["PUT"] = 2] = "PUT";
      HTTPMethod[HTTPMethod["PATCH"] = 3] = "PATCH";
      HTTPMethod[HTTPMethod["DELETE"] = 4] = "DELETE";
    })(HTTPMethod || (HTTPMethod = {}));
    /***/

  },

  /***/
  "./src/app/reports/reports.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/reports/reports.component.ts ***!
    \**********************************************/

  /*! exports provided: ReportsComponent */

  /***/
  function srcAppReportsReportsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportsComponent", function () {
      return ReportsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ReportsComponent =
    /*#__PURE__*/
    function () {
      function ReportsComponent() {
        _classCallCheck(this, ReportsComponent);
      }

      _createClass(ReportsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ReportsComponent;
    }();

    ReportsComponent.ɵfac = function ReportsComponent_Factory(t) {
      return new (t || ReportsComponent)();
    };

    ReportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReportsComponent,
      selectors: [["eim-reports"]],
      decls: 2,
      vars: 0,
      template: function ReportsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "reports works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-reports',
          templateUrl: './reports.component.html',
          styleUrls: ['./reports.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/admin-navigation/admin-navigation.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/ui/admin-navigation/admin-navigation.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AdminNavigationComponent */

  /***/
  function srcAppUiAdminNavigationAdminNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminNavigationComponent", function () {
      return AdminNavigationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../core/services/user.service */
    "./src/app/core/services/user.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function AdminNavigationComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Loanlead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "menu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\xA0Home ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "menu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\xA0Entities ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "person");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Edit Profile ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "report");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Logged Users ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "report");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Reports ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "settings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Entity ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "settings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Branches ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "settings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Loan Thresholds ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "settings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Users ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "settings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Customer SMS Setting ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "exit_to_app");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Logout ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var user_r1 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, "/edit_profile/" + user_r1.id), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, user_r1.picturePath), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \xA0", user_r1.fullName, " ");
      }
    }

    var AdminNavigationComponent =
    /*#__PURE__*/
    function () {
      function AdminNavigationComponent(userService) {
        _classCallCheck(this, AdminNavigationComponent);

        this.userService = userService;
      }

      _createClass(AdminNavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user$ = this.userService.getCurrentUser();
        }
      }]);

      return AdminNavigationComponent;
    }();

    AdminNavigationComponent.ɵfac = function AdminNavigationComponent_Factory(t) {
      return new (t || AdminNavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
    };

    AdminNavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminNavigationComponent,
      selectors: [["eim-admin-navigation"]],
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], ["id", "header", 1, "navbar", "navbar-default", "navbar-expand-md", "navbar-fixed-top", "animated", "fadeInDown"], [1, "container-fluid"], ["routerLink", "/home", 1, "text-yellow", "d-flex", "align-items-center", "no-decoration"], ["data-toggle", "collapse", "data-target", ".navbar-collapse", 1, "navbar-toggler", "text-yellow"], [1, "material-icons"], [1, "navbar-collapse", "collapse", "justify-content-end"], [1, "navbar-nav"], [1, "nav-item"], ["routerLink", "/home", 1, "nav-link", "text-yellow", "d-flex", "align-items-center", "no-decoration"], [1, "nav-item", "dropdown"], ["routerLink", "/entities", "data-toggle", "dropdown", "role", "button", "id", "entitiesMenuLink", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "text-yellow", "d-flex", "align-items-center", "dropdown-toggle", "no-decoration"], ["aria-labelledby", "entitiesMenuLink", 1, "dropdown-menu", "fade"], [1, "dropdown-item", "text-secondary", "d-flex", "align-items-center", "no-decoration", 3, "href"], ["routerLink", "/logged_users", 1, "dropdown-item", "text-secondary", "d-flex", "align-items-center", "no-decoration"], ["routerLink", "/reports", 1, "dropdown-item", "text-secondary", "d-flex", "align-items-center", "no-decoration"], ["routerLink", "/entities", 1, "dropdown-item", "text-secondary", "d-flex", "align-items-center", "no-decoration"], ["routerLink", "/branches", 1, "dropdown-item", "text-secondary", "d-flex", "align-items-center", "no-decoration"], ["routerLink", "/loan_products", 1, "dropdown-item", "text-secondary", "d-flex", "align-items-center", "no-decoration"], ["routerLink", "/users", 1, "dropdown-item", "text-secondary", "d-flex", "align-items-center", "no-decoration"], ["routerLink", "/roles", 1, "dropdown-item", "text-secondary", "d-flex", "align-items-center", "no-decoration"], ["routerLink", "/home", "data-toggle", "dropdown", "role", "button", "id", "userAccountMenuLink", "aria-haspopup", "true", "aria-expanded", "false", 1, "text-yellow", "dropdown-toggle", "d-flex", "align-items-center", "h-100", "no-decoration", "nav-menu-header"], [1, "rounded-circle", "nav-image", 3, "src"], ["aria-labelledby", "userAccountMenuLink", 1, "dropdown-menu"], ["href", "/login/logout", 1, "dropdown-item", "text-secondary", "d-flex", "align-items-center", "no-decoration"]],
      template: function AdminNavigationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AdminNavigationComponent_ng_container_0_Template, 63, 7, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.user$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2FkbWluLW5hdmlnYXRpb24vYWRtaW4tbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminNavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-admin-navigation',
          templateUrl: './admin-navigation.component.html',
          styleUrls: ['./admin-navigation.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/admin-navigation/admin-navigation.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/ui/admin-navigation/admin-navigation.module.ts ***!
    \****************************************************************/

  /*! exports provided: AdminNavigationModule */

  /***/
  function srcAppUiAdminNavigationAdminNavigationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminNavigationModule", function () {
      return AdminNavigationModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _admin_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./admin-navigation.component */
    "./src/app/ui/admin-navigation/admin-navigation.component.ts");

    var AdminNavigationModule = function AdminNavigationModule() {
      _classCallCheck(this, AdminNavigationModule);
    };

    AdminNavigationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AdminNavigationModule
    });
    AdminNavigationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AdminNavigationModule_Factory(t) {
        return new (t || AdminNavigationModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminNavigationModule, {
        declarations: [_admin_navigation_component__WEBPACK_IMPORTED_MODULE_2__["AdminNavigationComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminNavigationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_admin_navigation_component__WEBPACK_IMPORTED_MODULE_2__["AdminNavigationComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/user-navigation/user-navigation.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/ui/user-navigation/user-navigation.component.ts ***!
    \*****************************************************************/

  /*! exports provided: UserNavigationComponent */

  /***/
  function srcAppUiUserNavigationUserNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserNavigationComponent", function () {
      return UserNavigationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../core/services/user.service */
    "./src/app/core/services/user.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function UserNavigationComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Loanlead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "menu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\xA0Home ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "menu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\xA0Entities ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "dashboard");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "User Dashboard ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "person");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Edit Profile ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "report");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Reports ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "settings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Customers ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "exit_to_app");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Logout ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var user_r3 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, user_r3.picturePath), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \xA0", user_r3.fullName, " ");
      }
    }

    var UserNavigationComponent =
    /*#__PURE__*/
    function () {
      function UserNavigationComponent(userService) {
        _classCallCheck(this, UserNavigationComponent);

        this.userService = userService;
      }

      _createClass(UserNavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user$ = this.userService.getCurrentUser();
        }
      }]);

      return UserNavigationComponent;
    }();

    UserNavigationComponent.ɵfac = function UserNavigationComponent_Factory(t) {
      return new (t || UserNavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
    };

    UserNavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserNavigationComponent,
      selectors: [["eim-user-navigation"]],
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], ["id", "header", 1, "navbar", "navbar-default", "navbar-expand-md", "navbar-fixed-top", "animated", "fadeInDown"], [1, "container-fluid"], ["routerLink", "/home", 1, "text-yellow", "d-flex", "align-items-center", "no-decoration"], ["data-toggle", "collapse", "data-target", ".navbar-collapse", 1, "navbar-toggler", "text-yellow"], [1, "material-icons"], [1, "navbar-collapse", "collapse", "justify-content-end"], [1, "navbar-nav"], [1, "nav-item"], ["routerLink", "/home", 1, "nav-link", "text-yellow", "d-flex", "align-items-center", "no-decoration"], [1, "nav-item", "dropdown"], ["routerLink", "/entities", "data-toggle", "dropdown", "role", "button", "id", "userEntitiesMenuLink", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "text-yellow", "d-flex", "align-items-center", "dropdown-toggle", "no-decoration", "nav-menu-header"], ["aria-labelledby", "userEntitiesMenuLink", 1, "dropdown-menu", "fade"], ["routerLink", "/dashboard", 1, "dropdown-item", "text-secondary", "d-flex", "align-items-center", "no-decoration"], ["routerLink", "/home", 1, "dropdown-item", "text-secondary", "d-flex", "align-items-center", "no-decoration", "enabled"], ["routerLink", "/reports", 1, "dropdown-item", "text-secondary", "d-flex", "align-items-center", "no-decoration"], ["routerLink", "/customers", 1, "dropdown-item", "text-secondary", "d-flex", "align-items-center", "no-decoration"], ["routerLink", "/home", "data-toggle", "dropdown", "role", "button", "id", "userAccountMenuLink", "aria-haspopup", "true", "aria-expanded", "false", 1, "text-yellow", "dropdown-toggle", "d-flex", "align-items-center", "h-100", "no-decoration", "nav-menu-header"], [1, "rounded-circle", "nav-image", 3, "src"], ["aria-labelledby", "userAccountMenuLink", 1, "dropdown-menu"], ["href", "/login/logout", 1, "dropdown-item", "text-secondary", "d-flex", "align-items-center", "no-decoration", "enabled"]],
      template: function UserNavigationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserNavigationComponent_ng_container_0_Template, 47, 4, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.user$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL3VzZXItbmF2aWdhdGlvbi91c2VyLW5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserNavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-user-navigation',
          templateUrl: './user-navigation.component.html',
          styleUrls: ['./user-navigation.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/user-navigation/user-navigation.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/ui/user-navigation/user-navigation.module.ts ***!
    \**************************************************************/

  /*! exports provided: UserNavigationModule */

  /***/
  function srcAppUiUserNavigationUserNavigationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserNavigationModule", function () {
      return UserNavigationModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _user_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user-navigation.component */
    "./src/app/ui/user-navigation/user-navigation.component.ts");

    var UserNavigationModule = function UserNavigationModule() {
      _classCallCheck(this, UserNavigationModule);
    };

    UserNavigationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UserNavigationModule
    });
    UserNavigationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UserNavigationModule_Factory(t) {
        return new (t || UserNavigationModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserNavigationModule, {
        declarations: [_user_navigation_component__WEBPACK_IMPORTED_MODULE_2__["UserNavigationComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserNavigationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_user_navigation_component__WEBPACK_IMPORTED_MODULE_2__["UserNavigationComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/user-form/user-form.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/user-form/user-form.component.ts ***!
    \**************************************************/

  /*! exports provided: UserFormComponent */

  /***/
  function srcAppUserFormUserFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserFormComponent", function () {
      return UserFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UserFormComponent =
    /*#__PURE__*/
    function () {
      function UserFormComponent() {
        _classCallCheck(this, UserFormComponent);
      }

      _createClass(UserFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserFormComponent;
    }();

    UserFormComponent.ɵfac = function UserFormComponent_Factory(t) {
      return new (t || UserFormComponent)();
    };

    UserFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserFormComponent,
      selectors: [["eim-user-form"]],
      decls: 2,
      vars: 0,
      template: function UserFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "user-form works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZm9ybS91c2VyLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-user-form',
          templateUrl: './user-form.component.html',
          styleUrls: ['./user-form.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user-home/user-home.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/user-home/user-home.component.ts ***!
    \**************************************************/

  /*! exports provided: UserHomeComponent */

  /***/
  function srcAppUserHomeUserHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserHomeComponent", function () {
      return UserHomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UserHomeComponent =
    /*#__PURE__*/
    function () {
      function UserHomeComponent() {
        _classCallCheck(this, UserHomeComponent);
      }

      _createClass(UserHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserHomeComponent;
    }();

    UserHomeComponent.ɵfac = function UserHomeComponent_Factory(t) {
      return new (t || UserHomeComponent)();
    };

    UserHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserHomeComponent,
      selectors: [["eim-user-home"]],
      decls: 2,
      vars: 0,
      template: function UserHomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Works!!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItaG9tZS91c2VyLWhvbWUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-user-home',
          templateUrl: './user-home.component.html',
          styleUrls: ['./user-home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/users/users.component.ts":
  /*!******************************************!*\
    !*** ./src/app/users/users.component.ts ***!
    \******************************************/

  /*! exports provided: UsersComponent */

  /***/
  function srcAppUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return UsersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UsersComponent =
    /*#__PURE__*/
    function () {
      function UsersComponent() {
        _classCallCheck(this, UsersComponent);
      }

      _createClass(UsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UsersComponent;
    }();

    UsersComponent.ɵfac = function UsersComponent_Factory(t) {
      return new (t || UsersComponent)();
    };

    UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UsersComponent,
      selectors: [["eim-users"]],
      decls: 2,
      vars: 0,
      template: function UsersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "users works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-users',
          templateUrl: './users.component.html',
          styleUrls: ['./users.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\11Born2Die11\IdeaProjects\loanlead\web\src\angular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map