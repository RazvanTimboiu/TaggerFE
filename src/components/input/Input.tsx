import React from "react";
import "./Input.css";

/* Ionic Components */
import { IonIcon, IonInput, IonItem } from "@ionic/react";

/* Ionicons */
import {
    personOutline,
    lockClosedOutline,
    textOutline,
    pencilOutline,
    mailOutline,
} from "ionicons/icons";

interface InputProps {
    type: "password" | "email" | "text";
    icon: "lock" | "mail" | "text" | "pen" | "person";
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
            return mailOutline;
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
        case "person": {
            return personOutline;
        }
        default: {
            return undefined;
        }
    }
};

export default Input;
