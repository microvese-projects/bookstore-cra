import { useState } from 'react';

function Form() {
  const [details, setDetails] = useState({
    title: '',
    author: '',
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
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default Form;
