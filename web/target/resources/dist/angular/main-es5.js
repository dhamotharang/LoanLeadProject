function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
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


    var _servers_servers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./servers/servers.component */
    "./src/app/servers/servers.component.ts");
    /* harmony import */


    var _workspace_workspace_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./workspace/workspace.component */
    "./src/app/workspace/workspace.component.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/sidebar/sidebar.component.ts");
    /* harmony import */


    var _logs_logs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./logs/logs.component */
    "./src/app/logs/logs.component.ts");
    /* harmony import */


    var _resources_resources_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./resources/resources.component */
    "./src/app/resources/resources.component.ts");
    /* harmony import */


    var _environment_environment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./environment/environment.component */
    "./src/app/environment/environment.component.ts");
    /* harmony import */


    var _ui_navigable_navigable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./ui/navigable/navigable.component */
    "./src/app/ui/navigable/navigable.component.ts");

    var componentRoutes = [{
      path: "workspace"
      /* WORKSPACE */
      ,
      component: _workspace_workspace_component__WEBPACK_IMPORTED_MODULE_3__["WorkspaceComponent"],
      pathMatch: 'full'
    }, {
      path: "servers"
      /* SERVERS */
      ,
      component: _servers_servers_component__WEBPACK_IMPORTED_MODULE_2__["ServersComponent"],
      pathMatch: 'full'
    }, {
      path: "resources"
      /* RESOURCES */
      ,
      component: _resources_resources_component__WEBPACK_IMPORTED_MODULE_6__["ResourcesComponent"],
      pathMatch: 'full'
    }, {
      path: "sidebar"
      /* SIDEBAR */
      ,
      component: _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
      pathMatch: 'full'
    }, {
      path: "logs"
      /* LOGS */
      ,
      component: _logs_logs_component__WEBPACK_IMPORTED_MODULE_5__["LogsComponent"],
      pathMatch: 'full'
    }, {
      path: "env"
      /* ENVIRONMENT_SETTINGS */
      ,
      component: _environment_environment_component__WEBPACK_IMPORTED_MODULE_7__["EnvironmentComponent"],
      pathMatch: 'full'
    }];
    var navRoutes = [{
      path: "nav"
      /* NAV */
      ,
      component: _ui_navigable_navigable_component__WEBPACK_IMPORTED_MODULE_8__["NavigableComponent"],
      children: [{
        path: '',
        redirectTo: "workspace"
        /* WORKSPACE */
        ,
        pathMatch: 'full'
      }].concat(componentRoutes)
    }];
    var routes = [{
      path: '',
      redirectTo: "nav"
      /* NAV */
      ,
      pathMatch: 'full'
    }].concat(navRoutes, componentRoutes);

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
      selectors: [["eim-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["[_nghost-%COMP%] {\n  display: grid;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFwxMUJvcm4yRGllMTFcXElkZWFQcm9qZWN0c1xcbG9hbmxlYWRcXHdlYlxcc3JjXFxhbmd1bGFyL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-root',
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


    var _workspace_workspace_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./workspace/workspace.module */
    "./src/app/workspace/workspace.module.ts");
    /* harmony import */


    var _servers_servers_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./servers/servers.module */
    "./src/app/servers/servers.module.ts");
    /* harmony import */


    var _resources_resources_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./resources/resources.module */
    "./src/app/resources/resources.module.ts");
    /* harmony import */


    var _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./sidebar/sidebar.module */
    "./src/app/sidebar/sidebar.module.ts");
    /* harmony import */


    var _logs_logs_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./logs/logs.module */
    "./src/app/logs/logs.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _environment_environment_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./environment/environment.module */
    "./src/app/environment/environment.module.ts");

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
      providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _workspace_workspace_module__WEBPACK_IMPORTED_MODULE_4__["WorkspaceModule"], _servers_servers_module__WEBPACK_IMPORTED_MODULE_5__["ServersModule"], _resources_resources_module__WEBPACK_IMPORTED_MODULE_6__["ResourcesModule"], _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_7__["SidebarModule"], _environment_environment_module__WEBPACK_IMPORTED_MODULE_11__["EnvironmentModule"], _logs_logs_module__WEBPACK_IMPORTED_MODULE_8__["LogsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _workspace_workspace_module__WEBPACK_IMPORTED_MODULE_4__["WorkspaceModule"], _servers_servers_module__WEBPACK_IMPORTED_MODULE_5__["ServersModule"], _resources_resources_module__WEBPACK_IMPORTED_MODULE_6__["ResourcesModule"], _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_7__["SidebarModule"], _environment_environment_module__WEBPACK_IMPORTED_MODULE_11__["EnvironmentModule"], _logs_logs_module__WEBPACK_IMPORTED_MODULE_8__["LogsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _workspace_workspace_module__WEBPACK_IMPORTED_MODULE_4__["WorkspaceModule"], _servers_servers_module__WEBPACK_IMPORTED_MODULE_5__["ServersModule"], _resources_resources_module__WEBPACK_IMPORTED_MODULE_6__["ResourcesModule"], _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_7__["SidebarModule"], _environment_environment_module__WEBPACK_IMPORTED_MODULE_11__["EnvironmentModule"], _logs_logs_module__WEBPACK_IMPORTED_MODULE_8__["LogsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]],
          providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/services/components/component-registry.service.ts":
  /*!************************************************************************!*\
    !*** ./src/app/core/services/components/component-registry.service.ts ***!
    \************************************************************************/

  /*! exports provided: ComponentRegistryService */

  /***/
  function srcAppCoreServicesComponentsComponentRegistryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentRegistryService", function () {
      return ComponentRegistryService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/elements */
    "./node_modules/@angular/elements/__ivy_ngcc__/fesm2015/elements.js");

    var ComponentRegistryService =
    /*#__PURE__*/
    function () {
      function ComponentRegistryService(injector) {
        _classCallCheck(this, ComponentRegistryService);

        this.injector = injector;
      }

      _createClass(ComponentRegistryService, [{
        key: "define",
        value: function define(tag, type) {
          var component = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_1__["createCustomElement"])(type, {
            injector: this.injector
          });
          customElements.define(tag, component);
        }
      }]);

      return ComponentRegistryService;
    }();

    ComponentRegistryService.ɵfac = function ComponentRegistryService_Factory(t) {
      return new (t || ComponentRegistryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
    };

    ComponentRegistryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ComponentRegistryService,
      factory: ComponentRegistryService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentRegistryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/services/components/dynamic-component-factory.service.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/core/services/components/dynamic-component-factory.service.ts ***!
    \*******************************************************************************/

  /*! exports provided: DynamicComponentFactoryService */

  /***/
  function srcAppCoreServicesComponentsDynamicComponentFactoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicComponentFactoryService", function () {
      return DynamicComponentFactoryService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_dynamic_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../model/dynamic-component */
    "./src/app/model/dynamic-component.ts");
    /* harmony import */


    var _ui_components_custom_tooltip_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../ui/components/custom-tooltip/custom-tooltip.component */
    "./src/app/ui/components/custom-tooltip/custom-tooltip.component.ts");
    /* harmony import */


    var _ui_components_external_window_external_window_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../ui/components/external-window/external-window.component */
    "./src/app/ui/components/external-window/external-window.component.ts");

    var DynamicComponentFactoryService =
    /*#__PURE__*/
    function () {
      function DynamicComponentFactoryService(componentFactoryResolver, appRef, injector) {
        _classCallCheck(this, DynamicComponentFactoryService);

        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
      }

      _createClass(DynamicComponentFactoryService, [{
        key: "createComponent",
        value: function createComponent(action) {
          switch (action) {
            case _model_dynamic_component__WEBPACK_IMPORTED_MODULE_1__["DynamicComponentType"].POPUP:
              return this.create(_ui_components_custom_tooltip_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_2__["CustomTooltipComponent"]);

            case _model_dynamic_component__WEBPACK_IMPORTED_MODULE_1__["DynamicComponentType"].WINDOW:
              return this.create(_ui_components_external_window_external_window_component__WEBPACK_IMPORTED_MODULE_3__["ExternalWindowComponent"]);

            default:
              console.log('unknown type ' + action);
          }

          return null;
        }
      }, {
        key: "create",
        value: function create(type) {
          var _this = this;

          var componentFactory = this.componentFactoryResolver.resolveComponentFactory(type);
          var compRef = componentFactory.create(this.injector);
          this.appendToBody(compRef);
          compRef.instance.hide.subscribe(function () {
            return _this.destroy(compRef);
          });
          return compRef;
        }
      }, {
        key: "destroy",
        value: function destroy(componentRef) {
          this.removeFromBody(componentRef);
          componentRef.destroy();
        }
      }, {
        key: "appendToBody",
        value: function appendToBody(componentRef) {
          this.appRef.attachView(componentRef.hostView);
          var domElem = DynamicComponentFactoryService.getDom(componentRef);
          document.body.appendChild(domElem);
        }
      }, {
        key: "removeFromBody",
        value: function removeFromBody(componentRef) {
          this.appRef.detachView(componentRef.hostView);
          var domElem = DynamicComponentFactoryService.getDom(componentRef);
          document.body.removeChild(domElem);
        }
      }], [{
        key: "getDom",
        value: function getDom(componentRef) {
          // Get DOM element from component
          return componentRef.hostView.rootNodes[0];
        }
      }]);

      return DynamicComponentFactoryService;
    }();

    DynamicComponentFactoryService.ɵfac = function DynamicComponentFactoryService_Factory(t) {
      return new (t || DynamicComponentFactoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
    };

    DynamicComponentFactoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DynamicComponentFactoryService,
      factory: DynamicComponentFactoryService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicComponentFactoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/services/components/eim-ui.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/core/services/components/eim-ui.service.ts ***!
    \************************************************************/

  /*! exports provided: EimUiService */

  /***/
  function srcAppCoreServicesComponentsEimUiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EimUiService", function () {
      return EimUiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _dynamic_component_factory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dynamic-component-factory.service */
    "./src/app/core/services/components/dynamic-component-factory.service.ts");

    var EimUiService =
    /*#__PURE__*/
    function () {
      function EimUiService(dynamicComponentFactoryService) {
        _classCallCheck(this, EimUiService);

        this.dynamicComponentFactoryService = dynamicComponentFactoryService;
      }

      _createClass(EimUiService, [{
        key: "createComponent",
        value: function createComponent(data) {
          var component = this.dynamicComponentFactoryService.createComponent(data.action);
          component.instance.config = JSON.parse(JSON.stringify(data));
          component.instance.show();
          return component.instance;
        }
      }]);

      return EimUiService;
    }();

    EimUiService.ɵfac = function EimUiService_Factory(t) {
      return new (t || EimUiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_dynamic_component_factory_service__WEBPACK_IMPORTED_MODULE_1__["DynamicComponentFactoryService"]));
    };

    EimUiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EimUiService,
      factory: EimUiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EimUiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _dynamic_component_factory_service__WEBPACK_IMPORTED_MODULE_1__["DynamicComponentFactoryService"]
        }];
      }, null);
    })();
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
        key: "getNavigation",
        value: function getNavigation() {
          return this.get("assets/mock/navigation.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
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
        key: "getResources",
        value: function getResources() {
          return this.get("/eim/api/resources").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data.data;
          }));
        }
      }, {
        key: "getOptionalResources",
        value: function getOptionalResources() {
          return this.get("assets/mock/optional-resources.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
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
  "./src/app/environment/environment-settings/environment-settings.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/environment/environment-settings/environment-settings.component.ts ***!
    \************************************************************************************/

  /*! exports provided: EnvironmentSettingsComponent */

  /***/
  function srcAppEnvironmentEnvironmentSettingsEnvironmentSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnvironmentSettingsComponent", function () {
      return EnvironmentSettingsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EnvironmentSettingsComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function EnvironmentSettingsComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Specify Your Environment details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EnvironmentSettingsComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Environment Settings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "USR");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        active: a0
      };
    };

    function EnvironmentSettingsComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EnvironmentSettingsComponent_div_18_Template_div_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69);

          var c_r67 = ctx.$implicit;

          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r68.selectColor(c_r67);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var c_r67 = ctx.$implicit;

        var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", c_r67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, c_r67 == ctx_r59.activeColor));
      }
    }

    function EnvironmentSettingsComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Environment Configuration Settings(Config.xml)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EnvironmentSettingsComponent_div_19_Template_button_click_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r70.exportConfig();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Export");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EnvironmentSettingsComponent_div_19_Template_button_click_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r72.importConfig();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Import");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Environment Logs (all available)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EnvironmentSettingsComponent_div_19_Template_button_click_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r73.exportEnvironmentLogs();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Export");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EnvironmentSettingsComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Uninstall all Products");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EnvironmentSettingsComponent_div_20_Template_button_click_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75);

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r74.uninstallAllProducts();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Uninstall");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Remove Environment");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EnvironmentSettingsComponent_div_20_Template_button_click_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75);

          var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r76.deleteEnvironment();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EnvironmentSettingsComponent_ng_container_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function EnvironmentSettingsComponent_ng_template_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EnvironmentSettingsComponent_ng_template_23_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78);

          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r77.saveClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EnvironmentSettingsComponent_ng_template_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EnvironmentSettingsComponent_ng_template_25_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80);

          var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r79.saveClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EnvironmentSettingsComponent_ng_template_25_Template_button_click_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80);

          var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r81.cancelClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var EnvironmentSettingsComponent =
    /*#__PURE__*/
    function () {
      function EnvironmentSettingsComponent(location) {
        _classCallCheck(this, EnvironmentSettingsComponent);

        this.location = location;
        this.colors = ['#B4C7E7', '#C5E0B4', '#FFE699', '#DBDBDB', '#F8CBAD', '#FF0000'];
        this.activeColor = this.colors[0];
      }

      _createClass(EnvironmentSettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "isEnvironmentConfigured",
        value: function isEnvironmentConfigured() {
          return true;
        }
      }, {
        key: "selectColor",
        value: function selectColor(c) {
          this.activeColor = c;
        }
      }, {
        key: "exportConfig",
        value: function exportConfig() {
          console.log("export config");
        }
      }, {
        key: "importConfig",
        value: function importConfig() {
          console.log("import config");
        }
      }, {
        key: "exportEnvironmentLogs",
        value: function exportEnvironmentLogs() {
          console.log("export environment logs");
        }
      }, {
        key: "uninstallAllProducts",
        value: function uninstallAllProducts() {
          console.log('uninstall products');
        }
      }, {
        key: "deleteEnvironment",
        value: function deleteEnvironment() {
          console.log('delete environment');
        }
      }, {
        key: "saveClick",
        value: function saveClick() {
          console.log('save click');
        }
      }, {
        key: "cancelClick",
        value: function cancelClick() {
          this.location.back();
        }
      }]);

      return EnvironmentSettingsComponent;
    }();

    EnvironmentSettingsComponent.ɵfac = function EnvironmentSettingsComponent_Factory(t) {
      return new (t || EnvironmentSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]));
    };

    EnvironmentSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EnvironmentSettingsComponent,
      selectors: [["eim-environment-settings"]],
      decls: 27,
      vars: 9,
      consts: [[1, "header"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["firstTimeLoginHeader", ""], ["usualHeader", ""], [1, "content", "row", "row-space-between"], [1, "section"], [1, "field"], [1, "label"], [1, "value"], ["placeholder", "Enter your Environment Name", "type", "text"], [1, "row", "row-space-between"], ["class", "color", 3, "ngClass", "backgroundColor", "click", 4, "ngFor", "ngForOf"], ["class", "section", 4, "ngIf"], [1, "footer", "row"], ["firstTimeLoginFooter", ""], ["usualFooter", ""], [1, "first-time-login"], [1, "color", 3, "ngClass", "click"], [1, "row"], [1, "button", "action-button", "main", 3, "click"], [1, "button", "action-button", "secondary", 3, "click"], [1, "button", "action-button", "uninstall-button", 3, "click"], [1, "button", "action-button", "delete-button", 3, "click"], [1, "action-button", "main", 3, "click"], [1, "action-button", "secondary", 3, "click"]],
      template: function EnvironmentSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EnvironmentSettingsComponent_ng_container_1_Template, 1, 0, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EnvironmentSettingsComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EnvironmentSettingsComponent_ng_template_4_Template, 4, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Environment Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Environment Color");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EnvironmentSettingsComponent_div_18_Template, 1, 5, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EnvironmentSettingsComponent_div_19_Template, 17, 0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EnvironmentSettingsComponent_div_20_Template, 15, 0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, EnvironmentSettingsComponent_ng_container_22_Template, 1, 0, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, EnvironmentSettingsComponent_ng_template_23_Template, 2, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, EnvironmentSettingsComponent_ng_template_25_Template, 4, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

          var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isEnvironmentConfigured())("ngIfThen", _r55)("ngIfElse", _r57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEnvironmentConfigured());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEnvironmentConfigured());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isEnvironmentConfigured())("ngIfThen", _r63)("ngIfElse", _r65);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: ["[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 20px 30px;\n}\n\n.header[_ngcontent-%COMP%] {\n  background-color: #F2F2F2;\n}\n\n.first-time-login[_ngcontent-%COMP%] {\n  padding: 20px 40px;\n  color: #616d85;\n  font-size: 24px;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-flex: 1;\n          flex: 1;\n  overflow: auto;\n  margin: 0 30px;\n}\n\n.content[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%] {\n  width: 350px;\n}\n\n.content[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  height: 70px;\n}\n\n.content[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #7f7f7f;\n}\n\n.content[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: -webkit-box;\n  display: flex;\n}\n\n.content[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 7px;\n}\n\n.content[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.color[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n}\n\n.color.active[_ngcontent-%COMP%] {\n  border: 4px solid black;\n}\n\n.button[_ngcontent-%COMP%] {\n  width: 100px;\n  margin-right: 10px;\n}\n\n.uninstall-button[_ngcontent-%COMP%] {\n  background-color: #dfa47c;\n  border: 1px solid #c55a11;\n  color: white;\n}\n\n.delete-button[_ngcontent-%COMP%] {\n  background-color: #ff7373;\n  border: 1px solid #ff0000;\n  color: white;\n}\n\n.footer[_ngcontent-%COMP%] {\n  border-top: 1px solid gray;\n  padding: 20px 20px 0 20px;\n}\n\n.footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW52aXJvbm1lbnQvZW52aXJvbm1lbnQtc2V0dGluZ3MvQzpcXFVzZXJzXFwxMUJvcm4yRGllMTFcXElkZWFQcm9qZWN0c1xcbG9hbmxlYWRcXHdlYlxcc3JjXFxhbmd1bGFyL3NyY1xcYXBwXFxlbnZpcm9ubWVudFxcZW52aXJvbm1lbnQtc2V0dGluZ3NcXGVudmlyb25tZW50LXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lbnZpcm9ubWVudC9lbnZpcm9ubWVudC1zZXR0aW5ncy9lbnZpcm9ubWVudC1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNDRjs7QURDRTtFQUNFLFlBQUE7QUNDSjs7QURDSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0NOOztBRENNO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNDUjs7QURFTTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDQVI7O0FERVE7RUFDRSxZQUFBO0FDQVY7O0FER1E7RUFDRSxtQkFBQTtVQUFBLE9BQUE7QUNEVjs7QURRQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0xGOztBRFFBO0VBQ0UsdUJBQUE7QUNMRjs7QURRQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0xGOztBRFFBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNMRjs7QURRQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDTEY7O0FEUUE7RUFDRSwwQkFBQTtFQUNBLHlCQUFBO0FDTEY7O0FET0U7RUFDRSxrQkFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvZW52aXJvbm1lbnQvZW52aXJvbm1lbnQtc2V0dGluZ3MvZW52aXJvbm1lbnQtc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcclxufVxyXG5cclxuLmZpcnN0LXRpbWUtbG9naW4ge1xyXG4gIHBhZGRpbmc6IDIwcHggNDBweDtcclxuICBjb2xvcjogcmdiKDk3LCAxMDksIDEzMyk7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXg6IDE7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgbWFyZ2luOiAwIDMwcHg7XHJcblxyXG4gIC5zZWN0aW9uIHtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuXHJcbiAgICAuZmllbGQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICBoZWlnaHQ6IDcwcHg7XHJcblxyXG4gICAgICAubGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogcmdiKDEyNywgMTI3LCAxMjcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudmFsdWUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPiAqIHtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY29sb3Ige1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jb2xvci5hY3RpdmUge1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4udW5pbnN0YWxsLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmYTQ3YztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYzU1YTExO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmRlbGV0ZS1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjczNzM7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmMDAwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xyXG4gIHBhZGRpbmc6IDIwcHggMjBweCAwIDIwcHg7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcbn1cblxuLmZpcnN0LXRpbWUtbG9naW4ge1xuICBwYWRkaW5nOiAyMHB4IDQwcHg7XG4gIGNvbG9yOiAjNjE2ZDg1O1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1hcmdpbjogMCAzMHB4O1xufVxuLmNvbnRlbnQgLnNlY3Rpb24ge1xuICB3aWR0aDogMzUwcHg7XG59XG4uY29udGVudCAuc2VjdGlvbiAuZmllbGQge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBoZWlnaHQ6IDcwcHg7XG59XG4uY29udGVudCAuc2VjdGlvbiAuZmllbGQgLmxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzdmN2Y3Zjtcbn1cbi5jb250ZW50IC5zZWN0aW9uIC5maWVsZCAudmFsdWUge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNvbnRlbnQgLnNlY3Rpb24gLmZpZWxkIC52YWx1ZSBpbnB1dCB7XG4gIHBhZGRpbmc6IDdweDtcbn1cbi5jb250ZW50IC5zZWN0aW9uIC5maWVsZCAudmFsdWUgPiAqIHtcbiAgZmxleDogMTtcbn1cblxuLmNvbG9yIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29sb3IuYWN0aXZlIHtcbiAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XG59XG5cbi5idXR0b24ge1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnVuaW5zdGFsbC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZhNDdjO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzU1YTExO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kZWxldGUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzM3MztcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmMDAwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZm9vdGVyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAwIDIwcHg7XG59XG4uZm9vdGVyIGJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnvironmentSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-environment-settings',
          templateUrl: './environment-settings.component.html',
          styleUrls: ['./environment-settings.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/environment/environment.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/environment/environment.component.ts ***!
    \******************************************************/

  /*! exports provided: EnvironmentComponent */

  /***/
  function srcAppEnvironmentEnvironmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnvironmentComponent", function () {
      return EnvironmentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environment_settings_environment_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environment-settings/environment-settings.component */
    "./src/app/environment/environment-settings/environment-settings.component.ts");

    var EnvironmentComponent =
    /*#__PURE__*/
    function () {
      function EnvironmentComponent() {
        _classCallCheck(this, EnvironmentComponent);
      }

      _createClass(EnvironmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EnvironmentComponent;
    }();

    EnvironmentComponent.ɵfac = function EnvironmentComponent_Factory(t) {
      return new (t || EnvironmentComponent)();
    };

    EnvironmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EnvironmentComponent,
      selectors: [["eim-environment"]],
      decls: 1,
      vars: 0,
      template: function EnvironmentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "eim-environment-settings");
        }
      },
      directives: [_environment_settings_environment_settings_component__WEBPACK_IMPORTED_MODULE_1__["EnvironmentSettingsComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vudmlyb25tZW50L2Vudmlyb25tZW50LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnvironmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-environment',
          templateUrl: './environment.component.html',
          styleUrls: ['./environment.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/environment/environment.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/environment/environment.module.ts ***!
    \***************************************************/

  /*! exports provided: EnvironmentModule */

  /***/
  function srcAppEnvironmentEnvironmentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnvironmentModule", function () {
      return EnvironmentModule;
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


    var _environment_settings_environment_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./environment-settings/environment-settings.component */
    "./src/app/environment/environment-settings/environment-settings.component.ts");
    /* harmony import */


    var _ui_ui_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../ui/ui.module */
    "./src/app/ui/ui.module.ts");
    /* harmony import */


    var _environment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environment.component */
    "./src/app/environment/environment.component.ts");
    /* harmony import */


    var _core_services_components_component_registry_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../core/services/components/component-registry.service */
    "./src/app/core/services/components/component-registry.service.ts");

    var EnvironmentModule = function EnvironmentModule(componentRegistryService) {
      _classCallCheck(this, EnvironmentModule);

      this.componentRegistryService = componentRegistryService;
      this.componentRegistryService.define('eim-environment-settings', _environment_settings_environment_settings_component__WEBPACK_IMPORTED_MODULE_2__["EnvironmentSettingsComponent"]);
    };

    EnvironmentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EnvironmentModule
    });
    EnvironmentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EnvironmentModule_Factory(t) {
        return new (t || EnvironmentModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_components_component_registry_service__WEBPACK_IMPORTED_MODULE_5__["ComponentRegistryService"]));
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ui_ui_module__WEBPACK_IMPORTED_MODULE_3__["UiModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EnvironmentModule, {
        declarations: [_environment_settings_environment_settings_component__WEBPACK_IMPORTED_MODULE_2__["EnvironmentSettingsComponent"], _environment_component__WEBPACK_IMPORTED_MODULE_4__["EnvironmentComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ui_ui_module__WEBPACK_IMPORTED_MODULE_3__["UiModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnvironmentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_environment_settings_environment_settings_component__WEBPACK_IMPORTED_MODULE_2__["EnvironmentSettingsComponent"], _environment_component__WEBPACK_IMPORTED_MODULE_4__["EnvironmentComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ui_ui_module__WEBPACK_IMPORTED_MODULE_3__["UiModule"]]
        }]
      }], function () {
        return [{
          type: _core_services_components_component_registry_service__WEBPACK_IMPORTED_MODULE_5__["ComponentRegistryService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/logs/logs.component.ts":
  /*!****************************************!*\
    !*** ./src/app/logs/logs.component.ts ***!
    \****************************************/

  /*! exports provided: LogsComponent */

  /***/
  function srcAppLogsLogsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogsComponent", function () {
      return LogsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LogsComponent =
    /*#__PURE__*/
    function () {
      function LogsComponent() {
        _classCallCheck(this, LogsComponent);
      }

      _createClass(LogsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.waitConfigs().then(function (configdata) {
            _this2._config = configdata;

            _this2.startInterval();
          });
        }
      }, {
        key: "startInterval",
        value: function startInterval() {
          var _this3 = this;

          setInterval(function () {
            _this3.config = _this3.config ? undefined : _this3._config;
            window.parent.postMessage(_this3.config, window.location.origin);
          }, 1000);
        }
      }, {
        key: "waitConfigs",
        value: function waitConfigs() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return", new Promise(function (resolve) {
                      var interval = setInterval(function () {
                        var _config = _this4.getWindowConfigs();

                        if (_config) {
                          clearInterval(interval);
                          resolve(_config);
                        }
                      }, 100);
                    }));

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }, {
        key: "getWindowConfigs",
        value: function getWindowConfigs() {
          return window["configs"];
        }
      }]);

      return LogsComponent;
    }();

    LogsComponent.ɵfac = function LogsComponent_Factory(t) {
      return new (t || LogsComponent)();
    };

    LogsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LogsComponent,
      selectors: [["eim-logs"]],
      decls: 28,
      vars: 0,
      template: function LogsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "logs works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "logs works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "logs works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "logs works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "logs works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "logs works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "logs works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "logs works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "logs works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "logs works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "logs works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "logs works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "logs works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "logs works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      styles: ["[_nghost-%COMP%] {\n  overflow: auto;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 100px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9ncy9DOlxcVXNlcnNcXDExQm9ybjJEaWUxMVxcSWRlYVByb2plY3RzXFxsb2FubGVhZFxcd2ViXFxzcmNcXGFuZ3VsYXIvc3JjXFxhcHBcXGxvZ3NcXGxvZ3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ3MvbG9ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ3MvbG9ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxucCB7XHJcbiAgbWFyZ2luOiAxMDBweCAwO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbnAge1xuICBtYXJnaW46IDEwMHB4IDA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LogsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'eim-logs',
          templateUrl: './logs.component.html',
          styleUrls: ['./logs.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/logs/logs.module.ts":
  /*!*************************************!*\
    !*** ./src/app/logs/logs.module.ts ***!
    \*************************************/

  /*! exports provided: LogsModule */

  /***/
  function srcAppLogsLogsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogsModule", function () {
      return LogsModule;
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


    var _logs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./logs.component */
    "./src/app/logs/logs.component.ts");

    var LogsModule = function LogsModule() {
      _classCallCheck(this, LogsModule);
    };

    LogsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LogsModule
    });
    LogsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LogsModule_Factory(t) {
        return new (t || LogsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LogsModule, {
        declarations: [_logs_component__WEBPACK_IMPORTED_MODULE_2__["LogsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_logs_component__WEBPACK_IMPORTED_MODULE_2__["LogsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/model/config-model.ts":
  /*!***************************************!*\
    !*** ./src/app/model/config-model.ts ***!
    \***************************************/

  /*! exports provided: NavbarActionType, Direction, ComponentType */

  /***/
  function srcAppModelConfigModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarActionType", function () {
      return NavbarActionType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Direction", function () {
      return Direction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentType", function () {
      return ComponentType;
    });

    var EnvSettingsModel = function EnvSettingsModel() {
      _classCallCheck(this, EnvSettingsModel);
    };

    var NavbarActionType;

    (function (NavbarActionType) {
      NavbarActionType["LOGOUT"] = "LOGOUT";
      NavbarActionType["ENVIRONMENT_SETTINGS"] = "ENVIRONMENT_SETTINGS";
    })(NavbarActionType || (NavbarActionType = {}));

    var Direction;

    (function (Direction) {
      Direction["VERTICAL"] = "VERTICAL";
      Direction["HORIZONTAL"] = "HORIZONTAL";
    })(Direction || (Direction = {}));

    var ComponentType;

    (function (ComponentType) {
      ComponentType["IFRAME"] = "IFRAME";
      ComponentType["WEB_COMPONENT"] = "WEB_COMPONENT";
      ComponentType["HTML"] = "HTML";
      ComponentType["SPLIT"] = "SPLIT";
      ComponentType["EDITOR"] = "EDITOR";
    })(ComponentType || (ComponentType = {}));
    /***/

  },

  /***/
  "./src/app/model/dynamic-component.ts":
  /*!********************************************!*\
    !*** ./src/app/model/dynamic-component.ts ***!
    \********************************************/

  /*! exports provided: DynamicComponentType */

  /***/
  function srcAppModelDynamicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicComponentType", function () {
      return DynamicComponentType;
    });

    var DynamicComponentType;

    (function (DynamicComponentType) {
      DynamicComponentType["POPUP"] = "POPUP";
      DynamicComponentType["WINDOW"] = "WINDOW";
    })(DynamicComponentType || (DynamicComponentType = {}));
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
    })(HTTPMethod || (HTTPMethod = {}));
    /***/

  },

  /***/
  "./src/app/resources/add-resource/add-resource.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/resources/add-resource/add-resource.component.ts ***!
    \******************************************************************/

  /*! exports provided: AddResourceComponent */

  /***/
  function srcAppResourcesAddResourceAddResourceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddResourceComponent", function () {
      return AddResourceComponent;
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


    var primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! primeng */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function AddResourceComponent_div_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-checkbox", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddResourceComponent_div_0_div_1_Template_p_checkbox_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r50.selectedResources = $event;
        })("onChange", function AddResourceComponent_div_0_div_1_Template_p_checkbox_onChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r52.resourceSelect();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddResourceComponent_div_0_div_1_Template_label_click_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

          var resource_r49 = ctx.$implicit;

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r53.resourceClick(resource_r49);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var resource_r49 = ctx.$implicit;

        var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", resource_r49.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r48.selectedResources);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](resource_r49.name);
      }
    }

    function AddResourceComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddResourceComponent_div_0_div_1_Template, 4, 3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var resources_r47 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", resources_r47);
      }
    }

    function AddResourceComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r45.description);
      }
    }

    function AddResourceComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Click on any label on the left to get help");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AddResourceComponent =
    /*#__PURE__*/
    function () {
      function AddResourceComponent() {
        _classCallCheck(this, AddResourceComponent);

        this.configChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(AddResourceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('this config', this.configs);
        }
      }, {
        key: "resourceClick",
        value: function resourceClick(resource) {
          this.description = resource.description;
        }
      }, {
        key: "resourceSelect",
        value: function resourceSelect() {
          var _this5 = this;

          this.configs.forEach(function (r) {
            r.optionalSelected = _this5.selectedResources.includes(r.id);
          });
          var data = this.configs.map(function (e) {
            return {
              id: e.id,
              optionalSelected: e.optionalSelected
            };
          });
          this.configChange.emit(data);
        }
      }]);

      return AddResourceComponent;
    }();

    AddResourceComponent.ɵfac = function AddResourceComponent_Factory(t) {
      return new (t || AddResourceComponent)();
    };

    AddResourceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddResourceComponent,
      selectors: [["eim-add-resource"]],
      inputs: {
        configs: "configs"
      },
      outputs: {
        configChange: "configChange"
      },
      decls: 3,
      vars: 3,
      consts: [["class", "panel left-panel", 4, "ngIf"], ["class", "panel description-panel", 4, "ngIf"], ["class", "panel description-panel middle", 4, "ngIf"], [1, "panel", "left-panel"], ["class", "resource", 4, "ngFor", "ngForOf"], [1, "resource"], ["name", "resources", 3, "value", "ngModel", "ngModelChange", "onChange"], [1, "pointer", 3, "click"], [1, "panel", "description-panel"], [1, "panel", "description-panel", "middle"]],
      template: function AddResourceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddResourceComponent_div_0_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddResourceComponent_div_1_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddResourceComponent_div_2_Template, 2, 0, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.configs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.description);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], primeng__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: ["[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  overflow: hidden;\n}\n\n.panel[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1;\n  padding: 10px;\n}\n\n.resource[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 5px;\n}\n\n.resource[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.description-panel[_ngcontent-%COMP%] {\n  white-space: pre-line;\n  overflow: auto;\n}\n\n.left-panel[_ngcontent-%COMP%] {\n  background: #f2f2f2;\n}\n\n.middle[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzb3VyY2VzL2FkZC1yZXNvdXJjZS9DOlxcVXNlcnNcXDExQm9ybjJEaWUxMVxcSWRlYVByb2plY3RzXFxsb2FubGVhZFxcd2ViXFxzcmNcXGFuZ3VsYXIvc3JjXFxhcHBcXHJlc291cmNlc1xcYWRkLXJlc291cmNlXFxhZGQtcmVzb3VyY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Jlc291cmNlcy9hZGQtcmVzb3VyY2UvYWRkLXJlc291cmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxpQkFBQTtBQ0NKOztBREdBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDQUY7O0FER0E7RUFDRSxtQkFBQTtBQ0FGOztBREdBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3Jlc291cmNlcy9hZGQtcmVzb3VyY2UvYWRkLXJlc291cmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnBhbmVsIHtcclxuICBmbGV4OiAxO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5yZXNvdXJjZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuXHJcbiAgbGFiZWwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZGVzY3JpcHRpb24tcGFuZWwge1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmxlZnQtcGFuZWwge1xyXG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbn1cclxuXHJcbi5taWRkbGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wYW5lbCB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5yZXNvdXJjZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5yZXNvdXJjZSBsYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uZGVzY3JpcHRpb24tcGFuZWwge1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ubGVmdC1wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG59XG5cbi5taWRkbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddResourceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-add-resource',
          templateUrl: './add-resource.component.html',
          styleUrls: ['./add-resource.component.scss']
        }]
      }], function () {
        return [];
      }, {
        configs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        configChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/resources/resources.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/resources/resources.component.ts ***!
    \**************************************************/

  /*! exports provided: ResourcesComponent */

  /***/
  function srcAppResourcesResourcesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourcesComponent", function () {
      return ResourcesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_ui_components_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../model/ui/components/footer */
    "./src/app/model/ui/components/footer.ts");
    /* harmony import */


    var _model_config_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../model/config-model */
    "./src/app/model/config-model.ts");
    /* harmony import */


    var _model_dynamic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../model/dynamic-component */
    "./src/app/model/dynamic-component.ts");
    /* harmony import */


    var _core_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../core/services/data.service */
    "./src/app/core/services/data.service.ts");
    /* harmony import */


    var _core_services_components_eim_ui_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../core/services/components/eim-ui.service */
    "./src/app/core/services/components/eim-ui.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ui_pipes_ng_for_filter_some_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../ui/pipes/ng-for-filter-some.pipe */
    "./src/app/ui/pipes/ng-for-filter-some.pipe.ts");

    function ResourcesComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourcesComponent_div_8_Template_div_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var resource_r6 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.configure(resource_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var resource_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", resource_r6.properties == null ? null : resource_r6.properties.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](resource_r6.name);
      }
    }

    var _c0 = function _c0() {
      return {
        key: "optional",
        value: false
      };
    };

    var _c1 = function _c1() {
      return {
        key: "optionalSelected",
        value: true
      };
    };

    var _c2 = function _c2(a0, a1) {
      return [a0, a1];
    };

    var ResourcesComponent =
    /*#__PURE__*/
    function () {
      function ResourcesComponent(dataService, eimUiService) {
        _classCallCheck(this, ResourcesComponent);

        this.dataService = dataService;
        this.eimUiService = eimUiService;
      }

      _createClass(ResourcesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.dataService.getResources().subscribe(function (data) {
            _this6.resources = data.map(function (e) {
              return e["Resource"];
            });
            console.log(_this6.resources);
          });
        }
      }, {
        key: "addResourceClick",
        value: function addResourceClick() {
          var opResources = this.resources.filter(function (el) {
            return el.optional && !el.optionalSelected;
          });
          this.showPopup(opResources);
        }
      }, {
        key: "configure",
        value: function configure(resource) {
          var action = {
            method: _model_ui_components_footer__WEBPACK_IMPORTED_MODULE_1__["HTTPMethod"].PATCH,
            url: '/resource/' + resource.id
          };
          var e = {
            action: _model_dynamic_component__WEBPACK_IMPORTED_MODULE_3__["DynamicComponentType"].WINDOW,
            header: {
              caption: resource.name,
              closeIcon: true
            },
            footer: this.getFooter(action),
            component: {
              type: _model_config_model__WEBPACK_IMPORTED_MODULE_2__["ComponentType"].IFRAME,
              value: resource.uiConfig.value,
              configs: resource.configs
            }
          };
          this.eimUiService.createComponent(e).hide.subscribe(function () {
            console.log('component hide');
          });
        }
      }, {
        key: "showPopup",
        value: function showPopup(data) {
          var e = this.addResourcesActionConfiguration(data);
          this.eimUiService.createComponent(e).hide.subscribe(function () {
            console.log('component hide');
          });
        }
      }, {
        key: "getFooter",
        value: function getFooter(action) {
          return {
            buttons: [{
              type: 'SAVE',
              caption: 'Save',
              disabled: true,
              cls: 'main',
              action: action
            }, {
              type: 'CLOSE',
              caption: 'Cancel',
              cls: 'secondary'
            }]
          };
        }
      }, {
        key: "addResourcesActionConfiguration",
        value: function addResourcesActionConfiguration(data) {
          var action = {
            method: _model_ui_components_footer__WEBPACK_IMPORTED_MODULE_1__["HTTPMethod"].PATCH,
            url: '/resources'
          };
          return {
            action: _model_dynamic_component__WEBPACK_IMPORTED_MODULE_3__["DynamicComponentType"].POPUP,
            target: '#add-resource-action',
            width: '700px',
            height: '500px',
            header: {
              caption: 'Select Optional Resources',
              closeIcon: true
            },
            footer: this.getFooter(action),
            component: {
              type: _model_config_model__WEBPACK_IMPORTED_MODULE_2__["ComponentType"].WEB_COMPONENT,
              value: "eim-add-resource",
              configs: data
            }
          };
        }
      }]);

      return ResourcesComponent;
    }();

    ResourcesComponent.ɵfac = function ResourcesComponent_Factory(t) {
      return new (t || ResourcesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_components_eim_ui_service__WEBPACK_IMPORTED_MODULE_5__["EimUiService"]));
    };

    ResourcesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResourcesComponent,
      selectors: [["eim-resources"]],
      decls: 10,
      vars: 9,
      consts: [[1, "header"], ["id", "add-resource-action", 1, "add-resource", "pointer", "noselect", 3, "click"], [1, "far", "fa-plus-square"], [1, "resources-container"], ["class", "resource pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "resource", "pointer", 3, "click"], ["alt", "", 3, "src"]],
      template: function ResourcesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Resources");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourcesComponent_Template_div_click_3_listener($event) {
            return ctx.addResourceClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ADD OPTIONAL RESOURCE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ResourcesComponent_div_8_Template, 4, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "ngForFilterSome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 1, ctx.resources, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1))));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      pipes: [_ui_pipes_ng_for_filter_some_pipe__WEBPACK_IMPORTED_MODULE_7__["NgForFilterSomePipe"]],
      styles: ["[_nghost-%COMP%] {\n  padding: 10px;\n}\n\n.header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid silver;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  font-size: 20px;\n  -webkit-box-align: baseline;\n          align-items: baseline;\n  color: #7b7b7b;\n}\n\n.header[_ngcontent-%COMP%]   .add-resource[_ngcontent-%COMP%] {\n  margin-left: 50px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.header[_ngcontent-%COMP%]   .add-resource[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #5287d6;\n}\n\n.header[_ngcontent-%COMP%]   .add-resource[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  font-size: 13px;\n}\n\n.resources-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: baseline;\n          align-items: baseline;\n  flex-wrap: wrap;\n}\n\n.resource[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 10px;\n  white-space: nowrap;\n  width: 115px;\n}\n\n.resource[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n}\n\n.resource[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzb3VyY2VzL0M6XFxVc2Vyc1xcMTFCb3JuMkRpZTExXFxJZGVhUHJvamVjdHNcXGxvYW5sZWFkXFx3ZWJcXHNyY1xcYW5ndWxhci9zcmNcXGFwcFxccmVzb3VyY2VzXFxyZXNvdXJjZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Jlc291cmNlcy9yZXNvdXJjZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSwrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtVQUFBLHFCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBRENFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0o7O0FEQ0k7RUFDRSxjQUFBO0FDQ047O0FERUk7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNBTjs7QURLQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLDJCQUFBO1VBQUEscUJBQUE7RUFDQSxlQUFBO0FDRkY7O0FES0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBRElFO0VBQ0UsV0FBQTtBQ0ZKOztBREtFO0VBQ0UsZ0JBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3Jlc291cmNlcy9yZXNvdXJjZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxOTIsIDE5MiwgMTkyKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICBjb2xvcjogIzdiN2I3YjtcclxuXHJcbiAgLmFkZC1yZXNvdXJjZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGkge1xyXG4gICAgICBjb2xvcjogIzUyODdkNjtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5yZXNvdXJjZXMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnJlc291cmNlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3aWR0aDogMTE1cHg7XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHNpbHZlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGNvbG9yOiAjN2I3YjdiO1xufVxuLmhlYWRlciAuYWRkLXJlc291cmNlIHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVhZGVyIC5hZGQtcmVzb3VyY2UgaSB7XG4gIGNvbG9yOiAjNTI4N2Q2O1xufVxuLmhlYWRlciAuYWRkLXJlc291cmNlIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ucmVzb3VyY2VzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ucmVzb3VyY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDEwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAxMTVweDtcbn1cbi5yZXNvdXJjZSBpbWcge1xuICB3aWR0aDogNDBweDtcbn1cbi5yZXNvdXJjZSBzcGFuIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourcesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-resources',
          templateUrl: './resources.component.html',
          styleUrls: ['./resources.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
        }, {
          type: _core_services_components_eim_ui_service__WEBPACK_IMPORTED_MODULE_5__["EimUiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/resources/resources.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/resources/resources.module.ts ***!
    \***********************************************/

  /*! exports provided: ResourcesModule */

  /***/
  function srcAppResourcesResourcesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourcesModule", function () {
      return ResourcesModule;
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


    var _resources_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./resources.component */
    "./src/app/resources/resources.component.ts");
    /* harmony import */


    var _add_resource_add_resource_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-resource/add-resource.component */
    "./src/app/resources/add-resource/add-resource.component.ts");
    /* harmony import */


    var primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng.js");
    /* harmony import */


    var _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../ui/ui.module */
    "./src/app/ui/ui.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ui_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../ui/pipes/pipes.module */
    "./src/app/ui/pipes/pipes.module.ts");
    /* harmony import */


    var _core_services_components_component_registry_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../core/services/components/component-registry.service */
    "./src/app/core/services/components/component-registry.service.ts");

    var ResourcesModule = function ResourcesModule(componentRegistryService) {
      _classCallCheck(this, ResourcesModule);

      this.componentRegistryService = componentRegistryService;
      this.componentRegistryService.define('eim-resources', _resources_component__WEBPACK_IMPORTED_MODULE_2__["ResourcesComponent"]);
      this.componentRegistryService.define('eim-add-resource', _add_resource_add_resource_component__WEBPACK_IMPORTED_MODULE_3__["AddResourceComponent"]);
    };

    ResourcesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ResourcesModule
    });
    ResourcesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ResourcesModule_Factory(t) {
        return new (t || ResourcesModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_components_component_registry_service__WEBPACK_IMPORTED_MODULE_8__["ComponentRegistryService"]));
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng__WEBPACK_IMPORTED_MODULE_4__["MenuModule"], _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__["UiModule"], primeng__WEBPACK_IMPORTED_MODULE_4__["CheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _ui_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResourcesModule, {
        declarations: [_resources_component__WEBPACK_IMPORTED_MODULE_2__["ResourcesComponent"], _add_resource_add_resource_component__WEBPACK_IMPORTED_MODULE_3__["AddResourceComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng__WEBPACK_IMPORTED_MODULE_4__["MenuModule"], _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__["UiModule"], primeng__WEBPACK_IMPORTED_MODULE_4__["CheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _ui_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourcesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_resources_component__WEBPACK_IMPORTED_MODULE_2__["ResourcesComponent"], _add_resource_add_resource_component__WEBPACK_IMPORTED_MODULE_3__["AddResourceComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng__WEBPACK_IMPORTED_MODULE_4__["MenuModule"], _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__["UiModule"], primeng__WEBPACK_IMPORTED_MODULE_4__["CheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _ui_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]]
        }]
      }], function () {
        return [{
          type: _core_services_components_component_registry_service__WEBPACK_IMPORTED_MODULE_8__["ComponentRegistryService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/servers/servers.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/servers/servers.component.ts ***!
    \**********************************************/

  /*! exports provided: ServersComponent */

  /***/
  function srcAppServersServersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServersComponent", function () {
      return ServersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ServersComponent =
    /*#__PURE__*/
    function () {
      function ServersComponent() {
        _classCallCheck(this, ServersComponent);

        this._items = [{
          label: 'Configure',
          icon: 'pi pi-fw pi-cog'
        }, {
          label: 'Open',
          icon: 'pi pi-fw pi-download'
        }, {
          label: 'Undo',
          icon: 'pi pi-fw pi-refresh'
        }];
      }

      _createClass(ServersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServersComponent;
    }();

    ServersComponent.ɵfac = function ServersComponent_Factory(t) {
      return new (t || ServersComponent)();
    };

    ServersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServersComponent,
      selectors: [["eim-servers"]],
      decls: 10,
      vars: 0,
      template: function ServersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " servers works! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " servers works! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " servers works! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " servers works! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " servers works!\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["div[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmVycy9DOlxcVXNlcnNcXDExQm9ybjJEaWUxMVxcSWRlYVByb2plY3RzXFxsb2FubGVhZFxcd2ViXFxzcmNcXGFuZ3VsYXIvc3JjXFxhcHBcXHNlcnZlcnNcXHNlcnZlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlcnZlcnMvc2VydmVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NlcnZlcnMvc2VydmVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuIiwiZGl2IHtcbiAgZm9udC1zaXplOiAyZW07XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-servers',
          templateUrl: './servers.component.html',
          styleUrls: ['./servers.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/servers/servers.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/servers/servers.module.ts ***!
    \*******************************************/

  /*! exports provided: ServersModule */

  /***/
  function srcAppServersServersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServersModule", function () {
      return ServersModule;
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


    var _servers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./servers.component */
    "./src/app/servers/servers.component.ts");
    /* harmony import */


    var _core_services_components_component_registry_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../core/services/components/component-registry.service */
    "./src/app/core/services/components/component-registry.service.ts");

    var ServersModule = function ServersModule(componentRegistryService) {
      _classCallCheck(this, ServersModule);

      this.componentRegistryService = componentRegistryService;
      this.componentRegistryService.define('eim-servers', _servers_component__WEBPACK_IMPORTED_MODULE_2__["ServersComponent"]);
    };

    ServersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ServersModule
    });
    ServersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ServersModule_Factory(t) {
        return new (t || ServersModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_components_component_registry_service__WEBPACK_IMPORTED_MODULE_3__["ComponentRegistryService"]));
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServersModule, {
        declarations: [_servers_component__WEBPACK_IMPORTED_MODULE_2__["ServersComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_servers_component__WEBPACK_IMPORTED_MODULE_2__["ServersComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], function () {
        return [{
          type: _core_services_components_component_registry_service__WEBPACK_IMPORTED_MODULE_3__["ComponentRegistryService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/sidebar/sidebar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/sidebar/sidebar.component.ts ***!
    \**********************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! primeng */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng.js");

    var SidebarComponent =
    /*#__PURE__*/
    function () {
      function SidebarComponent() {
        _classCallCheck(this, SidebarComponent);
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)();
    };

    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["eim-sidebar"]],
      decls: 9,
      vars: 1,
      consts: [[3, "multiple"], ["header", "Products"], ["header", "Configuration Validation"], ["header", "Pre-Deployment Task"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-accordion", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-accordionTab", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p-accordionTab", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p-accordionTab", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p-accordionTab", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", true);
        }
      },
      directives: [primeng__WEBPACK_IMPORTED_MODULE_1__["Accordion"], primeng__WEBPACK_IMPORTED_MODULE_1__["AccordionTab"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-sidebar',
          templateUrl: './sidebar.component.html',
          styleUrls: ['./sidebar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/sidebar/sidebar.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/sidebar/sidebar.module.ts ***!
    \*******************************************/

  /*! exports provided: SidebarModule */

  /***/
  function srcAppSidebarSidebarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarModule", function () {
      return SidebarModule;
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


    var _sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./sidebar.component */
    "./src/app/sidebar/sidebar.component.ts");
    /* harmony import */


    var primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng.js");
    /* harmony import */


    var _core_services_components_component_registry_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../core/services/components/component-registry.service */
    "./src/app/core/services/components/component-registry.service.ts");

    var SidebarModule = function SidebarModule(componentRegistryService) {
      _classCallCheck(this, SidebarModule);

      this.componentRegistryService = componentRegistryService;
      this.componentRegistryService.define('eim-sidebar', _sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]);
    };

    SidebarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SidebarModule
    });
    SidebarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SidebarModule_Factory(t) {
        return new (t || SidebarModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_components_component_registry_service__WEBPACK_IMPORTED_MODULE_4__["ComponentRegistryService"]));
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng__WEBPACK_IMPORTED_MODULE_3__["AccordionModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SidebarModule, {
        declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng__WEBPACK_IMPORTED_MODULE_3__["AccordionModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng__WEBPACK_IMPORTED_MODULE_3__["AccordionModule"]]
        }]
      }], function () {
        return [{
          type: _core_services_components_component_registry_service__WEBPACK_IMPORTED_MODULE_4__["ComponentRegistryService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/components/custom-tooltip/custom-tooltip.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/ui/components/custom-tooltip/custom-tooltip.component.ts ***!
    \**************************************************************************/

  /*! exports provided: CustomTooltipComponent */

  /***/
  function srcAppUiComponentsCustomTooltipCustomTooltipComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomTooltipComponent", function () {
      return CustomTooltipComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../tooltip/tooltip.component */
    "./src/app/ui/components/tooltip/tooltip.component.ts");
    /* harmony import */


    var _external_configuration_external_configuration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../external-configuration/external-configuration.component */
    "./src/app/ui/components/external-configuration/external-configuration.component.ts");

    var CustomTooltipComponent =
    /*#__PURE__*/
    function () {
      function CustomTooltipComponent() {
        _classCallCheck(this, CustomTooltipComponent);

        this.hide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(CustomTooltipComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.panelStyle = {
            width: this.config.width,
            height: this.config.height
          };
        }
      }, {
        key: "show",
        value: function show() {
          this.tooltip.show(null, document.querySelector(this.config.target));
        }
      }]);

      return CustomTooltipComponent;
    }();

    CustomTooltipComponent.ɵfac = function CustomTooltipComponent_Factory(t) {
      return new (t || CustomTooltipComponent)();
    };

    CustomTooltipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CustomTooltipComponent,
      selectors: [["eim-custom-tooltip"]],
      viewQuery: function CustomTooltipComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_1__["TooltipComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tooltip = _t.first);
        }
      },
      inputs: {
        config: "config"
      },
      outputs: {
        hide: "hide"
      },
      decls: 2,
      vars: 3,
      consts: [[3, "hide"], [3, "config", "hide"]],
      template: function CustomTooltipComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "eim-tooltip", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hide", function CustomTooltipComponent_Template_eim_tooltip_hide_0_listener($event) {
            return ctx.hide.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "eim-external-configuration", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hide", function CustomTooltipComponent_Template_eim_external_configuration_hide_1_listener($event) {
            return ctx.hide.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.panelStyle, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config);
        }
      },
      directives: [_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_1__["TooltipComponent"], _external_configuration_external_configuration_component__WEBPACK_IMPORTED_MODULE_2__["ExternalConfigurationComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2NvbXBvbmVudHMvY3VzdG9tLXRvb2x0aXAvY3VzdG9tLXRvb2x0aXAuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomTooltipComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-custom-tooltip',
          templateUrl: './custom-tooltip.component.html',
          styleUrls: ['./custom-tooltip.component.scss']
        }]
      }], function () {
        return [];
      }, {
        hide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        tooltip: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_1__["TooltipComponent"], {
            static: true
          }]
        }],
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/components/custom/custom.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/ui/components/custom/custom.component.ts ***!
    \**********************************************************/

  /*! exports provided: CustomComponent */

  /***/
  function srcAppUiComponentsCustomCustomComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomComponent", function () {
      return CustomComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../model/config-model */
    "./src/app/model/config-model.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _split_split_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../split/split.component */
    "./src/app/ui/components/split/split.component.ts");
    /* harmony import */


    var _editor_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../editor/editor.component */
    "./src/app/ui/components/editor/editor.component.ts");
    /* harmony import */


    var _external_external_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../external/external.component */
    "./src/app/ui/components/external/external.component.ts");

    function CustomComponent_eim_split_1_eim_custom_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "eim-custom", 6);
      }

      if (rf & 2) {
        var item_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("component", item_r17);
      }
    }

    function CustomComponent_eim_split_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "eim-split", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomComponent_eim_split_1_eim_custom_1_Template, 1, 1, "eim-custom", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("direction", ctx_r11.component.direction)("resizable", ctx_r11.component.resizable)("sizes", ctx_r11.component.sizes);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.component.components);
      }
    }

    function CustomComponent_eim_editor_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "eim-editor");
      }
    }

    function CustomComponent_eim_external_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "eim-external", 6);
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("component", ctx_r13.component);
      }
    }

    function CustomComponent_eim_external_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "eim-external", 6);
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("component", ctx_r14.component);
      }
    }

    function CustomComponent_eim_external_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "eim-external", 6);
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("component", ctx_r15.component);
      }
    }

    var CustomComponent =
    /*#__PURE__*/
    function () {
      function CustomComponent() {
        _classCallCheck(this, CustomComponent);

        this.componentType = _model_config_model__WEBPACK_IMPORTED_MODULE_1__["ComponentType"];
      }

      _createClass(CustomComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CustomComponent;
    }();

    CustomComponent.ɵfac = function CustomComponent_Factory(t) {
      return new (t || CustomComponent)();
    };

    CustomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CustomComponent,
      selectors: [["eim-custom"]],
      inputs: {
        component: "component"
      },
      decls: 6,
      vars: 6,
      consts: [[3, "ngSwitch"], [3, "direction", "resizable", "sizes", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "component", 4, "ngSwitchCase"], [3, "direction", "resizable", "sizes"], [3, "component", 4, "ngFor", "ngForOf"], [3, "component"]],
      template: function CustomComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomComponent_eim_split_1_Template, 2, 4, "eim-split", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomComponent_eim_editor_2_Template, 1, 0, "eim-editor", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomComponent_eim_external_3_Template, 1, 1, "eim-external", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CustomComponent_eim_external_4_Template, 1, 1, "eim-external", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CustomComponent_eim_external_5_Template, 1, 1, "eim-external", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.component.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.componentType.SPLIT);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.componentType.EDITOR);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.componentType.IFRAME);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.componentType.HTML);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.componentType.WEB_COMPONENT);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _split_split_component__WEBPACK_IMPORTED_MODULE_3__["SplitComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], CustomComponent, _editor_editor_component__WEBPACK_IMPORTED_MODULE_4__["EditorComponent"], _external_external_component__WEBPACK_IMPORTED_MODULE_5__["ExternalComponent"]],
      styles: ["[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n}\n\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvY29tcG9uZW50cy9jdXN0b20vQzpcXFVzZXJzXFwxMUJvcm4yRGllMTFcXElkZWFQcm9qZWN0c1xcbG9hbmxlYWRcXHdlYlxcc3JjXFxhbmd1bGFyL3NyY1xcYXBwXFx1aVxcY29tcG9uZW50c1xcY3VzdG9tXFxjdXN0b20uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL2NvbXBvbmVudHMvY3VzdG9tL2N1c3RvbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0VBQ0EsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdWkvY29tcG9uZW50cy9jdXN0b20vY3VzdG9tLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbjpob3N0ID4gKiB7XHJcbiAgZmxleDogMTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbjpob3N0ID4gKiB7XG4gIGZsZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-custom',
          templateUrl: './custom.component.html',
          styleUrls: ['./custom.component.scss']
        }]
      }], function () {
        return [];
      }, {
        component: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/components/editor/editor.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/ui/components/editor/editor.component.ts ***!
    \**********************************************************/

  /*! exports provided: EditorComponent */

  /***/
  function srcAppUiComponentsEditorEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditorComponent", function () {
      return EditorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EditorComponent =
    /*#__PURE__*/
    function () {
      function EditorComponent() {
        _classCallCheck(this, EditorComponent);
      }

      _createClass(EditorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EditorComponent;
    }();

    EditorComponent.ɵfac = function EditorComponent_Factory(t) {
      return new (t || EditorComponent)();
    };

    EditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditorComponent,
      selectors: [["eim-editor"]],
      decls: 2,
      vars: 0,
      template: function EditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "editor works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2NvbXBvbmVudHMvZWRpdG9yL2VkaXRvci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-editor',
          templateUrl: './editor.component.html',
          styleUrls: ['./editor.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/components/editor/editor.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/ui/components/editor/editor.module.ts ***!
    \*******************************************************/

  /*! exports provided: EditorModule */

  /***/
  function srcAppUiComponentsEditorEditorModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditorModule", function () {
      return EditorModule;
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


    var _editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./editor.component */
    "./src/app/ui/components/editor/editor.component.ts");

    var EditorModule = function EditorModule() {
      _classCallCheck(this, EditorModule);
    };

    EditorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EditorModule
    });
    EditorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EditorModule_Factory(t) {
        return new (t || EditorModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EditorModule, {
        declarations: [_editor_component__WEBPACK_IMPORTED_MODULE_2__["EditorComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_editor_component__WEBPACK_IMPORTED_MODULE_2__["EditorComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_editor_component__WEBPACK_IMPORTED_MODULE_2__["EditorComponent"]],
          exports: [_editor_component__WEBPACK_IMPORTED_MODULE_2__["EditorComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/components/external-configuration/external-configuration.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/ui/components/external-configuration/external-configuration.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: ExternalConfigurationComponent */

  /***/
  function srcAppUiComponentsExternalConfigurationExternalConfigurationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExternalConfigurationComponent", function () {
      return ExternalConfigurationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../core/services/data.service */
    "./src/app/core/services/data.service.ts");
    /* harmony import */


    var _window_content_window_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../window-content/window-content.component */
    "./src/app/ui/components/window-content/window-content.component.ts");
    /* harmony import */


    var _external_external_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../external/external.component */
    "./src/app/ui/components/external/external.component.ts");

    var ExternalConfigurationComponent =
    /*#__PURE__*/
    function () {
      function ExternalConfigurationComponent(dataService) {
        _classCallCheck(this, ExternalConfigurationComponent);

        this.dataService = dataService;
        this.hide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ExternalConfigurationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dataChanged",
        value: function dataChanged(data) {
          console.log('data changed');
          console.log(data);
          this._componentData = data;

          if (!data) {
            this.disableSaveButton();
          } else {
            this.enableSaveButton();
          }
        }
      }, {
        key: "actionPerformed",
        value: function actionPerformed(event) {
          console.log(event);

          switch (event.type) {
            case "SAVE":
              if (event.action) {
                this.saveData(event.action);
              }

              break;

            case "CLOSE":
              this.hide.emit();
              break;
          }
        }
      }, {
        key: "saveData",
        value: function saveData(action) {
          var _this7 = this;

          this.dataService.performAction(action.method, action.url, this._componentData).subscribe(function () {
            _this7.hide.emit();
          });
        }
      }, {
        key: "disableSaveButton",
        value: function disableSaveButton() {
          this.config.footer.buttons.forEach(function (e) {
            if (e.type === 'SAVE') {
              e.disabled = true;
            }
          });
        }
      }, {
        key: "enableSaveButton",
        value: function enableSaveButton() {
          this.config.footer.buttons.forEach(function (e) {
            if (e.type === 'SAVE') {
              e.disabled = false;
            }
          });
        }
      }]);

      return ExternalConfigurationComponent;
    }();

    ExternalConfigurationComponent.ɵfac = function ExternalConfigurationComponent_Factory(t) {
      return new (t || ExternalConfigurationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
    };

    ExternalConfigurationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExternalConfigurationComponent,
      selectors: [["eim-external-configuration"]],
      inputs: {
        config: "config"
      },
      outputs: {
        hide: "hide"
      },
      decls: 2,
      vars: 3,
      consts: [[1, "stretch", 3, "header", "footer", "actionPerformed"], [3, "component", "configChange"]],
      template: function ExternalConfigurationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "eim-window-content", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("actionPerformed", function ExternalConfigurationComponent_Template_eim_window_content_actionPerformed_0_listener($event) {
            return ctx.actionPerformed($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "eim-external", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("configChange", function ExternalConfigurationComponent_Template_eim_external_configChange_1_listener($event) {
            return ctx.dataChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", ctx.config.header)("footer", ctx.config.footer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("component", ctx.config.component);
        }
      },
      directives: [_window_content_window_content_component__WEBPACK_IMPORTED_MODULE_2__["WindowContentComponent"], _external_external_component__WEBPACK_IMPORTED_MODULE_3__["ExternalComponent"]],
      styles: ["[_nghost-%COMP%] {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvY29tcG9uZW50cy9leHRlcm5hbC1jb25maWd1cmF0aW9uL0M6XFxVc2Vyc1xcMTFCb3JuMkRpZTExXFxJZGVhUHJvamVjdHNcXGxvYW5sZWFkXFx3ZWJcXHNyY1xcYW5ndWxhci9zcmNcXGFwcFxcdWlcXGNvbXBvbmVudHNcXGV4dGVybmFsLWNvbmZpZ3VyYXRpb25cXGV4dGVybmFsLWNvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL2NvbXBvbmVudHMvZXh0ZXJuYWwtY29uZmlndXJhdGlvbi9leHRlcm5hbC1jb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3VpL2NvbXBvbmVudHMvZXh0ZXJuYWwtY29uZmlndXJhdGlvbi9leHRlcm5hbC1jb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuIiwiOmhvc3Qge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExternalConfigurationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-external-configuration',
          templateUrl: './external-configuration.component.html',
          styleUrls: ['./external-configuration.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }];
      }, {
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/components/external-window/external-window.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/ui/components/external-window/external-window.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ExternalWindowComponent */

  /***/
  function srcAppUiComponentsExternalWindowExternalWindowComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExternalWindowComponent", function () {
      return ExternalWindowComponent;
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


    var _window_window_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../window/window.component */
    "./src/app/ui/components/window/window.component.ts");
    /* harmony import */


    var _external_configuration_external_configuration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../external-configuration/external-configuration.component */
    "./src/app/ui/components/external-configuration/external-configuration.component.ts");

    function ExternalWindowComponent_eim_window_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "eim-window");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "eim-external-configuration", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hide", function ExternalWindowComponent_eim_window_0_Template_eim_external_configuration_hide_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.hide.emit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx_r2.config);
      }
    }

    var ExternalWindowComponent =
    /*#__PURE__*/
    function () {
      function ExternalWindowComponent() {
        _classCallCheck(this, ExternalWindowComponent);

        this.hide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ExternalWindowComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('init', this.config);
        }
      }, {
        key: "show",
        value: function show() {}
      }]);

      return ExternalWindowComponent;
    }();

    ExternalWindowComponent.ɵfac = function ExternalWindowComponent_Factory(t) {
      return new (t || ExternalWindowComponent)();
    };

    ExternalWindowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExternalWindowComponent,
      selectors: [["eim-custom-window"]],
      inputs: {
        config: "config"
      },
      outputs: {
        hide: "hide"
      },
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [3, "config", "hide"]],
      template: function ExternalWindowComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExternalWindowComponent_eim_window_0_Template, 2, 1, "eim-window", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.config);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _window_window_component__WEBPACK_IMPORTED_MODULE_2__["WindowComponent"], _external_configuration_external_configuration_component__WEBPACK_IMPORTED_MODULE_3__["ExternalConfigurationComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2NvbXBvbmVudHMvZXh0ZXJuYWwtd2luZG93L2V4dGVybmFsLXdpbmRvdy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExternalWindowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-custom-window',
          templateUrl: './external-window.component.html',
          styleUrls: ['./external-window.component.scss']
        }]
      }], function () {
        return [];
      }, {
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/components/external/external.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/ui/components/external/external.component.ts ***!
    \**************************************************************/

  /*! exports provided: ExternalComponent */

  /***/
  function srcAppUiComponentsExternalExternalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExternalComponent", function () {
      return ExternalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../model/config-model */
    "./src/app/model/config-model.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _iframe_iframe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./iframe/iframe.component */
    "./src/app/ui/components/external/iframe/iframe.component.ts");
    /* harmony import */


    var _web_web_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./web/web.component */
    "./src/app/ui/components/external/web/web.component.ts");

    function ExternalComponent_eim_iframe_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "eim-iframe", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("configChange", function ExternalComponent_eim_iframe_1_Template_eim_iframe_configChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.configChange.emit($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx_r23.component);
      }
    }

    function ExternalComponent_eim_web_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "eim-web", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("configChange", function ExternalComponent_eim_web_2_Template_eim_web_configChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.configChange.emit($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx_r24.component);
      }
    }

    var ExternalComponent =
    /*#__PURE__*/
    function () {
      function ExternalComponent() {
        _classCallCheck(this, ExternalComponent);

        this.configChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.type = _model_config_model__WEBPACK_IMPORTED_MODULE_1__["ComponentType"];
      }

      _createClass(ExternalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExternalComponent;
    }();

    ExternalComponent.ɵfac = function ExternalComponent_Factory(t) {
      return new (t || ExternalComponent)();
    };

    ExternalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExternalComponent,
      selectors: [["eim-external"]],
      inputs: {
        component: "component"
      },
      outputs: {
        configChange: "configChange"
      },
      decls: 3,
      vars: 3,
      consts: [[3, "ngSwitch"], [3, "config", "configChange", 4, "ngSwitchCase"], [3, "config", "configChange"]],
      template: function ExternalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExternalComponent_eim_iframe_1_Template, 1, 1, "eim-iframe", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExternalComponent_eim_web_2_Template, 1, 1, "eim-web", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.component.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.type.IFRAME);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.type.WEB_COMPONENT);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _iframe_iframe_component__WEBPACK_IMPORTED_MODULE_3__["IframeComponent"], _web_web_component__WEBPACK_IMPORTED_MODULE_4__["WebComponent"]],
      styles: ["[_nghost-%COMP%] {\n  display: grid;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvY29tcG9uZW50cy9leHRlcm5hbC9DOlxcVXNlcnNcXDExQm9ybjJEaWUxMVxcSWRlYVByb2plY3RzXFxsb2FubGVhZFxcd2ViXFxzcmNcXGFuZ3VsYXIvc3JjXFxhcHBcXHVpXFxjb21wb25lbnRzXFxleHRlcm5hbFxcZXh0ZXJuYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL2NvbXBvbmVudHMvZXh0ZXJuYWwvZXh0ZXJuYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdWkvY29tcG9uZW50cy9leHRlcm5hbC9leHRlcm5hbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExternalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-external',
          templateUrl: './external.component.html',
          styleUrls: ['./external.component.scss']
        }]
      }], function () {
        return [];
      }, {
        component: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        configChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/components/external/iframe/iframe.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/ui/components/external/iframe/iframe.component.ts ***!
    \*******************************************************************/

  /*! exports provided: IframeComponent */

  /***/
  function srcAppUiComponentsExternalIframeIframeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IframeComponent", function () {
      return IframeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../pipes/safe-url.pipe */
    "./src/app/ui/pipes/safe-url.pipe.ts");

    var _c0 = ["iframe"];

    var IframeComponent =
    /*#__PURE__*/
    function () {
      function IframeComponent() {
        _classCallCheck(this, IframeComponent);

        this.configChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        console.log(this);
        this.addEventListener();
      }

      _createClass(IframeComponent, [{
        key: "addEventListener",
        value: function addEventListener() {
          var _this8 = this;

          this._postMessageCallback = function (e) {
            if (e.source === _this8.iframe.nativeElement.contentWindow) {
              _this8.configChange.emit(e.data);
            }
          };

          window.addEventListener('message', this._postMessageCallback);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.iframe.nativeElement.addEventListener('load', function () {
            console.log('setting configs to content window', _this9.config.configs);
            _this9.iframe.nativeElement.contentWindow.configs = _this9.config.configs;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          window.removeEventListener('message', this._postMessageCallback);
        }
      }]);

      return IframeComponent;
    }();

    IframeComponent.ɵfac = function IframeComponent_Factory(t) {
      return new (t || IframeComponent)();
    };

    IframeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IframeComponent,
      selectors: [["eim-iframe"]],
      viewQuery: function IframeComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.iframe = _t.first);
        }
      },
      inputs: {
        config: "config"
      },
      outputs: {
        configChange: "configChange"
      },
      decls: 3,
      vars: 3,
      consts: [["frameborder", "0", 1, "stretch", 3, "src"], ["iframe", ""]],
      template: function IframeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "safeUrl");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.config.value), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        }
      },
      pipes: [_pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_1__["SafeUrlPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2NvbXBvbmVudHMvZXh0ZXJuYWwvaWZyYW1lL2lmcmFtZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IframeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-iframe',
          templateUrl: './iframe.component.html',
          styleUrls: ['./iframe.component.scss']
        }]
      }], function () {
        return [];
      }, {
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        configChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        iframe: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['iframe', {
            static: true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/components/external/web/web.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/ui/components/external/web/web.component.ts ***!
    \*************************************************************/

  /*! exports provided: WebComponent */

  /***/
  function srcAppUiComponentsExternalWebWebComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebComponent", function () {
      return WebComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["webComponent"];

    var WebComponent =
    /*#__PURE__*/
    function () {
      function WebComponent() {
        _classCallCheck(this, WebComponent);

        this.configChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(WebComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          var custom = document.createElement(this.config.value);
          custom['configs'] = this.config.configs;
          custom.addEventListener('configChange', function (event) {
            _this10.configChange.emit(event.detail);
          });
          this.webComponent.nativeElement.appendChild(custom);
        }
      }]);

      return WebComponent;
    }();

    WebComponent.ɵfac = function WebComponent_Factory(t) {
      return new (t || WebComponent)();
    };

    WebComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WebComponent,
      selectors: [["eim-web"]],
      viewQuery: function WebComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.webComponent = _t.first);
        }
      },
      inputs: {
        config: "config"
      },
      outputs: {
        configChange: "configChange"
      },
      decls: 2,
      vars: 0,
      consts: [[1, "web-component"], ["webComponent", ""]],
      template: function WebComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
        }
      },
      styles: ["[_nghost-%COMP%] {\n  display: grid;\n  overflow: hidden;\n}\n\n.web-component[_ngcontent-%COMP%] {\n  display: grid;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvY29tcG9uZW50cy9leHRlcm5hbC93ZWIvQzpcXFVzZXJzXFwxMUJvcm4yRGllMTFcXElkZWFQcm9qZWN0c1xcbG9hbmxlYWRcXHdlYlxcc3JjXFxhbmd1bGFyL3NyY1xcYXBwXFx1aVxcY29tcG9uZW50c1xcZXh0ZXJuYWxcXHdlYlxcd2ViLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9jb21wb25lbnRzL2V4dGVybmFsL3dlYi93ZWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC91aS9jb21wb25lbnRzL2V4dGVybmFsL3dlYi93ZWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ud2ViLWNvbXBvbmVudCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi53ZWItY29tcG9uZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-web',
          templateUrl: './web.component.html',
          styleUrls: ['./web.component.scss']
        }]
      }], function () {
        return [];
      }, {
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        configChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        webComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['webComponent', {
            static: true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/components/footer/footer.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/ui/components/footer/footer.component.ts ***!
    \**********************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppUiComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        disabled: a0
      };
    };

    function FooterComponent_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_button_1_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var btn_r33 = ctx.$implicit;

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r34.buttonClick(btn_r33);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var btn_r33 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("footer-button ", btn_r33.cls, " action-button");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, btn_r33.disabled));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](btn_r33.caption);
      }
    }

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.actionPerformed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "buttonClick",
        value: function buttonClick(btn) {
          this.actionPerformed.emit(btn);
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["eim-footer"]],
      inputs: {
        config: "config"
      },
      outputs: {
        actionPerformed: "actionPerformed"
      },
      decls: 2,
      vars: 1,
      consts: [[3, "class", "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "click"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterComponent_button_1_Template, 2, 7, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.config.buttons);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: ["[_nghost-%COMP%] {\n  background: #f2f2f2;\n  padding: 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  border-top: 1px solid gray;\n}\n\n.footer-button[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvY29tcG9uZW50cy9mb290ZXIvQzpcXFVzZXJzXFwxMUJvcm4yRGllMTFcXElkZWFQcm9qZWN0c1xcbG9hbmxlYWRcXHdlYlxcc3JjXFxhbmd1bGFyL3NyY1xcYXBwXFx1aVxcY29tcG9uZW50c1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsMEJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdWkvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XHJcbn1cclxuXHJcbi5mb290ZXItYnV0dG9uIHtcclxuICBtYXJnaW46IDAgNXB4O1xyXG59XHJcblxyXG4uZGlzYWJsZWQge1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4iLCI6aG9zdCB7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcbn1cblxuLmZvb3Rlci1idXR0b24ge1xuICBtYXJnaW46IDAgNXB4O1xufVxuXG4uZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjc7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, {
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        actionPerformed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/components/header/header.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/ui/components/header/header.component.ts ***!
    \**********************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppUiComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HeaderComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_2_Template_div_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r30.headerClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r29._headerConfig.closeIcon);
      }
    }

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.defaultConfig = {
          caption: 'Header',
          closeIcon: 'fas fa-times'
        };
        this.closeClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(HeaderComponent, [{
        key: "headerClick",
        value: function headerClick() {
          this.closeClick.emit();
        }
      }, {
        key: "parseConfig",
        value: function parseConfig() {
          if (this.config.closeIcon === true) {
            delete this.config.closeIcon;
          }

          this._headerConfig = Object.assign(Object.assign({}, this.defaultConfig), this.config);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.config) {
            this.parseConfig();
          }
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["eim-header"]],
      inputs: {
        config: "config"
      },
      outputs: {
        closeClick: "closeClick"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()],
      decls: 3,
      vars: 2,
      consts: [[1, "header"], ["class", "pointer", 3, "click", 4, "ngIf"], [1, "pointer", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_div_2_Template, 2, 3, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._headerConfig == null ? null : ctx._headerConfig.caption);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._headerConfig == null ? null : ctx._headerConfig.closeIcon);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["[_nghost-%COMP%] {\n  background: #f2f2f2;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px;\n  font-size: 20px;\n  border-bottom: 1px solid gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFwxMUJvcm4yRGllMTFcXElkZWFQcm9qZWN0c1xcbG9hbmxlYWRcXHdlYlxcc3JjXFxhbmd1bGFyL3NyY1xcYXBwXFx1aVxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC91aS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI0MiwgMjQyLCAyNDIpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcblxyXG59XHJcbiIsIjpob3N0IHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [];
      }, {
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        closeClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/components/menu/menu.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/ui/components/menu/menu.component.ts ***!
    \******************************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppUiComponentsMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MenuComponent =
    /*#__PURE__*/
    function () {
      function MenuComponent() {
        _classCallCheck(this, MenuComponent);
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MenuComponent;
    }();

    MenuComponent.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)();
    };

    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["eim-menu"]],
      decls: 2,
      vars: 0,
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "menu works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-menu',
          templateUrl: './menu.component.html',
          styleUrls: ['./menu.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/components/split/split.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/ui/components/split/split.component.ts ***!
    \********************************************************/

  /*! exports provided: SplitComponent */

  /***/
  function srcAppUiComponentsSplitSplitComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SplitComponent", function () {
      return SplitComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! split.js */
    "./node_modules/split.js/dist/split.es.js");
    /* harmony import */


    var _model_config_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../model/config-model */
    "./src/app/model/config-model.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["divElement"];
    var _c1 = ["*"];

    var SplitComponent =
    /*#__PURE__*/
    function () {
      function SplitComponent() {
        _classCallCheck(this, SplitComponent);

        this.direction = _model_config_model__WEBPACK_IMPORTED_MODULE_2__["Direction"].HORIZONTAL;
      }

      _createClass(SplitComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.resizable) {
            var children = this.divElement.nativeElement.querySelectorAll(':scope > *');
            Object(split_js__WEBPACK_IMPORTED_MODULE_1__["default"])(children, {
              direction: this.getDirection(),
              sizes: this.sizes,
              minSize: 100,
              gutterSize: 4
            });
          }
        }
      }, {
        key: "getDirection",
        value: function getDirection() {
          return this.direction === _model_config_model__WEBPACK_IMPORTED_MODULE_2__["Direction"].HORIZONTAL ? 'horizontal' : 'vertical';
        }
      }, {
        key: "contentClass",
        value: function contentClass() {
          return {
            content: true,
            'flex-row': this.direction === _model_config_model__WEBPACK_IMPORTED_MODULE_2__["Direction"].HORIZONTAL,
            'flex-column': this.direction === _model_config_model__WEBPACK_IMPORTED_MODULE_2__["Direction"].VERTICAL
          };
        }
      }]);

      return SplitComponent;
    }();

    SplitComponent.ɵfac = function SplitComponent_Factory(t) {
      return new (t || SplitComponent)();
    };

    SplitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SplitComponent,
      selectors: [["eim-split"]],
      viewQuery: function SplitComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.divElement = _t.first);
        }
      },
      inputs: {
        direction: "direction",
        sizes: "sizes",
        resizable: "resizable"
      },
      ngContentSelectors: _c1,
      decls: 3,
      vars: 1,
      consts: [[3, "ngClass"], ["divElement", ""]],
      template: function SplitComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.contentClass());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
      styles: ["[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n}\n\n.content[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  overflow: hidden;\n}\n\n.flex-row[_ngcontent-%COMP%] {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.flex-column[_ngcontent-%COMP%] {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n  .gutter {\n  background: #F0F0F2;\n  border: 1px solid #C1C6C9;\n}\n\n  .gutter.gutter-vertical {\n  cursor: n-resize;\n}\n\n  .gutter.gutter-horizontal {\n  cursor: e-resize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvY29tcG9uZW50cy9zcGxpdC9DOlxcVXNlcnNcXDExQm9ybjJEaWUxMVxcSWRlYVByb2plY3RzXFxsb2FubGVhZFxcd2ViXFxzcmNcXGFuZ3VsYXIvc3JjXFxhcHBcXHVpXFxjb21wb25lbnRzXFxzcGxpdFxcc3BsaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL2NvbXBvbmVudHMvc3BsaXQvc3BsaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0NGOztBREtFO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtBQ0ZKOztBREtFO0VBQ0UsZ0JBQUE7QUNISjs7QURNRTtFQUNFLGdCQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC91aS9jb21wb25lbnRzL3NwbGl0L3NwbGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmZsZXgtcm93IHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uZmxleC1jb2x1bW4ge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcblxyXG46Om5nLWRlZXAge1xyXG4gIC8vIGZvciBzcGxpdGpzXHJcbiAgLmd1dHRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjBGMEYyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0MxQzZDOTtcclxuICB9XHJcblxyXG4gIC5ndXR0ZXIuZ3V0dGVyLXZlcnRpY2FsIHtcclxuICAgIGN1cnNvcjogbi1yZXNpemU7XHJcbiAgfVxyXG5cclxuICAuZ3V0dGVyLmd1dHRlci1ob3Jpem9udGFsIHtcclxuICAgIGN1cnNvcjogZS1yZXNpemU7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZmxleC1yb3cge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uZmxleC1jb2x1bW4ge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG46Om5nLWRlZXAgLmd1dHRlciB7XG4gIGJhY2tncm91bmQ6ICNGMEYwRjI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDMUM2Qzk7XG59XG46Om5nLWRlZXAgLmd1dHRlci5ndXR0ZXItdmVydGljYWwge1xuICBjdXJzb3I6IG4tcmVzaXplO1xufVxuOjpuZy1kZWVwIC5ndXR0ZXIuZ3V0dGVyLWhvcml6b250YWwge1xuICBjdXJzb3I6IGUtcmVzaXplO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-split',
          templateUrl: './split.component.html',
          styleUrls: ['./split.component.scss']
        }]
      }], function () {
        return [];
      }, {
        direction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        sizes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        resizable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        divElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['divElement', {
            static: true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/components/tooltip/tooltip.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/ui/components/tooltip/tooltip.component.ts ***!
    \************************************************************/

  /*! exports provided: TooltipComponent */

  /***/
  function srcAppUiComponentsTooltipTooltipComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TooltipComponent", function () {
      return TooltipComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! primeng */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng.js");

    var _c0 = ["*"];

    var TooltipComponent =
    /*#__PURE__*/
    function () {
      function TooltipComponent() {
        _classCallCheck(this, TooltipComponent);

        this.hide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(TooltipComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "show",
        value: function show(event, target) {
          this.op.show(event, target);
        }
      }]);

      return TooltipComponent;
    }();

    TooltipComponent.ɵfac = function TooltipComponent_Factory(t) {
      return new (t || TooltipComponent)();
    };

    TooltipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TooltipComponent,
      selectors: [["eim-tooltip"]],
      viewQuery: function TooltipComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](primeng__WEBPACK_IMPORTED_MODULE_1__["OverlayPanel"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.op = _t.first);
        }
      },
      inputs: {
        style: "style"
      },
      outputs: {
        hide: "hide"
      },
      ngContentSelectors: _c0,
      decls: 2,
      vars: 2,
      consts: [[3, "onHide"]],
      template: function TooltipComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-overlayPanel", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onHide", function TooltipComponent_Template_p_overlayPanel_onHide_0_listener($event) {
            return ctx.hide.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.style, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        }
      },
      directives: [primeng__WEBPACK_IMPORTED_MODULE_1__["OverlayPanel"]],
      styles: [".ui-overlaypanel {\n  display: -webkit-box;\n  display: flex;\n}\n\n  .ui-overlaypanel-content {\n  -webkit-box-flex: 1;\n          flex: 1;\n  padding: 0 !important;\n  overflow: hidden;\n  display: grid;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvY29tcG9uZW50cy90b29sdGlwL0M6XFxVc2Vyc1xcMTFCb3JuMkRpZTExXFxJZGVhUHJvamVjdHNcXGxvYW5sZWFkXFx3ZWJcXHNyY1xcYW5ndWxhci9zcmNcXGFwcFxcdWlcXGNvbXBvbmVudHNcXHRvb2x0aXBcXHRvb2x0aXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL2NvbXBvbmVudHMvdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdWkvY29tcG9uZW50cy90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLnVpLW92ZXJsYXlwYW5lbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC51aS1vdmVybGF5cGFuZWwtY29udGVudCB7XHJcbiAgZmxleDogMTtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuIiwiOjpuZy1kZWVwIC51aS1vdmVybGF5cGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG46Om5nLWRlZXAgLnVpLW92ZXJsYXlwYW5lbC1jb250ZW50IHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBncmlkO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-tooltip',
          templateUrl: './tooltip.component.html',
          styleUrls: ['./tooltip.component.scss']
        }]
      }], function () {
        return [];
      }, {
        op: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [primeng__WEBPACK_IMPORTED_MODULE_1__["OverlayPanel"], {
            static: true
          }]
        }],
        hide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/components/window-content/window-content.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/ui/components/window-content/window-content.component.ts ***!
    \**************************************************************************/

  /*! exports provided: WindowContentComponent */

  /***/
  function srcAppUiComponentsWindowContentWindowContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WindowContentComponent", function () {
      return WindowContentComponent;
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


    var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/ui/components/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/ui/components/footer/footer.component.ts");

    function WindowContentComponent_eim_header_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "eim-header", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeClick", function WindowContentComponent_eim_header_0_Template_eim_header_closeClick_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r40.closeClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx_r38.header);
      }
    }

    function WindowContentComponent_eim_footer_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "eim-footer", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("actionPerformed", function WindowContentComponent_eim_footer_2_Template_eim_footer_actionPerformed_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r42.actionPerformed.emit($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx_r39.footer);
      }
    }

    var _c0 = ["*"];

    var WindowContentComponent =
    /*#__PURE__*/
    function () {
      function WindowContentComponent() {
        _classCallCheck(this, WindowContentComponent);

        this.actionPerformed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(WindowContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeClick",
        value: function closeClick() {
          this.actionPerformed.emit({
            type: 'CLOSE',
            caption: '',
            cls: ''
          });
        }
      }]);

      return WindowContentComponent;
    }();

    WindowContentComponent.ɵfac = function WindowContentComponent_Factory(t) {
      return new (t || WindowContentComponent)();
    };

    WindowContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WindowContentComponent,
      selectors: [["eim-window-content"]],
      inputs: {
        header: "header",
        footer: "footer"
      },
      outputs: {
        actionPerformed: "actionPerformed"
      },
      ngContentSelectors: _c0,
      decls: 3,
      vars: 2,
      consts: [[3, "config", "closeClick", 4, "ngIf"], [3, "config", "actionPerformed", 4, "ngIf"], [3, "config", "closeClick"], [3, "config", "actionPerformed"]],
      template: function WindowContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WindowContentComponent_eim_header_0_Template, 1, 1, "eim-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WindowContentComponent_eim_footer_2_Template, 1, 1, "eim-footer", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.header);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footer);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvY29tcG9uZW50cy93aW5kb3ctY29udGVudC9DOlxcVXNlcnNcXDExQm9ybjJEaWUxMVxcSWRlYVByb2plY3RzXFxsb2FubGVhZFxcd2ViXFxzcmNcXGFuZ3VsYXIvc3JjXFxhcHBcXHVpXFxjb21wb25lbnRzXFx3aW5kb3ctY29udGVudFxcd2luZG93LWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL2NvbXBvbmVudHMvd2luZG93LWNvbnRlbnQvd2luZG93LWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdWkvY29tcG9uZW50cy93aW5kb3ctY29udGVudC93aW5kb3ctY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindowContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-window-content',
          templateUrl: './window-content.component.html',
          styleUrls: ['./window-content.component.scss']
        }]
      }], function () {
        return [];
      }, {
        header: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        footer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        actionPerformed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/components/window/window.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/ui/components/window/window.component.ts ***!
    \**********************************************************/

  /*! exports provided: WindowComponent */

  /***/
  function srcAppUiComponentsWindowWindowComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WindowComponent", function () {
      return WindowComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! primeng */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng.js");

    var _c0 = function _c0() {
      return {
        width: "80%",
        height: "100%",
        padding: 0,
        display: "flex",
        flexDirection: "column"
      };
    };

    var _c1 = ["*"];

    var WindowComponent =
    /*#__PURE__*/
    function () {
      function WindowComponent() {
        _classCallCheck(this, WindowComponent);
      }

      _createClass(WindowComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WindowComponent;
    }();

    WindowComponent.ɵfac = function WindowComponent_Factory(t) {
      return new (t || WindowComponent)();
    };

    WindowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WindowComponent,
      selectors: [["eim-window"]],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 6,
      consts: [["position", "right", 3, "dismissible", "showCloseIcon", "visible"], [1, "stretch", 2, "display", "grid"]],
      template: function WindowComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-sidebar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false)("showCloseIcon", false)("visible", true);
        }
      },
      directives: [primeng__WEBPACK_IMPORTED_MODULE_1__["Sidebar"]],
      styles: [".header[_ngcontent-%COMP%] {\n  background-color: #F2F2F2;\n  padding: 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin-right: 20px;\n}\n.header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  color: #BFBFBF;\n  font-size: 35px;\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvY29tcG9uZW50cy93aW5kb3cvQzpcXFVzZXJzXFwxMUJvcm4yRGllMTFcXElkZWFQcm9qZWN0c1xcbG9hbmxlYWRcXHdlYlxcc3JjXFxhbmd1bGFyL3NyY1xcYXBwXFx1aVxcY29tcG9uZW50c1xcd2luZG93XFx3aW5kb3cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL2NvbXBvbmVudHMvd2luZG93L3dpbmRvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDRjtBRENFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDQ0o7QURFRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3VpL2NvbXBvbmVudHMvd2luZG93L3dpbmRvdy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgLmljb24ge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNsb3NlLWljb24ge1xyXG4gICAgY29sb3I6ICNCRkJGQkY7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICB9XHJcbn1cclxuIiwiLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVhZGVyIC5pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uaGVhZGVyIC5jbG9zZS1pY29uIHtcbiAgY29sb3I6ICNCRkJGQkY7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-window',
          templateUrl: './window.component.html',
          styleUrls: ['./window.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/navigable/navbar/navbar.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/ui/navigable/navbar/navbar.component.ts ***!
    \*********************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppUiNavigableNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../model/config-model */
    "./src/app/model/config-model.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NavbarComponent_img_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_img_5_Template_img_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var item_r20 = ctx.$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.actionClick(item_r20);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r20 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r20.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(router) {
        _classCallCheck(this, NavbarComponent);

        this.router = router;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "navBarName",
        value: function navBarName() {
          return this.navBar.envSettings ? this.navBar.envSettings.name : '';
        }
      }, {
        key: "actionClick",
        value: function actionClick(item) {
          switch (item.type) {
            case _model_config_model__WEBPACK_IMPORTED_MODULE_1__["NavbarActionType"].LOGOUT:
              window.location.href = '/logout';
              break;

            case _model_config_model__WEBPACK_IMPORTED_MODULE_1__["NavbarActionType"].ENVIRONMENT_SETTINGS:
              this.router.navigate(["nav"
              /* NAV */
              .concat("/", "env"
              /* ENVIRONMENT_SETTINGS */
              )]);
          }
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["eim-navbar"]],
      inputs: {
        navBar: "navBar"
      },
      decls: 6,
      vars: 3,
      consts: [[1, "header"], [1, "logo", 3, "title"], [1, "actions"], ["alt", "", 3, "src", "click", 4, "ngFor", "ngForOf"], ["alt", "", 3, "src", "click"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavbarComponent_img_5_Template, 1, 1, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.navBarName());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.navBarName()[0]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navBar.actions);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n}\n\n.header[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: #F2F2F2;\n  background: -webkit-gradient(linear, left top, left bottom, from(#A7C4E6), color-stop(15%, #A7C4E6), color-stop(22%, #F2F2F2));\n  background: linear-gradient(180deg, #A7C4E6 0%, #A7C4E6 15%, #F2F2F2 22%);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  overflow: hidden;\n  box-shadow: 0 0 5px 0 grey;\n  margin-right: 2px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 26px;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  background: purple;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.actions[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvbmF2aWdhYmxlL25hdmJhci9DOlxcVXNlcnNcXDExQm9ybjJEaWUxMVxcSWRlYVByb2plY3RzXFxsb2FubGVhZFxcd2ViXFxzcmNcXGFuZ3VsYXIvc3JjXFxhcHBcXHVpXFxuYXZpZ2FibGVcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9uYXZpZ2FibGUvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEhBQUE7RUFBQSx5RUFBQTtFQUVBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREdBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0FGOztBREVFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC91aS9uYXZpZ2FibGUvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNGMkYyRjI7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0E3QzRFNiAwJSwgI0E3QzRFNiAxNSUsICNGMkYyRjIgMjIlKTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggMCBncmV5O1xyXG4gIG1hcmdpbi1yaWdodDogMnB4O1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHB1cnBsZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gID4gKiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjRjJGMkYyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjQTdDNEU2IDAlLCAjQTdDNEU2IDE1JSwgI0YyRjJGMiAyMiUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggMCBncmV5O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbn1cblxuLmxvZ28ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBwdXJwbGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmFjdGlvbnMgPiAqIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, {
        navBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ui/navigable/navigable.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/ui/navigable/navigable.component.ts ***!
    \*****************************************************/

  /*! exports provided: NavigableComponent */

  /***/
  function srcAppUiNavigableNavigableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigableComponent", function () {
      return NavigableComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../core/services/data.service */
    "./src/app/core/services/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/ui/navigable/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function NavigableComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "eim-navbar", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var navigation_r10 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navBar", navigation_r10);
      }
    }

    var NavigableComponent =
    /*#__PURE__*/
    function () {
      function NavigableComponent(dataService) {
        _classCallCheck(this, NavigableComponent);

        this.dataService = dataService;
      }

      _createClass(NavigableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.navigation$ = this.dataService.getNavigation();
        }
      }]);

      return NavigableComponent;
    }();

    NavigableComponent.ɵfac = function NavigableComponent_Factory(t) {
      return new (t || NavigableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
    };

    NavigableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavigableComponent,
      selectors: [["eim-navigable-component"]],
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [1, "navbar", 3, "navBar"]],
      template: function NavigableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavigableComponent_ng_container_0_Template, 3, 1, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.navigation$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
      styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-areas: \"navbar content\";\n  overflow: hidden;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  grid-area: navbar;\n}\n\n  router-outlet + * {\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvbmF2aWdhYmxlL0M6XFxVc2Vyc1xcMTFCb3JuMkRpZTExXFxJZGVhUHJvamVjdHNcXGxvYW5sZWFkXFx3ZWJcXHNyY1xcYW5ndWxhci9zcmNcXGFwcFxcdWlcXG5hdmlnYWJsZVxcbmF2aWdhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9uYXZpZ2FibGUvbmF2aWdhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLCtCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3VpL25hdmlnYWJsZS9uYXZpZ2FibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibmF2YmFyIGNvbnRlbnRcIjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICBncmlkLWFyZWE6IG5hdmJhcjtcclxufVxyXG5cclxuOjpuZy1kZWVwIHJvdXRlci1vdXRsZXQgKyAqIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibmF2YmFyIGNvbnRlbnRcIjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm5hdmJhciB7XG4gIGdyaWQtYXJlYTogbmF2YmFyO1xufVxuXG46Om5nLWRlZXAgcm91dGVyLW91dGxldCArICoge1xuICBvdmVyZmxvdzogYXV0bztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-navigable-component',
          templateUrl: './navigable.component.html',
          styleUrls: ['./navigable.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/pipes/ng-for-filter-every.pipe.ts":
  /*!******************************************************!*\
    !*** ./src/app/ui/pipes/ng-for-filter-every.pipe.ts ***!
    \******************************************************/

  /*! exports provided: NgForFilterEveryPipe */

  /***/
  function srcAppUiPipesNgForFilterEveryPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgForFilterEveryPipe", function () {
      return NgForFilterEveryPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NgForFilterEveryPipe =
    /*#__PURE__*/
    function () {
      function NgForFilterEveryPipe() {
        _classCallCheck(this, NgForFilterEveryPipe);
      }

      _createClass(NgForFilterEveryPipe, [{
        key: "transform",
        value: function transform(items, filter) {
          if (!items || !filter) {
            return items;
          }

          return items.filter(function (item) {
            return filter.every(function (f) {
              return item[f.key] === f.value;
            });
          });
        }
      }]);

      return NgForFilterEveryPipe;
    }();

    NgForFilterEveryPipe.ɵfac = function NgForFilterEveryPipe_Factory(t) {
      return new (t || NgForFilterEveryPipe)();
    };

    NgForFilterEveryPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "ngForFilterEvery",
      type: NgForFilterEveryPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgForFilterEveryPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'ngForFilterEvery'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/pipes/ng-for-filter-some.pipe.ts":
  /*!*****************************************************!*\
    !*** ./src/app/ui/pipes/ng-for-filter-some.pipe.ts ***!
    \*****************************************************/

  /*! exports provided: NgForFilterSomePipe */

  /***/
  function srcAppUiPipesNgForFilterSomePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgForFilterSomePipe", function () {
      return NgForFilterSomePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NgForFilterSomePipe =
    /*#__PURE__*/
    function () {
      function NgForFilterSomePipe() {
        _classCallCheck(this, NgForFilterSomePipe);
      }

      _createClass(NgForFilterSomePipe, [{
        key: "transform",
        value: function transform(items, filter) {
          if (!items || !filter) {
            return items;
          }

          return items.filter(function (item) {
            return filter.some(function (f) {
              return item[f.key] === f.value;
            });
          });
        }
      }]);

      return NgForFilterSomePipe;
    }();

    NgForFilterSomePipe.ɵfac = function NgForFilterSomePipe_Factory(t) {
      return new (t || NgForFilterSomePipe)();
    };

    NgForFilterSomePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "ngForFilterSome",
      type: NgForFilterSomePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgForFilterSomePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'ngForFilterSome'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/pipes/pipes.module.ts":
  /*!******************************************!*\
    !*** ./src/app/ui/pipes/pipes.module.ts ***!
    \******************************************/

  /*! exports provided: PipesModule */

  /***/
  function srcAppUiPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
      return PipesModule;
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


    var _safe_url_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./safe-url.pipe */
    "./src/app/ui/pipes/safe-url.pipe.ts");
    /* harmony import */


    var _ng_for_filter_every_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ng-for-filter-every.pipe */
    "./src/app/ui/pipes/ng-for-filter-every.pipe.ts");
    /* harmony import */


    var _ng_for_filter_some_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./ng-for-filter-some.pipe */
    "./src/app/ui/pipes/ng-for-filter-some.pipe.ts");

    var PipesModule = function PipesModule() {
      _classCallCheck(this, PipesModule);
    };

    PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PipesModule
    });
    PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PipesModule_Factory(t) {
        return new (t || PipesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipesModule, {
        declarations: [_safe_url_pipe__WEBPACK_IMPORTED_MODULE_2__["SafeUrlPipe"], _ng_for_filter_every_pipe__WEBPACK_IMPORTED_MODULE_3__["NgForFilterEveryPipe"], _ng_for_filter_some_pipe__WEBPACK_IMPORTED_MODULE_4__["NgForFilterSomePipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_safe_url_pipe__WEBPACK_IMPORTED_MODULE_2__["SafeUrlPipe"], _ng_for_filter_every_pipe__WEBPACK_IMPORTED_MODULE_3__["NgForFilterEveryPipe"], _ng_for_filter_some_pipe__WEBPACK_IMPORTED_MODULE_4__["NgForFilterSomePipe"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_safe_url_pipe__WEBPACK_IMPORTED_MODULE_2__["SafeUrlPipe"], _ng_for_filter_every_pipe__WEBPACK_IMPORTED_MODULE_3__["NgForFilterEveryPipe"], _ng_for_filter_some_pipe__WEBPACK_IMPORTED_MODULE_4__["NgForFilterSomePipe"]],
          exports: [_safe_url_pipe__WEBPACK_IMPORTED_MODULE_2__["SafeUrlPipe"], _ng_for_filter_every_pipe__WEBPACK_IMPORTED_MODULE_3__["NgForFilterEveryPipe"], _ng_for_filter_some_pipe__WEBPACK_IMPORTED_MODULE_4__["NgForFilterSomePipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/pipes/safe-url.pipe.ts":
  /*!*******************************************!*\
    !*** ./src/app/ui/pipes/safe-url.pipe.ts ***!
    \*******************************************/

  /*! exports provided: SafeUrlPipe */

  /***/
  function srcAppUiPipesSafeUrlPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafeUrlPipe", function () {
      return SafeUrlPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var SafeUrlPipe =
    /*#__PURE__*/
    function () {
      function SafeUrlPipe(sanitizer) {
        _classCallCheck(this, SafeUrlPipe);

        this.sanitizer = sanitizer;
      }

      _createClass(SafeUrlPipe, [{
        key: "transform",
        value: function transform(url) {
          return this.sanitizer.bypassSecurityTrustResourceUrl(url);
        }
      }]);

      return SafeUrlPipe;
    }();

    SafeUrlPipe.ɵfac = function SafeUrlPipe_Factory(t) {
      return new (t || SafeUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
    };

    SafeUrlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "safeUrl",
      type: SafeUrlPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeUrlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'safeUrl'
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui/ui.module.ts":
  /*!*********************************!*\
    !*** ./src/app/ui/ui.module.ts ***!
    \*********************************/

  /*! exports provided: UiModule */

  /***/
  function srcAppUiUiModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiModule", function () {
      return UiModule;
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


    var _components_window_window_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/window/window.component */
    "./src/app/ui/components/window/window.component.ts");
    /* harmony import */


    var _components_custom_custom_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/custom/custom.component */
    "./src/app/ui/components/custom/custom.component.ts");
    /* harmony import */


    var _components_split_split_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/split/split.component */
    "./src/app/ui/components/split/split.component.ts");
    /* harmony import */


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/menu/menu.component */
    "./src/app/ui/components/menu/menu.component.ts");
    /* harmony import */


    var _components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/tooltip/tooltip.component */
    "./src/app/ui/components/tooltip/tooltip.component.ts");
    /* harmony import */


    var _navigable_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./navigable/navbar/navbar.component */
    "./src/app/ui/navigable/navbar/navbar.component.ts");
    /* harmony import */


    var _components_editor_editor_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/editor/editor.module */
    "./src/app/ui/components/editor/editor.module.ts");
    /* harmony import */


    var _components_external_external_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/external/external.component */
    "./src/app/ui/components/external/external.component.ts");
    /* harmony import */


    var _components_external_window_external_window_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/external-window/external-window.component */
    "./src/app/ui/components/external-window/external-window.component.ts");
    /* harmony import */


    var _components_custom_tooltip_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/custom-tooltip/custom-tooltip.component */
    "./src/app/ui/components/custom-tooltip/custom-tooltip.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/ui/components/header/header.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/ui/components/footer/footer.component.ts");
    /* harmony import */


    var primeng__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! primeng */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng.js");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pipes/pipes.module */
    "./src/app/ui/pipes/pipes.module.ts");
    /* harmony import */


    var _components_external_iframe_iframe_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/external/iframe/iframe.component */
    "./src/app/ui/components/external/iframe/iframe.component.ts");
    /* harmony import */


    var _components_external_web_web_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/external/web/web.component */
    "./src/app/ui/components/external/web/web.component.ts");
    /* harmony import */


    var _navigable_navigable_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./navigable/navigable.component */
    "./src/app/ui/navigable/navigable.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_window_content_window_content_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/window-content/window-content.component */
    "./src/app/ui/components/window-content/window-content.component.ts");
    /* harmony import */


    var _components_external_configuration_external_configuration_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/external-configuration/external-configuration.component */
    "./src/app/ui/components/external-configuration/external-configuration.component.ts");

    var UiModule = function UiModule() {
      _classCallCheck(this, UiModule);
    };

    UiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UiModule
    });
    UiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UiModule_Factory(t) {
        return new (t || UiModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_editor_editor_module__WEBPACK_IMPORTED_MODULE_8__["EditorModule"], primeng__WEBPACK_IMPORTED_MODULE_14__["SidebarModule"], primeng__WEBPACK_IMPORTED_MODULE_14__["OverlayPanelModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UiModule, {
        declarations: [_components_window_window_component__WEBPACK_IMPORTED_MODULE_2__["WindowComponent"], _components_custom_custom_component__WEBPACK_IMPORTED_MODULE_3__["CustomComponent"], _components_split_split_component__WEBPACK_IMPORTED_MODULE_4__["SplitComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"], _components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_6__["TooltipComponent"], _navigable_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _components_external_external_component__WEBPACK_IMPORTED_MODULE_9__["ExternalComponent"], _components_external_window_external_window_component__WEBPACK_IMPORTED_MODULE_10__["ExternalWindowComponent"], _components_custom_tooltip_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_11__["CustomTooltipComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _components_external_iframe_iframe_component__WEBPACK_IMPORTED_MODULE_16__["IframeComponent"], _components_external_web_web_component__WEBPACK_IMPORTED_MODULE_17__["WebComponent"], _navigable_navigable_component__WEBPACK_IMPORTED_MODULE_18__["NavigableComponent"], _components_window_content_window_content_component__WEBPACK_IMPORTED_MODULE_20__["WindowContentComponent"], _components_external_configuration_external_configuration_component__WEBPACK_IMPORTED_MODULE_21__["ExternalConfigurationComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_editor_editor_module__WEBPACK_IMPORTED_MODULE_8__["EditorModule"], primeng__WEBPACK_IMPORTED_MODULE_14__["SidebarModule"], primeng__WEBPACK_IMPORTED_MODULE_14__["OverlayPanelModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"]],
        exports: [_components_custom_custom_component__WEBPACK_IMPORTED_MODULE_3__["CustomComponent"], _navigable_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _components_external_window_external_window_component__WEBPACK_IMPORTED_MODULE_10__["ExternalWindowComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_window_window_component__WEBPACK_IMPORTED_MODULE_2__["WindowComponent"], _components_custom_custom_component__WEBPACK_IMPORTED_MODULE_3__["CustomComponent"], _components_split_split_component__WEBPACK_IMPORTED_MODULE_4__["SplitComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"], _components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_6__["TooltipComponent"], _navigable_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _components_external_external_component__WEBPACK_IMPORTED_MODULE_9__["ExternalComponent"], _components_external_window_external_window_component__WEBPACK_IMPORTED_MODULE_10__["ExternalWindowComponent"], _components_custom_tooltip_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_11__["CustomTooltipComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _components_external_iframe_iframe_component__WEBPACK_IMPORTED_MODULE_16__["IframeComponent"], _components_external_web_web_component__WEBPACK_IMPORTED_MODULE_17__["WebComponent"], _navigable_navigable_component__WEBPACK_IMPORTED_MODULE_18__["NavigableComponent"], _components_window_content_window_content_component__WEBPACK_IMPORTED_MODULE_20__["WindowContentComponent"], _components_external_configuration_external_configuration_component__WEBPACK_IMPORTED_MODULE_21__["ExternalConfigurationComponent"]],
          exports: [_components_custom_custom_component__WEBPACK_IMPORTED_MODULE_3__["CustomComponent"], _navigable_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _components_external_window_external_window_component__WEBPACK_IMPORTED_MODULE_10__["ExternalWindowComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_editor_editor_module__WEBPACK_IMPORTED_MODULE_8__["EditorModule"], primeng__WEBPACK_IMPORTED_MODULE_14__["SidebarModule"], primeng__WEBPACK_IMPORTED_MODULE_14__["OverlayPanelModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/workspace/workspace.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/workspace/workspace.component.ts ***!
    \**************************************************/

  /*! exports provided: WorkspaceComponent */

  /***/
  function srcAppWorkspaceWorkspaceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkspaceComponent", function () {
      return WorkspaceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../core/services/data.service */
    "./src/app/core/services/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ui_components_custom_custom_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../ui/components/custom/custom.component */
    "./src/app/ui/components/custom/custom.component.ts");

    function WorkspaceComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "eim-custom", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var workspace_r1 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("component", workspace_r1);
      }
    }

    var WorkspaceComponent =
    /*#__PURE__*/
    function () {
      function WorkspaceComponent(dataService) {
        _classCallCheck(this, WorkspaceComponent);

        this.dataService = dataService;
      }

      _createClass(WorkspaceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.workspace$ = this.dataService.getWorkspace();
        }
      }]);

      return WorkspaceComponent;
    }();

    WorkspaceComponent.ɵfac = function WorkspaceComponent_Factory(t) {
      return new (t || WorkspaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
    };

    WorkspaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WorkspaceComponent,
      selectors: [["eim-workspace"]],
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [1, "stretch", 3, "component"]],
      template: function WorkspaceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WorkspaceComponent_ng_container_0_Template, 2, 1, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.workspace$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ui_components_custom_custom_component__WEBPACK_IMPORTED_MODULE_3__["CustomComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
      styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n}\n\neim-custom[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29ya3NwYWNlL0M6XFxVc2Vyc1xcMTFCb3JuMkRpZTExXFxJZGVhUHJvamVjdHNcXGxvYW5sZWFkXFx3ZWJcXHNyY1xcYW5ndWxhci9zcmNcXGFwcFxcd29ya3NwYWNlXFx3b3Jrc3BhY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3dvcmtzcGFjZS93b3Jrc3BhY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsMEJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC93b3Jrc3BhY2Uvd29ya3NwYWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbn1cclxuXHJcbmVpbS1jdXN0b20ge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbn1cblxuZWltLWN1c3RvbSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkspaceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'eim-workspace',
          templateUrl: './workspace.component.html',
          styleUrls: ['./workspace.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/workspace/workspace.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/workspace/workspace.module.ts ***!
    \***********************************************/

  /*! exports provided: WorkspaceModule */

  /***/
  function srcAppWorkspaceWorkspaceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkspaceModule", function () {
      return WorkspaceModule;
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


    var _workspace_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./workspace.component */
    "./src/app/workspace/workspace.component.ts");
    /* harmony import */


    var _ui_ui_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../ui/ui.module */
    "./src/app/ui/ui.module.ts");

    var WorkspaceModule = function WorkspaceModule() {
      _classCallCheck(this, WorkspaceModule);
    };

    WorkspaceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: WorkspaceModule
    });
    WorkspaceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function WorkspaceModule_Factory(t) {
        return new (t || WorkspaceModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ui_ui_module__WEBPACK_IMPORTED_MODULE_3__["UiModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WorkspaceModule, {
        declarations: [_workspace_component__WEBPACK_IMPORTED_MODULE_2__["WorkspaceComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ui_ui_module__WEBPACK_IMPORTED_MODULE_3__["UiModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkspaceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_workspace_component__WEBPACK_IMPORTED_MODULE_2__["WorkspaceComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ui_ui_module__WEBPACK_IMPORTED_MODULE_3__["UiModule"]]
        }]
      }], null, null);
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