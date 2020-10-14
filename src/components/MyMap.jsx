import React, { Component } from 'react'
import {Map, GeoJSON} from 'react-leaflet'
import mapData from './../data/countries.json'
import 'leaflet/dist/leaflet.css'
import './MyMap.css'

export class MyMap extends Component {
    state = {

    }

    componentDidMount () {
        console.log(mapData)
    }

    countryStyle = {
        fillColor: 'red',
        fillOpacity: 1,
        color: 'black',
        weight: 2
    }

    printMessageToConsole = (event) => {
        console.log('clicked')
    }

    changeCountryColor = (event) => {
        event.target.setStyle({
            color: 'green',
            fillColor: 'yellow',
            fillOpacity: 0.5
        })
    }

    onEachCountry = (country, layer) => {
        const counyrtName = country.properties.ADMIN
        //console.log(country)

        layer.bindPopup(counyrtName)
        layer.on({
            click: this.changeCountryColor
        })
    }

    render() {
        return (
            <div>
                <h2 style={{ textAlign: "center"}}>My Map</h2>
                <Map style={{ height: "80vh"}} zoom={2} center={[20, 100]} >
                    <GeoJSON style={this.countryStyle} data={mapData.features} onEachFeature={this.onEachCountry} />
                </Map>
            </div>
        )
    }
}

export default MyMap
