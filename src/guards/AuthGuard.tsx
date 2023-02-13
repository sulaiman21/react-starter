import React from "react";
import useAuth from "hooks/useAuth";
import { Navigate } from "react-router-dom";

type AuthGuardProps = {
	children: React.ReactNode;
};

const AuthGuard: React.FC<AuthGuardProps> = (props) => {
	const { isAuthenticated, isInitialized } = useAuth();

	if (isInitialized && !isAuthenticated) {
		return <Navigate replace to="/login" />;
	}

	return <React.Fragment>{props.children}</React.Fragment>;
};

export default AuthGuard;
