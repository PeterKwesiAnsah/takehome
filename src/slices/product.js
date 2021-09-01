import { createSlice, current } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
export const productSlice = createSlice({
	name: 'products',
	initialState: {
		data: [],
	},
	reducers: {
		addAPIProducts(state, action) {
			const {
				payload: { products },
			} = action;
			state.data = products;
		},
		editProductDetail(state, action) {
			const {
				payload: { priceID, value, id },
			} = action;
			const findProduct = state.data.find((product) => product.id === id);
			if (!priceID) {
				findProduct.name = value;
				return;
			}
			const findPrice = findProduct.prices.find(
				(price) => String(price.id) === String(priceID)
			);
			findPrice.price = Number(value);
			findPrice.date = new Date().toISOString();
		},
		newPrice(state, action) {
			const {
				payload: { id, value },
			} = action;
			const price = Number(value);
			const date = new Date().toISOString();

			const findProduct = state.data.find((product) => product.id === id);
			findProduct.prices.push({ id: uuidv4(), price, date });
		},
		createProduct(state, action) {
			let {
				payload: { price, name },
			} = action;
			price = Number(price);
			const date = new Date().toISOString();
			const newProduct = {
				id: uuidv4(),
				name,
				prices: [{ id: uuidv4(), price, date }],
			};

			state.data.push(newProduct);

			// console.log(newProduct);
		},
	},
});

export const { addAPIProducts, editProductDetail, newPrice, createProduct } =
	productSlice.actions;
export default productSlice.reducer;
