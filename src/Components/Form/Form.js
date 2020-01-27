import React, { useState } from 'react';
import { addIdea } from '../../actions/actions';
import { connect } from 'react-redux';
import './Form.css';

const Form = ({ addIdea }) => {
    const id = useState((Date.now()));
    const [title, titleSetter] = useState(' ');
    const [description, descriptionSetter] = useState(' ');
  
    const addNewIdea = (e) => {
        e.preventDefault()
        titleSetter('')
        descriptionSetter(' ')
        addIdea({ id, title, description });
    }

    return (
      <section>
        <form>
        <label>Title: </label>
          <input
            value={title}
            placeholder="Add A Title"
            onChange={(e) => titleSetter(e.target.value)} />
        <label>Description: </label>
          <input
            value={description}
            placeholder="Add A Description"
            onChange={(e) => descriptionSetter(e.target.value)} />  
          <button onClick={addNewIdea}>Add Idea</button>
        </form>
      </section>
    )
}

export const mapDispatch = dispatch => ({
  addIdea: ideas => dispatch( addIdea(ideas) )
});

export default connect(null, mapDispatch)(Form);
