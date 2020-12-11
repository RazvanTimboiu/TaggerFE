import React, { useState } from "react";
import "./LoginPage.css";

import Input from "../../components/input/Input";

import {
    IonCol,
    IonContent,
    IonGrid,
    IonRow,
    IonText,
    IonPage,
} from "@ionic/react";
import Button from "../../button/Button";

interface LoginPageState {
    username: string;
    password: string;
}

const initialState: LoginPageState = {
    username: "",
    password: "",
};

const LoginPage: React.FC = () => {
    const [loginData, setLoginData] = useState<LoginPageState>(initialState);

    const handleBlur = (e: any) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleLogin = () => {
        console.log("Login is not functional yet!");
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
