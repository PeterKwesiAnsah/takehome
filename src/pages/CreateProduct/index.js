import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './index.css';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { createProduct } from '../../slices/product';
const Index = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const handleCreateProduct = (e) => {
		// console.log(e)
		e.preventDefault();
		const { price, name } = e.target;
		dispatch(createProduct({ price: price.value, name: name.value }));
		history.push('/');
	};
	return (
		<form className="createProduct--form" onSubmit={handleCreateProduct}>
			<TextField
				id="outlined-basic"
				label="Enter Product Name"
				variant="outlined"
				type="text"
				name="name"
			/>
			<TextField
				id="outlined-basic"
				label="Outlined"
				variant="outlined"
				label="Enter Product Price"
				name="price"
				type="number"
			/>
			<Button variant="contained" color="primary" type="submit">
				save product
			</Button>
		</form>
	);
};

export default Index;
