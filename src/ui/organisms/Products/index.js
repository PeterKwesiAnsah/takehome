import React from 'react';
import { addAPIProducts } from '../../../slices/product.js';
import { useDispatch, useSelector } from 'react-redux';
import ProductsTable from '../../molecules/ProductsTable';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Index = ({ products }) => {
	const dispatch = useDispatch();
	const storeProducts = useSelector((state) => state.products);
	React.useEffect(() => {
		if (!storeProducts.data.length) dispatch(addAPIProducts(products));
	}, []);
	return (
		<>
			<Link to="/createProduct">
				<Button variant="contained" color="primary" type="submit">
					add a product
				</Button>
			</Link>
			<ProductsTable></ProductsTable>
		</>
	);
};

export default Index;
