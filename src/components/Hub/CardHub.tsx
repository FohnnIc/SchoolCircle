import React from 'react';
import './CardHub.scss';
interface CardHubProps {
    name: string;
}

const CardHub: React.FC<CardHubProps> = ({ name }) => {
    return (
        <div className={"CardHub_container"}>
            <h3 className={"CardHub_container_titre"}>Titre</h3>
            <h2 className={"CardHub_container_responsable"}>Responsable</h2>
            <div className={"CardHub_container_footer"}>
                <h4 className={"CardHub_container_footer_class"}>B3 info</h4>
                <h4 className={"CardHub_container_footer_members"}>X participants</h4>

            </div>

        </div>
    );
};

export default CardHub;
