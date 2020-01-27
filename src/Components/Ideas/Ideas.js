import React from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import './Ideas.css';

export const Ideas = ({ ideas }) => {
  const displayIdeas = ideas.map(idea => {
    return (
      <Card
      key={idea.id}
      {...idea}
      />
    )
  });

  return (
    <section className="ideas-section">
      {displayIdeas}
    </section>
  )
}

export const mapState = state => ({
  ideas: state.ideas
});

export default connect(mapState)(Ideas);