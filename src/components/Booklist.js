import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

function BookList() {
  const { booksArr } = useSelector((state) => state.books);
  return (
    <ul>
      {booksArr.map((each) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Book key={each.itemId} {...each} />
      ))}
    </ul>
  );
}

export default BookList;
