import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withBookstoreservice } from '../hoc';
import { booksLoaded, booksRequested, booksError } from '../../actions'
import BookListItem from '../book-list-item';
import ErrorIndicator from '../error-indicator'
import Spinner from '../spinner';
import compose from '../../utils'

import './book-list.css'

class BookList extends Component {

    componentDidMount() {

        const { 
            bookstoreService,
            booksLoaded,
            booksRequested, 
            booksError 
        } = this.props;

        booksRequested();
        bookstoreService
            .getBooks()
            .then((data) => booksLoaded(data))
            .catch((error) => booksError(error));
    }

    render(){
        const { books, loading, error } = this.props;

        if(loading){
            return <Spinner />
        }

        if(error){
            return <ErrorIndicator />
        }

        return(
            <ul className="book-list">
            {
                books.map((book) => {
                    return (
                        <li key={book.id}><BookListItem book={book}/></li>
                    )
                })
            }
            </ul>
        )
    }
}

const mapStateToProps = ({ books, loading, error }) => {
    return { books, loading, error }
};

const mapDispatchToProps = { booksLoaded, booksRequested, booksError };

export default compose(
    withBookstoreservice(),
    connect(mapStateToProps, mapDispatchToProps))(BookList);