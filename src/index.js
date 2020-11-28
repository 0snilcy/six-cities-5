import React from 'react';
import { render } from 'react-dom';
import { App } from './components/App';

const offers = [
  {
    rating: 5,
    price: 180,
    isFavorite: true,
    isPremium: false,
    type: `Apartment`,
    title: `Nice, cozy, warm big bed apartment`,
    image: `apartment-02.jpg`
  },
  {
    rating: 3,
    price: 70,
    isFavorite: false,
    isPremium: true,
    type: `Private room`,
    title: `Beautiful & luxurious apartment at great location`,
    image: `apartment-03.jpg`
  },
];

render(
    <App offers={new Array(6).fill(1).map((_, id) => offers[id % 2])} />,
    document.querySelector(`#root`)
);

