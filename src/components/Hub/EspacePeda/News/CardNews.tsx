
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
interface CardNewsProps {
    titleCard: string;
    descriptionCard : string;
    imgSrc : string;
}
const CardNews: React.FC<CardNewsProps>  = ({titleCard, descriptionCard, imgSrc}) => {
    return (
            <IonCard>
                <IonCardContent className={"cardNew_container"}>
                    <IonImg src={imgSrc} className={"cardNew_container"}/>
                </IonCardContent>

                <IonCardHeader>
                    <IonCardTitle>{titleCard}</IonCardTitle>
                    <IonCardSubtitle>{descriptionCard}</IonCardSubtitle>
                </IonCardHeader>
            </IonCard>
    );
};

export default CardNews;
