webpackJsonp([1],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, store) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.store = store;
    }
    // set values to be used in application
    SettingsPage.prototype.saveSetting = function () {
        // set city to default to Galway if no city is entered
        if (this.city == undefined || this.city == "") {
            this.city = "Galway";
        }
        this.store.set("currentSetting", this.currentSetting);
        this.store.set("city", this.city);
        this.navCtrl.pop();
    };
    // allow current settings to be displayed on the settings page
    SettingsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        Promise.all([this.store.get("currentSetting"), this.store.get("city")])
            .then(function (values) {
            _this.currentSetting = values[0];
            _this.city = values[1];
        })
            .catch(function (error) { return alert("Setting is not available"); });
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\ohsev\Documents\HDip\MobileAppDev\Project\G00097717\WeatherApp Project\src\pages\settings\settings.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<style>\n	#settings {\n		border: 1px solid black;\n		background:#0099ff;\n	}\n	\n</style>\n\n<ion-content padding id="settings">\n		\n	<ion-list>	\n		<h4><ion-icon name="globe"></ion-icon><b> Set location:</b> {{ city }}</h4>\n		<ion-item>\n			<ion-label>City: </ion-label>\n			<ion-input [(ngModel)]="city" placeholder="(enter location here)"></ion-input>\n		</ion-item>\n	</ion-list>\n	\n	<ion-list>\n		<ion-item>\n			<h1><b>Settings</b></h1>\n		</ion-item>	\n	</ion-list>\n\n	<ion-list radio-group [(ngModel)]="currentSetting">\n		<ion-list-header>\n			Units: <b>{{ currentSetting }}</b>\n		</ion-list-header>\n		\n		<ion-item>\n			<ion-label>Standard</ion-label>\n			<ion-radio value="standard"></ion-radio>\n		</ion-item>\n		\n		<ion-item>\n			<ion-label>Metric</ion-label>\n			<ion-radio value="metric"></ion-radio>\n		</ion-item>\n		\n		<ion-item>\n			<ion-label>Imperial</ion-label>\n			<ion-radio value="imperial"></ion-radio>\n		</ion-item>\n		\n	</ion-list>\n	<button ion-button (click)="saveSetting()">Save</button>\n	\n</ion-content>\n'/*ion-inline-end:"C:\Users\ohsev\Documents\HDip\MobileAppDev\Project\G00097717\WeatherApp Project\src\pages\settings\settings.html"*/,
        })
        // settings page for city and measurement units
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/settings/settings.module": [
		281,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_settings_settings__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_weather_weather__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_news_news__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, store, weather, news) {
        this.navCtrl = navCtrl;
        this.store = store;
        this.weather = weather;
        this.news = news;
        this.newsDisabled = true;
        this.display = true;
    }
    // open settings page to select city and measurement units
    HomePage.prototype.openSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_settings_settings__["a" /* SettingsPage */]);
    };
    // display or hide news items using News button
    HomePage.prototype.displayNews = function () {
        this.display = !this.display;
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // get values to use for measurement units, city & country
        Promise.all([this.store.get("currentSetting"), this.store.get("city"), this.store.get("country")])
            .then(function (values) {
            _this.currentSetting = values[0];
            _this.city = values[1];
            _this.country = values[2];
            _this.weather.city = _this.city;
            _this.weather.getWeatherMetric().subscribe(function (weatherData) {
                _this.city_name = weatherData.name;
                _this.current_weather = weatherData.weather;
                _this.temperature = weatherData.main;
                _this.unit = "°C";
                _this.country = weatherData.sys["country"];
                _this.lat = weatherData.coord['lat'];
                _this.lng = weatherData.coord['lon'];
                _this.store.set("lat", _this.lat);
                _this.store.set("lng", _this.lng);
                _this.newsDisabled = false;
                _this.news.country = _this.country;
                _this.news.getNews().subscribe(function (data) {
                    _this.story_results = data.totalResults;
                    _this.article = data.articles;
                });
            });
            // if no city or city not found
            if (_this.country == undefined) {
                _this.city_name = _this.city;
                _this.current_weather = [{ "main": "City not found", "description": "search different city", "icon": "03n" }];
                _this.temperature = 0; //{"temp":0,"feels_like":0,"humidity":0};
                _this.unit = "N/A";
                _this.newsDisabled = true;
                _this.display = true;
            }
            // display metric units
            if (_this.currentSetting == "metric") {
                _this.weather.getWeatherMetric().subscribe(function (weatherData) {
                    _this.temperature = weatherData.main;
                    _this.unit = "°C";
                });
            }
            else if (_this.currentSetting == "imperial") {
                _this.weather.getWeatherImperial().subscribe(function (weatherData) {
                    _this.temperature = weatherData.main;
                    _this.unit = "°F";
                });
            }
            else if (_this.currentSetting == "standard") {
                _this.weather.getWeatherStandard().subscribe(function (weatherData) {
                    _this.temperature = weatherData.main;
                    _this.unit = " K";
                });
            }
            else {
                _this.currentSetting == "metric"; // default to metric
            }
        })
            .catch(function (error) { return alert("Setting is not available"); });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\ohsev\Documents\HDip\MobileAppDev\Project\G00097717\WeatherApp Project\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      G00097717\n    </ion-title>\n	<ion-buttons end> <button (click)="openSettings()"> <ion-icon name="settings"></ion-icon></button> </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<style>\n	table {\n		border: 1px solid black;\n		width:50%;\n	}\n	\n	th {\n		background-color:#a6b0bd;\n		border: 1px solid black;\n		width:50%;\n		font-size: 16px;\n	}\n\n	td {\n		background-color:#a0bbde;\n		border: 1px solid black;\n		text-align:center;\n		font-size: 14px;\n	}\n	\n	#news {\n		background-color:#2a2b2e;\n		border: 1px solid black;\n	}\n</style>\n\n<ion-content style="background:#0099ff" padding>\n\n	<h1>Weather for {{ city_name }}</h1>\n\n	<map></map>\n\n	<ion-item *ngFor="let weather of current_weather" style="background:#0099ff" >\n		<img width="120" height="120" src="http://openweathermap.org/img/wn/{{ weather.icon }}@2x.png">\n		<br>\n	<table>\n	  <tr>\n			<th>Forecast</th>\n			<th>Description</th>\n	  </tr>\n	  <tr>\n			<td>{{ weather.main }}</td>\n			<td>{{ weather.description }}</td>\n	  </tr> \n	</table>\n\n	<br>\n\n	<table>\n		<tr>\n			<th colspan="2" style="background-color:#7e8996">Temperature</th>\n		</tr>\n		<tr>\n			<th>Actual</th>\n			<th>Feel</th>\n		</tr>\n		<tr>\n			<td>{{ temperature["temp"] }}{{ unit }}</td>\n			<td>{{ temperature["feels_like"] }}{{ unit }}</td>\n		</tr>\n		<tr>\n			<th>High</th>\n			<th>Low</th>\n		</tr>\n		<tr>\n			<td>{{ temperature["temp_max"] }}{{ unit }}</td>\n			<td>{{ temperature["temp_min"] }}{{ unit }}</td>\n		</tr>\n	</table>\n\n	<br>\n\n	<table>\n		<tr>\n			<th colspan="2">Humidity</th>\n		</tr>\n		<tr>\n			<td>{{ temperature["humidity"] }}%</td>\n		</tr>\n	</table>\n\n	</ion-item>\n\n	<ion-item style="background:#0099ff">\n		<button ion-button [disabled]="newsDisabled" (click)="displayNews()">NEWS</button>\n	</ion-item>\n\n	<ion-item id="news" [hidden]="display">\n		<h1 style="color:#9fa2ab"><b>Total News Stories from {{ country }}: {{ story_results }}</b></h1>\n		\n		<ion-item *ngFor="let item of article" style="background-color:#2a2b2e">\n			<a href="{{ item.url }}" target="_blank"><img width="300" height="180" [src]="item.urlToImage"></a>\n			<p><a href="{{ item.url }}" target="_blank">{{ item.title }}</a></p>\n			<p><a href="{{ item.url }}" target="_blank">({{ item.description }})</a></p>			\n		</ion-item>\n	</ion-item>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\ohsev\Documents\HDip\MobileAppDev\Project\G00097717\WeatherApp Project\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_weather_weather__["a" /* WeatherProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_news_news__["a" /* NewsProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeatherProvider = /** @class */ (function () {
    // weather data retrieved from internet resource using HttpClient 
    function WeatherProvider(http) {
        this.http = http;
        this.temp_metric = "&units=metric"; // set link extension for metric units
        this.temp_imperial = "&units=imperial"; // set link extension for imperial units
    }
    WeatherProvider.prototype.getWeatherStandard = function () {
        return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&appid=764cc58343a9bf324b052a80b8dfff2a');
    };
    WeatherProvider.prototype.getWeatherMetric = function () {
        return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&appid=764cc58343a9bf324b052a80b8dfff2a' + this.temp_metric);
    };
    WeatherProvider.prototype.getWeatherImperial = function () {
        return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&appid=764cc58343a9bf324b052a80b8dfff2a' + this.temp_imperial);
    };
    WeatherProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], WeatherProvider);
    return WeatherProvider;
}());

//# sourceMappingURL=weather.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsProvider = /** @class */ (function () {
    // news data retrieved from internet resource using HttpClient 
    function NewsProvider(http) {
        this.http = http;
    }
    // news items retrieved based on country
    NewsProvider.prototype.getNews = function () {
        return this.http.get('https://newsapi.org/v2/top-headlines?country=' + this.country + '&pageSize=5&apiKey=ee0edd8987cb48d1a5b1be8fc578387e');
    };
    NewsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], NewsProvider);
    return NewsProvider;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_map_map__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_weather_weather__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_news_news__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_6__components_map_map__["a" /* MapComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_6__components_map_map__["a" /* MapComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_weather_weather__["a" /* WeatherProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_news_news__["a" /* NewsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapComponent = /** @class */ (function () {
    function MapComponent(store) {
        this.store = store;
    }
    // retrieve coordinates based on city
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        Promise.all([this.store.get("lat"), this.store.get("lng")])
            .then(function (values) {
            _this.lat = values[0];
            _this.lng = values[1];
            _this.initMap();
        })
            .catch(function (error) { return alert("Map cannot be found."); });
        console.log("map Initialised");
    };
    // initialise a map based on coordinate values passed to this function
    MapComponent.prototype.initMap = function () {
        var coordinates = new google.maps.LatLng({ lat: this.lat, lng: this.lng });
        var mapSetup = {
            center: coordinates,
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapSetup);
        var marker = new google.maps.Marker({
            map: this.map,
            position: coordinates
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("map"),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "mapElement", void 0);
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'map',template:/*ion-inline-start:"C:\Users\ohsev\Documents\HDip\MobileAppDev\Project\G00097717\WeatherApp Project\src\components\map\map.html"*/'<!--map settings-->\n<div #map id="map" style="height:30%"> </div>\n\n\n'/*ion-inline-end:"C:\Users\ohsev\Documents\HDip\MobileAppDev\Project\G00097717\WeatherApp Project\src\components\map\map.html"*/
        })
        // implementing a map display using Google Maps API
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], MapComponent);
    return MapComponent;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(200);
/// <reference types="googlemaps" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\ohsev\Documents\HDip\MobileAppDev\Project\G00097717\WeatherApp Project\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\ohsev\Documents\HDip\MobileAppDev\Project\G00097717\WeatherApp Project\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map