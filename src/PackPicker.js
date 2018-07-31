import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import PackDisplay from './PackDisplay';
import Sidebar from './Sidebar';

import aerRankings from './AER.json';

export default class PackPicker extends React.Component {
  constructor(props) {
    super(props);

    this.packUrl = `https://api.magicthegathering.io/v1/sets/${this.props.set}/booster`;
    this.state = {cards: [], selectedCard: {}};
    this.cardSelected = this.cardSelected.bind(this);
    this.loadPack = this.loadPack.bind(this);
  }

  render() {
    return (
      <div className='container is-fluid'>
        <Sidebar selectedCard={this.state.selectedCard} 
          cards={this.state.cards} 
          nextPack={this.loadPack} />
        <PackDisplay cards={this.state.cards} onSelected={this.cardSelected} />
      </div>
    );
  }

  cardSelected(card) {
    this.setState({selectedCard: card});
  }

  componentDidMount() {
    this.loadPack();
  }

  loadPack() {
    this.setState({cards: [], selectedCard: {} });
    axios.get(this.packUrl)
      .then(res => {
        this.setState({cards: _.shuffle(this.mergeScores(res.data.cards))});
      });
  }

  mergeScores(cards) {
    _.each(cards, card => {
      var match = _.find(aerRankings, { 'name': card.name });
      if (match) card.score = match.score;
    });
    return cards;
  }
}
