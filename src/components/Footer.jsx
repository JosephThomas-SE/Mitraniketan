import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Footer = () => {
  const position = [9.681128216173386, 76.89411063681557]; // Coordinates for Vagamon

  return (
    <footer className="footer-out">
      <div className="footer">
      <div className="footer-left">
        <h3>Get Connected</h3>
        <p>Mitraniketan Social Service Society</p>
        <p>Kurishumala Ashram Rd, Vazhikadavu</p>
        <p>Vagamon PO, Kerala, India 685503</p>
        <p className="footer-last">Phone: 094959 48600</p>
        <p className="footer-last">Email: mitraniketanvagamon@gmail.com</p>
      </div>
      <div className="footer-right">
        <MapContainer center={position} zoom={5} style={{ height: "275px", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              Mitraniketan Vagamon <br /> Kerala, India.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      </div>
      <p className="footer-center">&copy; 2024 Mitraniketan. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
