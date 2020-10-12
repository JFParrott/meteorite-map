import React from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const HeatMap = (props) => {
  const { meteorites } = props.meteoriteInfo;
  const { startingYear, endingYear, mass } = props.meteoriteInfo.userInputs;
  const centerPosition = [51.505, -0.09];
  return (
    <div className='leaflet-container'>
      <Map center={centerPosition} zoom={3}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {meteorites.map((meteorite) => {
          const { geolocation, name } = meteorite;

          console.log(geolocation);
          if (geolocation) {
            const { latitude, longitude } = geolocation;
            const position = [latitude, longitude];
            return (
              <Marker position={position}>
                <Popup>{name}</Popup>
              </Marker>
            );
          }
        })}
      </Map>
    </div>
  );
};

export default HeatMap;