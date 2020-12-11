import React from "react";
import { IonText, IonItem } from "@ionic/react";
import "./ErrorMessage.css";

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
