import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})

// settings page for city and measurement units
export class SettingsPage {
	
	currentSetting: string;
	city: string;
	
	constructor(public navCtrl: NavController, public navParams: NavParams, private store: Storage) {
	}

	// set values to be used in application
    saveSetting(){
		// set city to default to Galway if no city is entered
		if (this.city == undefined || this.city == ""){
			this.city = "Galway";			
		}
		
		this.store.set("currentSetting", this.currentSetting);
		this.store.set("city", this.city);
		
		this.navCtrl.pop();	
	}
	
	// allow current settings to be displayed on the settings page
	ionViewWillEnter(){
	
	Promise.all([this.store.get("currentSetting"), this.store.get("city")])
	
	.then(values => {
		this.currentSetting = values[0];
		this.city = values[1];		
	}) 
	
	.catch((error) => alert("Setting is not available"));	
	}
	


}
