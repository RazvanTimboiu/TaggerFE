import React from "react";
import { IonButton } from "@ionic/react";
import "./Button.css";

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
