import React from "react";
import "./ErrorMessage.css";

/* Ionic Components */
import { IonText } from "@ionic/react";

interface ErrorProps {
    message: string;
}

const ErrorMessage: React.FC<ErrorProps> = ({ message }: ErrorProps) => {
    return (
        <div className="errorItem">
            <IonText>{message}</IonText>
        </div>
    );
};

export default ErrorMessage;
