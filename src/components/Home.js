import React from 'react';
import { useSelector } from 'react-redux';
import BookList from './Booklist';
import Form from './Form';

function Home() {
  const { loading } = useSelector((state) => state.books);

  return (
    <div>
      <BookList />
      <hr />
      {loading === false && <Form />}
    </div>
  );
}

export default Home;
