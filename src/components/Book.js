/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import Buttons from './Buttons';
import Progress from './Progress';
import Status from './Status';

function Book({
  item_id, title, author, category,
}) {
  return (
    <li className="book">
      <div className="details">
        <h4 className="book-category">{category}</h4>
        <h2 className="book-title">{title}</h2>
        <h5 className="book-author">{author}</h5>
        <Buttons id={item_id} />
      </div>
      <Status />
      <Progress />
    </li>
  );
}

Book.propTypes = {
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Book;
