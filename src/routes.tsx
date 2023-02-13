import { LoginPage, RootPage } from "pages";

type ROUTES = {
	path: string;
	element: React.ReactNode;
};

export const routes: ROUTES[] = [
	{
		path: "/",
		element: <RootPage />,
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
];
