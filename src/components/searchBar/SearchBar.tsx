import {
     IonSearchbar
} from '@ionic/react';
import React from 'react';
import './SearchBar.scss';
const SearchBar: React.FC = () => {
    return (
                <IonSearchbar placeholder="Recherche..."></IonSearchbar>
    );
};

export default SearchBar;
