import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.css']
})
export class MapComponentComponent {
  currentLat:number=0;
  currentLong:number=0;
  nearestStoreLat:number=0;
  nearestStoreLong:number=0;
  constructor(){}

  ngOnInit(){
    const map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // var marker = L.marker([51.5, -0.09]).addTo(map);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        console.log(position.coords)
        this.currentLat=latitude;
        this.currentLong=longitude
        L.marker([latitude, longitude]).addTo(map)
          .bindPopup('Your current location')
          .openPopup();
      });
    }
    const icon =L.icon({
      iconUrl: '../../../assets/images/logo.png',
      iconSize: [32, 32], // Size of the icon
      iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
    });
    const places:any = [
      { location: [51.5, -0.09], name: 'Place 1' },
      { location: [51.51, -0.1], name: 'Place 2' },
      { location: [51.49, -0.1], name: 'Place 3' }
    ];
    let nearestMarker: L.Marker | null = null;
let shortestDistance = Infinity;

places.forEach((place:any) => {
  const distance = this.calculateDistance(this.currentLat, this.currentLong, place.location[0], place.location[1]);
  if (distance < shortestDistance) {
    shortestDistance = distance;
    nearestMarker = place.marker;
  }
});

if (nearestMarker) {
  // Do something with the nearest marker (e.g., highlight it, show its information)
  // nearestMarker.openPopup();
}
    places.forEach((place:any) => {
      L.marker(place.location,{icon: icon}).addTo(map)
        .bindPopup(place.name)
        .openPopup();
    });

    map.on('click', (e: L.LeafletMouseEvent) => {
      console.log('Clicked location:', e.latlng.lat, e.latlng.lng);
      this.nearestStoreLat = e.latlng.lat
      this.nearestStoreLong = e.latlng.lng
    });
  }
  

   calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance; // Distance in kilometers
  }

  openMaps(){
    window.open(`https://www.google.com/maps/search/?api=1&query=${this.currentLat},${this.currentLong}`)
    // window.open(`https://www.google.com/maps/dir/51.5, -0.09/55.5, -1.09,58.5, -1.09`)
  }
  
}


