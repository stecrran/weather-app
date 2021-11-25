import { Component, ViewChild, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'map',
  templateUrl: 'map.html'
}) 

// implementing a map display using Google Maps API
export class MapComponent implements OnInit {
	
	@ViewChild("map") mapElement;
	map: any;
	lat: number;
	lng: number;
		
	
	constructor(private store: Storage) {
	}

	// retrieve coordinates based on city
	ngOnInit() {		
	Promise.all([this.store.get("lat"), this.store.get("lng")])
	
	.then(values => {
		this.lat = values[0];
		this.lng = values[1];
		this.initMap();
	}) 	
	.catch((error) => alert("Map cannot be found."));	
	
	console.log("map Initialised");
	}  
	
	// initialise a map based on coordinate values passed to this function
	initMap(){
	let coordinates = new google.maps.LatLng({lat: this.lat, lng: this.lng});
	let mapSetup: google.maps.MapOptions = {
		center: coordinates,
		zoom: 8,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
		
	this.map = new google.maps.Map(this.mapElement.nativeElement, mapSetup)
		
	let marker: google.maps.Marker = new google.maps.Marker({
		map: this.map,
		position: coordinates
	})
	}
	
} 
