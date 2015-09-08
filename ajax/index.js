import React from 'react'
import $ from 'jquery'

export default class AjaxExample extends React.Component {
  state = { books: [] }
  componentWillMount() {
    $.ajax({
      url: 'http://data.jaketrent.com/api/v1/books',
      success: (body) => {
        this.setState({
          books: body.books
        })
      }
    })
  }
  renderBook = (book) => {
    return (
      <li>
        {book.title}
      </li>
    )
  }
  renderBooks = (books) => {
    return books.map(this.renderBook)
  }
  render() {
    return (
      <div>
        Ajax Example
        <ul>
          {this.renderBooks(this.state.books)}
        </ul>
      </div>
    )
  }
}
