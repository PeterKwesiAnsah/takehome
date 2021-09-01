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
	},
});

export const { addAPIProducts } = productSlice.actions;
export default productSlice.reducer;
