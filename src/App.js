import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import CreateProduct from './pages/CreateProduct';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useSelector } from 'react-redux';

const queryClient = new QueryClient();
const routes = [
	{ path: '/product/:productID', component: <Product />, exact: false },
	{ path: '/createProduct', component: <CreateProduct />, exact: true },
];
const App = () => {
	const storeProducts = useSelector((state) => state.products.data);
	const { pathname } = window.location;
	const protectRoutes =
		pathname !== '/' || (pathname !== '/' && storeProducts.length === 0);
	console.log(protectRoutes);
	console.log(pathname);
	return (
		<div className="App">
			<QueryClientProvider client={queryClient}>
				<Switch>
					<Route path="/" exact>
						<Home></Home>
					</Route>
					{routes.map((route) => {
						return (
							<Route path={route.path} exact={route.exact} key={route.path}>
								{protectRoutes ? <Redirect to="/" /> : route.component}
							</Route>
						);
					})}
				</Switch>
			</QueryClientProvider>
		</div>
	);
};

export default App;
