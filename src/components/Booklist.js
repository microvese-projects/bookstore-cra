import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { fetchBooks } from '../redux/books/booksSlice';

function BookList() {
  const dispatch = useDispatch();

  const { booksArr, loading } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  } if (!loading && booksArr.length === 0) {
    return (
      <div className="empty-list">
        <p>The list of books is empty!</p>
      </div>
    );
  }

  return (
    <ul>
      {booksArr
        .map((each) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Book key={each.itemId} {...each} />
        ))}
    </ul>
  );
}

export default BookList;
