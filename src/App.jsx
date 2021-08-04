import { Route, Switch, Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';

// PAGES
import Landing from './pages/Landing'
import Merch from './pages/Merch';

// COMPONENTS
import NavBar from './components/NavBar';
import "../assets/styles/Custom.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
	return (
		<div>
			<Route exact path="/" component={NavBar}></Route>
			<Route path="/merch" component={NavBar}></Route>
			<Switch>
				<Route exact path="/" component={Landing}></Route>
				<Route exact path="/merch" component={Merch}></Route>
			</Switch>
			{/* <Route path="/store" component={Footer}></Route> */}
			
		</div>
	);
};

export default App;
