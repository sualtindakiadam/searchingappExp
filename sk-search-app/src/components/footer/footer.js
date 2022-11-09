import React from "react";
import { NavLink } from "react-router-dom";
import office from "../../assets/office.jpg"
import "./footer.scss"

import { GoLocation } from "react-icons/go"


import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <GoLocation size="20" className="icon1" />;





export default function Footer() {

    const defaultProps = {
        center: {
            lat: 41.0191374555372 ,
            lng: 28.89094911170246

           
        },
        zoom: 15
    };
    return (
        <div className="footerContainer">
            <div className="imageContainer">
                <img src={office} className="officeImage" />
            </div>
            <div className="infoContainer">
                <p>Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul</p>
                Telefon:  0543 488 84 45
                E-posta: bilgi@tesodev.com
            </div>
            <div className="mapContainer">

                <div style={{ height: '350px', width: '350px' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyDgF7Vow2-IiDaHOCd9JWWsnPkpzYSlmb8" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <AnyReactComponent
                            lat={defaultProps.center.lat}
                            lng={defaultProps.center.lng}
                         
                        />


                    </GoogleMapReact>
                </div>


            </div>
        </div>
    )
}