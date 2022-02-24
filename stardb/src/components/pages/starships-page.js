import React from "react";
import { StarshipList } from "../sw-components";
import { useNavigate } from 'react-router-dom';

const StarshipPage = () => {
    let navigate = useNavigate();

    return(
        <StarshipList onItemSelected = {(itemId) => navigate(itemId)}/>
    );
}

export default StarshipPage