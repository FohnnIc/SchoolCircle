import React from 'react';
import './CardHub.scss';
interface CardHubProps {
    title: string;
    manager: string;
    classLabel: string;
    numberMembers: number;
}

const CardHub: React.FC<CardHubProps> = ({title,manager,classLabel,numberMembers}) => {
    return (
        <div className={"CardHub_container"}>
            <h3 className={"CardHub_container_titre"}>{title}</h3>
            <h4 className={"CardHub_container_responsable"}>responsable : {manager}</h4>
            <div className={"CardHub_container_footer"}>
                <h5 className={"CardHub_container_footer_class"}>{classLabel}</h5>
                <h5 className={"CardHub_container_footer_members"}>{numberMembers} participants</h5>

            </div>

        </div>
    );
};

export default CardHub;
