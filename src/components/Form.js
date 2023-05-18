import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, postBooks } from '../redux/books/booksSlice';

function Form() {
  const [details, setDetails] = useState({
    title: '',
    author: '',
    category: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
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

  const dispatch = useDispatch();

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
          placeholder="Category..."
          id="category"
          onChange={handleChange}
          value={details.category}
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
        <button
          type="submit"
          onClick={() => {
            if (details.title !== '' && details.author !== '' && details.category !== '') {
              const newBook = {
                item_id: Math.floor(Math.random() * 1000),
                title: details.title,
                author: details.author,
                category: details.category,
              };
              dispatch(postBooks(newBook));
              dispatch(addBook(newBook));
              setDetails({
                title: '',
                author: '',
                category: '',
              });
            }
          }}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default Form;
