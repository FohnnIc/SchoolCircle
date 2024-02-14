
import React from 'react';
import './MesCours.scss';
import {IonButton, IonContent} from "@ionic/react";
import CardNews from "../News/CardNews";
import SearchBar from "../../searchBar/SearchBar";
const EspacePeda: React.FC = () => {
    return (
        <IonContent>
            <div className={"hub_page_content_cards"}>
                <SearchBar/>
                <CardNews />
            </div>

        </IonContent>
    );
};

export default EspacePeda;
