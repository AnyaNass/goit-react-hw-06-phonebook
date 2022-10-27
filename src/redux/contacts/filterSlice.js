import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
	name: "filter",
	initialState: { filter: "" },
	reducers: {
		filterContact: (state, { payload }) => { state.filter = payload },
	}
})

export const { filterContact } = filterSlice.actions;

export default filterSlice.reducer;
