import React from 'react';
// noinspection ES6PreferShortImport
import {update} from '../BooksAPI'

export default class BookCard extends React.Component {

  constructor(props) {
    super(props);
    this.handleShelfChange = this.handleShelfChange.bind(this);
  }

  async handleShelfChange(ev) {
    await update(this.props.book, ev.target.value)
  }

  render() {

    const {book} = this.props;

    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.smallThumbnail})`
            }}/>
            <div className="book-shelf-changer">
              <select onChange={this.handleShelfChange} defaultValue={book.shelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors.map(author => author)}</div>
        </div>
      </li>
    )
  }
}
