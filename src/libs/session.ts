import jwtDecode from "jwt-decode";

type JWTDecodeType = {
	exp: number;
	dataValues: any; // TODO: will change from any to actual type later
};

type SessionType = {
	isAuthenticated: boolean;
	dataValues: any;
};

const getToken = (): string => {
	// TODO: we will ask backend to set token inside cookie

	if (document) {
		const token = document.cookie
			.split(";")
			.find((cookie) => cookie.startsWith("token="))
			?.split("=")[1];

		return token || "";
	}

	return "";
};

const checkSession = (): SessionType => {
	const token = getToken();
	if (!token) {
		return {
			isAuthenticated: false,
			dataValues: null,
		};
	}

	const decoded = jwtDecode(token) as JWTDecodeType;
	const now = Date.now();

	return {
		isAuthenticated: now > decoded.exp,
		dataValues: decoded.dataValues,
	};
};

export { checkSession };
