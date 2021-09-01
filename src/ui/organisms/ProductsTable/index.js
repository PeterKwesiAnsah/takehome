import React from 'react';
import { addAPIProducts } from '../../../slices/product.js';
import { useDispatch, useSelector } from 'react-redux';
import './index.css';

const Index = ({ products }) => {
	const stateProducts = useSelector((state) => state.products.data);
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(addAPIProducts(products));
	}, []);
	const Headers = ['id', 'name', 'price', 'date_created'];
	return (
		<table>
			<thead>
				<tr>
					{Headers.map((header) => (
						<td>{header}</td>
					))}
				</tr>
			</thead>
		</table>
	);
};

export default Index;
