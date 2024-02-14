
import React from 'react';
import './News.scss';
import {
    IonContent,
} from "@ionic/react";
import SearchBar from "../../searchBar/SearchBar";
import CardNews from "./CardNews";
const News: React.FC = () => {
    return (
        <IonContent>
            <SearchBar/>
          <CardNews/>
        </IonContent>
    );
};

export default News;
