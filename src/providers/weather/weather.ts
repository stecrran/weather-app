import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class WeatherProvider {
	
	city: string; // set link variable for city
	
	temp_metric: string = "&units=metric"; // set link extension for metric units
	temp_imperial: string = "&units=imperial"; // set link extension for imperial units
	
	// weather data retrieved from internet resource using HttpClient 
	constructor(public http: HttpClient) {		
	}
	  
	getWeatherStandard(): Observable<any> {
		return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+this.city+'&appid=764cc58343a9bf324b052a80b8dfff2a');
	}
	  
	getWeatherMetric(): Observable<any> {
		return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+this.city+'&appid=764cc58343a9bf324b052a80b8dfff2a'+this.temp_metric);
	}
	  
	getWeatherImperial(): Observable<any> {
		return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+this.city+'&appid=764cc58343a9bf324b052a80b8dfff2a'+this.temp_imperial);
	}
  
}
