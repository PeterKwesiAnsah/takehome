import { createSlice } from '@reduxjs/toolkit';

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
				payload: { type, value, id },
			} = action;
			console.log(type, value, id);
		},
	},
});

export const { addAPIProducts, editProductDetail } = productSlice.actions;
export default productSlice.reducer;
