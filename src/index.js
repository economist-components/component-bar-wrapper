import React from 'react';
import Icon from '@economist/component-icon';
import PropTypes from 'prop-types';

export default class BarWrapper extends React.Component {
  constructor(...args) {
    super(...args);
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  handleOnClick(event) {
    if (event.button !== 0) {
      return;
    }
    if (event.ctrlKey) {
      return;
    }
    if (this.props.onClose) {
      this.props.onClose(event);
    }
    this.setState({ closed: true });
  }
  handleKeyDown(event) {
    if (event.code === 'Enter' || event.code === 'Space') {
      this.handleOnClick(event);
    }
  }
  render() {
    const { className, classNamePrefix, children, close, stillRenderWhenClosed } = this.props;
    let classNames = [ 'bar-wrapper' ];
    let closedClassNames = [ 'bar-wrapper--closed' ];
    let containerClassNames = [ 'bar-wrapper--container' ];
    let closeWrapperClassNames = [ 'bar-wrapper--close-wrapper' ];
    let closeClassNames = [ 'bar-wrapper--close' ];
    if (className) {
      classNames = classNames.concat([ className ]);
      closedClassNames = closedClassNames.concat([ `${ classNamePrefix }--closed` ]);
      containerClassNames = containerClassNames.concat([ `${ classNamePrefix }--container` ]);
      closeClassNames = closeClassNames.concat([ `${ classNamePrefix }--close` ]);
      closeWrapperClassNames = closeWrapperClassNames.concat([ `${ classNamePrefix }--close-wrapper` ]);
    }

    if (this.state && this.state.closed) {
      if (stillRenderWhenClosed) {
        classNames = classNames.concat(closedClassNames);
      } else {
        return (<div className={closedClassNames.join(' ')}></div>);
      }
    }

    let closeButton = null;
    if (close) {
      const CloseButtonComponent = this.props.renderCloseButton || 'span';
      closeButton = (
        <CloseButtonComponent
          onClick={this.handleOnClick}
          onKeyDown={this.handleKeyDown}
          className={closeWrapperClassNames.join(' ')}
          tabIndex={0}
          role="button"
        >
          <Icon icon="close" className={closeClassNames.join(' ')} />
        </CloseButtonComponent>
      );
    }

    return (
      <div className={classNames.join(' ')}>
        <div className={containerClassNames.join(' ')}>
          {closeButton}
          {children}
        </div>
      </div>
    );
  }
}

if (process.env.NODE_ENV !== 'production') {
  BarWrapper.propTypes = {
    className: PropTypes.string,
    classNamePrefix: PropTypes.string,
    children: PropTypes.node,
    close: PropTypes.bool,
    renderCloseButton: PropTypes.func,
    onClose: PropTypes.func,
    stillRenderWhenClosed: PropTypes.bool,
  };
}

BarWrapper.defaultProps = {
  close: true,
};
