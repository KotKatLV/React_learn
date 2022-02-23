import React from "react";
import { SwapiServieConsumer} from "../swapi-service-context/swapi-service-context";

const withSwapiService = (Wrapped, mapMethodsToProps) =>{
    return(props) => {
        return <SwapiServieConsumer>
            {
                (swapiService) => {
                    const serviceProps = mapMethodsToProps(swapiService);
                    return(
                        <Wrapped {...props} {...serviceProps} />
                    )
            }
        }
        </SwapiServieConsumer>
    }
}

export default withSwapiService;