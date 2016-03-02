import React from 'react';
import Icon from '@economist/component-icon';

export default class BarWrapper extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    classNamePrefix: React.PropTypes.string,
    children: React.PropTypes.node,
    close: React.PropTypes.bool,
    renderCloseButton: React.PropTypes.func,
    onClose: React.PropTypes.func,
    stillRenderWhenClosed: React.PropTypes.bool,
  }
  static defaultProps = {
    close: true,
  }
  constructor(...args) {
    super(...args);
    this.onClose = this.onClose.bind(this);
  }
  onClose(event) {
    if (event.button !== 0) { return; }
    if (event.ctrlKey) { return; }
    if (this.props.onClose) {
      this.props.onClose(event);
    }
    this.setState({ closed: true });
  }
  render() {
    const { className, classNamePrefix, children, close, onClose, stillRenderWhenClosed } = this.props;

    let classNames = [ 'bar-wrapper' ];
    let closedClassNames = [ 'bar-wrapper--closed' ];
    let containerClassNames = [ 'bar-wrapper--container' ];
    let closeWrapperClassNames = [ 'bar-wrapper--close-wrapper' ]
    let closeClassNames = [ 'bar-wrapper--close' ];

    if (className) {
      classNames = classNames.concat([ className ]);
      closedClassNames = closedClassNames.concat([ `${classNamePrefix}--closed` ]);
      containerClassNames = containerClassNames.concat([ `${classNamePrefix}--container` ]);
      closeClassNames = closeClassNames.concat([ `${classNamePrefix}--close` ]);
      closeWrapperClassNames = closeWrapperClassNames.concat([ `${classNamePrefix}--close-wrapper` ]);
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
        <CloseButtonComponent onClick={this.onClose}
          className={closeWrapperClassNames.join(' ')}
          tabIndex={0}
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

