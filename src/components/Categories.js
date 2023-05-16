import React from 'react';
import { useSelector } from 'react-redux';

function Categories() {
  const { status } = useSelector((state) => state.categories);

  if (!status) {
    return (
      <div>
        <h3>Under Construction</h3>
      </div>
    );
  }
  return (
    <>
      <h1>Categories Page</h1>
    </>
  );
}

export default Categories;
