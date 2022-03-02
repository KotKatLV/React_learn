import React from "react"
import { BookstoreServiceConsumer } from '../bookstore-service-context'

const withBookstoreservice = () => (Wrapped) => {
    return (props) => {
        return(
            <BookstoreServiceConsumer>
                {
                    (bookstoreSerivce) => {
                        return(
                            <Wrapped { ...props } bookstoreSerivce = { bookstoreSerivce }/>
                        )
                    }
                }
            </BookstoreServiceConsumer>
        );
    };
};

export default withBookstoreservice;