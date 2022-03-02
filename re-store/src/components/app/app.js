import React from 'react'
import { withBookstoreservice } from '../hoc';

const App = ({ bookstoreService }) => {
    console.log(bookstoreService.getBooks());
    return(
        <div>
            App
        </div>
    )
}

export default withBookstoreservice()(App);