import React, { Component } from 'react';

const books = [
  { id: 1, title: 'Clean Code', available: true },
  { id: 2, title: 'The Pragmatic Programmer', available: false },
  { id: 3, title: 'Design Patterns', available: true }
];

class BookDetails extends Component {
  // Technique 1: if/else statement inside render(), returning different JSX.
  renderAvailability(book) {
    if (book.available) {
      return <span style={{ color: 'green' }}>Available</span>;
    } else {
      return <span style={{ color: 'red' }}>Checked Out</span>;
    }
  }

  render() {
    return (
      <div>
        <h2>Book Details</h2>
        <ul>
          {books.map((book) => (
            // Technique: list rendering using map() with a unique "key" prop.
            <li key={book.id}>
              {book.title} — {this.renderAvailability(book)}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BookDetails;
