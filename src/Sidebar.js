import React from 'react';
import _ from 'lodash';
import AnswerExplanation from './AnswerExplanation';

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className='box sidebar'>
        <h1 className='title'>
          Pack1<span className='logo-part'>Pick1</span>
        </h1>
        <AnswerExplanation 
          pack={this.props.cards} 
          selected={this.props.selectedCard} 
          nextPack={this.props.nextPack} />
      </div>
    );
  }
}
