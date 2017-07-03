webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\r\n    color: rebeccapurple;\r\n    text-decoration: none;\r\n}\r\n\r\na:hover{\r\n    color: red;\r\n    text-decoration: underline;\r\n}\r\n\r\na.active-link{\r\n    color: yellowgreen;\r\n    text-decoration: underline;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The whole content below can be removed with the new code.-->\n<h1>{{title}}</h1>\n<!--<app-home> </app-home>-->\n<nav>\n  <li *ngFor=\"let item of navItems\"> \n    <a [routerLink]='item.link' routerLinkActive='active-link'>{{item.name}}</a>\n    </li>\n</nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* unused harmony export navItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var navItem = (function () {
    function navItem() {
    }
    return navItem;
}());

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Holy';
        this.navItems = [
            { name: "Home", link: "Home" },
            { name: "Catalog", link: "Catalog" },
            { name: "Contact-Us", link: "Contact-Us" }
        ];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_bold_directives__ = __webpack_require__("./src/app/directives/bold.directives.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_while_directives__ = __webpack_require__("./src/app/directives/while.directives.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_factorial_pipe__ = __webpack_require__("./src/app/pipes/factorial.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_user_services__ = __webpack_require__("./src/app/services/user.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contact_us_contact_us_component__ = __webpack_require__("./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__catalog_catalog_component__ = __webpack_require__("./src/app/catalog/catalog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__not_found_not_found_component__ = __webpack_require__("./src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modules_routing_module__ = __webpack_require__("./src/app/modules/routing.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { FormsModule } from '@angular/forms';












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_6__directives_bold_directives__["a" /* boldDirective */],
            __WEBPACK_IMPORTED_MODULE_7__directives_while_directives__["a" /* whileDirective */],
            __WEBPACK_IMPORTED_MODULE_8__pipes_factorial_pipe__["a" /* FactorialPipe */],
            __WEBPACK_IMPORTED_MODULE_10__contact_us_contact_us_component__["a" /* ContactUsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__catalog_catalog_component__["a" /* CatalogComponent */],
            __WEBPACK_IMPORTED_MODULE_12__not_found_not_found_component__["a" /* NotFoundComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_13__modules_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__services_user_services__["a" /* UserService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/catalog/catalog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/catalog/catalog.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  catalog works!\n</p>\n"

/***/ }),

/***/ "./src/app/catalog/catalog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CatalogComponent = (function () {
    function CatalogComponent() {
    }
    CatalogComponent.prototype.ngOnInit = function () {
    };
    return CatalogComponent;
}());
CatalogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-catalog',
        template: __webpack_require__("./src/app/catalog/catalog.component.html"),
        styles: [__webpack_require__("./src/app/catalog/catalog.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CatalogComponent);

//# sourceMappingURL=catalog.component.js.map

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  contact-us works!\n</p>\n"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactUsComponent = (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    return ContactUsComponent;
}());
ContactUsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-contact-us',
        template: __webpack_require__("./src/app/contact-us/contact-us.component.html"),
        styles: [__webpack_require__("./src/app/contact-us/contact-us.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactUsComponent);

//# sourceMappingURL=contact-us.component.js.map

/***/ }),

/***/ "./src/app/directives/bold.directives.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return boldDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var boldDirective = (function () {
    function boldDirective(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.renderer.setStyle(this.elRef.nativeElement, 'cursor', 'pointer');
    }
    boldDirective.prototype.aa = function () {
        this.setFontWeight("bold");
    };
    boldDirective.prototype.bb = function () {
        this.setFontWeight("normal");
    };
    boldDirective.prototype.setFontWeight = function (val) {
        this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', val);
    };
    return boldDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('bold'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], boldDirective.prototype, "elt", void 0);
boldDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Directive */])({
        selector: '[bold]',
        host: {
            '(mouseenter)': 'aa()',
            '(mouseleave)': 'bb()'
        }
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Renderer2 */]) === "function" && _c || Object])
], boldDirective);

var _a, _b, _c;
//# sourceMappingURL=bold.directives.js.map

/***/ }),

/***/ "./src/app/directives/while.directives.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return whileDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var whileDirective = (function () {
    function whileDirective(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(whileDirective.prototype, "while", {
        set: function (condition) {
            if (condition) {
                this.viewContainer.createEmbeddedView(this.template);
            }
            else {
                this.viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    return whileDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], whileDirective.prototype, "while", null);
whileDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Directive */])({
        selector: '[while]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* TemplateRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* ViewContainerRef */]) === "function" && _b || Object])
], whileDirective);

var _a, _b;
//# sourceMappingURL=while.directives.js.map

/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".boldText{\r\n    font-weight:bold;\r\n}\r\n\r\nlabel{\r\ndisplay: block;\r\nwidth: 200px;\r\ntext-align: right;\r\nfont-weight: bold;\r\n}\r\n.form{\r\n    width: 500px;\r\n}\r\n.form__row{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    width:295px;\r\n}\r\n\r\n.form__input input{\r\n    width: 100%;\r\n}\r\n\r\n.form__row + .form__row{\r\n    margin-top: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<H1>\n\n  home works </H1>\n\n<!--<ul>\n  <li (click)=\"onSelect(user)\" *ngFor=\"let user of users\">\n    {{user.firstName}} | {{user.lastName}}\n  </li>\n</ul>-->\n\n<ul>\n  <ng-template ngFor let-user [ngForOf]=\"users\">\n    <li [@userState]=\"user.state\" (click)=\"onSelect(user);toggleState();\" \n    (@userState.start)=\"animStarted($event)\"\n    [@userState]=\"'in'\"\n\n     (dbclick)=\"onSelect(user);deleteUser();\">\n      {{user.lastName}}\n    </li>\n  </ng-template>\n</ul>\n\n----- FORM BEGINS ------------\n<form [formGroup]=\"userForm\" class=\"form\" novalidate (ngSubmit)=\"onSubmit($event, userForm)\">\n  <div class=\"form__row\">\n    <label for=\"lastName\"> Last Name:</label>\n    <div class=\"form__input\">\n      <input id=\"lastName\" formControlName=\"lastName\" (change)=\"clearControlValidation('lastName')\" (focus)=\"clearControlValidation('lastName')\"\n        type=\"text\">\n      <div class=\"message messagwe__error\" *ngIf=\"isFormSubmitted && userForm.controls['lastName'].invalid  && userForm.controls['lastName'].untouched \">\n        <span *ngIf=\"userForm.controls['lastName'].hasError('required')\">last required</span>\n        <span *ngIf=\"userForm.controls['lastName'].hasError('pattern')\">not valid</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"form__row\">\n    <label for=\"firstName\"> First Name:</label>\n    <div class=\"form__input\">\n      <input id=\"firstName\" formControlName=\"firstName\" type=\"text\">\n      <div class=\"message messagwe__error\" *ngIf=\"isFormSubmitted && userForm.controls['firstName'].invalid  && userForm.controls['firstName'].untouched \">\n        first required </div>\n    </div>\n  </div>\n  <div class=\"form__row\">\n    <label for=\"email\"> Email:</label>\n    <div class=\"form__input\">\n      <input id=\"email\" formControlName=\"email\" type=\"text\">\n      <div class=\"message messagwe__error\" *ngIf=\"isFormSubmitted && userForm.controls['email'].invalid  && userForm.controls['email'].untouched \">\n        email required </div>\n    </div>\n  </div>\n  <div class=\"form__row\">\n    <label for=\"age\"> Age:</label>\n    <div class=\"form__input\">\n      <input id=\"age\" formControlName=\"age\" type=\"number\">\n      <div class=\"message messagwe__error\" *ngIf=\"isFormSubmitted && userForm.controls['age'].invalid  && userForm.controls['age'].untouched \">\n        last required </div>\n    </div>\n  </div>\n  <div class=\"form__row\">\n    <input type=\"submit\" value=\"submit\">\n    <input value=\"Reset\" type=\"button\" (click)=\"onClear()\" />\n\n  </div>\n\n</form>\n\n\n\n\n---------------------------------Old -----------\n<nav>\n  <li *ngFor=\"let item of navItems\">\n    <span [bold]>{{item}}</span>\n\n  </li>\n</nav>\n\n\n<br/>\n<span [bold]>adsfasd</span>\n\n<div *ngFor=\"let user of users\">\n  <p [bold] *while=\"user.id < 4\">\n    {{user.name}}\n  </p>\n</div>\n<div>\n  <!--factorial 0 === {{factorialNumber | factorial }}-->\n</div>\n\n<br />\n<div>\n  <!--aaaaaaaaa=== {{ navItems | joinPipe }}-->\n</div>\n\n<br />\n<div *ngFor=\"let user of users\">\n  {{user.firstName}}\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_services__ = __webpack_require__("./src/app/services/user.services.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// for 
//import { NgForm } from '@angular/forms';
// Import for data-driven

// import { joinPipe } from '../pipes/join.pipe'

// declare var jQuery: JQueryStatic;
var HomeComponent = (function () {
    function HomeComponent(
        //Add method which using FormBuilder class to build data-driven form
        formBuilder, userService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.isFormSubmitted = false;
        this.REG_EXP = /[0-9]/;
    }
    HomeComponent.prototype.ngOnInit = function () {
        // jQuery(document).ready(() => {
        // });
        this.users = this.userService.getUsers();
        this.userForm = this.formBuilder.group({
            id: [this.selectedUser ? this.selectedUser.id : null],
            firstName: [this.selectedUser ? this.selectedUser.firstName : null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            lastName: [this.selectedUser ? this.selectedUser.lastName : null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].pattern(this.REG_EXP)]],
            email: [this.selectedUser ? this.selectedUser.email : null],
            age: [this.selectedUser ? this.selectedUser.age : null]
        });
    };
    HomeComponent.prototype.animStarted = function () {
        console.log("animStarted");
        for (var i = 0; i < 999; i++) {
            console.log(i);
        }
        setTimeout(function () { console.log("animStarted100"); }, 1000);
        console.log("animStartedAfter");
    };
    HomeComponent.prototype.toggleState = function () {
        if (this.selectedUser.state === "inactive") {
            this.selectedUser.state = "active";
        }
        else {
            this.selectedUser.state = "inactive";
        }
    };
    HomeComponent.prototype.onSelect = function (currentUser) {
        this.selectedUser = currentUser;
        this.userForm.controls["id"].setValue(this.selectedUser.id);
        this.userForm.controls["firstName"].setValue(this.selectedUser.firstName);
        this.userForm.controls["firstName"].setValue(this.selectedUser.firstName);
        this.userForm.controls["lastName"].setValue(this.selectedUser.lastName);
        this.userForm.controls["email"].setValue(this.selectedUser.email);
        this.userForm.controls["age"].setValue(this.selectedUser.age);
    };
    HomeComponent.prototype.clearControlValidation = function (name) {
        this.userForm.controls[name].markAsUntouched();
    };
    HomeComponent.prototype.onClear = function (e, form) {
        this.userForm.reset();
        this.selectedUser = null;
    };
    HomeComponent.prototype.deleteUser = function () {
        var _this = this;
        var id = this.selectedUser.id;
        var intId = this.users.findIndex(function (x) { return x.id === _this.selectedUser.id; });
        this.selectedUser = null;
        this.users.splice(intId, 1);
    };
    // was template-driven
    //onSubmit(e: Event,form NgForm) {
    // data-driwen form
    HomeComponent.prototype.onSubmit = function (e, form) {
        e.preventDefault();
        this.isFormSubmitted = true;
        //let newUser: User = new User(form.controls["firstName"].value, form.controls["lastName"].value, //form.controls["email"].value, form.controls["age"].value);
        // to remove dublicate user objects
        //this.users = new Array<User>();
        //this.users.push(newUser);
        var newUser = form.value;
        this.userForm.controls["lastName"].markAsUntouched();
        if (this.userForm.valid) {
            if (newUser.id === undefined || newUser.id === null) {
                newUser.state = "inactive";
                this.userService.addUser(newUser);
                this.isFormSubmitted = false;
                this.userForm.reset();
            }
            else {
                this.userService.editUser(newUser);
                this.isFormSubmitted = false;
                this.userForm.reset();
            }
            console.log(this.userService.getUsers());
            this.userService.getUsers();
            //this.users.forEach(user => user.state = "inactive");
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("./src/app/home/home.component.html"),
        styles: [__webpack_require__("./src/app/home/home.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* trigger */])("userState", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])("active", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                    background: "red",
                    transform: "scale(1)"
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])("inactive", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                    background: "green",
                    transform: "scale(1.1)",
                    width: "*"
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])("void => *", [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        background: "blue",
                        transform: "scale(1)"
                    }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])("300ms ease-in", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        background: "yellow",
                        transform: "scale(2)"
                    }))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])("* => *", [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        background: "red",
                        transform: "scale(1)"
                    }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])("300ms ease-in", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        background: "red",
                        transform: "scale(2)"
                    }))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])("active => inactive", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])("300ms ease-in"))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_services__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_services__["a" /* UserService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "./src/app/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(id, firstName, lastName, email, age, state) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.state = state;
    }
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "./src/app/modules/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__catalog_catalog_component__ = __webpack_require__("./src/app/catalog/catalog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_us_contact_us_component__ = __webpack_require__("./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__not_found_not_found_component__ = __webpack_require__("./src/app/not-found/not-found.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ROUTES = [
    { path: "", redirectTo: "Home", pathMatch: "full" },
    { path: "Home", "component": __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: "Catalog", "component": __WEBPACK_IMPORTED_MODULE_3__catalog_catalog_component__["a" /* CatalogComponent */] },
    { path: "Contact-Us", "component": __WEBPACK_IMPORTED_MODULE_4__contact_us_contact_us_component__["a" /* ContactUsComponent */] },
    { path: "**", "component": __WEBPACK_IMPORTED_MODULE_5__not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(ROUTES)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=routing.module.js.map

/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\nPage not not-found <a routerLink=\"/Home\">go to home</a> or <a (click)=\"goBack()\" href=\"#\" >  go back </a>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent.prototype.goBack = function () {
        window.history.back();
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-not-found',
        template: __webpack_require__("./src/app/not-found/not-found.component.html"),
        styles: [__webpack_require__("./src/app/not-found/not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "./src/app/pipes/factorial.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FactorialPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FactorialPipe = (function () {
    function FactorialPipe() {
    }
    FactorialPipe.prototype.transform = function (val, arg) {
        if (val < 0)
            return 0;
        var res = 1;
        for (var i = 1; i <= res; i++) {
            res = res * i;
        }
        return res;
    };
    return FactorialPipe;
}());
FactorialPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'factorial'
    })
], FactorialPipe);

//# sourceMappingURL=factorial.pipe.js.map

/***/ }),

/***/ "./src/app/services/user.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__("./src/app/models/user.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService() {
        this.users = [
            new __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */]("1", "John", "Johnson", "jjohnson@mail.com", 36),
            new __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */]("2", "Jack", "Jackson", "jjackson@mail.com", 25),
            new __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */]("3", "Lois", "Lane", "llane@mail.com", 27),
            new __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */]("4", "Kate", "King", "kking@mail.com", 31)
        ];
    }
    UserService.prototype.getUsers = function () {
        return this.users;
    };
    UserService.prototype.addUser = function (user) {
        var counter = this.users.length + 1;
        user.id = counter.toString();
        this.users.push(user);
    };
    UserService.prototype.editUser = function (user) {
        var i = this.users.findIndex(function (x) { return x.id === user.id; });
        if (i !== -1) {
            this.users[i] = user;
        }
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UserService);

//# sourceMappingURL=user.services.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map