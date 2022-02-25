import React from "react";
import { useParams } from "react-router-dom";
import ItemDetails, { Record } from "../item-details";
import  { withSwapiService } from '../hoc-helpers'

const PersonDetails = (props) => {

    const { id } = useParams();
    console.log(id)

    return(
            <ItemDetails {...props} itemId={id}>
                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />
            </ItemDetails>

    )
}

const mapMethodsToProps = (swapiService) => {
    return{
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
}

export default withSwapiService(mapMethodsToProps)(PersonDetails);