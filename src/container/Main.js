import React, { Component } from 'react';
import Home from "../components/home/Home"
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Trips from '../components/trips/Trips';
import Details from '../components/trips/details/Details'
import Login from '../components/login/Login'
import Register from '../components/register/Register';
import HotelAdmin from '../components/webAdministration/hotel/hotel';
import PlaceAdmin from '../components/webAdministration/place/place';
import FoodAdmin from '../components/webAdministration/food/food';
import FoodCreateAdmin from '../components/webAdministration/food/food-create';
import FoodUpdateAdmin from '../components/webAdministration/food/food-update';
import FoodDetailsAdmin from '../components/webAdministration/food/food-details';
import GuestAdmin from '../components/webAdministration/guest/guest';
import GuestUpdateAdmin from '../components/webAdministration/guest/guest-update'
import HotelUpdateAdmin from '../components/webAdministration/hotel/hotel-update'
import HotelDetailsAdmin from '../components/webAdministration/hotel/hotel-details'
import HotelCreateAdmin from '../components/webAdministration/hotel/hotel-create'
import PlaceUpdateAdmin from '../components/webAdministration/place/place-update'
import PlaceCreateAdmin from '../components/webAdministration/place/place-create'
import PlaceDetailsAdmin from '../components/webAdministration/place/place-details'


import {
    Switch,
    Route,
} from 'react-router-dom'

class Main extends Component {
    render() {
        return (
            <div style={{ position: 'relative' }}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/trips" component={Trips} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/hotel" component={HotelAdmin} />
                    <Route path="/place" component={PlaceAdmin} />
                    <Route path="/food" component={FoodAdmin} />
                    <Route path="/food-create" component={FoodCreateAdmin} />
                    <Route path="/food-update/:id" component={FoodUpdateAdmin} />
                    <Route path="/food-details/:id" component={FoodDetailsAdmin} />
                    <Route path="/guest" component={GuestAdmin} />
                    <Route path="/guest-update" component={GuestUpdateAdmin} />
                    <Route path="/hotel-update/:id" component={HotelUpdateAdmin} />
                    <Route path="/hotel-details/:id" component={HotelDetailsAdmin} />
                    <Route path="/hotel-create" component={HotelCreateAdmin} />
                    <Route path="/place-update/:id" component={PlaceUpdateAdmin} />
                    <Route path="/place-details/:id" component={PlaceDetailsAdmin} />
                    <Route path="/place-create" component={PlaceCreateAdmin} />
                    <Route path="/details/:id" component={Details} />
                </Switch>
            </div>
        );
    }
}

export default Main;