import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import {Home} from "./components/Home";
import {GatewayAdd} from './components/GatewayAdd';
import {GatewayDetails} from "./components/GatewayDetails";
import {DeviceAdd} from './components/DeviceAdd';
import {Login} from "./components/Login";
import {Logout} from "./components/Logout";
import Navbar from "./components/Navbar";

function App() {
    return (
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/gateways/new' element={<GatewayAdd/>}/>
                    <Route path='/gateways/:gatewayId' element={<GatewayDetails/>}/>
                    <Route path='/devices/new' element={<DeviceAdd/>}/>
                    <Route path='/gateways/:gatewayId/new-device' element={<DeviceAdd/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/logout' element={<Logout/>}/>
                </Routes>
            </Router>
    );
}

export default App;
