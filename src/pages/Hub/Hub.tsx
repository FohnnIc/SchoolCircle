import {
    IonContent,
    IonPage
} from '@ionic/react';
import React from 'react';
import './Hub.scss';
import CardHub from "../../components/Hub/CardHub";
import SearchBar from "../../components/searchBar/SearchBar";
const Hub: React.FC = () => {
    return (
        <IonPage className={"hub_page"}>

            <IonContent fullscreen className={"hub_page_content"}>
                <div className={"hub_page_content_nav"}>
                    <button color={"none"}  className={"hub_page_content_nav_button hub_page_content_nav_button_active"}>Mes Cours</button>
                    <button color={"none"} className={"hub_page_content_nav_button"}>Espaces pédagogique</button>
                    <button color={"none"} className={"hub_page_content_nav_button"}>Planning</button>
                    <button color={"none"} className={"hub_page_content_nav_button"}>Ressources utiles</button>
                    <button color={"none"} className={"hub_page_content_nav_button"}>Mes fichiers</button>
                </div>
                <SearchBar/>
                <CardHub title={"DEV API"} classLabel={"B3 Info"} manager={"Mr Dupont"} numberMembers={33}/>
                <CardHub title={"DEV API"} classLabel={"B3 Info"} manager={"Mr Dupont"} numberMembers={33}/>

            </IonContent>
        </IonPage>
    );
};

export default Hub;
