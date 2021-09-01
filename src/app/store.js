import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../slices/product.js';

export const store = configureStore({
	reducer: {
		products: productReducer,
	},
});
