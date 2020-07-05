import React, { Component } from 'react';
import Home from "../components/Home"
import About from '../components/About';
import Contact from '../components/Contact';
import Trips from '../components/Trips';
import Register from '../components/Register';
import HotelAdmin from '../components/webAdministration/hotel/hotel';
import PlaceAdmin from '../components/webAdministration/place/place';
import FoodAdmin from '../components/webAdministration/food/food';
import GuestAdmin from '../components/webAdministration/guest/guest';
import GuestUpdateAdmin from '../components/webAdministration/guest/guest-update'
import HotelUpdateAdmin from '../components/webAdministration/hotel/hotel-update'
import PlaceUpdateAdmin from '../components/webAdministration/place/place-update'
import FoodUpdateAdmin from '../components/webAdministration/food/food-update'

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
                    <Route path="/hotel" component={HotelAdmin}/>
                    <Route path="/place" component={PlaceAdmin}/>
                    <Route path="/food" component={FoodAdmin}/>
                    <Route path="/guest" component={GuestAdmin}/>
                    <Route path="/guest-update" component={GuestUpdateAdmin}/>
                    <Route path="/hotel-update" component={HotelUpdateAdmin}/>
                    <Route path="/place-update" component={PlaceUpdateAdmin}/>
                    <Route path="/food-update" component={FoodUpdateAdmin}/>
                </Switch>
            </div>
        );
    }
}

export default Main;