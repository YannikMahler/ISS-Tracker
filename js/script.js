
var ISS = L.map('map').setView([0, 0], 2);
const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution }).addTo(ISS);

const issIcon = L.icon({
    iconUrl: 'img/iss.svg',
    iconSize: [50, 32],
    iconAnchor: [25, 16]
});    

let marker = L.marker([0, 0], {icon: issIcon}).addTo(ISS);


api_url ='https://api.wheretheiss.at/v1/satellites/25544';

async function getISS() {
    const response = await fetch(api_url);
    const data = await response.json();
    const { latitude, longitude, velocity, timestamp} = data;

    marker.setLatLng([latitude, longitude]);
    console.log(latitude);
    console.log(longitude);
    console.log(data);
    document.getElementById('lat').textContent = (latitude.toFixed(2) );
    document.getElementById('lon').textContent = longitude.toFixed(2);
    document.getElementById('velo').textContent = velocity.toFixed(2);
}


getISS();
//setInterval(getISS, 2000);