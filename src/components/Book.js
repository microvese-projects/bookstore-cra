function Book() {
  return (
    <div className="book">
      <div className="details">
        <h4>Action</h4>
        <h2>The Hunger Games</h2>
        <h5>Suzzane Collins</h5>
        <ul className="buttons">
          <li>
            <button type="button" id="comments">Comments</button>
          </li>
          <li>
            <button type="button" id="remove">Remove</button>
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
    </div>
  );
}

export default Book;
