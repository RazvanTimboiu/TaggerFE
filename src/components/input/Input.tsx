import React from "react";
import "./Input.css";

import { IonIcon, IonInput, IonItem } from "@ionic/react";

import {
    personCircleOutline,
    lockClosedOutline,
    textOutline,
    pencilOutline,
} from "ionicons/icons";

interface InputProps {
    type: "password" | "email" | "text";
    icon: "lock" | "mail" | "text" | "pen";
    placeholder: string;
    required?: boolean;
    handleBlur: (e: any) => void;
    name?: string;
}
const Input: React.FC<InputProps> = ({
    type,
    icon,
    placeholder,
    required,
    name,
    handleBlur,
}: InputProps) => {
    return (
        <IonItem className="inputItem" lines="none">
            <IonIcon className="inputIcon" icon={selected(icon)} />
            <IonInput
                name={name}
                className="inputText"
                type={type}
                placeholder={placeholder}
                required={required}
                onIonBlur={handleBlur}
                clearOnEdit={false}
            />
        </IonItem>
    );
};

const selected = (icon: string) => {
    switch (icon) {
        case "mail": {
            return personCircleOutline;
        }
        case "lock": {
            return lockClosedOutline;
        }
        case "text": {
            return textOutline;
        }
        case "pen": {
            return pencilOutline;
        }
        default: {
            return undefined;
        }
    }
};

export default Input;
