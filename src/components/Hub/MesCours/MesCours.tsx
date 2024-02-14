
import React from 'react';
import './MesCours.scss';
import CardHubMesCours from "./CardHubMesCours";
import {IonButton, IonContent} from "@ionic/react";
const MesCours: React.FC = () => {
    return (
        <IonContent>
            <div className={"hub_page_content_cards"}>
                <CardHubMesCours title={"DEV API"} classLabel={"B3 Info"} manager={"Mr Dupont"} numberMembers={33}/>
                <CardHubMesCours title={"DEV API"} classLabel={"B3 Info"} manager={"Mr Dupont"} numberMembers={33}/>
            </div>
            <IonButton color={"none"} className={"hub_page_content_content_button"}>S’inscrire à un cours</IonButton>
        </IonContent>
    );
};

export default MesCours;
