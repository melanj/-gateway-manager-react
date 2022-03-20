import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import {Home} from "./components/Home";
import {GatewayAdd} from './components/GatewayAdd';
import {GatewayDetails} from "./components/GatewayDetails";
import {DeviceAdd} from './components/DeviceAdd';
import {Login} from "./components/Login";
import {Logout} from "./components/Logout";
import {CssBaseline, Link} from '@mui/material';

function App() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Link href="/">Home</Link>
            <Link href="/gateways/new">Add Gateway</Link>
            <Link href="/devices/new">Add Device</Link>
            <Link href="/login">Login</Link>
            <Link href="/logout">LogOut</Link>
            <Router>
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
        </React.Fragment>
    );
}

export default App;
