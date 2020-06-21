import React, { Component } from 'react';
import Home from "../components/Home"
import About from '../components/About';
import Contact from '../components/Contact';
import Trips from '../components/Trips';
import Register from '../components/Register';
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
                </Switch>
            </div>
        );
    }
}

export default Main;