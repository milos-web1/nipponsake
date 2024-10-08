import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import './MapContainer.css';
import * as Constant from '../../utils/constants.js'



const iconUrl= Constant.image_path.common +"icon-marker.png"

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores:
      [
        {lat: 34.209943, lng: 135.236607}
      ],
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }

  }
  onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
      this.setState({
      showingInfoWindow: false,
      activeMarker: null
      })
      }
  };

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.lat,
       lng: store.lng
     }}
     name={'Current location'}
     icon = {{ url: iconUrl}}/>
    })
  }

  render() {
    return (

        <Map
          google={this.props.google}
          zoom={10}
          style={{width: this.props.width, height:this.props.height}}
          initialCenter = {{ lat: this.props.coord.lat, lng: this.props.coord.lng}}
          streetViewControl = {false}
          fullscreenControl = {false}
          mapTypeControl = {false}
          zoomControl= {false}
        >
          {this.displayMarkers()}
        </Map>

    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyA-Jya7t91w9xqmZmjmQyJ82qDEdi1hZpw'
})(MapContainer);
