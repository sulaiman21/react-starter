import { useRoutes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux";
import { AuthContextProvider } from "context/AuthContext";
import { routes } from "routes";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
	const content = useRoutes(routes);
	return (
		<HelmetProvider>
			<Helmet titleTemplate="Appraisal System" defaultTitle="Appraisal System" />
			<Provider store={store}>
				<AuthContextProvider>{content}</AuthContextProvider>
			</Provider>
		</HelmetProvider>
	);
}

export default App;
