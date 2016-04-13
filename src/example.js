import React from 'react';
import BarWrapper from './';

function onClose() {
  alert('you just clicked close!'); // eslint-disable-line
}

export default (
  <BarWrapper onClose={onClose}>
    Hello! I'm inside a barwrapper! The background and this text color came from the example CSS.
  </BarWrapper>
);
