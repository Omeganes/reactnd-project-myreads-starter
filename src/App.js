import React from 'react'
// import * as BooksAPI from './BooksAPI'
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

  render() {

    return (
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" index element={<BooksIndex />} />
            <Route path="/search" element={<BookSearch />} />
          </Routes>
        </BrowserRouter>
      </div>
    )

  }

}

export default BooksApp
