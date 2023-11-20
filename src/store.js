import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import AccountReducer from "./features/accounts/accountSlice";
import CustomerReducer from "./features/customers/customerSlice";

const store = configureStore({
	reducer: {
		account: AccountReducer,
		customer: CustomerReducer,
	},
	middleware: [thunk],
});

export default store;
