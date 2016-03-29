import React from 'react';
import BarWrapper from './';

// this ensures the cookie is never written
const fakeCookie = {
  load: () => {},
  save: () => {},
};
export default (
  <BarWrapper onClose={
    () => {
      alert('you just clicked close!');
    }
  }>
    Hello! I'm inside a barwrapper! The background and this text color came from the example CSS.
  </BarWrapper>
);
