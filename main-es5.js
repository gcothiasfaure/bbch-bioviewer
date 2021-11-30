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
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); //import { LayersComponent } from './components/layers/layers.component';


    var routes = [//{ path: 'layers', component: LayersComponent },
    ];

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
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
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


    var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! leaflet */
    "./node_modules/leaflet/dist/leaflet-src.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _conf_wfst_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./conf/wfst-plugin */
    "./src/app/conf/wfst-plugin.ts"); // Ajouter OnInit pour effectuer des opérations à l'initialisation du composant.


    function AppComponent_app_menu_outils_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu-outils");
      }
    }

    function AppComponent_app_layers_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-layers");
      }
    }

    function AppComponent_app_recherche_selection_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-recherche-selection");
      }
    }

    function AppComponent_app_module_recherche_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-module-recherche");
      }
    } // Implémenter OnInit


    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.mapboxAccessToken = "pk.eyJ1Ijoic3VwZXJwaWthciIsImEiOiI0MGE3NGQ2OWNkMzkyMzFlMzE4OWU5Yjk0ZmYzMGMwOCJ9.3bGFHjoSXB8yVA3KeQoOIw"; //Va servir pour cacher les éléments sur la carte lors de l'impression:

        this.printing = false; //Sert à afficher le component info-couche pour avoir des infos sur la couche affichée

        this.affiching = false;
      }
      /**
        * Setteur de printing
        * @param {bool} x
       */


      _createClass(AppComponent, [{
        key: "setPrinting",
        value: function setPrinting(x) {
          this.printing = x;
        }
        /**
          * Setteur de affiching
          * @param {bool} x
         */

      }, {
        key: "setAffiching",
        value: function setAffiching(x) {
          this.affiching = x;
        }
        /**
          * getteur de map
          * @return {map}
         */

      }, {
        key: "getMap",
        value: function getMap() {
          return this.map;
        }
        /**
          * getteur de mapboxAccessToken
          * @return {string}
         */

      }, {
        key: "getMapboxAccessToken",
        value: function getMapboxAccessToken() {
          return this.mapboxAccessToken;
        }
        /**
          * Initie la carte
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          //On définie la carte
          this.map = Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["map"])('mymap').setView([44.65, 6.12], 5); //On ajoute la basemap de départ

          var street_mapbox = Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"])('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox.streets',
            accessToken: this.mapboxAccessToken
          }).addTo(this.map);
        }
        /**
          * Récupère les données du plugin et les affiche sur la carte
          * @param {string} nomWorkspace
          * @param {string} nomCouche
          * @param {string} couleur
          * @param {string} or {L.rectangle} filtre
         */

      }, {
        key: "addPlugin",
        value: function addPlugin(att1, att2, att3, att4) {
          //on récupère la couche grâce au plugin et on l'affiche sur la carte
          var plugin1 = Object(_conf_wfst_plugin__WEBPACK_IMPORTED_MODULE_2__["initPlugin"])(att1, att2, att3, att4);
          plugin1.addTo(this.map);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 7,
      vars: 5,
      consts: [["id", "mymap"], [4, "ngIf"], [3, "hidden"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_app_menu_outils_2_Template, 1, 0, "app-menu-outils", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_app_layers_3_Template, 1, 0, "app-layers", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_app_recherche_selection_4_Template, 1, 0, "app-recherche-selection", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_app_module_recherche_5_Template, 1, 0, "app-module-recherche", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-info-couche", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.printing);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.printing);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.printing);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.printing);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.affiching);
        }
      },
      styles: ["#mymap[_ngcontent-%COMP%] {\n\tz-index: 0;\n  height: 100%;\n  width: 100%;\n}\n\napp-menu-outils[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 15px;\n  display: -webkit-box;\n  display: flex;\n}\n\napp-module-recherche[_ngcontent-%COMP%]{\n\tposition: absolute;\n\tleft : 20px;\n\tbottom: 20px;\n}\n\napp-recherche-selection[_ngcontent-%COMP%]{\n\tposition: absolute;\n\tright: 1%;\n\ttop: 40%;\n}\n\napp-info-couche[_ngcontent-%COMP%]{\n\tposition: absolute;\n\tright: 30px;\n\tbottom: 50px;\n}\n\napp-layers[_ngcontent-%COMP%]{\n\tz-index: 2;\n\tmargin-left: 8px;\n\twidth :20%;\n\tposition: absolute;\n\ttop: 20%;\n\tleft:0%;\n}\n\na[_ngcontent-%COMP%]{\n\tcolor: whitesmoke;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxVQUFVO0VBQ1QsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLG9CQUFhO0VBQWIsYUFBYTtBQUNmOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsU0FBUztDQUNULFFBQVE7QUFDVDs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsWUFBWTtBQUNiOztBQUVBO0NBQ0MsVUFBVTtDQUNWLGdCQUFnQjtDQUNoQixVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixPQUFPO0FBQ1I7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNteW1hcCB7XG5cdHotaW5kZXg6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmFwcC1tZW51LW91dGlscyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuYXBwLW1vZHVsZS1yZWNoZXJjaGV7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0bGVmdCA6IDIwcHg7XG5cdGJvdHRvbTogMjBweDtcbn1cblxuYXBwLXJlY2hlcmNoZS1zZWxlY3Rpb257XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0cmlnaHQ6IDElO1xuXHR0b3A6IDQwJTtcbn1cblxuYXBwLWluZm8tY291Y2hle1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHJpZ2h0OiAzMHB4O1xuXHRib3R0b206IDUwcHg7XG59XG5cbmFwcC1sYXllcnN7XG5cdHotaW5kZXg6IDI7XG5cdG1hcmdpbi1sZWZ0OiA4cHg7XG5cdHdpZHRoIDoyMCU7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAyMCU7XG5cdGxlZnQ6MCU7XG59XG5cbmF7XG5cdGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
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


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_layers_layers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/layers/layers.component */
    "./src/app/components/layers/layers.component.ts");
    /* harmony import */


    var _components_menu_outils_menu_outils_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/menu-outils/menu-outils.component */
    "./src/app/components/menu-outils/menu-outils.component.ts");
    /* harmony import */


    var _components_sous_menus_outils_sous_menu_basemap_sous_menu_basemap_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/sous-menus-outils/sous-menu-basemap/sous-menu-basemap.component */
    "./src/app/components/sous-menus-outils/sous-menu-basemap/sous-menu-basemap.component.ts");
    /* harmony import */


    var _components_sous_menus_outils_sous_menu_contours_territ_sous_menu_contours_territ_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/sous-menus-outils/sous-menu-contours-territ/sous-menu-contours-territ.component */
    "./src/app/components/sous-menus-outils/sous-menu-contours-territ/sous-menu-contours-territ.component.ts");
    /* harmony import */


    var _components_module_recherche_module_recherche_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/module-recherche/module-recherche.component */
    "./src/app/components/module-recherche/module-recherche.component.ts");
    /* harmony import */


    var _components_sous_menus_outils_sous_menu_mesure_sous_menu_mesure_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/sous-menus-outils/sous-menu-mesure/sous-menu-mesure.component */
    "./src/app/components/sous-menus-outils/sous-menu-mesure/sous-menu-mesure.component.ts");
    /* harmony import */


    var _components_recherche_selection_recherche_selection_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/recherche-selection/recherche-selection.component */
    "./src/app/components/recherche-selection/recherche-selection.component.ts");
    /* harmony import */


    var _components_info_couche_info_couche_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/info-couche/info-couche.component */
    "./src/app/components/info-couche/info-couche.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js"); //Import des Components
    //Import des APIs
    //Imports des APIs Material


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_components_layers_layers_component__WEBPACK_IMPORTED_MODULE_2__["LayersComponent"], _components_info_couche_info_couche_component__WEBPACK_IMPORTED_MODULE_9__["InfoCoucheComponent"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_14__["TextFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["FormsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__["MatDividerModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_31__["MatBadgeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], _components_layers_layers_component__WEBPACK_IMPORTED_MODULE_2__["LayersComponent"], _components_menu_outils_menu_outils_component__WEBPACK_IMPORTED_MODULE_3__["MenuOutilsComponent"], _components_sous_menus_outils_sous_menu_basemap_sous_menu_basemap_component__WEBPACK_IMPORTED_MODULE_4__["SousMenuBasemapComponent"], _components_sous_menus_outils_sous_menu_contours_territ_sous_menu_contours_territ_component__WEBPACK_IMPORTED_MODULE_5__["SousMenuContoursTerritComponent"], _components_module_recherche_module_recherche_component__WEBPACK_IMPORTED_MODULE_6__["ModuleRechercheComponent"], _components_sous_menus_outils_sous_menu_mesure_sous_menu_mesure_component__WEBPACK_IMPORTED_MODULE_7__["SousMenuMesureComponent"], _components_recherche_selection_recherche_selection_component__WEBPACK_IMPORTED_MODULE_8__["RechercheSelectionComponent"], _components_info_couche_info_couche_component__WEBPACK_IMPORTED_MODULE_9__["InfoCoucheComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_14__["TextFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["FormsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__["MatDividerModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_31__["MatBadgeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], _components_layers_layers_component__WEBPACK_IMPORTED_MODULE_2__["LayersComponent"], _components_menu_outils_menu_outils_component__WEBPACK_IMPORTED_MODULE_3__["MenuOutilsComponent"], _components_sous_menus_outils_sous_menu_basemap_sous_menu_basemap_component__WEBPACK_IMPORTED_MODULE_4__["SousMenuBasemapComponent"], _components_sous_menus_outils_sous_menu_contours_territ_sous_menu_contours_territ_component__WEBPACK_IMPORTED_MODULE_5__["SousMenuContoursTerritComponent"], _components_module_recherche_module_recherche_component__WEBPACK_IMPORTED_MODULE_6__["ModuleRechercheComponent"], _components_sous_menus_outils_sous_menu_mesure_sous_menu_mesure_component__WEBPACK_IMPORTED_MODULE_7__["SousMenuMesureComponent"], _components_recherche_selection_recherche_selection_component__WEBPACK_IMPORTED_MODULE_8__["RechercheSelectionComponent"], _components_info_couche_info_couche_component__WEBPACK_IMPORTED_MODULE_9__["InfoCoucheComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_14__["TextFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["FormsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__["MatDividerModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_31__["MatBadgeModule"]],
          providers: [_components_layers_layers_component__WEBPACK_IMPORTED_MODULE_2__["LayersComponent"], _components_info_couche_info_couche_component__WEBPACK_IMPORTED_MODULE_9__["InfoCoucheComponent"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetComponentScope"](_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], _components_layers_layers_component__WEBPACK_IMPORTED_MODULE_2__["LayersComponent"], _components_menu_outils_menu_outils_component__WEBPACK_IMPORTED_MODULE_3__["MenuOutilsComponent"], _components_sous_menus_outils_sous_menu_basemap_sous_menu_basemap_component__WEBPACK_IMPORTED_MODULE_4__["SousMenuBasemapComponent"], _components_sous_menus_outils_sous_menu_contours_territ_sous_menu_contours_territ_component__WEBPACK_IMPORTED_MODULE_5__["SousMenuContoursTerritComponent"], _components_module_recherche_module_recherche_component__WEBPACK_IMPORTED_MODULE_6__["ModuleRechercheComponent"], _components_sous_menus_outils_sous_menu_mesure_sous_menu_mesure_component__WEBPACK_IMPORTED_MODULE_7__["SousMenuMesureComponent"], _components_recherche_selection_recherche_selection_component__WEBPACK_IMPORTED_MODULE_8__["RechercheSelectionComponent"], _components_info_couche_info_couche_component__WEBPACK_IMPORTED_MODULE_9__["InfoCoucheComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_33__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_33__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_33__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_33__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_33__["ɵangular_packages_router_router_l"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSlider"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_34__["Dir"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanelActionRow"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanelDescription"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanelContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardTitleGroup"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardSmImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardMdImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardLgImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardXlImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardAvatar"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocomplete"], _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["MatOption"], _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["MatOptgroup"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteOrigin"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabLabel"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabNav"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabLink"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabContent"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_14__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_14__["CdkTextareaAutosize"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_36__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_36__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_36__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_36__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_36__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_36__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_36__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatTextareaAutosize"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioButton"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckbox"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxRequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatAnchor"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltip"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["TooltipComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIcon"], _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelectTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["NgForm"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListItem"], _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListAvatarCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["MatLine"], _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListIconCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListSubheaderCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["MatPseudoCheckbox"], _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatSelectionList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListOption"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinner"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatSpinner"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_31__["MatBadge"]], [_angular_common__WEBPACK_IMPORTED_MODULE_32__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["KeyValuePipe"]]);

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetComponentScope"](_components_menu_outils_menu_outils_component__WEBPACK_IMPORTED_MODULE_3__["MenuOutilsComponent"], [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], _components_layers_layers_component__WEBPACK_IMPORTED_MODULE_2__["LayersComponent"], _components_menu_outils_menu_outils_component__WEBPACK_IMPORTED_MODULE_3__["MenuOutilsComponent"], _components_sous_menus_outils_sous_menu_basemap_sous_menu_basemap_component__WEBPACK_IMPORTED_MODULE_4__["SousMenuBasemapComponent"], _components_sous_menus_outils_sous_menu_contours_territ_sous_menu_contours_territ_component__WEBPACK_IMPORTED_MODULE_5__["SousMenuContoursTerritComponent"], _components_module_recherche_module_recherche_component__WEBPACK_IMPORTED_MODULE_6__["ModuleRechercheComponent"], _components_sous_menus_outils_sous_menu_mesure_sous_menu_mesure_component__WEBPACK_IMPORTED_MODULE_7__["SousMenuMesureComponent"], _components_recherche_selection_recherche_selection_component__WEBPACK_IMPORTED_MODULE_8__["RechercheSelectionComponent"], _components_info_couche_info_couche_component__WEBPACK_IMPORTED_MODULE_9__["InfoCoucheComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_33__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_33__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_33__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_33__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_33__["ɵangular_packages_router_router_l"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSlider"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_34__["Dir"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanelActionRow"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanelDescription"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanelContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardTitleGroup"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardSmImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardMdImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardLgImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardXlImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardAvatar"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocomplete"], _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["MatOption"], _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["MatOptgroup"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteOrigin"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabLabel"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabNav"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabLink"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabContent"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_14__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_14__["CdkTextareaAutosize"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_36__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_36__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_36__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_36__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_36__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_36__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_36__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatTextareaAutosize"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioButton"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckbox"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxRequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatAnchor"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltip"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["TooltipComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIcon"], _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelectTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["NgForm"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListItem"], _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListAvatarCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["MatLine"], _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListIconCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListSubheaderCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["MatPseudoCheckbox"], _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatSelectionList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListOption"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinner"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatSpinner"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_31__["MatBadge"]], [_angular_common__WEBPACK_IMPORTED_MODULE_32__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["KeyValuePipe"]]);
    /***/

  },

  /***/
  "./src/app/components/info-couche/info-couche.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/info-couche/info-couche.component.ts ***!
    \*****************************************************************/

  /*! exports provided: InfoCoucheComponent */

  /***/
  function srcAppComponentsInfoCoucheInfoCoucheComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoCoucheComponent", function () {
      return InfoCoucheComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    var InfoCoucheComponent =
    /*#__PURE__*/
    function () {
      function InfoCoucheComponent() {
        _classCallCheck(this, InfoCoucheComponent);
      }

      _createClass(InfoCoucheComponent, [{
        key: "afficheCoucheNom",

        /**
          * Affiche les infos de couches par nom
          * @param {array} listCouches
         */
        value: function afficheCoucheNom(listCouches) {
          //On affiche que l'on affiche les couches par nom et on vide le contenu préalable
          document.getElementById('couche').innerHTML = 'nom';
          document.getElementById('aRemplir').innerHTML = ''; //Remplir la légende

          listCouches.forEach(function (elem) {
            document.getElementById('aRemplir').innerHTML += '<div style="background-color:' + elem[1] + ';height:10px; width: 10px;display:inline-block;"></div> ' + elem[0] + '<br>';
          });
        }
        /**
          * Affiche les infos de couches par nom
          * @param {array} listCouches
         */

      }, {
        key: "afficheCoucheType",
        value: function afficheCoucheType(listCouches) {
          //On affiche que l'on affiche les couches par nom et on vide le contenu préalable
          document.getElementById('couche').innerHTML = 'type';
          document.getElementById('aRemplir').innerHTML = ''; //Remplir la légende

          listCouches.forEach(function (elem) {
            document.getElementById('aRemplir').innerHTML += '<div style="background-color:' + elem[1] + ';height:10px; width: 10px;display:inline-block;"></div> ' + elem[0] + '<br>';
          });
        }
      }]);

      return InfoCoucheComponent;
    }();

    InfoCoucheComponent.ɵfac = function InfoCoucheComponent_Factory(t) {
      return new (t || InfoCoucheComponent)();
    };

    InfoCoucheComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InfoCoucheComponent,
      selectors: [["app-info-couche"]],
      decls: 8,
      vars: 0,
      consts: [["id", "cardInfo"], ["id", "divInfos"], ["id", "couche"], ["id", "aRemplir"]],
      template: function InfoCoucheComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Couches affich\xE9es par ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"]],
      styles: ["#aRemplir[_ngcontent-%COMP%]{\n  display:table;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmZvLWNvdWNoZS9pbmZvLWNvdWNoZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbmZvLWNvdWNoZS9pbmZvLWNvdWNoZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2FSZW1wbGlye1xuICBkaXNwbGF5OnRhYmxlO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoCoucheComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-info-couche',
          templateUrl: './info-couche.component.html',
          styleUrls: ['./info-couche.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/layers/conf/wfst-plugin.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/layers/conf/wfst-plugin.ts ***!
    \*******************************************************/

  /*! exports provided: initPlugin */

  /***/
  function srcAppComponentsLayersConfWfstPluginTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initPlugin", function () {
      return initPlugin;
    });
    /* harmony import */


    var _node_modules_leaflet_wfst_dist_leaflet_wfst_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../../../node_modules/leaflet-wfst/dist/leaflet-wfst.min.js */
    "./node_modules/leaflet-wfst/dist/leaflet-wfst.min.js");
    /* harmony import */


    var _node_modules_leaflet_wfst_dist_leaflet_wfst_min_js__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(_node_modules_leaflet_wfst_dist_leaflet_wfst_min_js__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../../environments/environment */
    "./src/environments/environment.ts");
    /**
     * Initialize the Leaflet plugin
     */


    function initPlugin(typeNS, typeName) {
      var wfstPointOptions = {
        crs: L.CRS.EPSG4326,
        showExisting: true,
        geometryField: 'geom',
        url: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].geoserverWFS,
        typeNS: typeNS,
        typeName: typeName,
        //maxFeatures: 100,
        opacity: 1,
        style: function style(layer) {
          // you can use if statemt etc
          return {
            color: 'black',
            weight: 1
          };
        }
      };
      return new L.WFST(wfstPointOptions, new L.Format.GeoJSON({
        crs: L.CRS.EPSG4326,
        pointToLayer: function pointToLayer(geoJsonPoint, latlng) {
          return new L.CircleMarker(latlng, {
            radius: 10
          });
        }
      }));
    }
    /***/

  },

  /***/
  "./src/app/components/layers/layers.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/layers/layers.component.ts ***!
    \*******************************************************/

  /*! exports provided: LayersComponent */

  /***/
  function srcAppComponentsLayersLayersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayersComponent", function () {
      return LayersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var xml2js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! xml2js */
    "./node_modules/xml2js/lib/xml2js.js");
    /* harmony import */


    var xml2js__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! leaflet */
    "./node_modules/leaflet/dist/leaflet-src.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _conf_wfst_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./conf/wfst-plugin */
    "./src/app/components/layers/conf/wfst-plugin.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_layers_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../services/layers-service.service */
    "./src/app/services/layers-service.service.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js"); // importer le module xml2js to transformer/parser un string xml en objet javascript 
    //importer leaflet pour ajouter les couches à la carte 
    // importer initPlugin pour instancier le plugin leaflet-wfst
    // importer environnement pour récuperer les urls du geoserver utilisés


    var _c0 = ["layerChoisie"];
    var _c1 = ["container"];
    var _c2 = ["buttonWMS"];

    function LayersComponent_mat_option_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var layer_name_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", layer_name_r9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", layer_name_r9, " ");
      }
    }

    function LayersComponent_ng_container_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayersComponent_ng_container_19_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var button_r10 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.loadLayer(button_r10.service);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var button_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", button_r10.disabled)("color", button_r10.color);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](button_r10.label);
      }
    }

    function LayersComponent_ng_container_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayersComponent_ng_container_25_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var layer_r13 = ctx.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.deleteLayer(layer_r13.layerObj, layer_r13.name);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-divider", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var layer_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", layer_r13.legendTitle, " ");
      }
    }

    var LayersComponent =
    /*#__PURE__*/
    function () {
      // on injecte le service layersService et le composant appCompoant dasn le constructeur de la classe pour pouvoir accéder à leurs fcts.
      function LayersComponent(layersService, appComponent) {
        _classCallCheck(this, LayersComponent);

        this.layersService = layersService;
        this.appComponent = appComponent;
        this.array_nom_couches = ['A'];
        this.array_nom_protocol = [];
        this.array_espace = [];
        this.array_service_LayerSelected = [];
        this.selected = '';
        this.num_selectedlayers = 0;
        this.array_espace_nom = []; // definir des attributs qui seront ajoutés aux éléments HTML

        this.htmlVariable = "";
        this.buttons = []; // bouttons pour les services de publication de chaque couche
        //=[{disabled: ..., color: '...', label: '...', service:".."}...]

        this.selectedLayers = []; // array qui stocke les couches séléctionnées par l'utilisateur et ajoutées à la carte leaflet 
      }

      _createClass(LayersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          //lors de l'initiation du composant, récuperer xml du CSW sous format texte.
          //subscribe() permet de manipuler les objets Observable (réponse de la requête)
          this.data = this.layersService.getXml().subscribe(function (data) {
            _this.xmlString = data;
            var stringxml = _this.xmlString; // parser xml et récuperer les 2 arrays : espace:nom_couche / [nom_couche , protocol]

            var arrays = _this.parsing_recup_XML(_this.xmlString);

            var array_espace_nom = arrays[0];
            var array_nom_protocol = arrays[1]; // récuperer seulement le nom des couches

            var array_nom = _this.recup_nom(array_espace_nom);

            var array_espace = _this.recup_espace(array_espace_nom); // ajouter les valeurs aux variables de la classe


            _this.array_espace_nom = array_espace_nom;
            _this.array_nom_couches = array_nom;
            _this.array_nom_protocol = array_nom_protocol;
            _this.array_espace = array_espace;
          });
        } // fct à utiliser dans le composant recherche
        // fct pour récuperer un array contenant les noms des couches publiées sur le geoserever

      }, {
        key: "recupNomcouche",
        value: function recupNomcouche() {
          return this.array_nom_couches;
        }
      }, {
        key: "recupNomespace",
        // fct pour récuperer un array contenant les espaces des couches publiées sur le geoserever
        value: function recupNomespace() {
          ;
          return this.array_espace;
        } // fct pour récuperer un array contenant les protocoles de publication 

      }, {
        key: "recupNomprotocol",
        value: function recupNomprotocol() {
          return this.array_nom_protocol;
        } // fct pour supprimer les couches ajoutées à la carte et dans l'element HTML Légende

      }, {
        key: "deleteLayer",
        value: function deleteLayer(layer, name) {
          //supprimer la couche de la carte
          this.appComponent.getMap().removeLayer(layer); // supprimer la couche de Légende

          for (var i = 0; i < this.selectedLayers.length; i++) {
            if (this.selectedLayers[i].name == name) {
              this.selectedLayers.splice(i, 1);
              break;
            }
          } //modifier le nombre des couches ajoutées à la carte


          this.num_selectedlayers = this.num_selectedlayers - 1;
        } // fct qui permet de construire la requete WMS pour une couche

      }, {
        key: "WMSLayer",
        value: function WMSLayer(LayerSelected, array_espace_nom) {
          var i;
          var str;
          var espace_travail;

          for (i in array_espace_nom) {
            str = array_espace_nom[i];
            var array = str.split(":");

            if (array[1] == LayerSelected) {
              espace_travail = array[0];
            }
          } // la fct tileLayer.wms de leaflet permer d'ajouter les couches publiées en WMS  


          var couche = leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"].wms(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].geoserverURL + espace_travail + "/wms?service=WMS", {
            layers: espace_travail + ':' + LayerSelected,
            format: 'image/png',
            transparent: true,
            attribution: LayerSelected,
            version: '1.1.0'
          });
          return couche;
        } //fct pour ajouter une couche WMS à la carte 

      }, {
        key: "addWMSLayer",
        value: function addWMSLayer(LayerSelected, array_espace_nom) {
          var couche = this.WMSLayer(LayerSelected, array_espace_nom).addTo(this.appComponent.getMap());
          console.log('add WMS layer');
          return couche;
        } //fct pour ajouter une couche WFS à la carte

      }, {
        key: "addWFSLayer",
        value: function addWFSLayer(LayerSelected, array_espace_nom) {
          var i;
          var str;
          var espace_travail;

          for (i in array_espace_nom) {
            str = array_espace_nom[i];
            var array = str.split(":");

            if (array[1] == LayerSelected) {
              espace_travail = array[0];
            }
          } //initier le plugin lefalet-wfst pour la couche choisie 


          var plugin = Object(_conf_wfst_plugin__WEBPACK_IMPORTED_MODULE_3__["initPlugin"])(espace_travail, LayerSelected);
          plugin.addTo(this.appComponent.getMap());
          return plugin;
        } // selon le choix d'utilisateur on ajoute les couche (choix de service)

      }, {
        key: "loadLayer",
        value: function loadLayer(service) {
          if (service == "WMS") {
            //ajouter la couche
            var lyr1 = this.addWMSLayer(this.layerSelected, this.array_espace_nom); //créer des elements à ajouter à la légende pour chaque WMS couche ajoutée  

            var str1 = this.layerSelected;
            var str2 = "WMS :" + this.layerSelected;
            this.num_selectedlayers = this.num_selectedlayers + 1;
            this.selectedLayers.push({
              name: str1,
              legendTitle: str2,
              layerObj: lyr1
            });
          }

          if (service == "WFS") {
            //ajouter la couche
            var lyr2 = this.addWFSLayer(this.layerSelected, this.array_espace_nom); //créer des elements à ajouter à la légende pour chaque WFS couche ajoutée 

            var str1 = this.layerSelected;
            var str2 = "WFS :" + this.layerSelected;
            this.num_selectedlayers = this.num_selectedlayers + 1;
            this.selectedLayers.push({
              name: str1,
              legendTitle: str2,
              layerObj: lyr2
            });
          }
        } // fct pour permettre à l'utilisateur de choisir la couche qu'il veut afficher sur la carte

      }, {
        key: "SelectLayer",
        value: function SelectLayer(value, array_nom_protocol) {
          // recreer les bouttons pour la couches sélectionée
          this.buttons = [];
          this.layerSelected = value;
          var array_service = [];
          var i, j;
          var str; // recuperer les services de publication de la couche choisie dans un array

          for (i in array_nom_protocol) {
            str = array_nom_protocol[i][0];
            var array = str.split(":");
            console.log(array[1]);

            if (array[1] == value) {
              array_service.push(array_nom_protocol[i][1]);
            }
          } // ajouter les informations aux elemnts HTML


          this.array_service_LayerSelected = array_service;
          var ligne1 = "<br> <p>Services de publication disponibles : </p>";
          var serviceWMS;
          var serviceWFS;

          for (j in array_service) {
            if (array_service[i] = "OGC:WMS") {
              serviceWMS = true;
            }

            if (array_service[i] = "OGC:WFS") {
              serviceWFS = true;
            }
          }

          this.htmlVariable = ligne1;

          if (serviceWMS) {
            var buttonWMS = this.buttons.push({
              disabled: false,
              color: 'primary',
              label: 'Ajouter couche WMS',
              service: "WMS"
            });
          }

          if (serviceWFS) {
            var buttonWFS = this.buttons.push({
              disabled: false,
              color: 'primary',
              label: 'Ajouter couche WFS',
              service: "WFS"
            });
          }
        } // fct pour récuperer les noms des couches publiées.

      }, {
        key: "recup_nom",
        value: function recup_nom(array_espace_nom) {
          var array_nom = [];
          var str;
          var i;

          for (i in array_espace_nom) {
            str = array_espace_nom[i];
            var array = str.split(":");
            array_nom.push(array[1]);
          }

          return array_nom;
        } // fct pour récuperer les espaces des couches publiées.

      }, {
        key: "recup_espace",
        value: function recup_espace(array_espace_nom) {
          var array_espace = [];
          var str;
          var i;

          for (i in array_espace_nom) {
            str = array_espace_nom[i];
            var array = str.split(":");
            array_espace.push(array[0]);
          }

          return array_espace;
        } // fct qui permet de parser lxm et parcourir l'objet JS pour récuperer les metadonnées des couches publiées.

      }, {
        key: "parsing_recup_XML",
        value: function parsing_recup_XML(textXML) {
          //définition du parser 
          var parser = new xml2js__WEBPACK_IMPORTED_MODULE_1__["Parser"]({
            trim: true,
            explicitArray: true
          }); // définir les variables

          var k;
          var i;
          var array_nom = [];
          var array_res = [];
          var array_nom_protocol = [];
          var inlineRes; // parser xml sous format txt

          parser.parseString(textXML, function (err, result) {
            // récuperer les objets gmd du CSW 
            var obj_gmd = result['csw:GetRecordsResponse']['csw:SearchResults'][0]['gmd:MD_Metadata']; // récuperer les (noms+espaces) de toutes les couches dans un array

            for (k in obj_gmd) {
              var nom = obj_gmd[k]['gmd:fileIdentifier'][0]['gco:CharacterString'][0];
              array_nom.push(nom);
              inlineRes = obj_gmd[k]['gmd:distributionInfo'][0]['gmd:MD_Distribution'][0]['gmd:transferOptions'][0]['gmd:MD_DigitalTransferOptions'][0]['gmd:onLine'][0]['gmd:CI_OnlineResource'];
              array_res.push(inlineRes); // récuperer les protocoles des couches. 

              for (i in inlineRes) {
                var elmnt_array = inlineRes[i];
                var protocol = elmnt_array['gmd:protocol'][0]['gco:CharacterString'][0];
                array_nom_protocol.push([nom, protocol]);
              }
            }
          });
          return [array_nom, array_nom_protocol];
        }
      }]);

      return LayersComponent;
    }();

    LayersComponent.ɵfac = function LayersComponent_Factory(t) {
      return new (t || LayersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layers_service_service__WEBPACK_IMPORTED_MODULE_5__["LayersServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]));
    };

    LayersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LayersComponent,
      selectors: [["app-layers"]],
      viewQuery: function LayersComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.layerChoisie = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.buttonWMS = _t.first);
        }
      },
      decls: 29,
      vars: 7,
      consts: [["multi", "false"], [1, "Catalog"], [3, "value", "valueChange"], ["layerChoisie", ""], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 3, "click"], [3, "innerHtml"], ["container", ""], [4, "ngFor", "ngForOf"], [1, "layers"], ["matTooltip", "nombre de couches sur la carte", "matTooltipPosition", "right", 1, "divBadge"], ["matBadgeColor", "warn", 3, "matBadge"], [3, "value"], ["mat-raised-button", "", 1, "butt", 3, "disabled", "color", "click"], ["mat-mini-fab", "", "color", "warn", "aria-label", "Example icon button with a delete icon", 3, "click"], ["color", "white"]],
      template: function LayersComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-accordion", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Catalogue des couches WMS et WFS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Couches disponibles :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Choisir une couche ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-select", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function LayersComponent_Template_mat_select_valueChange_10_listener($event) {
            return ctx.selected = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LayersComponent_mat_option_12_Template, 2, 2, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayersComponent_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

            return ctx.SelectLayer(_r4.value, ctx.array_nom_protocol);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Choisir cette couche ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LayersComponent_ng_container_19_Template, 5, 3, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-expansion-panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " L\xE9gende ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, LayersComponent_ng_container_25_Template, 8, 1, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "ballot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.array_nom_couches);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("You selected: ", ctx.selected, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.htmlVariable, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.buttons);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectedLayers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matBadge", ctx.num_selectedlayers);
        }
      },
      directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelHeader"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelTitle"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__["MatBadge"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListItem"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDivider"]],
      styles: [".layers[_ngcontent-%COMP%]{\n    max-height: 105px;\n    overflow-y: scroll;\n}\n.Catalog[_ngcontent-%COMP%]{\n    max-height: 220px;\n    overflow-y: scroll;\n}\n.butt[_ngcontent-%COMP%]{\n    background-color: green;\n  }\n.divBadge[_ngcontent-%COMP%]{\n    position: absolute;\n    top: 0px;\n    left : 100%;\n    border-radius: 5px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXllcnMvbGF5ZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSx1QkFBdUI7RUFDekI7QUFFRjtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUNYLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5ZXJzL2xheWVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxheWVyc3tcbiAgICBtYXgtaGVpZ2h0OiAxMDVweDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4uQ2F0YWxvZ3tcbiAgICBtYXgtaGVpZ2h0OiAyMjBweDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5idXR0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICB9XG5cbi5kaXZCYWRnZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdCA6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-layers',
          templateUrl: './layers.component.html',
          styleUrls: ['./layers.component.css']
        }]
      }], function () {
        return [{
          type: _services_layers_service_service__WEBPACK_IMPORTED_MODULE_5__["LayersServiceService"]
        }, {
          type: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
        }];
      }, {
        layerChoisie: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["layerChoisie", {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }]
        }],
        container: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["container"]
        }],
        buttonWMS: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["buttonWMS"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/menu-outils/menu-outils.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/menu-outils/menu-outils.component.ts ***!
    \*****************************************************************/

  /*! exports provided: MenuOutilsComponent */

  /***/
  function srcAppComponentsMenuOutilsMenuOutilsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuOutilsComponent", function () {
      return MenuOutilsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../app.component */
    "./src/app/app.component.ts");

    function MenuOutilsComponent_app_sous_menu_basemap_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sous-menu-basemap");
      }
    }

    function MenuOutilsComponent_app_sous_menu_contours_territ_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sous-menu-contours-territ");
      }
    }

    function MenuOutilsComponent_app_sous_menu_mesure_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sous-menu-mesure");
      }
    }

    function MenuOutilsComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuOutilsComponent_div_8_Template_mat_icon_click_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.afficheSousMenu($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "layers");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuOutilsComponent_div_8_Template_mat_icon_click_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.afficheSousMenu($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "emoji_flags");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r20.toolTipForBasemapBouton);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r20.toolTipForContoursTerritoiresBouton);
      }
    }

    function MenuOutilsComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuOutilsComponent_div_13_Template_mat_icon_click_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.afficheSousMenu($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "square_foot");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuOutilsComponent_div_13_Template_mat_icon_click_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.afficheSousMenu($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "print");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r21.toolTipForMesureBouton)("disabled", ctx_r21.menuDisabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r21.toolTipForImpressionBouton)("disabled", ctx_r21.menuDisabled);
      }
    }

    var MenuOutilsComponent =
    /*#__PURE__*/
    function () {
      /**
        * Appel des components parents si on en a besoin
       */
      function MenuOutilsComponent(appComponent) {
        _classCallCheck(this, MenuOutilsComponent);

        this.appComponent = appComponent; //variable pour disable les boutons pendant la mesure sur la carte

        this.menuDisabled = false; //variables d'affichage des sous catégories de boutons

        this.sousBoutonsOptionsCarteVisibility = false;
        this.sousBoutonsOutilsVisibility = false; //variables d'affichage des cards

        this.sousMenuBasemapVisibility = false;
        this.sousMenuContoursTerritoiresVisibility = false;
        this.sousMenuMesureVisibility = false;
      } /////////getters pour visibilité des sous menus

      /**
        * Getteur de sousMenuBasemapVisibility
        * @return {bool}
       */


      _createClass(MenuOutilsComponent, [{
        key: "getSousMenuBasemapVisibility",
        value: function getSousMenuBasemapVisibility() {
          return this.sousMenuBasemapVisibility;
        }
        /**
          * Getteur de sousMenuContoursTerritoiresVisibility
          * @return {bool}
         */

      }, {
        key: "getSousMenuContoursTerritoiresVisibility",
        value: function getSousMenuContoursTerritoiresVisibility() {
          return this.sousMenuContoursTerritoiresVisibility;
        }
        /**
          * Getteur de sousMenuMesureVisibility
          * @return {bool}
         */

      }, {
        key: "getSousMenuMesureVisibility",
        value: function getSousMenuMesureVisibility() {
          return this.sousMenuMesureVisibility;
        } /////////setters pour visibilité des sous menus

        /**
          * Setteur de sousMenuBasemapVisibility
          * @param {bool} x
         */

      }, {
        key: "setSousMenuBasemapVisibility",
        value: function setSousMenuBasemapVisibility(x) {
          this.sousMenuBasemapVisibility = x;
        }
        /**
          * Setteur de sousMenuContoursTerritoiresVisibility
          * @param {bool} x
         */

      }, {
        key: "setSousMenuContoursTerritoiresVisibility",
        value: function setSousMenuContoursTerritoiresVisibility(x) {
          this.sousMenuContoursTerritoiresVisibility = x;
        }
        /**
          * Setteur de sousMenuMesureVisibility
          * @param {bool} x
         */

      }, {
        key: "setSousMenuMesureVisibility",
        value: function setSousMenuMesureVisibility(x) {
          this.sousMenuMesureVisibility = x;
        }
        /**
          * Affilie à chaque variable le tooltip correspondant
         */

      }, {
        key: "setTooltip",
        value: function setTooltip() {
          this.toolTipForBasemapBouton = "Choisir le fond de carte";
          this.toolTipForContoursTerritoiresBouton = "Afficher les frontières administratives";
          this.toolTipForMesureBouton = 'Mesurer sur la carte';
          this.toolTipForImpressionBouton = 'Impression de la carte';
        }
        /**
          * Affiche les sous bouttons partie option carte
          * @param {event} e
         */

      }, {
        key: "afficheConteneurSousBoutonsOptionsCarte",
        value: function afficheConteneurSousBoutonsOptionsCarte(e) {
          //On rend visible l'elelement en rendant true la valeur de la variable correspondante
          this.sousBoutonsOptionsCarteVisibility = !this.sousBoutonsOptionsCarteVisibility; //On réinitialise les tooltips au cas ou était sur une autre card

          this.setTooltip(); //On ferme tous les cards

          this.fermeSousMenu(); //On ferme les sous-boutton sde l'autre categorie et on lui remet style par defaut

          this.sousBoutonsOutilsVisibility = false;
          this.setBackgroundColor('conteneur-boutons-outils', false, ''); //Si on ouvre la sous-cat on grise sinon style par défaut

          this.setBackgroundColor(e.srcElement.offsetParent.parentElement, this.sousBoutonsOptionsCarteVisibility, '#656565');
        }
        /**
          * Affiche les sous bouttons partie outils
          * @param {event} e
         */

      }, {
        key: "afficheConteneurSousBoutonsOutils",
        value: function afficheConteneurSousBoutonsOutils(e) {
          //On rend visible l'elelement en rendant true la valeur de la variable correspondante
          this.sousBoutonsOutilsVisibility = !this.sousBoutonsOutilsVisibility; //On réinitialise les tooltips au cas ou était sur une autre card

          this.setTooltip(); //On ferme tous les cards

          this.fermeSousMenu(); //On ferme les sous-boutton sde l'autre categorie et on lui remet style par defaut

          this.setBackgroundColor('conteneur-boutons-options-carte', false, '');
          this.sousBoutonsOptionsCarteVisibility = false; //Si on ouvre la sous-cat on grise sinon style par défaut

          this.setBackgroundColor(e.srcElement.offsetParent.parentElement, this.sousBoutonsOutilsVisibility, '#656565');
        }
        /**
          * Affiche les sous-menus
          * @param {event} e
         */

      }, {
        key: "afficheSousMenu",
        value: function afficheSousMenu(e) {
          if (e.srcElement.id === "petite-icone-basemap") {
            //la variable de visibilité passe à true
            this.sousMenuBasemapVisibility = !this.sousMenuBasemapVisibility; //On réinitialise les tooltips au cas ou était sur une autre card

            this.setTooltip(); //On rend vert l'icone et blanche l'autre du sous-menu

            this.setIconColor('petite-icone-contours-territoires', false, '');
            this.setIconColor(e.srcElement, this.sousMenuBasemapVisibility, "#8BE7BA"); //Si on ouvre le card, on change le tooltip

            if (this.sousMenuBasemapVisibility) {
              this.toolTipForBasemapBouton = 'Fermer';
            } //On supprime le gris de l'autre sous boutons de la categorie


            this.setBackgroundColor('petit-bouton-contours-territoires', false, ''); //On supprime toutes les autres cards

            this.sousMenuContoursTerritoiresVisibility = this.sousMenuMesureVisibility = false;
          }

          if (e.srcElement.id === "petite-icone-contours-territoires") {
            //la variable de visibilité passe à true
            this.sousMenuContoursTerritoiresVisibility = !this.sousMenuContoursTerritoiresVisibility; //On réinitialise les tooltips au cas ou était sur une autre card

            this.setTooltip(); //On rend vert l'icone et blanche l'autre du sous-menu

            this.setIconColor('petite-icone-basemap', false, '');
            this.setIconColor(e.srcElement, this.sousMenuContoursTerritoiresVisibility, "#8BE7BA"); //Si on ouvre le card, on change le tooltip

            if (this.sousMenuContoursTerritoiresVisibility) {
              this.toolTipForContoursTerritoiresBouton = 'Fermer';
            } //On supprime toutes les autres cards


            this.sousMenuBasemapVisibility = this.sousMenuMesureVisibility = false;
          }

          if (e.srcElement.id === "petite-icone-mesure") {
            //la variable de visibilité passe à true
            this.sousMenuMesureVisibility = !this.sousMenuMesureVisibility; //On rend vert l'icone

            this.setIconColor(e.srcElement, this.sousMenuMesureVisibility, "#8BE7BA"); //Si on ouvre le card, on change le tooltip

            if (this.sousMenuMesureVisibility) {
              this.toolTipForMesureBouton = 'Fermer';
            } //On supprime toutes les autres cards


            this.sousMenuBasemapVisibility = this.sousMenuContoursTerritoiresVisibility = false;
          }

          if (e.srcElement.id === "petite-icone-impression") {
            //On lance l'impression
            this.impressionCarte(); //On réinitialise les tooltips au cas ou était sur une autre card

            this.setTooltip(); //On rend blanc l'autre icone du sous-menu

            this.setIconColor('petite-icone-mesure', false, ''); //On supprime toutes les autres cards

            this.sousMenuBasemapVisibility = this.sousMenuContoursTerritoiresVisibility = this.sousMenuMesureVisibility = false;
          }
        }
        /**
          * Ferme tous les sous menus
         */

      }, {
        key: "fermeSousMenu",
        value: function fermeSousMenu() {
          this.sousMenuBasemapVisibility = this.sousMenuContoursTerritoiresVisibility = this.sousMenuMesureVisibility = false;
        } //Pour definir couleur (bool=true) ou dégriser (bool=true) si c'est evenement ou id d'1 HTML element

        /**
          * Définie la couleur ou dégrise si bool=true
          * Fonctionne pour l'id d'un HTMLElement ou pour un evenement
          * @param {string} elem
          * @param {bool} bool
          * @param {string} color
         */

      }, {
        key: "setBackgroundColor",
        value: function setBackgroundColor(elem, bool, color) {
          if (typeof elem === "string") {
            if (bool) {
              document.getElementById(elem).style.backgroundColor = color;
            } else {
              document.getElementById(elem).style.backgroundColor = '';
            }
          } else {
            if (bool) {
              elem.style.backgroundColor = color;
            } else {
              elem.style.backgroundColor = '';
            }
          }
        }
        /**
          * Définie la couleur ou dégrise si bool=true
          * Fonctionne pour l'id d'un HTMLElement ou pour un evenement
          * @param {string} or {HTMLElement} elem
          * @param {bool} bool
          * @param {string} color
         */

      }, {
        key: "setIconColor",
        value: function setIconColor(elem, bool, color) {
          if (typeof elem === "string") {
            if (bool) {
              document.getElementById(elem).style.color = color;
            } else {
              document.getElementById(elem).style.color = '';
            }
          } else {
            if (bool) {
              elem.style.color = color;
            } else {
              elem.style.color = '';
            }
          }
        }
        /**
          * Sert dans sous menu basempap et contours territoires donc defini ici
          * Supprime les couches quo ont l'idLayer
          * @param {map} map
          * @param {string} idLayer
         */

      }, {
        key: "deleteLayer",
        value: function deleteLayer(map, idLayer) {
          map.eachLayer(function (layer) {
            if (layer.options.id === idLayer) {
              map.removeLayer(layer);
            }
          });
        }
        /**
          * Désactive le menu lorsqu'on mesure sur la carte
          * @param {bool} bool
         */

      }, {
        key: "disableMenu",
        value: function disableMenu(bool) {
          var menu = document.getElementById('conteneur-boutons-du-menu-outils');

          if (bool) {
            menu.classList.add('non-clickable');
          } else {
            menu.classList.remove('non-clickable');
          }

          this.menuDisabled = bool;
        } ///IMPRESSION DE LA CARTE///

        /**
          * Lance l'impression de la carte
         */

      }, {
        key: "impressionCarte",
        value: function impressionCarte() {
          var _this2 = this;

          this.hideMenu(true);
          setTimeout(function () {
            window.print();

            _this2.hideMenu(false);
          }, 1);
        }
        /**
          * Cache les éléments au dessus de la carte lors de l'impression
          * @param {bool} x
         */

      }, {
        key: "hideMenu",
        value: function hideMenu(x) {
          var elem = document.getElementsByClassName('leaflet-top leaflet-left')[0];

          if (x) {
            elem.style.visibility = 'hidden';
          } else {
            elem.style.visibility = 'visible';
          }

          this.appComponent.setPrinting(x);
        }
      }]);

      return MenuOutilsComponent;
    }();

    MenuOutilsComponent.ɵfac = function MenuOutilsComponent_Factory(t) {
      return new (t || MenuOutilsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]));
    };

    MenuOutilsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuOutilsComponent,
      selectors: [["app-menu-outils"]],
      decls: 14,
      vars: 7,
      consts: [[4, "ngIf"], ["id", "conteneur-boutons-du-menu-outils"], ["id", "conteneur-boutons-options-carte"], ["mat-icon-button", "", "id", "grand-bouton-options-carte", "matTooltip", "Options de carte", "matTooltipPosition", "left", 1, "grand-bouton", 3, "disabled"], ["aria-hidden", "true", "id", "grande-icone-options-carte", 1, "grande-icone", 3, "click"], ["id", "conteneur-sous-boutons-options-carte", "class", "conteneur-boutons-sous-categorie", 4, "ngIf"], ["id", "conteneur-boutons-outils"], ["mat-icon-button", "", "id", "grand-bouton-outils", "matTooltip", "Outils", "matTooltipPosition", "left", 1, "grand-bouton", 3, "disabled"], ["aria-hidden", "true", "id", "grande-icone-outils", 1, "grande-icone", 3, "click"], ["id", "conteneur-sous-boutons-outils", "class", "conteneur-boutons-sous-categorie", 4, "ngIf"], ["id", "conteneur-sous-boutons-options-carte", 1, "conteneur-boutons-sous-categorie"], ["mat-icon-button", "", "id", "petit-bouton-basemap", "matTooltipPosition", "left", 1, "petit-bouton", 3, "matTooltip"], ["aria-hidden", "true", "id", "petite-icone-basemap", 1, "petite-icone", 3, "click"], ["mat-icon-button", "", "id", "petit-bouton-contours-territoires", "matTooltipPosition", "left", 1, "petit-bouton", 3, "matTooltip"], ["aria-hidden", "true", "id", "petite-icone-contours-territoires", 1, "petite-icone", 3, "click"], ["id", "conteneur-sous-boutons-outils", 1, "conteneur-boutons-sous-categorie"], ["mat-icon-button", "", "id", "petit-bouton-mesure", "matTooltipPosition", "left", 1, "petit-bouton", 3, "matTooltip", "disabled"], ["aria-hidden", "true", "id", "petite-icone-mesure", 1, "petite-icone", 3, "click"], ["mat-icon-button", "", "id", "petit-bouton-impression", "matTooltipPosition", "left", 1, "petit-bouton", 3, "matTooltip", "disabled"], ["aria-hidden", "true", "id", "petite-icone-impression", 1, "petite-icone", 3, "click"]],
      template: function MenuOutilsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MenuOutilsComponent_app_sous_menu_basemap_0_Template, 1, 0, "app-sous-menu-basemap", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuOutilsComponent_app_sous_menu_contours_territ_1_Template, 1, 0, "app-sous-menu-contours-territ", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MenuOutilsComponent_app_sous_menu_mesure_2_Template, 1, 0, "app-sous-menu-mesure", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuOutilsComponent_Template_mat_icon_click_6_listener($event) {
            return ctx.afficheConteneurSousBoutonsOptionsCarte($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MenuOutilsComponent_div_8_Template, 7, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuOutilsComponent_Template_mat_icon_click_11_listener($event) {
            return ctx.afficheConteneurSousBoutonsOutils($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "build");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MenuOutilsComponent_div_13_Template, 7, 4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sousMenuBasemapVisibility);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sousMenuContoursTerritoiresVisibility);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sousMenuMesureVisibility);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.menuDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sousBoutonsOptionsCarteVisibility);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.menuDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sousBoutonsOutilsVisibility);
        }
      },
      styles: [".non-clickable[_ngcontent-%COMP%]{\n  pointer-events:none;\n}\n\n#conteneur-boutons-options-carte[_ngcontent-%COMP%]{\n  padding: 5px; \n  border-radius: 20px;\n}\n\n#conteneur-sous-boutons-options-carte[_ngcontent-%COMP%]{\n  height: 100px;\n}\n\n#conteneur-boutons-outils[_ngcontent-%COMP%]{\n  padding: 5px;\n  border-radius: 20px;\n}\n\n.conteneur-boutons-sous-categorie[_ngcontent-%COMP%]{\n  margin-top: 10px;\n  background-color: #424242;\n  border-radius: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack:justify;\n          justify-content:space-between;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n#conteneur-sous-boutons-outils[_ngcontent-%COMP%]{\n  height: 110px;\n}\n\n.grand-bouton[_ngcontent-%COMP%] {\n  background-color: #424242;\n  width: 70px;\n  height: 70px;\n  line-height: 70px;\n  margin: auto;\n}\n\n.petit-bouton[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  margin: auto;\n}\n\n.grande-icone[_ngcontent-%COMP%] {\n  color: white;\n  position: inherit;\n  font-size: 48px;\n  margin-right: 24px;\n}\n\n.petite-icone[_ngcontent-%COMP%] {\n  color: white;\n  position: inherit;\n  font-size: 35px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51LW91dGlscy9tZW51LW91dGlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix3QkFBNkI7VUFBN0IsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZW51LW91dGlscy9tZW51LW91dGlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vbi1jbGlja2FibGV7XG4gIHBvaW50ZXItZXZlbnRzOm5vbmU7XG59XG5cbiNjb250ZW5ldXItYm91dG9ucy1vcHRpb25zLWNhcnRle1xuICBwYWRkaW5nOiA1cHg7IFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4jY29udGVuZXVyLXNvdXMtYm91dG9ucy1vcHRpb25zLWNhcnRle1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4jY29udGVuZXVyLWJvdXRvbnMtb3V0aWxze1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5jb250ZW5ldXItYm91dG9ucy1zb3VzLWNhdGVnb3JpZXtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbiNjb250ZW5ldXItc291cy1ib3V0b25zLW91dGlsc3tcbiAgaGVpZ2h0OiAxMTBweDtcbn1cblxuLmdyYW5kLWJvdXRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGxpbmUtaGVpZ2h0OiA3MHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5wZXRpdC1ib3V0b24ge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uZ3JhbmRlLWljb25lIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogaW5oZXJpdDtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG59XG5cbi5wZXRpdGUtaWNvbmUge1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBpbmhlcml0O1xuICBmb250LXNpemU6IDM1cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuOutilsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu-outils',
          templateUrl: './menu-outils.component.html',
          styleUrls: ['./menu-outils.component.css']
        }]
      }], function () {
        return [{
          type: _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/module-recherche/module-recherche.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/module-recherche/module-recherche.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ModuleRechercheComponent */

  /***/
  function srcAppComponentsModuleRechercheModuleRechercheComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModuleRechercheComponent", function () {
      return ModuleRechercheComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! leaflet */
    "./node_modules/leaflet/dist/leaflet-src.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_layers_layers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/layers/layers.component */
    "./src/app/components/layers/layers.component.ts");
    /* harmony import */


    var _services_layers_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../services/layers-service.service */
    "./src/app/services/layers-service.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function ModuleRechercheComponent_mat_option_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r33 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r33);
      }
    }

    function ModuleRechercheComponent_mat_option_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var optionN_r34 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", optionN_r34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", optionN_r34, " ");
      }
    }

    function ModuleRechercheComponent_mat_card_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Info : Veuillez selectionner une zone o\xF9 afficher la couche");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ModuleRechercheComponent =
    /*#__PURE__*/
    function () {
      //Si on veut utiliser les fonctions de appComponent :
      function ModuleRechercheComponent(appComponent, layersComponent, layersService) {
        var _this3 = this;

        _classCallCheck(this, ModuleRechercheComponent);

        this.appComponent = appComponent;
        this.layersComponent = layersComponent;
        this.layersService = layersService; //Variables qui vont suivre si l'input de l'utilisateur fait partie du catalogue de couches

        this.presentN = false;
        this.present = false; //Variables où on va stocker les différents noms de couches, protocoles et espace de travail

        this.array_nom_protocol = [];
        this.array_nom_couches = [];
        this.array_nom_types = []; //Booleens qui vont déterminer l'affichage d'un message d'information spécifique à la recherche par attribut

        this.info = true;
        this.infoCard = false;
        this.validerDisa = false;
        this.boutSupprDisa = true;
        this.recup = this.layersService.getXml().subscribe(function (recup) {
          _this3.xmlString = recup;
          var stringxml = _this3.xmlString; // parser xml et récuperer les 2 arrays : espace:nom_couche / [nom_couche , protocol]

          var arrays = _this3.layersComponent.parsing_recup_XML(_this3.xmlString);

          var nom_couche = arrays[0]; // var nom_couches=this.recup_nom(nom_couche);

          var nom_couches = [];
          var nom_types = [];
          var str;
          var i;
          /**
           * Pour la constitution du catalogue, on classe les couches en deux classes 'couches' et
           *'types', qui correspondent à l'espace de travail auquel elles appartiennent
           */

          for (i in nom_couche) {
            str = nom_couche[i];
            var array = str.split(":");

            if (array[0] == 'couches') {
              nom_couches.push(array[1]);
            } else if (array[0] == 'types') {
              nom_types.push(array[1]);
            }
          } //On stocke les différentes valeurs du catalogue de couches dans les variables définies au départ


          _this3.array_nom_protocol = nom_couche;
          _this3.array_nom_couches = nom_couches;
          _this3.array_nom_types = nom_types; //ici pour la recherche par attribut, les options vont être les couches d'espace de travail 'types'

          var options = _this3.array_nom_types; //Portion de code qui permet que la liste des options d'input évolue au fur et à mesure de l'input de l'utilisateur

          _this3.filteredOptions = _this3.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            var filterValue = value.toLowerCase(); //On teste à chaque fois que l'input change si l'input actuel fait partie du catalogue de couches

            if (options.includes(value)) {
              _this3.present = true;
            } else {
              _this3.present = false;
            }

            return options.filter(function (option) {
              return option.toLowerCase().includes(filterValue);
            });
          })); //Procédure analogue pour la recherche par nom avec les couches 'couches'

          var optionsN = _this3.array_nom_couches;
          _this3.filteredOptionsN = _this3.myControlN.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            var filterValue = value.toLowerCase();

            if (optionsN.includes(value)) {
              _this3.presentN = true;
            } else {
              _this3.presentN = false;
            }

            return optionsN.filter(function (option) {
              return option.toLowerCase().includes(filterValue);
            });
          }));
        }); //formControl qui suit l'input de l'utilisateur dans recherche par attribut

        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](); //formControl qui suit l'input de l'utilisateur dans recherche par nom

        this.myControlN = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
      }
      /**
        * Getteur de array_nom_couches
        * @return {string[]}
       */


      _createClass(ModuleRechercheComponent, [{
        key: "getArray",
        value: function getArray() {
          return this.array_nom_couches;
        }
        /**
          * fonction qui sert à récuperer seulement le nom de la couche dans un array qui contient
          * espace:nom couche
          * @return {string[]}
         */

      }, {
        key: "recup_nom",
        value: function recup_nom(array_espace_nom) {
          var array_nom = [];
          var str;
          var i;

          for (i in array_espace_nom) {
            str = array_espace_nom[i];
            var array = str.split(":");
            array_nom.push(array[1]);
          }

          return array_nom;
        }
        /**
        * fonction qui sert à récuperer seulement l'espace de travail de la couche dans un array
        *  qui contient espace:nom couche
        * @return {string[]}
        */

      }, {
        key: "recup_espace",
        value: function recup_espace(array_espace_nom) {
          var array_espace = [];
          var str;
          var i;

          for (i in array_espace_nom) {
            str = array_espace_nom[i];
            var array = str.split(":");
            array_espace.push(array[0]);
          }

          return array_espace;
        }
        /**
          * Fait la selection et recherche la couche (pour type)
          * @param {string[]} value
          * @param {bool} present
         */

      }, {
        key: "recherche",
        value: function recherche(value, present) {
          if (!present) {
            alert('Cette couche est inconnue');
          } else {
            /**
              * Définie le coint haut gauche du rectangle de selection
              * @param {event} e
             */
            var setOneCorner = function setOneCorner(e) {
              oneCorner = e.latlng; //On va dessiner un rectangle au mouvement de la souris pour avoir une idee de ce que on est en train de dessiner

              carte.on('mousemove', onMove);
            };
            /**
              * Définie le coint bas droit du rectangle de selection et le dessine
              * @param {event} e
             */


            var setTwoCorner = function setTwoCorner(e) {
              //On supprime le derier rectangle lors du mouvement de souris
              rectMove.remove(); //On stop l'écoute sur la carte car la selection est finie

              carte.off('mousedown', setOneCorner);
              carte.off('mouseup', setTwoCorner);
              carte.off('mousemove', onMove); //On définie le coint bas droit du rectangle et on le dessine

              twoCorner = e.latlng;
              bounds = leaflet__WEBPACK_IMPORTED_MODULE_3__["latLngBounds"]([oneCorner, twoCorner]);
              rect = leaflet__WEBPACK_IMPORTED_MODULE_3__["rectangle"](bounds, {
                color: "#ff7800",
                fill: false,
                weight: 1
              }).addTo(carte); //On calcule l'aire du rectangle selectionné

              var sw = bounds.getSouthWest();
              var nw = bounds.getNorthWest();
              var se = bounds.getSouthEast();
              var ne = bounds.getNorthEast();
              areaRect = sw.distanceTo(nw) * se.distanceTo(ne);
              areaRectHa = areaRect / 10000;

              if (areaRectHa < 100) {
                //On supprime le rectangle et on réessaie
                rect.remove();
                alert('Selection trop petite, réessayez');
                self.recherche(couche, present);
              } else if (areaRectHa > 10000000) {
                //On supprime le rectangle et on réessaie
                rect.remove();
                alert('Selection trop grande, réessayez');
                self.recherche(couche, present);
              } else {
                //On revient aux reglages carte d'origine
                carte.dragging.enable();
                carteContenant.style.cursor = 'grab'; //On demande au plugin d'afficher la couche

                self.addPlug(couche, rect); //On supprime la popup info

                self.infoCard = false; //On active la bouton supprimer couche

                self.boutSupprDisa = false;
                iconeSuppr.classList.remove('butt-disabled');
                iconeSuppr.classList.add('butt-enable');
              }
            };
            /**
              * Dessine le rectange intermediaire lors du mvt de la souris
              * @param {event} e
             */


            var onMove = function onMove(e) {
              rectMove.remove();
              rectMove = leaflet__WEBPACK_IMPORTED_MODULE_3__["rectangle"]([oneCorner, e.latlng], {
                color: "#ff7800",
                weight: 1
              }).addTo(carte);
            };

            //On affiche la popup qui nous dit de selectionner une zone
            this.infoCard = true; //necessaire pour y faire appel dans les fonctions:

            var self = this;
            var couche = value; //On récupère la carte

            var carte = this.appComponent.getMap(); //On récupère des éléments HTML

            var carteContenant = document.getElementById('mymap');
            var boutValider = document.getElementById('valide1');
            var iconeSuppr = document.getElementById('iconeSuppr'); //Définition des variables

            var oneCorner;
            var twoCorner;
            var bounds;
            var areaRect;
            var areaRectHa; //On doit iniialiser ces variables au hasard et elles seront supprimés:

            var rect = leaflet__WEBPACK_IMPORTED_MODULE_3__["rectangle"]([[1, 1], [1, 1]], {
              color: "#ff7800",
              weight: 0.8
            });
            var rectMove = leaflet__WEBPACK_IMPORTED_MODULE_3__["rectangle"]([[1, 1], [1, 1]], {
              color: "#ff7800",
              weight: 1
            }); //On active la possibilité de draguer pour dessiner

            carte.on('mousedown', setOneCorner);
            carte.on('mouseup', setTwoCorner); //Pour plus de précision lors du drag

            carteContenant.style.cursor = 'crosshair';
            carte.dragging.disable();
          }
        }
        /**
          * Supprime la selection
         */

      }, {
        key: "deleteSelection",
        value: function deleteSelection() {
          var carte = this.appComponent.getMap();
          carte.eachLayer(function (layer) {
            if (layer.options.geometryField) {
              layer.remove();
            }

            if (layer.options.color) {
              layer.remove();
            }
          });
        }
        /**
          * Demande au plugin d'afficher la couche
          * @param {string[]} value
          * @param {L.rectangle} filtre
         */

      }, {
        key: "addPlug",
        value: function addPlug(value, filtre) {
          this.appComponent.addPlugin('types', this.myControl.value.toLowerCase(), 'red', filtre);
        }
        /**
          * Si la couche existe, alors on demande au plugin d'afficher la couche
          * @param {string[]} value
          * @param {bool} present
         */

      }, {
        key: "addPlugN",
        value: function addPlugN(value, present) {
          if (present) {
            this.appComponent.addPlugin('couches', this.myControlN.value.toLowerCase(), 'red', 'sans filtre');
          } else {
            alert('Cette couche est inconnue');
          }
        }
        /**
          * change le focus de mat tab group
         */

      }, {
        key: "reverseInfo",
        value: function reverseInfo() {
          this.info = !this.info;
        }
      }]);

      return ModuleRechercheComponent;
    }();

    ModuleRechercheComponent.ɵfac = function ModuleRechercheComponent_Factory(t) {
      return new (t || ModuleRechercheComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_components_layers_layers_component__WEBPACK_IMPORTED_MODULE_5__["LayersComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layers_service_service__WEBPACK_IMPORTED_MODULE_6__["LayersServiceService"]));
    };

    ModuleRechercheComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModuleRechercheComponent,
      selectors: [["app-module-recherche"]],
      decls: 34,
      vars: 15,
      consts: [[1, "barre", 3, "focusChange"], ["id", "rechercheattribut", "label", "Recherche par attribut"], ["id", "form-rechercheAttribut"], [1, "example-full-width"], ["id", "input1", "type", "text", "placeholder", "Ex: marin", "aria-label", "Attribut", "matInput", "", 3, "formControl", "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "valide1", "mat-raised-button", "", "color", "black", 3, "disabled", "click"], ["id", "recherchenom", "label", "Recherche par nom", 3, "disabled"], [1, "examples-full-width"], ["type", "text", "placeholder", "Ex: marine", "aria-label", "Nom", "matInput", "", 3, "formControl", "matAutocomplete"], ["auto1", "matAutocomplete"], ["id", "valide2", "mat-raised-button", "", "color", "black", 3, "disabled", "click"], ["id", "infoCard", 4, "ngIf"], ["id", "divBoutSuppr"], ["mat-icon-button", "", "id", "boutSuppr", "matTooltip", "Supprimer la couche", "matTooltipPosition", "right", 3, "disabled"], ["aria-hidden", "true", "id", "iconeSuppr", 1, "butt-disabled", 3, "click"], [3, "value"], ["id", "infoCard"]],
      template: function ModuleRechercheComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Module de recherche ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab-group", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusChange", function ModuleRechercheComponent_Template_mat_tab_group_focusChange_4_listener() {
            return ctx.reverseInfo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-tab", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Choisir un attribut:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-autocomplete", null, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ModuleRechercheComponent_mat_option_13_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModuleRechercheComponent_Template_button_click_15_listener() {
            return ctx.recherche(["zn", "nat", "inpg", "ep"], ctx.present);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Valider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-tab", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Entrez le nom de la couche:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-autocomplete", null, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ModuleRechercheComponent_mat_option_25_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModuleRechercheComponent_Template_button_click_27_listener() {
            return ctx.addPlugN(ctx.array_nom_couches, ctx.presentN);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Valider ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ModuleRechercheComponent_mat_card_29_Template, 4, 0, "mat-card", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModuleRechercheComponent_Template_mat_icon_click_32_listener() {
            return ctx.deleteSelection();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.myControl)("matAutocomplete", _r28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 11, ctx.filteredOptions));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.myControl.value == null || ctx.myControl.value == "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.infoCard);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.myControlN)("matAutocomplete", _r30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 13, ctx.filteredOptionsN));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.myControlN.value == null || ctx.myControlN.value == "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.infoCard && ctx.info);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.boutSupprDisa);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTab"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]],
      styles: [".barre[_ngcontent-%COMP%]{\n    position:top;\n}\n#valide1[_ngcontent-%COMP%]{\n    display:block;\n    margin:auto;\n}\n#valide2[_ngcontent-%COMP%]{\n    display:block;\n    margin:auto\n}\n#infoCard[_ngcontent-%COMP%]{\n  width: 200px;\n  padding:  5px;\n  position: absolute;\n  left : 395px;\n  top: 155px;\n}\n#infoCard[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n  font-size: 11px;\n}\n#divBoutSuppr[_ngcontent-%COMP%]{\n  position: absolute;\n  top: 0px;\n  left : 395px;\n  background-color:#424242;\n  border-radius: 5px;\n}\n.butt-enable[_ngcontent-%COMP%]{\n  color: white;\n}\n.butt-disabled[_ngcontent-%COMP%]{\n  color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2R1bGUtcmVjaGVyY2hlL21vZHVsZS1yZWNoZXJjaGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYjtBQUNKO0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtBQUNaO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kdWxlLXJlY2hlcmNoZS9tb2R1bGUtcmVjaGVyY2hlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFycmV7XG4gICAgcG9zaXRpb246dG9wO1xufVxuI3ZhbGlkZTF7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICBtYXJnaW46YXV0bztcbn1cbiN2YWxpZGUye1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgbWFyZ2luOmF1dG9cbn1cblxuI2luZm9DYXJke1xuICB3aWR0aDogMjAwcHg7XG4gIHBhZGRpbmc6ICA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdCA6IDM5NXB4O1xuICB0b3A6IDE1NXB4O1xufVxuXG4jaW5mb0NhcmQgcHtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4jZGl2Qm91dFN1cHBye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0IDogMzk1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IzQyNDI0MjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYnV0dC1lbmFibGV7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ1dHQtZGlzYWJsZWR7XG4gIGNvbG9yOiBncmV5O1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModuleRechercheComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-module-recherche',
          templateUrl: './module-recherche.component.html',
          styleUrls: ['./module-recherche.component.css']
        }]
      }], function () {
        return [{
          type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        }, {
          type: _components_layers_layers_component__WEBPACK_IMPORTED_MODULE_5__["LayersComponent"]
        }, {
          type: _services_layers_service_service__WEBPACK_IMPORTED_MODULE_6__["LayersServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/recherche-selection/recherche-selection.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/recherche-selection/recherche-selection.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: RechercheSelectionComponent */

  /***/
  function srcAppComponentsRechercheSelectionRechercheSelectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RechercheSelectionComponent", function () {
      return RechercheSelectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! leaflet */
    "./node_modules/leaflet/dist/leaflet-src.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _info_couche_info_couche_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../info-couche/info-couche.component */
    "./src/app/components/info-couche/info-couche.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var RechercheSelectionComponent =
    /*#__PURE__*/
    function () {
      function RechercheSelectionComponent(appComponent, infoCoucheComponent) {
        _classCallCheck(this, RechercheSelectionComponent);

        this.appComponent = appComponent;
        this.infoCoucheComponent = infoCoucheComponent;
        this.selectionning = false;
        this.boutRechercheDisabled = true;
        this.hiddenButRecherche = true;
      }

      _createClass(RechercheSelectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var listCouchesTypes = [['zn', 'red'], ['nat', 'black'], ['inpg', 'green'], ['ep', 'yellow']];
          var listCouchesNoms = [['baseexp_stations', 'red'], ['baseexp_traits', 'black'], ['donneesstations_languedocroussillon', 'green'], ['metrop_znieff1', 'yellow'], ['metrop_znieff2', 'purple']];
          var self = this;
          var app = this.appComponent;
          var info = this.infoCoucheComponent;
          var carte = this.appComponent.getMap();
          var buttCommencer = document.getElementById('boutCommencer');
          var buttRechercherType = document.getElementById('boutRechercherType');
          var buttRechercherNom = document.getElementById('boutRechercherNom');
          var carteContenant = document.getElementById('mymap');
          var choice = false;
          var listePoints = [];
          var listLatLng = [];
          var oneCorner;
          var twoCorner;
          var bounds;
          var rect = leaflet__WEBPACK_IMPORTED_MODULE_1__["rectangle"]([[1, 1], [1, 1]], {
            color: "#ff7800",
            weight: 0.8
          });
          var rectMove = leaflet__WEBPACK_IMPORTED_MODULE_1__["rectangle"]([[1, 1], [1, 1]], {
            color: "#ff7800",
            weight: 1
          });
          var areaRect;
          var areaRectHa;
          leaflet__WEBPACK_IMPORTED_MODULE_1__["DomEvent"].on(buttCommencer, 'click', selectionner, this);

          function selectionner() {
            choice = !choice;

            if (choice) {
              carte.on('mousedown', setOneCorner);
              carte.on('mouseup', setTwoCorner);
              carte.dragging.disable();
              buttCommencer.innerHTML = 'Annuler la selection';
              buttCommencer.classList.add('butt-red');
              buttCommencer.classList.remove('butt-green');
              carteContenant.style.cursor = 'crosshair';
              this.hiddenButRecherche = false;
            } else {
              deleteSelection();
              carte.dragging.enable();
              carte.off('mousedown', setOneCorner);
              carte.off('mouseup', setTwoCorner);
              self.boutRechercheDisabled = true;
              buttCommencer.innerHTML = 'Commencer la selection';
              buttCommencer.classList.add('butt-green');
              buttCommencer.classList.remove('butt-red');
              carteContenant.style.cursor = 'grab';
              this.hiddenButRecherche = true;
            }
          }

          function setOneCorner(e) {
            oneCorner = e.latlng;
            carte.on('mousemove', onMove);
          }

          function setTwoCorner(e) {
            rectMove.remove();
            carte.off('mousemove', onMove);
            carte.off('mousedown', setOneCorner);
            carte.off('mouseup', setTwoCorner);
            carte.dragging.enable();
            carteContenant.style.cursor = 'grab';
            twoCorner = e.latlng;
            bounds = leaflet__WEBPACK_IMPORTED_MODULE_1__["latLngBounds"]([oneCorner, twoCorner]);
            rect = leaflet__WEBPACK_IMPORTED_MODULE_1__["rectangle"](bounds, {
              color: "#ff7800",
              fill: false,
              weight: 1
            }).addTo(carte);
            var sw = bounds.getSouthWest();
            var nw = bounds.getNorthWest();
            var se = bounds.getSouthEast();
            var ne = bounds.getNorthEast();
            areaRect = sw.distanceTo(nw) * se.distanceTo(ne);
            areaRectHa = areaRect / 10000;

            if (areaRectHa < 100) {
              alert('Selection trop petite');
            } else if (areaRectHa > 2000000) {
              alert('Selection trop grande');
            } else {
              self.boutRechercheDisabled = false;
            }

            leaflet__WEBPACK_IMPORTED_MODULE_1__["DomEvent"].on(buttRechercherType, 'click', rechercherType, this);
            leaflet__WEBPACK_IMPORTED_MODULE_1__["DomEvent"].on(buttRechercherNom, 'click', rechercherNom, this);
          }

          function onMove(e) {
            rectMove.remove();
            rectMove = leaflet__WEBPACK_IMPORTED_MODULE_1__["rectangle"]([oneCorner, e.latlng], {
              color: "#ff7800",
              weight: 1
            }).addTo(carte);
          }

          function deleteSelection() {
            app.setAffiching(false);
            carte.eachLayer(function (layer) {
              if (layer.options.geometryField) {
                layer.remove();
              }
            });
            rect.remove();
          }

          function rechercherType() {
            app.setAffiching(true);
            info.afficheCoucheType(listCouchesTypes);
            self.boutRechercheDisabled = true;
            listCouchesTypes.forEach(function (elem) {
              app.addPlugin('types', elem[0], elem[1], rect);
            });
          }

          function rechercherNom() {
            app.setAffiching(true);
            info.afficheCoucheNom(listCouchesNoms);
            self.boutRechercheDisabled = true;
            listCouchesNoms.forEach(function (elem) {
              app.addPlugin('couches', elem[0], elem[1], rect);
            });
          }
        }
      }]);

      return RechercheSelectionComponent;
    }();

    RechercheSelectionComponent.ɵfac = function RechercheSelectionComponent_Factory(t) {
      return new (t || RechercheSelectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_info_couche_info_couche_component__WEBPACK_IMPORTED_MODULE_3__["InfoCoucheComponent"]));
    };

    RechercheSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RechercheSelectionComponent,
      selectors: [["app-recherche-selection"]],
      decls: 15,
      vars: 3,
      consts: [["id", "card-recherche"], ["mat-raised-button", "", "type", "button", "id", "boutCommencer", 1, "butt-green"], ["id", "divRecherche", 3, "hidden"], ["mat-raised-button", "", "type", "button", "id", "boutRechercherType", 3, "disabled"], ["mat-raised-button", "", "type", "button", "id", "boutRechercherNom", 3, "disabled"]],
      template: function RechercheSelectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Recherche par selection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Commencer la mesure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Rechercher par type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Rechercher par nom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.hiddenButRecherche);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.boutRechercheDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.boutRechercheDisabled);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
      styles: ["mat-spinner[_ngcontent-%COMP%]{\n  position: absolute;\n  right: 100px;\n  bottom: 10px;\n}\n\n#boutRechercherType[_ngcontent-%COMP%]{\n  background-color: grey;\n  margin-top: 10px;\n}\n\n#boutRechercherNom[_ngcontent-%COMP%]{\n  background-color: grey;\n  margin-top: 5px;\n}\n\n.butt-green[_ngcontent-%COMP%]{\n  background-color: green;\n}\n\n.butt-red[_ngcontent-%COMP%]{\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWNoZXJjaGUtc2VsZWN0aW9uL3JlY2hlcmNoZS1zZWxlY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWNoZXJjaGUtc2VsZWN0aW9uL3JlY2hlcmNoZS1zZWxlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zcGlubmVye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMDBweDtcbiAgYm90dG9tOiAxMHB4O1xufVxuXG4jYm91dFJlY2hlcmNoZXJUeXBle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4jYm91dFJlY2hlcmNoZXJOb217XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmJ1dHQtZ3JlZW57XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4uYnV0dC1yZWR7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RechercheSelectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-recherche-selection',
          templateUrl: './recherche-selection.component.html',
          styleUrls: ['./recherche-selection.component.css']
        }]
      }], function () {
        return [{
          type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
        }, {
          type: _info_couche_info_couche_component__WEBPACK_IMPORTED_MODULE_3__["InfoCoucheComponent"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/sous-menus-outils/sous-menu-basemap/sous-menu-basemap.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/components/sous-menus-outils/sous-menu-basemap/sous-menu-basemap.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: SousMenuBasemapComponent */

  /***/
  function srcAppComponentsSousMenusOutilsSousMenuBasemapSousMenuBasemapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SousMenuBasemapComponent", function () {
      return SousMenuBasemapComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! leaflet */
    "./node_modules/leaflet/dist/leaflet-src.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _menu_outils_menu_outils_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../menu-outils/menu-outils.component */
    "./src/app/components/menu-outils/menu-outils.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");

    var SousMenuBasemapComponent =
    /*#__PURE__*/
    function () {
      /**
        * Appel des components parents
        * @param {component} appComponent
        * @param {component} menuOutilsComponent
       */
      function SousMenuBasemapComponent(appComponent, menuOutilsComponent) {
        _classCallCheck(this, SousMenuBasemapComponent);

        this.appComponent = appComponent;
        this.menuOutilsComponent = menuOutilsComponent;
      }
      /**
        * Trouve quelle basempap est affichee
       */


      _createClass(SousMenuBasemapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //On récupère la carte et définie la variable qui contiendra l'id de la basemaps
          var map = this.appComponent.getMap();
          var quelbase; //Si la couche affichée n'est pas une frontière on récupère son id

          map.eachLayer(function (layer) {
            if (layer.options.id && layer.options.id != 'depFr' && layer.options.id != 'regFr') {
              quelbase = layer.options.id;
            }
          });
          this.checkedBasemap = quelbase;
        }
        /**
          * Change de basemap au click sur un radio bouton
          * @param {event} e
         */

      }, {
        key: "changeBasemap",
        value: function changeBasemap(e) {
          //On définie toutes les basemaps
          var street_mapbox = leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"]('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox.streets',
            accessToken: this.appComponent.getMapboxAccessToken()
          });
          var light = leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"]('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            id: 'mapbox.light',
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' + '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imagery © <a href="https://mapbox.com">Mapbox</a>',
            accessToken: this.appComponent.getMapboxAccessToken()
          });
          var OSM = leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"]("http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
            id: 'osm',
            attribution: '<a href="https://www.openstreetmap.org/">Open Street Map</a>'
          });
          var streets_osm = leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"]('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            id: 'streets.osm',
            attribution: '<a href="https://www.openstreetmap.org/">Open Street Map</a>'
          });
          var World_topo_Map = new leaflet__WEBPACK_IMPORTED_MODULE_1__["TileLayer"]('https://server.arcgisonline.com/ArcGIS/rest/services/' + 'World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
            id: 'world.topo.map',
            attribution: '<a href="https://www.esri.com/fr-fr/home">ESRI</a>'
          });
          var World_Imagery = new leaflet__WEBPACK_IMPORTED_MODULE_1__["TileLayer"]('https://server.arcgisonline.com/ArcGIS/rest/services/' + 'World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            id: 'world.imagery',
            attribution: '<a href="https://www.esri.com/fr-fr/home">ESRI</a>'
          });
          var World_Shaded_Relief = new leaflet__WEBPACK_IMPORTED_MODULE_1__["TileLayer"]('https://server.arcgisonline.com/ArcGIS/rest/services/' + 'World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}', {
            id: 'world.shaded.relief',
            maxZoom: 13,
            attribution: '<a href="https://www.esri.com/fr-fr/home">ESRI</a>'
          });
          var World_Terrain_Base = new leaflet__WEBPACK_IMPORTED_MODULE_1__["TileLayer"]('https://server.arcgisonline.com/ArcGIS/rest/services/' + 'World_Terrain_Base/MapServer/tile/{z}/{y}/{x}', {
            id: 'world.terrain.base',
            maxZoom: 9,
            attribution: '<a href="https://www.esri.com/fr-fr/home">ESRI</a>'
          });
          var World_Street_Map = new leaflet__WEBPACK_IMPORTED_MODULE_1__["TileLayer"]('https://server.arcgisonline.com/ArcGIS/rest/services/' + 'World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
            id: 'world.street.map',
            attribution: '<a href="https://www.esri.com/fr-fr/home">ESRI</a>'
          }); //On les range dans un tableau

          var basemaps = [{
            "varlayer": street_mapbox,
            "id": "mapbox.streets",
            "label": "Mapbox Streets"
          }, {
            "varlayer": light,
            "id": "mapbox.light",
            "label": "Mapbox Light"
          }, {
            "varlayer": OSM,
            "id": "osm",
            "label": "OSM Standard"
          }, {
            "varlayer": streets_osm,
            "id": "streets.osm",
            "label": "OSM Streets"
          }, {
            "varlayer": World_topo_Map,
            "id": "world.topo.map",
            "label": "ESRI World topo Map"
          }, {
            "varlayer": World_Imagery,
            "id": "world.imagery",
            "label": "ESRI World Imagery"
          }, {
            "varlayer": World_Shaded_Relief,
            "id": "world.shaded.relief",
            "label": "ESRI World Shaded Relief "
          }, {
            "varlayer": World_Terrain_Base,
            "id": "world.terrain.base",
            "label": "ESRI World Terrain Base "
          }, {
            "varlayer": World_Street_Map,
            "id": "world.street.map",
            "label": "ESRI World Street Map"
          }]; //Selon le bouton clické, on supprime toutes les autres basemap et on l'ajoute

          for (var i = 0; i < basemaps.length; i++) {
            this.menuOutilsComponent.deleteLayer(this.appComponent.getMap(), basemaps[i]['id']);

            if (basemaps[i]['id'] === e.source.id) {
              basemaps[i]['varlayer'].addTo(this.appComponent.getMap());
            }
          }
        }
      }]);

      return SousMenuBasemapComponent;
    }();

    SousMenuBasemapComponent.ɵfac = function SousMenuBasemapComponent_Factory(t) {
      return new (t || SousMenuBasemapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_menu_outils_menu_outils_component__WEBPACK_IMPORTED_MODULE_3__["MenuOutilsComponent"]));
    };

    SousMenuBasemapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SousMenuBasemapComponent,
      selectors: [["app-sous-menu-basemap"]],
      decls: 39,
      vars: 9,
      consts: [["id", "card-basemap"], [1, "conteneur-radio-boutons-basemaps"], [1, "baseMap-category"], ["id", "mapbox.streets", "value", "mapbox.streets", 1, "radio-button-above", 3, "checked", "change"], ["value", "mapbox.light", "id", "mapbox.light", 3, "checked", "change"], ["id", "OSM", 1, "baseMap-category"], ["value", "osm", "id", "osm", 1, "radio-button-above", 3, "checked", "change"], ["value", "streets.osm", "id", "streets.osm", 3, "checked", "change"], ["id", "ESRI", 1, "baseMap-category"], ["value", "world.topo.map", "id", "world.topo.map", 1, "radio-button-above", 3, "checked", "change"], ["value", "world.imagery", "id", "world.imagery", 1, "radio-button-above", 3, "checked", "change"], ["value", "world.shaded.relief", "id", "world.shaded.relief", 1, "radio-button-above", 3, "checked", "change"], ["value", "world.terrain.base", "id", "world.terrain.base", 1, "radio-button-above", 3, "checked", "change"], ["value", "world.street.map", "id", "world.street.map", 3, "checked", "change"]],
      template: function SousMenuBasemapComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Fond de carte");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-radio-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Mapbox :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-radio-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SousMenuBasemapComponent_Template_mat_radio_button_change_9_listener($event) {
            return ctx.changeBasemap($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Mapbox Streets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-radio-button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SousMenuBasemapComponent_Template_mat_radio_button_change_12_listener($event) {
            return ctx.changeBasemap($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Mapbox Light");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Open Street Map :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-radio-button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SousMenuBasemapComponent_Template_mat_radio_button_change_17_listener($event) {
            return ctx.changeBasemap($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "OSM Standard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-radio-button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SousMenuBasemapComponent_Template_mat_radio_button_change_20_listener($event) {
            return ctx.changeBasemap($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "OSM Streets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "ESRI :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-radio-button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SousMenuBasemapComponent_Template_mat_radio_button_change_25_listener($event) {
            return ctx.changeBasemap($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "ESRI World topo Map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-radio-button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SousMenuBasemapComponent_Template_mat_radio_button_change_28_listener($event) {
            return ctx.changeBasemap($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "ESRI World Imagery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-radio-button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SousMenuBasemapComponent_Template_mat_radio_button_change_31_listener($event) {
            return ctx.changeBasemap($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "ESRI World Shaded Relief");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-radio-button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SousMenuBasemapComponent_Template_mat_radio_button_change_34_listener($event) {
            return ctx.changeBasemap($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "ESRI World Terrain Base");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-radio-button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SousMenuBasemapComponent_Template_mat_radio_button_change_37_listener($event) {
            return ctx.changeBasemap($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "ESRI World Street Map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.checkedBasemap == "mapbox.streets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.checkedBasemap == "mapbox.light");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.checkedBasemap == "osm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.checkedBasemap == "streets.osm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.checkedBasemap == "world.topo.map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.checkedBasemap == "world.imagery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.checkedBasemap == "world.shaded.relief");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.checkedBasemap == "world.terrain.base");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.checkedBasemap == "world.street.map");
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioButton"]],
      styles: ["#OSM[_ngcontent-%COMP%], #ESRI[_ngcontent-%COMP%]{\n\tmargin-top: 10px;\n}\n\n.radio-button-above[_ngcontent-%COMP%]{\n\tmargin-bottom: 3px;\n}\n\n#card-basemap[_ngcontent-%COMP%]{\n  background-color: #424242;\n  color: white;\n  border-radius: 20px;\n  margin-right: 10px;\n\twidth: 190px;\n}\n\np[_ngcontent-%COMP%]{\n\tmargin-bottom : 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb3VzLW1lbnVzLW91dGlscy9zb3VzLW1lbnUtYmFzZW1hcC9zb3VzLW1lbnUtYmFzZW1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0NBQ25CLFlBQVk7QUFDYjs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc291cy1tZW51cy1vdXRpbHMvc291cy1tZW51LWJhc2VtYXAvc291cy1tZW51LWJhc2VtYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNPU00sICNFU1JJe1xuXHRtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ucmFkaW8tYnV0dG9uLWFib3Zle1xuXHRtYXJnaW4tYm90dG9tOiAzcHg7XG59XG5cbiNjYXJkLWJhc2VtYXB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuXHR3aWR0aDogMTkwcHg7XG59XG5cbnB7XG5cdG1hcmdpbi1ib3R0b20gOiA2cHg7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SousMenuBasemapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sous-menu-basemap',
          templateUrl: './sous-menu-basemap.component.html',
          styleUrls: ['./sous-menu-basemap.component.css']
        }]
      }], function () {
        return [{
          type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
        }, {
          type: _menu_outils_menu_outils_component__WEBPACK_IMPORTED_MODULE_3__["MenuOutilsComponent"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/sous-menus-outils/sous-menu-contours-territ/sous-menu-contours-territ.component.ts":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/components/sous-menus-outils/sous-menu-contours-territ/sous-menu-contours-territ.component.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: SousMenuContoursTerritComponent */

  /***/
  function srcAppComponentsSousMenusOutilsSousMenuContoursTerritSousMenuContoursTerritComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SousMenuContoursTerritComponent", function () {
      return SousMenuContoursTerritComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! leaflet */
    "./node_modules/leaflet/dist/leaflet-src.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _menu_outils_menu_outils_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../menu-outils/menu-outils.component */
    "./src/app/components/menu-outils/menu-outils.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");

    var SousMenuContoursTerritComponent =
    /*#__PURE__*/
    function () {
      /**
        * Appel des components parents
        * @param {component} appComponent
        * @param {component} menuOutilsComponent
       */
      function SousMenuContoursTerritComponent(appComponent, menuOutilsComponent) {
        _classCallCheck(this, SousMenuContoursTerritComponent);

        this.appComponent = appComponent;
        this.menuOutilsComponent = menuOutilsComponent;
      }
      /**
        * Trouve quel contour est affiché à l'affiche du sous-menu
       */


      _createClass(SousMenuContoursTerritComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          //On récupère la carte et définie la liste des id des frontières affichées
          var map = this.appComponent.getMap();
          var quelcont = []; //On remplit la liste avec les id des frontières affichées

          map.eachLayer(function (layer) {
            if (layer.options.id == 'regFr' || layer.options.id == 'depFr') {
              quelcont.push(layer.options.id);
            }
          }); //On check les check box necessaires selon les frontières affichées

          this.checkedDep = this.checkedReg = false;
          quelcont.forEach(function (elem) {
            if (elem == 'depFr') {
              _this4.checkedDep = true;
            }

            if (elem == 'regFr') {
              _this4.checkedReg = true;
            }
          });
        }
        /**
          * Affiche les frontières des dép et rég
          * @param {event} e
         */

      }, {
        key: "afficheFrontieres",
        value: function afficheFrontieres(e) {
          //Définition des deux couches de frontières :
          var coucheFrontieresDepartements = leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"].wms(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].geoserverURL + 'frontieres' + "/wms?service=WMS", {
            layers: 'fontieres:departements',
            format: 'image/png',
            transparent: true,
            attribution: '<a href="https://www.data.gouv.fr/fr/">data.gouv.fr</a>',
            id: 'depFr'
          }).setZIndex(1000);
          var coucheFrontieresRegions = leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"].wms(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].geoserverURL + 'frontieres' + "/wms?service=WMS", {
            layers: 'frontieres:regions',
            format: 'image/png',
            transparent: true,
            attribution: '<a href="https://www.data.gouv.fr/fr/">data.gouv.fr</a>',
            id: 'regFr'
          }).setZIndex(1000); //On les range dans un tableau

          var coucheFrontieres = [{
            "varlayer": coucheFrontieresDepartements,
            "id": "depFr",
            "label": "Couche des frontières départementales"
          }, {
            "varlayer": coucheFrontieresRegions,
            "id": "regFr",
            "label": "Couche des frontières régionales"
          }]; //Suivant si on coche et décoche une des deux chekbox, on ajoute ou supprime couche

          if (e.checked) {
            for (var i = 0; i < coucheFrontieres.length; i++) {
              //On ajoute une couche :
              if (coucheFrontieres[i]["id"] === e.source.id) {
                coucheFrontieres[i]["varlayer"].addTo(this.appComponent.getMap());
              }
            }
          } //On supprime une couche :
          else {
              this.menuOutilsComponent.deleteLayer(this.appComponent.getMap(), e.source.id);
            }
        }
      }]);

      return SousMenuContoursTerritComponent;
    }();

    SousMenuContoursTerritComponent.ɵfac = function SousMenuContoursTerritComponent_Factory(t) {
      return new (t || SousMenuContoursTerritComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_menu_outils_menu_outils_component__WEBPACK_IMPORTED_MODULE_4__["MenuOutilsComponent"]));
    };

    SousMenuContoursTerritComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SousMenuContoursTerritComponent,
      selectors: [["app-sous-menu-contours-territ"]],
      decls: 10,
      vars: 2,
      consts: [["id", "exp-panel-frontiere"], [1, "mat-panel-title"], ["id", "conteneur-boutons"], ["id", "depFr", 3, "checked", "change"], ["id", "regFr", 3, "checked", "change"]],
      template: function SousMenuContoursTerritComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Fronti\xE8res administratives fran\xE7aises");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-checkbox", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SousMenuContoursTerritComponent_Template_mat_checkbox_change_5_listener($event) {
            return ctx.afficheFrontieres($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "D\xE9partements");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-checkbox", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SousMenuContoursTerritComponent_Template_mat_checkbox_change_8_listener($event) {
            return ctx.afficheFrontieres($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "R\xE9gions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.checkedDep);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.checkedReg);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckbox"]],
      styles: ["#exp-panel-frontiere[_ngcontent-%COMP%]{\n  background-color: #424242;\n  color: white;\n  border-radius: 20px;\n  margin-right: 10px;\n  width: 190px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb3VzLW1lbnVzLW91dGlscy9zb3VzLW1lbnUtY29udG91cnMtdGVycml0L3NvdXMtbWVudS1jb250b3Vycy10ZXJyaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NvdXMtbWVudXMtb3V0aWxzL3NvdXMtbWVudS1jb250b3Vycy10ZXJyaXQvc291cy1tZW51LWNvbnRvdXJzLXRlcnJpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2V4cC1wYW5lbC1mcm9udGllcmV7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTkwcHg7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SousMenuContoursTerritComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sous-menu-contours-territ',
          templateUrl: './sous-menu-contours-territ.component.html',
          styleUrls: ['./sous-menu-contours-territ.component.css']
        }]
      }], function () {
        return [{
          type: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        }, {
          type: _menu_outils_menu_outils_component__WEBPACK_IMPORTED_MODULE_4__["MenuOutilsComponent"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/sous-menus-outils/sous-menu-mesure/sous-menu-mesure.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/components/sous-menus-outils/sous-menu-mesure/sous-menu-mesure.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: SousMenuMesureComponent */

  /***/
  function srcAppComponentsSousMenusOutilsSousMenuMesureSousMenuMesureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SousMenuMesureComponent", function () {
      return SousMenuMesureComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! leaflet */
    "./node_modules/leaflet/dist/leaflet-src.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _menu_outils_menu_outils_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../menu-outils/menu-outils.component */
    "./src/app/components/menu-outils/menu-outils.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var SousMenuMesureComponent =
    /*#__PURE__*/
    function () {
      /**
        * Appel des components parents si on en a besoin
        * @param {component} appComponent
        * @param {component} menuOutilsComponent
       */
      function SousMenuMesureComponent(appComponent, menuOutilsComponent) {
        _classCallCheck(this, SousMenuMesureComponent);

        this.appComponent = appComponent;
        this.menuOutilsComponent = menuOutilsComponent;
      }
      /**
        * Initie le sous-menu mesure à l'affichage
       */


      _createClass(SousMenuMesureComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //On récupère les éléments HTML dont on aura besoin
          var carte = this.appComponent.getMap();
          var carteContenant = document.getElementById('mymap');
          var boutonsMenu = document.getElementById('conteneur-boutons-du-menu-outils');
          var distDP = document.getElementById('distDernierPoint');
          var distTot = document.getElementById('distTot');
          var butt = document.getElementById('boutton');
          var contPoints = document.getElementById('conteneur-points'); //Variable qui définie si on est en mode start ou reset : false -> start

          var choice = false; //Définition des variables

          var listePoints = [];
          var pointCourant;
          var distance_km;
          var distanceTotale = 0;
          var avantDernierPoint;
          var dernierPoint;
          var distance_m;
          var i = 1; //On écoute le bouton pour commencer et pour reset

          leaflet__WEBPACK_IMPORTED_MODULE_1__["DomEvent"].on(butt, 'click', toggle, this);
          /**
            * Suivant la nature du bouton, on commence ou rest une mesure
           */

          function toggle() {
            choice = !choice; //On est au start :

            if (choice) {
              carte.doubleClickZoom.disable();
              carte.doubleClickZoom.disable(); //On écoute la carte pour tracer les points et lignes

              carte.on('click', onClick, this); //On empeche l'accès aux boutons pendant la mesure et start devient reset

              this.menuOutilsComponent.disableMenu(true);
              carteContenant.style.cursor = 'crosshair';
              butt.innerHTML = 'Réinitialiser la mesure';
            } //On est au reset :
            else {
                carte.doubleClickZoom.enable(); //On arrête d'écouter la carte et on supprime les mesures

                carte.off('click', onClick, this);
                deleteMeasures(); //On rétablit les boutons et reset devient start

                this.menuOutilsComponent.disableMenu(false);
                carteContenant.style.cursor = 'grab';
                butt.innerHTML = 'Commencer la mesure';
              }
          }
          /**
            * Affiche les lignes, points
            * @param {event} e
           */


          function onClick(e) {
            //On rempli la liste des points à mesurer
            listePoints.push([e.latlng.lat, e.latlng.lng]);
            var l = listePoints.length; //On trace la polyligne et calcul la distance à partir de deux points dans la liste

            if (l > 1) {
              calculDistances(listePoints);
              leaflet__WEBPACK_IMPORTED_MODULE_1__["polyline"]([[listePoints[l - 1][0], listePoints[l - 1][1]], [listePoints[l - 2][0], listePoints[l - 2][1]]], {
                fillOpacity: 1,
                color: '#EC3816'
              }).addTo(carte);
            } //On trace les points aux extrémités des lignes et on affiche les coordonnées des points


            leaflet__WEBPACK_IMPORTED_MODULE_1__["circleMarker"](e.latlng, {
              radius: 4,
              color: '#EC3816',
              fillColor: '#EC3816',
              fillOpacity: 1
            }).addTo(carte);
            contPoints.style.border = 'solid';
            contPoints.innerHTML += '<p style="margin-bottom: 0; height:14px;"><strong>Point ' + i + ' :</strong> </p><p style="margin-bottom: 0;">lat : ' + listePoints[l - 1][0].toFixed(5) + ' ; ' + ' long : ' + listePoints[l - 1][1].toFixed(5) + '</p>';
            i = i + 1;
          }
          /**
            * Supprime les mesures de la carte et du menu
           */


          function deleteMeasures() {
            //On remet les variables à 0 pour une nouvelle mesure
            i = 1;
            listePoints = [];
            distanceTotale = 0; //On remet à null les contenants des informations précédentes

            distDP.innerHTML = distTot.innerHTML = contPoints.innerHTML = '';
            contPoints.style.border = distDP.style.border = distTot.style.border = ''; //On supprime les couches qui ont une valeur fillOpacity (seules les éléments de la mesure en ont)

            carte.eachLayer(function (layer) {
              if (layer.options.fillOpacity) {
                carte.removeLayer(layer);
              }
            });
          }
          /**
            * Mesure et affiche les distances avec les points de la liste
            * @param {array} listePoints
           */


          function calculDistances(listePoints) {
            //On rend les contours des div des resultats visibles :
            distDP.style.border = 'solid';
            distTot.style.border = 'solid';
            var l = listePoints.length;
            avantDernierPoint = leaflet__WEBPACK_IMPORTED_MODULE_1__["latLng"](listePoints[l - 2][0], listePoints[l - 2][1]);
            dernierPoint = leaflet__WEBPACK_IMPORTED_MODULE_1__["latLng"](listePoints[l - 1][0], listePoints[l - 1][1]); //On calcule la distance au dernier points (m puis km)

            distance_m = dernierPoint.distanceTo(avantDernierPoint);
            distance_km = distance_m / 1000; //Distance totale depuis le permier point :

            distanceTotale = distanceTotale + distance_km; //On afffiche ces résultats :

            distDP.innerHTML = '<span style="font-weight:bold;">Au dernier point : </span>' + distance_km.toFixed(3) + ' km';
            distTot.innerHTML = '<span style="font-weight:bold">Distance totale : </span>' + distanceTotale.toFixed(3) + ' km';
          }
        }
      }]);

      return SousMenuMesureComponent;
    }();

    SousMenuMesureComponent.ɵfac = function SousMenuMesureComponent_Factory(t) {
      return new (t || SousMenuMesureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_menu_outils_menu_outils_component__WEBPACK_IMPORTED_MODULE_3__["MenuOutilsComponent"]));
    };

    SousMenuMesureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SousMenuMesureComponent,
      selectors: [["app-sous-menu-mesure"]],
      decls: 11,
      vars: 0,
      consts: [["id", "card-mesure"], ["id", "boutonContainer"], ["mat-raised-button", "", "type", "button", "id", "boutton", "name", "button"], ["id", "conteneur-points"], ["id", "distDernierPoint"], ["id", "distTot"]],
      template: function SousMenuMesureComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mesurer sur la carte");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Commencer la mesure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
      styles: ["#card-mesure[_ngcontent-%COMP%]{\n  background-color: #424242;\n  color: white;\n  border-radius: 20px;\n  margin-right: 10px;\n\twidth: 190px;\n  min-height: 100px;\n}\n\nmat-card-subtitle[_ngcontent-%COMP%]{\n  color: black;\n}\n\n#boutonContainer[_ngcontent-%COMP%]{\n  text-align: center;\n}\n\n#conteneur-points[_ngcontent-%COMP%]{\n  overflow:auto;\n  max-height: 140px;\n  font-size: 12px;\n  padding-left: 2px;\n  margin: 15px 0px 5px 0px;\n}\n\n#distDernierPoint[_ngcontent-%COMP%]{\n  font-size: 12px;\n  margin-bottom: 0px;\n  padding: 2px;\n}\n\n#distTot[_ngcontent-%COMP%]{\n  font-size: 12px;\n  margin-top: 5px;\n  padding: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb3VzLW1lbnVzLW91dGlscy9zb3VzLW1lbnUtbWVzdXJlL3NvdXMtbWVudS1tZXN1cmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtDQUNuQixZQUFZO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NvdXMtbWVudXMtb3V0aWxzL3NvdXMtbWVudS1tZXN1cmUvc291cy1tZW51LW1lc3VyZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NhcmQtbWVzdXJle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcblx0d2lkdGg6IDE5MHB4O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbn1cblxubWF0LWNhcmQtc3VidGl0bGV7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuI2JvdXRvbkNvbnRhaW5lcntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jY29udGVuZXVyLXBvaW50c3tcbiAgb3ZlcmZsb3c6YXV0bztcbiAgbWF4LWhlaWdodDogMTQwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIG1hcmdpbjogMTVweCAwcHggNXB4IDBweDtcbn1cblxuI2Rpc3REZXJuaWVyUG9pbnR7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBwYWRkaW5nOiAycHg7XG59XG5cbiNkaXN0VG90e1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcGFkZGluZzogMnB4O1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SousMenuMesureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sous-menu-mesure',
          templateUrl: './sous-menu-mesure.component.html',
          styleUrls: ['./sous-menu-mesure.component.css']
        }]
      }], function () {
        return [{
          type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
        }, {
          type: _menu_outils_menu_outils_component__WEBPACK_IMPORTED_MODULE_3__["MenuOutilsComponent"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/conf/wfst-plugin.ts":
  /*!*************************************!*\
    !*** ./src/app/conf/wfst-plugin.ts ***!
    \*************************************/

  /*! exports provided: initPlugin */

  /***/
  function srcAppConfWfstPluginTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initPlugin", function () {
      return initPlugin;
    });
    /* harmony import */


    var leaflet_wfst_dist_leaflet_wfst_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! leaflet-wfst/dist/leaflet-wfst.min.js */
    "./node_modules/leaflet-wfst/dist/leaflet-wfst.min.js");
    /* harmony import */


    var leaflet_wfst_dist_leaflet_wfst_min_js__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(leaflet_wfst_dist_leaflet_wfst_min_js__WEBPACK_IMPORTED_MODULE_0__);
    /**
      * Initialise le plugin pour afficher une couche wfs
      * @param {string} nomWorkspace
      * @param {string} nomCouche
      * @param {string} couleur
      * @param {string} or {L.rectangle} filtre
     */


    function initPlugin(nomWorkspace, nomCouche, couleur, filtre) {
      //Options du plugin de récupération de wfst
      var wfstPointOptions; //on initialise le filtre d'afficage des donnnées

      var filter = new L.Filter.Within('geom_gene', filtre, L.CRS.EPSG3857);
      filter.toGml(); //On initialise d'abord les options du plugin
      //Si on ne demande pas de filtre

      if (filtre == 'sans filtre') {
        wfstPointOptions = {
          crs: L.CRS.EPSG4326,
          showExisting: true,
          geometryField: 'geom',
          url: 'http://localhost:8080/geoserver/wfs',
          typeNS: nomWorkspace,
          typeName: nomCouche,
          maxFeatures: 1000,
          opacity: 1,
          style: function style(layer) {
            return {
              color: couleur,
              weight: 1
            };
          }
        };
      } //Si on demande un filtre
      else {
          wfstPointOptions = {
            crs: L.CRS.EPSG4326,
            showExisting: true,
            geometryField: 'geom',
            url: 'http://localhost:8080/geoserver/wfs',
            typeNS: nomWorkspace,
            typeName: nomCouche,
            opacity: 1,
            //On prend le filtre en compte :
            filter: filter,
            style: function style(layer) {
              return {
                color: couleur,
                weight: 1
              };
            }
          };
        } //On rtourne enuite les données wfst transformées en GeoJSON


      return new L.WFST( //On utilise les options :
      wfstPointOptions, new L.Format.GeoJSON({
        crs: L.CRS.EPSG4326,
        pointToLayer: function pointToLayer(geoJsonPoint, latlng) {
          return new L.CircleMarker(latlng, {
            radius: 10
          });
        }
      }));
    }
    /***/

  },

  /***/
  "./src/app/services/layers-service.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/layers-service.service.ts ***!
    \****************************************************/

  /*! exports provided: LayersServiceService */

  /***/
  function srcAppServicesLayersServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayersServiceService", function () {
      return LayersServiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");

    var LayersServiceService =
    /*#__PURE__*/
    function () {
      function LayersServiceService(_http) {
        _classCallCheck(this, LayersServiceService);

        this._http = _http;
        this.cswUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].geoserverCSW;
      }

      _createClass(LayersServiceService, [{
        key: "getXml",
        value: function getXml() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'text/xml');
          return this._http.get(this.cswUrl, {
            headers: headers,
            responseType: 'text'
          });
        }
      }]);

      return LayersServiceService;
    }();

    LayersServiceService.ɵfac = function LayersServiceService_Factory(t) {
      return new (t || LayersServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    LayersServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LayersServiceService,
      factory: LayersServiceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayersServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
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
      production: false,
      geoserverURL: "http://localhost:8080/geoserver/",
      geoserverCSW: "http://localhost:8080/geoserver/csw?service=CSW&version=2.0.2&request=GetRecords&typeNames=gmd:MD_Metadata&maxRecords=1000&resultType=results&elementSetName=full&outputSchema=http://www.isotc211.org/2005/gmd",
      geoserverWFS: "http://localhost:8080/geoserver/wfs"
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
    /*! C:\Users\gasco\Desktop\Projet dev\Angular\ensg_2020-master\ensg_2020-master\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map