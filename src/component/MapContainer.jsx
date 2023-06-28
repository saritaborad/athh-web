import React, { Component } from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { MdDirections } from "react-icons/md";
// import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps"
// import withScriptjs from 'react-google-maps/lib/withScriptjs'
const mapStyles = {
    position: "relative",
    // width: "100%",
    color: "black",
    height: "100%",
    borderRadius: 40,
};

export class MapContainer extends Component {
    state = {
        showingInfoWindow: true,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
    };
    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };
    render() {
        return (
            <div className='mapContainer'>
                <div style={{ position: "relative", height: "100%", }}>
                    <Map
                        google={this.props.google}
                        zoom={14}
                        style={mapStyles}
                        initialCenter={
                            {
                                lat: 21.214708029932858,
                                lng: 72.84016974205574
                            }
                        }
                    >
                        <button id="mapButton" ><a href="https://goo.gl/maps/Qe8bLgMba7XvEy54A" target="_blank">Directions           <MdDirections id="direction" size={25} /></a></button>
                        <Marker
                            onClick={this.onMarkerClick}
                            name={'Athh technologies'}
                        />
                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                            onClose={this.onClose}
                        >
                            <div>
                                <h4 style={{
                                    color: "black",
                                    fontWeight: "bold",
                                }}>{this.state.selectedPlace.name}</h4>
                            </div>
                        </InfoWindow>
                    </Map>
                </div>
            </div >
        );
    }
}

export default GoogleApiWrapper({
    // apiKey: 'AIzaSyBXfWk8CDftsybW0XwJsqjqykv9xylSecg'
    apiKey: 'AIzaSyDG5x7ZlI6H2w4iq2468D0fjjIqQmtKVhU'
})(MapContainer);

