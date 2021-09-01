import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
const routes = [
	{ path: '/', component: <Home />, exact: true },
	{ path: '/product/:productID', component: <Product />, exact: false },
];
const App = () => {
	return (
		<div className="App">
			<QueryClientProvider client={queryClient}>
				<Switch>
					{routes.map((route) => {
						return (
							<Route path={route.path} exact={route.exact}>
								{route.component}
							</Route>
						);
					})}
				</Switch>
			</QueryClientProvider>
		</div>
	);
};

export default App;
