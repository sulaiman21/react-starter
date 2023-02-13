import UrlPattern from "url-pattern";
import * as endpoints from "./endpoints";

export type ApiPath = {
	url: keyof typeof endpoints;
	params?: Object;
};

function generateEndpoint(path: ApiPath) {
	const url = endpoints[path.url];
	const pattern = new UrlPattern(url);
	const urlString = pattern.stringify(path.params);

	return urlString;
}

export default generateEndpoint;
