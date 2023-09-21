/* eslint-disable max-len */
import React from 'react';

function Contact() {
  return (
    <div className="profile-page">
      <div className="description">
        <p>
          📚 Bookstore is a React and Redux-based app for managing books. Users can add, delete, edit, and update books. Inputs create objects for books, which are saved in the API and the global Redux state. Deleting a book triggers API deletion and Redux state update. The project is designed for desktop use and emphasizes advanced CSS, delete operations to APIs, and Redux-toolkit.
        </p>
        <p>
          If you need further information or have specific questions about the project, please let me know!
        </p>
      </div>
      <hr />
      <div className="contact-page">
        <h2>For inquiries contact us on:</h2>
        <ul>
          <li>Benson Njuguna</li>
          <li>Fullstack Software Developer</li>
          <li>Email: njugunab655@gmail.com</li>
          <li>
            GitHub:
            <a target="_blank" rel="noreferrer" href="https://github.com/Bennyjoez">
              @bennyjoez
            </a>
          </li>
          <li>
            LinkedIn:
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/bennyjoez/">
              @bennyjoez
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
