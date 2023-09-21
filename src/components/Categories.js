import React from 'react';
import { useSelector } from 'react-redux';
import SpecifiedCategory from './specifiedCategory';

function Categories() {
  const books = useSelector((state) => state.books.booksArr);

  if (!books) {
    return (
      <div className="under-construction">
        <h3>No books in store!</h3>
      </div>
    );
  }

  return (
    <section className="category-list">
      <h1 className="categories-heading">Categories</h1>
      <SpecifiedCategory books category="Science Fiction" />
      <SpecifiedCategory books category="Action" />
      <SpecifiedCategory books category="Drama" />
      <SpecifiedCategory books category="Commedy" />
      <SpecifiedCategory books category="Documentary" />
    </section>
  );
}

export default Categories;
