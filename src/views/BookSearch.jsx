import React from 'react';
import {Link} from 'react-router-dom';
import BookCard from './BookCard';
// noinspection ES6PreferShortImport
import {search} from '../BooksAPI';

export default class BookSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange(ev) {
    const books = await search(ev.target.value)
    this.setState({books})
  }

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'>
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={this.handleChange}/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.books?.map((book, index) => <BookCard key={index} book={book} />)
            }
          </ol>
        </div>
      </div>
    )
  }
}
