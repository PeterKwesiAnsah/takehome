import React from 'react';
import { addAPIProducts } from '../../../slices/product.js';
import { useDispatch, useSelector } from 'react-redux';
import ProductsTable from '../../molecules/productsTable';

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
