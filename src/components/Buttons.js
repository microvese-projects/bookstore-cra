import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function Buttons({ id }) {
  const dispatch = useDispatch();

  return (
    <ul className="buttons">
      <li>
        <button type="button" id="comments">Comments</button>
      </li>
      <li>
        <button
          type="button"
          id="remove"
          onClick={() => dispatch(removeBook(id))}
        >
          Remove
        </button>
      </li>
      <li>
        <button type="button" id="edit">Edit</button>
      </li>
    </ul>
  );
}

Buttons.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Buttons;
