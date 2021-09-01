import React from 'react';
import { useParams } from 'react-router-dom';
import EditProduct from '../../ui/molecules/EditProduct';
import { useSelector } from 'react-redux';

import './index.css';

const Product = () => {
	const { productID } = useParams();
	const storeProducts = useSelector((state) => state.products);
	const productDetails = storeProducts.data.find(
		({ id }) => Number(id) === Number(productID)
	);

	console.log(productDetails);
	return (
		<div className="product">
			<span>PRODUCT ID:{productID}</span>
			<EditProduct
				propValue={productDetails.name}
				label={'Product Name'}
				type="text"
			/>
			{productDetails.prices.map(({ id, price }) => (
				<EditProduct
					propValue={price}
					label={'Product ID ' + id}
					type="number"
				/>
			))}
		</div>
	);
};

export default Product;
