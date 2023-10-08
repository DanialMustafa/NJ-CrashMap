//import StationList from "../components/StationList";
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
// import { statesData } from '../assets/statedata';
import { njCounties } from '../assets/njcounties';

function App() {
    const center = [40.356843798356444, -74.47332961152759];

    function onEachFeature(feature,layer) {
        layer.bindPopup(layer.feature.properties.county);
        layer.on('mouseover', function (feature, layer) {
            this.openPopup();
            // alert(this.feature.properties.county)
            this.setStyle({
                'fillColor': '#0000ff'
            });
        })
        layer.on('mouseout', function () {
            this.closePopup();
            this.setStyle({
                'fillColor': '#ffe499'
            });
        });
        layer.on('click', function () {
            window.location.href = ("/" + this.feature.properties.county)
        });
    }

    return (
            <MapContainer
                center={center}
                zoom={8}
                style={{ width: '100vw', height: '100vh'}}
            >

            <TileLayer
                url="https://api.maptiler.com/maps/basic-v2/?key=SdUwAULXjYVFUrRdMRBI#0.6/-16.72691/39.33261"
                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />
            {/* <GeoJSON data={statesData.features} /> */}
            <GeoJSON data={njCounties.features} onEachFeature={onEachFeature} style={{fillColor: '#ffe499'}}/>

            </MapContainer>

    );
}

export default App;
