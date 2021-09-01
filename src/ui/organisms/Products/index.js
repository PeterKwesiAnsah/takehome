import React from 'react';
import { addAPIProducts } from '../../../slices/product.js';
import { useDispatch, useSelector } from 'react-redux';
import ProductsTable from '../../molecules/ProductsTable';

const Index = ({ products }) => {
	const dispatch = useDispatch();
	const storeProducts = useSelector((state) => state.products);
	React.useEffect(() => {
		if (!storeProducts.data.length) dispatch(addAPIProducts(products));
	}, []);
	return (
		<>
			<ProductsTable></ProductsTable>
		</>
	);
};

export default Index;
