import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SettingsPage } from '../pages/settings/settings';
import { MapComponent } from '../components/map/map';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WeatherProvider } from '../providers/weather/weather';
import { NewsProvider } from '../providers/news/news';
import { HttpClientModule } from '@angular/common/http';

declare global { // required to resolve type for Google Maps type
  type unknown = any
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	SettingsPage,
	MapComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
	IonicStorageModule.forRoot(),
	HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	SettingsPage,
	MapComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherProvider,
    NewsProvider
  ]
})
export class AppModule {}
