import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from '../../pages/settings/settings';
import { Storage } from '@ionic/storage';
import { WeatherProvider } from '../../providers/weather/weather';
import { NewsProvider } from '../../providers/news/news';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	newsDisabled: boolean = true;
	
	currentSetting: string;
	unit: string;
	display: boolean = true;

	city_name: string;
	city: string;
	current_weather: any[];
	temperature: number;
	
	story_results: number;
	country: string;
	article: any[];	
	lat: number;
	lng: number;


	constructor(public navCtrl: NavController, private store: Storage, private weather: WeatherProvider, private news: NewsProvider) {		
	}
	  
	// open settings page to select city and measurement units
	openSettings(){
		this.navCtrl.push(SettingsPage);
	}
	
	// display or hide news items using News button
	displayNews(){
		this.display = !this.display;  
	}
	

    ionViewWillEnter(){
	// get values to use for measurement units, city & country
	Promise.all([this.store.get("currentSetting"), this.store.get("city"), this.store.get("country")]) 
	
	.then(values => {
		this.currentSetting = values[0];
		this.city = values[1];
		this.country = values[2];
		this.weather.city = this.city;
	 
		this.weather.getWeatherMetric().subscribe(weatherData => {
			this.city_name = weatherData.name;	
			this.current_weather = weatherData.weather;
			this.temperature = weatherData.main;
			this.unit = "°C";
			this.country = weatherData.sys["country"];
			this.lat = weatherData.coord['lat'];
			this.lng = weatherData.coord['lon'];
		
			this.store.set("lat", this.lat);
			this.store.set("lng", this.lng);
			
			this.newsDisabled = false;
							
			this.news.country = this.country;
			this.news.getNews().subscribe(data => {
			this.story_results = data.totalResults;
			this.article = data.articles;	
				
			})

		})
		
		// if no city or city not found
		if (this.country == undefined){
			this.city_name = this.city;	
			this.current_weather = [{"main":"City not found","description":"search different city","icon":"03n"}];
			this.temperature = 0; //{"temp":0,"feels_like":0,"humidity":0};
			this.unit = "N/A"
			this.newsDisabled = true;
			this.display = true;
		}
		
		// display metric units
		if (this.currentSetting == "metric"){
			this.weather.getWeatherMetric().subscribe(weatherData => {
				this.temperature = weatherData.main;
				this.unit = "°C";	
			});
		}
		// display imperial units
		else if (this.currentSetting == "imperial"){
			this.weather.getWeatherImperial().subscribe(weatherData => {
				this.temperature = weatherData.main;
				this.unit = "°F";
			});
		}
		// display standard units
		else if (this.currentSetting == "standard") {
			this.weather.getWeatherStandard().subscribe(weatherData => {
				this.temperature = weatherData.main;
				this.unit = " K";
			});
		}
		else {
			this.currentSetting == "metric"; // default to metric
		}
		

	}) 
	
	.catch((error) => alert("Setting is not available"));	
	}

}

