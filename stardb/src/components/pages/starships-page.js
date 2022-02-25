import React from "react";
import { useNavigate } from 'react-router-dom';
import { StarshipList } from "../sw-components";

const StarshipPage = () => {
    let navigate = useNavigate();

    return(
        <StarshipList onItemSelected = {(itemId) => navigate(itemId)}/>
    );
}

export default StarshipPage