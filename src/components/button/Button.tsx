import React from "react";
import "./Button.css";

/* Ionic Components */
import { IonButton } from "@ionic/react";

interface ButtonProps {
    text: string;
    height?: string;
    handleClick: (e: any) => void;
}

const Button: React.FC<ButtonProps> = ({
    text,
    height,
    handleClick,
}: ButtonProps) => {
    return (
        <IonButton
            style={{ height: height }}
            className="ionButton"
            onClick={handleClick}
        >
            {text}
        </IonButton>
    );
};

export default Button;
