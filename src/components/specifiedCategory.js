import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const SpecifiedCategory = ({ category }) => {
  const books = useSelector((state) => state.books.booksArr);

  const count = books.filter((each) => each.category === category).length;

  const create = () => {
    const elements = books.map((each) => {
      if (each.category === category) {
        return (
          <p key={each.item_id} className="book">
            {`${each.title.toUpperCase()} by ${each.author}`}
          </p>
        );
      }
      return null;
    });
    return elements;
  };

  return (
    <div>
      <h3 className="book-title">
        <span>{category}</span>
        :
        <span className="count">{count}</span>
      </h3>
      {count === 0 ? (
        <p className="grayed">
          No Books on
          {` ${category}!`}
        </p>
      ) : <div>{create()}</div>}
    </div>
  );
};

export default SpecifiedCategory;

SpecifiedCategory.propTypes = {
  category: PropTypes.string.isRequired,
};
