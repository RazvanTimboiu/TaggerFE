import React from "react";
import { IonContent, IonGrid, IonPage, IonRow } from "@ionic/react";
import "./NotFound.css";

interface ForbiddenProps {}

const Forbidden: React.FC<ForbiddenProps> = () => {
    return (
        <IonPage>
            <IonContent>
                <IonGrid className="ionGridNotFound">
                    <IonRow className="ion-justify-content-center error">
                        <h1>Error 404 : Not Found</h1>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Forbidden;
