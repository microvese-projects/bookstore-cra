import PropTypes from 'prop-types';
import Buttons from './Buttons';
import Progress from './Progress';
import Status from './Status';

function Book({
  itemId, title, author, category,
}) {
  return (
    <li className="book">
      <div className="details">
        <h4>{category}</h4>
        <h2>{title}</h2>
        <h5>{author}</h5>
        <Buttons id={itemId} />
      </div>
      <Status />
      <Progress />
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
