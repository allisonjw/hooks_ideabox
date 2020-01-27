import React from 'react';
import { removeIdea } from '../../actions/actions';
import { connect } from 'react-redux';
import './Card.css';

export const Card = ({ id, title, description, removeIdea }) => {
    
  return (
      <article className="idea_article">
          <p>{title}</p>
          <p>{description}</p>
          <button 
          onClick={() => removeIdea(id)}
          >🗑</button>
      </article>
  )
};

const mapDispatch = dispatch => ({
    removeIdea: id => dispatch( removeIdea(id) )
});
  
export default connect(null, mapDispatch)(Card);
  