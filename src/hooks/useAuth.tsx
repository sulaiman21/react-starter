import { AuthContext } from "context/AuthContext";
import { useContext } from "react";

const useAuth = () => {
	const context = useContext(AuthContext);

	if (!context) throw new Error("AuthContext is not placed inside AuthContextProvider");

	return context;
};

export default useAuth;
