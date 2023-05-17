import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { fetchBooks } from '../redux/books/booksSlice';

function BookList() {
  const dispatch = useDispatch();

  const { booksArr } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

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
