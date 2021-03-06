import React from "react";
import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

/* Common */
import { routes } from "./common/routes/routes";

/* Pages */
import LoginPage from "./pages/login/LoginPage";
import NotFound from "./pages/not-found/NotFound";
import Forbidden from "./pages/forbidden/Forbidden";

import { AppState } from "./common/states/appState";
import {
    createStore,
    setStorageType,
    StateMachineProvider,
} from "little-state-machine";
import ProtectedRoute from "./common/routes/ProtectedRoute";

const initialState: AppState = {
    userState: {},
};
setStorageType(localStorage);
const localData = localStorage.getItem("__STATE__MACHINE__");
const state = localData === null ? initialState : JSON.parse(localData);
createStore(state);

const App: React.FC = () => (
    <StateMachineProvider>
        <IonApp>
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route path={routes.login} component={LoginPage} />
                    <ProtectedRoute path={routes.home} Component={NotFound} />
                </IonRouterOutlet>
            </IonReactRouter>
        </IonApp>
    </StateMachineProvider>
);

export default App;
