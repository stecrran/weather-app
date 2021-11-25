import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class NewsProvider {
	
	country: string;
	
	// news data retrieved from internet resource using HttpClient 
	constructor(public http: HttpClient) {
	}
  
	// news items retrieved based on country
	getNews(): Observable<any> {
		return this.http.get('https://newsapi.org/v2/top-headlines?country='+this.country+'&pageSize=5&apiKey=ee0edd8987cb48d1a5b1be8fc578387e');
	}

}