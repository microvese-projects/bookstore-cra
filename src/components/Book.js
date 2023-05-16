import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function Book({
  itemId, title, author, category,
}) {
  const dispatch = useDispatch();

  return (
    <li className="book">
      <div className="details">
        <h4>{category}</h4>
        <h2>{title}</h2>
        <h5>{author}</h5>
        <ul className="buttons">
          <li>
            <button type="button" id="comments">Comments</button>
          </li>
          <li>
            <button
              type="button"
              id="remove"
              onClick={() => dispatch(removeBook(itemId))}
            >
              Remove
            </button>
          </li>
          <li>
            <button type="button" id="edit">Edit</button>
          </li>
        </ul>
      </div>
      <div className="status">
        <div className="circle" />
        <div className="stats">
          <p className="percentage">64%</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="progress">
        <h5>CURRENT CHAPTER</h5>
        <h4>Chapter 17</h4>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
}

Book.propTypes = {
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Book;
