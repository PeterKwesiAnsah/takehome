import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
const App = () => {
	return (
		<div className="App">
			<Switch>
				<Route path="/" exact>
					<Home></Home>
				</Route>
				<Route path="/product/:productID">
					<Product></Product>
				</Route>
			</Switch>
		</div>
	);
};

export default App;
