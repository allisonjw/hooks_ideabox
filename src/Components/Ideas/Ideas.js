import React from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import './Ideas.css';

const Ideas = ({ ideas }) => {
  const displayIdeas = ideas.map(idea => {
    return (
      <Card
        {...idea}
        key={idea.id}
      />
    )
  })

  return (
    <ul>
      {displayIdeas}
    </ul>
  )
}

const mapStateToProps = state => ({
  ideas: state.ideas
});

export default connect(mapStateToProps)(Ideas);