
import React from 'react';
import './News.scss';
import {
    IonContent,
} from "@ionic/react";
import SearchBar from "../../../searchBar/SearchBar";
import CardNews from "./CardNews";
import CardNewPublication from "./CardNewPublication";
interface NewsProps {

}


const News: React.FC <NewsProps>= () => {
    return (
        <IonContent className={"news_container"}>
            <SearchBar />
            <CardNews titleCard={"test"} descriptionCard={"description juste ici"} imgSrc={"./defref"}/>
           <h3 className={"news_container_title"}>Publications</h3>
            <div className={"news_container_cardPub"}>
                <CardNewPublication  titlePub={"Les chats"} descriptionCard={"lorem loremr leoregktrhjir leoregktrhjir leoregktrhjir leoregktrhjir leoregktrhjir leoregktrhjir leoregktrhjir leoregktrhjierhudbzefvogz"}/>
                <CardNewPublication  titlePub={"Les chats"} descriptionCard={"lorem loremr leoregktrhjierhudbzefvogz"}/>
                <CardNewPublication  titlePub={"Les chats"} descriptionCard={"lorem loremr leoregktrhjierhudbzefvogz"}/>
                <CardNewPublication  titlePub={"Les chats"} descriptionCard={"lorem loremr leoregktrhjierhudbzefvogz"}/>
                <CardNewPublication  titlePub={"Les chats"} descriptionCard={"lorem loremr leoregktrhjierhudbzefvogz"}/>

            </div>
        </IonContent>
    );
};

export default News;
