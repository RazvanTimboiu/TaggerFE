import React from "react";
import { IonText, IonItem } from "@ionic/react";
import "./ErrorMessage.css";

interface ErrorProps {
    message: string;
}

const ErrorMessage: React.FC<ErrorProps> = ({ message }: ErrorProps) => {
    return (
        <IonItem className="errorItem">
            <IonText>{message}</IonText>
        </IonItem>
    );
};

export default ErrorMessage;
