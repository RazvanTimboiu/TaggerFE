import React, { useState } from "react";
import "./LoginPage.css";

import Input from "../../components/input/Input";
import { loginMessages } from "../../constants/messages/loginMessages";

import {
    IonCol,
    IonContent,
    IonGrid,
    IonRow,
    IonText,
    IonPage,
} from "@ionic/react";
import Button from "../../button/Button";
import ErrorMessage from "../../components/error/ErrorMessage";

interface LoginPageState {
    username: string;
    password: string;
}

const initialState: LoginPageState = {
    username: "",
    password: "",
};

interface LoginPageErrorState {
    isError: boolean;
    errorMessage: string;
}

const initialErrorState: LoginPageErrorState = {
    isError: false,
    errorMessage: "",
};

const LoginPage: React.FC = () => {
    const [loginData, setLoginData] = useState<LoginPageState>(initialState);
    const [errorData, setErrorData] = useState<LoginPageErrorState>(
        initialErrorState
    );

    const handleBlur = (e: any) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const validateUsername = () => {
        if (loginData.username === "") return loginMessages.emptyUsername;
    };

    const validatePassword = () => {
        if (loginData.password === "") return loginMessages.emptyPassword;
    };

    const validateCredentials = () => {
        let errorUsername = validateUsername();
        let errorPassword = validatePassword();

        if (errorUsername || errorPassword) {
            setErrorData({
                isError: true,
                errorMessage:
                    (errorUsername === undefined ? "" : errorUsername) +
                    (errorPassword === undefined ? "" : errorPassword),
            });
            return false;
        } else {
            setErrorData({
                isError: false,
                errorMessage: "",
            });
        }
        return true;
    };

    const handleLogin = () => {
        const isValid = validateCredentials();
        if (isValid) {
            console.log("The data entered is valid!");
        } else {
            console.log(errorData.errorMessage);
        }
    };

    return (
        <IonPage>
            <IonContent className="ionContentL">
                <IonGrid className="ionGridL">
                    <IonRow className="ion-justify-content-center">
                        <IonCol sizeMd="6" sizeLg="4" sizeXs="12">
                            <IonText className="ionTextL">
                                <p>Tagger</p>
                            </IonText>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-justify-content-center">
                        <IonCol sizeMd="6" sizeLg="4" sizeXs="10">
                            <Input
                                name="username"
                                type="text"
                                icon="mail"
                                placeholder="Username"
                                required
                                handleBlur={handleBlur}
                            />
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-justify-content-center">
                        <IonCol sizeMd="6" sizeLg="4" sizeXs="10">
                            <Input
                                name="password"
                                type="password"
                                icon="lock"
                                placeholder="Password"
                                required={true}
                                handleBlur={handleBlur}
                            />
                        </IonCol>
                    </IonRow>
                    {errorData.isError && (
                        <IonRow className="ion-justify-content-center">
                            <IonCol sizeMd="6" sizeLg="4" sizeXs="10">
                                <ErrorMessage
                                    message={errorData.errorMessage}
                                />
                            </IonCol>
                        </IonRow>
                    )}
                    <IonRow className="ionButtonRowPaddingL ion-justify-content-center">
                        <IonCol sizeMd="2" sizeLg="1.5" sizeXs="5">
                            <Button
                                text="Login"
                                height="5vh"
                                handleClick={handleLogin}
                            />
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default LoginPage;
