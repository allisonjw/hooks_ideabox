import React, { Component } from 'react';
import { addIdea } from '../../actions/actions';
import { connect } from 'react-redux';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { idea: '' };
  }

  handleChange = (e) => {
    this.setState({ idea: e.target.value });
  }

  submitForm = (e) => {
    e.preventDefault()
    this.props.addIdea(this.state.idea)
    this.setState({ idea: '' });
  }

  render() {
    return (
      <section>
        <form onSubmit={this.submitForm}>
          <input
            value={this.state.idea}
            placeholder="Add A Idea"
            onChange={this.handleChange} />
          <button>Add Idea</button>
        </form>
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addIdea: text => dispatch( addIdea(text) )
})

export default connect(null, mapDispatchToProps)(Form);
