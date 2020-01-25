import React from 'react';
import './Card.css';

const Idea = ({ id, text, completed }) => {
  return (
      <article className="idea_article">
          <p>{text}</p>
          <p>{completed}</p>
      </article>
  )
};

export default Idea;