import React from 'react';
import * as pt from '../../types';
import { PageMain } from '../PageMain';

export const App = ({ offers }) => {
  return (
    <>
      <PageMain offers={offers} />
    </>
  );
};

App.propTypes = {
  offers: pt.offers
};
