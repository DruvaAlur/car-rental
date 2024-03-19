import { Component } from '@angular/core';
import * as L from 'leaflet';
import { MainPageService } from '../../main-page.service';

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
  constructor(private mainPageService:MainPageService){}

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
        console.log(position)
        console.log(position.coords)
        this.currentLat=latitude;
        this.currentLong=longitude
        this.mainPageService.getCityAndState(this.currentLat,this.currentLong).subscribe((resp:any)=>{
          console.log(resp);
          let request={
            city:resp.address.city,
            state:resp.address.state
          }
          this.mainPageService.getStoreLocation(request).subscribe((resp:any)=>{
            console.log(resp)
            this.markForPlaces(resp,map)
            this.nearestStoreLat = resp[0].latitude
            this.nearestStoreLong = resp[0].longitude
          })
        })
        L.marker([latitude, longitude]).addTo(map)
          .bindPopup('Your current location')
          .openPopup();
      });
    }
    

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

  markForPlaces(places:any,map:any){
    const icon =L.icon({
      iconUrl: '../../../assets/images/logo.png',
      iconSize: [32, 32], // Size of the icon
      iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
    });
    let nearestMarker: L.Marker | null = null;
let shortestDistance = Infinity;

// places.forEach((place:any) => {
//   const distance = this.calculateDistance(this.currentLat, this.currentLong, place.location[0], place.location[1]);
//   if (distance < shortestDistance) {
//     shortestDistance = distance;
//     nearestMarker = place.marker;
//   }
// });

// if (nearestMarker) {
//   // Do something with the nearest marker (e.g., highlight it, show its information)
//   // nearestMarker.openPopup();
// }
    places.forEach((place:any) => {
      L.marker([place.latitude,place.longitude],{icon: icon}).addTo(map)
        .bindPopup(place.name)
        .openPopup();
    });
  }
  
}


