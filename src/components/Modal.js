import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
  modalId = 'modal';

  eventStop(event) {
    event.stopPropagation();
  }

  renderBody() {
    const classBody = 'ui standard modal visible active';

    return (
      <div onClick={this.eventStop} className={classBody}>
        <div className="header">{this.props.title}</div>
        <div className="content">{this.props.content}</div>
        <div className="actions">{this.props.actions}</div>
      </div>
    );
  }

  renderLoader() {
    return <div className="ui loader"></div>;
  }

  render() {
    const classWrapper = 'ui dimmer modals visible active';

    return ReactDOM.createPortal(
      <div onClick={this.props.onDismiss} className={classWrapper}>
        {this.props.loader ? this.renderLoader() : this.renderBody()}
      </div>,
      document.getElementById(this.modalId)
    );
  }
}

export default Modal;
