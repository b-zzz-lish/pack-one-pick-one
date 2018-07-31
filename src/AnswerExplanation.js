import React from 'react';
import _ from 'lodash';

export default class AnswerExplanation extends React.Component {
  render() {
    var sorted = _.orderBy(this.props.pack, 'score', 'desc').filter(x => x.score);

    var isCorrect = this.isCorrect(sorted) ?
      <p>Correct!</p> : <p>Incorrect</p>;

    return (
      <div className={this.props.selected.name ? '' : 'hidden'}>
        {isCorrect}
        <div className='explanation'>
          {this.getExplanation(sorted)}
        </div>
        <button onClick={this.props.nextPack} className='button is-large'>Next Pack</button>
      </div>
    );
  }

  isCorrect(sorted) {
    if (!this.props.selected.name) return false;
    return sorted[0].name == this.props.selected.name;
  }

  getExplanation(sorted) {
    if (sorted.length == 0) return '';
    var bestCard = sorted[0];
    return `${bestCard.name} is the best card in this pack`;
  }
}
