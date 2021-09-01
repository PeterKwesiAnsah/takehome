import React from 'react';
import Loader from '../../ui/atoms/Loader';
import Error from '../../ui/atoms/Error';
import Products from '../../ui/organisms/Products';

import { useQuery } from 'react-query';

const Index = () => {
	const { isLoading, error, data } = useQuery('products', () =>
		fetch('http://www.mocky.io/v2/5c3e15e63500006e003e9795').then((res) =>
			res.json()
		)
	);
	if (isLoading) return <Loader></Loader>;
	if (error) {
		return <Error></Error>;
	}

	return <Products products={data}>data</Products>;
};

export default Index;
