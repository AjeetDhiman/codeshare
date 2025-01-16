import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isAuthenticated: false,
	error: null,
	loading: false,
};
const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loginRequest: (state) => {
			state.loading = true;
		},
	},
});

export const { loginRequest } = authSlice.actions;
export default authSlice.reducer;
