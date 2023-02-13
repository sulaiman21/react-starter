import axios, { AxiosError, AxiosRequestConfig, Method } from "axios";
import generateEndpoint, { ApiPath } from "./generateEndpoint";

type Payload = {
	method: Method;
	path: ApiPath;
	data?: Object;
	query?: string;
};

const httpClient = async (payload: Payload) => {
	try {
		const http = axios.create({
			baseURL: process.env.REACT_APP_BASE_URL,
		});

		const { path, method, data, query } = payload;
		const url = generateEndpoint(path);
		const options: AxiosRequestConfig = {
			headers: {
				"Content-Type": "application/json",
			},
			method,
			url,
		};

		if (query && method === "GET") {
			options.data = JSON.stringify(data);
		}

		//TODO: we will grab token here from cookies
		// we will set token on then headers here
		// if(token) {
		//     options.headers = {
		//         ...options.headers,
		//         Authorization: `Bearer ${token}`
		//     }
		// }
		const response = await http(options);

		return [response, null];
	} catch (err) {
		const { message, status } = err as AxiosError;

		/**
		 * Error logic will be handle here
		 */

		return [
			null,
			{
				message,
				status,
			},
		];
	}
};

export default httpClient;
