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

  const sortedArr = [...booksArr].sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });

  return (
    <ul>
      {sortedArr
        .map((each) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Book key={each.item_id} {...each} />
        ))}
    </ul>
  );
}

export default BookList;
