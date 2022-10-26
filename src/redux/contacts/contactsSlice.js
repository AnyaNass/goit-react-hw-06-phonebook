import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	contacts: [],
};

const contactsSlice = createSlice({
	name: "contacts",
	initialState,
	reducers: {
		addContact: (state, { payload }) => { state.contacts.push(payload) },
		deleteContact: (state, { payload }) => { state.contacts = state.contacts.filter(contact => contact.id !== payload) },
	}
});


export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;

