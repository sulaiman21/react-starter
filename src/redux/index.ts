import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

const logger = createLogger({
	// ADD Additional config
});

const store = configureStore({
	reducer: {},
	middleware: [logger],
	devTools: process.env.NODE_ENV === "development",
});

export default store;
