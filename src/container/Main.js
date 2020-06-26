import React, { Component } from 'react';
import Home from "../components/Home"
import About from '../components/About';
import Contact from '../components/Contact';
import Trips from '../components/Trips';
import Register from '../components/Register';
import HotelAdmin from '../components/webAdministration/hotel/hotel';
import PlaceAdmin from '../components/webAdministration/place/place';
import VehicelAdmin from '../components/webAdministration/vehicle/vehicle';
import GuestAdmin from '../components/webAdministration/guest/guest';
import {
    Switch,
    Route,
} from 'react-router-dom'

class Main extends Component {
    render() {
        return (
            <div style = {{position:'relative'}}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/trips" component={Trips} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/register" component={Register}/>
                    <Route path="/management" component={HotelAdmin}/>
                    <Route path="/place" component={PlaceAdmin}/>
                    <Route path="/vehicle" component={VehicelAdmin}/>
                    <Route path="/guest" component={GuestAdmin}/>
                </Switch>
            </div>
        );
    }
}

export default Main;