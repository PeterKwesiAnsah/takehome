import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
const App = () => {
	return (
		<div className="App">
			<QueryClientProvider client={queryClient}>
				<Switch>
					<Route path="/" exact>
						<Home></Home>
					</Route>
					<Route path="/product/:productID">
						<Product></Product>
					</Route>
				</Switch>
			</QueryClientProvider>
		</div>
	);
};

export default App;
