
import React from 'react';
import './CardNews.scss';
import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent, IonImg
} from "@ionic/react";
const CardNews: React.FC = () => {
    return (
        <IonContent>
            <IonCard>
                <IonCardContent>
                    <IonImg src={""}/>
                </IonCardContent>

                <IonCardHeader>
                    <IonCardTitle>Card Title</IonCardTitle>
                    <IonCardSubtitle>description</IonCardSubtitle>
                </IonCardHeader>
            </IonCard>
        </IonContent>
    );
};

export default CardNews;
