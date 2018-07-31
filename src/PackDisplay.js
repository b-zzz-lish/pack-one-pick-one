import React from 'react';

export default class PackDisplay extends React.Component {
  render() {
    const cards = this.props.cards.map(card => {
      return (
        <span key={card.name}>
          <a onClick={this.props.onSelected.bind(null, card)}>
            <img src={card.imageUrl} alt={card.name} />
          </a>
        </span>
      );
    });

    return (
      <div className='pack'>
        {cards}
      </div>
    );
  }
}
