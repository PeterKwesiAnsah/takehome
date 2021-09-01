import React from 'react';
import { addAPIProducts } from '../../../slices/product.js';
import { useDispatch } from 'react-redux';
import ProductsTable from '../../molecules/ProductsTable';

const Index = ({ products }) => {
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(addAPIProducts(products));
	}, []);
	return (
		<>
			<ProductsTable></ProductsTable>
		</>
	);
};

export default Index;
