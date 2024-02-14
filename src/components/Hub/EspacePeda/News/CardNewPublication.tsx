import React from 'react';
import './CarNewPublication.scss';
import {
    IonCard, IonCardSubtitle,
    IonContent, IonTitle,
} from "@ionic/react";
interface CardNewPublication{
    titlePub: string;
    descriptionCard: string;
}
const CardNewPublication: React.FC<CardNewPublication> = ({titlePub, descriptionCard}) => {
    return (
            <IonCard className={"cardNewPub_container_card"}>
                <div className={"cardNewPub_container_card_div"}>
                    <IonTitle className={"cardNewPub_container_card_div_title"}>{titlePub}</IonTitle>
                    <IonCardSubtitle className={"cardNewPub_container_card_div_description"}>{descriptionCard}</IonCardSubtitle>

                </div>
                </IonCard>
    );
};

export default CardNewPublication;
