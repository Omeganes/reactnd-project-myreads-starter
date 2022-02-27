import {getAll} from 'BooksAPI';
import React from 'react'
import './App.css'
import BookSearch from './views/BookSearch';
import BooksIndex from './views/BooksIndex';
// noinspection ES6CheckImport
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

class BooksApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
    this.fetchBooks = this.fetchBooks.bind(this);
  }

  async componentDidMount() {
    await this.fetchBooks()
  }

  async fetchBooks() {
    const books = await getAll()
    this.setState({books})
  }


  render() {

    return (
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" index element={<BooksIndex books={this.state.books} fetchBooks={this.fetchBooks} />} />
            <Route path="/search" element={<BookSearch books={this.state.books} fetchBooks={this.fetchBooks} />} />
          </Routes>
        </BrowserRouter>
      </div>
    )

  }

}

export default BooksApp
