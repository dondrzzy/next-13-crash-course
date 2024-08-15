import React, { useState } from 'react';

const CourseSearch = ({ searchCourses }) => {

  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchCourses(query);
  }
  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Search courses..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-button" type="submit">Search</button>
    </form>
  )
}

export default CourseSearch
