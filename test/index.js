import React from 'react';
import BarWrapper from '../src';

import chai from 'chai';
import chaiSpies from 'chai-spies';

chai.should();
chai.use(chaiSpies);

describe('BarWrapper component', () => {
  it('is compatible with React.Component', () => {
    BarWrapper.should.be.a('function').and.respondTo('render');
  });
  it('renders a React element', () => {
    React.isValidElement(
      <BarWrapper />
    ).should.equal(true);
  });
  it('respects renderCloseButton property', () => {
    function renderCloseButton(props) {
      return <p {...props} />;
    }
    const barWrapper = new BarWrapper({ close: true, renderCloseButton });
    const closeButton = barWrapper.render().props.children.props.children[0];
    closeButton.type.should.equal(renderCloseButton);
  });
});
