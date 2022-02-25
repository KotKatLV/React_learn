import React, {useState} from "react";
import {useNavigate, useParams} from 'react-router-dom';
import {PersonDetails, PersonList} from "../sw-components";
import Row from "../row";

const PeoplePage = () => {

    const [ selectedItem, setSelectedItem ] = useState(null);
    const onItemSelected = (selectedItem) => {setSelectedItem(selectedItem)}
    let navigate = useNavigate();
    console.log(selectedItem);
    return(
            <Row
                left={<PersonList onItemSelected={(itemId) => navigate(itemId)}/>}
                right={<PersonDetails itemId={selectedItem}/>}/>
    )

}


export default PeoplePage;