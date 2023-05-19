import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postBooks } from '../redux/books/booksSlice';

function Form() {
  const [alert, setAlert] = useState(false);
  const [details, setDetails] = useState({
    title: '',
    author: '',
    category: '',
  });

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (details.category !== '') {
      const newBook = {
        item_id: `Book${Math.floor(Math.random() * 1000)}`,
        title: details.title,
        author: details.author,
        category: details.category,
      };
      dispatch(postBooks(newBook));
      setDetails({
        title: '',
        author: '',
        category: '',
      });
    } else {
      setAlert(true);
    }
  }

  function handleChange(e) {
    if (e.target.id === 'author') {
      setDetails((prev) => ({
        ...prev,
        author: e.target.value,
      }));
    } else if (e.target.id === 'category') {
      setDetails((prev) => ({
        ...prev,
        category: e.target.value,
      }));
    } else {
      setDetails((prev) => ({
        ...prev,
        title: e.target.value,
      }));
    }
  }

  return (
    <div className="form">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book title"
          id="title"
          onChange={handleChange}
          value={details.title}
          required
        />
        <input
          type="text"
          placeholder="Author's name"
          id="author"
          onChange={handleChange}
          value={details.author}
          required
        />
        <select
          id="category"
          onChange={handleChange}
          value={details.category}
          className={alert ? 'red-border' : ''}
          required
        >
          <option value="" disabled>--Select--</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
          <option value="Documentary">Documentary</option>
        </select>
        <button
          type="submit"
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default Form;
