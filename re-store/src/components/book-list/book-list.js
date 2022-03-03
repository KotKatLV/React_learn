import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withBookstoreservice } from '../hoc';
import { fetchBooks } from '../../actions'
import BookListItem from '../book-list-item';
import ErrorIndicator from '../error-indicator'
import Spinner from '../spinner';
import compose from '../../utils'

import './book-list.css'
import BookstoreService from '../../services/bookstore-service';

class BookList extends Component {

    componentDidMount() {
        this.props.fetchBooks();
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

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch)
    }
};

export default compose(
    withBookstoreservice(),
    connect(mapStateToProps, mapDispatchToProps))(BookList);