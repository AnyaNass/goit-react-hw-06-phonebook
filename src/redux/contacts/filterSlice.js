import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
	name: "filter",
	initialState: '',
	reducers: {
		filterContact: ({ payload }) => payload.toLowerCase(),
	}
})

export const { filterContact } = filterSlice.actions;

export default filterSlice.reducer;

// state.filter(contact => contact.name.toLowerCase().includes(payload.toLowerCase()))