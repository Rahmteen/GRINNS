import { Route, Switch, Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';

// PAGES
import Landing from './pages/Landing';

// COMPONENTS
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import '../assets/styles/Custom.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
	return (
		<div>
			<Route path="/" component={NavBar}></Route>
			<Switch>
				<Route exact path="/" component={Landing}></Route>
				{/* <Route path="/tour" component={Tour}></Route> */}
			</Switch>
			<Route exact path="/" component={Footer}></Route>
		</div>
	);
};

export default App;
