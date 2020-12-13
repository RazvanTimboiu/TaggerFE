import { useStateMachine } from "little-state-machine";
import * as React from "react";
import { Route, Redirect, RouteComponentProps } from "react-router-dom";
import { Role } from "../../domain/enums/Role";
import { routes } from "./routes";
import { AppState } from "../../common/states/appState";

interface ProtectedRouteProps {
    Component: React.FC<RouteComponentProps>;
    path: string;
    exact?: boolean;
    requiredRole?: Role | boolean;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    Component,
    path,
    exact = false,
    requiredRole = false,
}: ProtectedRouteProps) => {
    const {
        state: { userState },
    } = useStateMachine<AppState>();
    const isNotAuthed = !!userState.jwt;

    const isAuthorized = isNotAuthed
        ? false
        : requiredRole === false
        ? true
        : userState.role === requiredRole;

    return (
        <Route
            exact={exact}
            path={path}
            render={(props: RouteComponentProps) =>
                isAuthorized ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: isNotAuthed
                                ? routes.login
                                : routes.forbidden,
                        }}
                    />
                )
            }
        />
    );
};

export default ProtectedRoute;
