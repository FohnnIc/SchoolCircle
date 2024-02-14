import {
    IonContent,
    IonPage
} from '@ionic/react';
import React from 'react';
import './Hub.scss';
import MesCours from "../../components/Hub/MesCours/MesCours";
import News from "../../components/Hub/News/News";
const Hub: React.FC = () => {
    return (
        <IonPage className={"hub_page"}>

            <IonContent fullscreen className={"hub_page_content"}>
                <div className={"hub_page_content_nav"}>
                    <button  color={"none"}
                            className={"hub_page_content_nav_button hub_page_content_nav_button_active"}>Mes Cours
                    </button>
                    <button color={"none"} className={"hub_page_content_nav_button"}>Espaces pédagogique</button>
                    <button color={"none"} className={"hub_page_content_nav_button"}>Planning</button>
                    <button color={"none"} className={"hub_page_content_nav_button"}>Ressources utiles</button>
                    <button color={"none"} className={"hub_page_content_nav_button"}>Mes fichiers</button>
                </div>
                {
                //    <MesCours/>
                }
                <News/>
            </IonContent>
        </IonPage>
    );
};

export default Hub;
