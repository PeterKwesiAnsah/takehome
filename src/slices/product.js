import { createSlice, current } from '@reduxjs/toolkit';

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
				(price) => Number(price.id) === Number(priceID)
			);
			findPrice.price = Number(value);
			findPrice.date = new Date().toISOString();
			console.log(current(findPrice));
		},
	},
});

export const { addAPIProducts, editProductDetail } = productSlice.actions;
export default productSlice.reducer;
