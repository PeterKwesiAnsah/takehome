import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import EditProduct from '../../ui/molecules/EditProduct';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { newPrice } from '../../slices/product';

import './index.css';

const Product = () => {
	const { productID } = useParams();
	const storeProducts = useSelector((state) => state.products);
	const [addNewPrice, setAddNewPrice] = useState(false);
	const dispatch = useDispatch();
	const productDetails = storeProducts.data.find(
		({ id }) => Number(id) === Number(productID)
	);
	const handleSubmit = (e) => {
		e.preventDefault();

		const value = e.target.price.value;
		value.length > 0 && dispatch(newPrice({ id: productDetails.id, value }));
		setAddNewPrice(false);
	};

	console.log(productDetails);
	return (
		<div className="product">
			<span>PRODUCT ID:{productID}</span>
			<EditProduct
				propValue={productDetails.name}
				label={'Product Name'}
				type="text"
				productID={productDetails.id}
			/>
			{productDetails.prices.map(({ id, price }, index) => (
				<EditProduct
					propValue={price}
					label={'Product Price ' + (index + 1)}
					type="number"
					productID={productDetails.id}
					key={id}
					priceID={id}
				/>
			))}

			{addNewPrice && (
				<form onSubmit={handleSubmit}>
					<TextField
						id="standard-read-only-input"
						label="Add new Price"
						variant="outlined"
						type="number"
						name="price"
					/>
					<Button variant="contained" color="primary" type="submit">
						save
					</Button>
				</form>
			)}
			<Button
				variant="contained"
				color="primary"
				onClick={() => {
					setAddNewPrice(!addNewPrice);
				}}
			>
				{addNewPrice ? 'cancel' : 'add new price'}
			</Button>
		</div>
	);
};

export default Product;
