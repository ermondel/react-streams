import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.streamId);
  }

  onDeleteClick = () => {
    this.props.deleteStream(this.props.streamId);
  };

  renderActions() {
    return (
      <>
        <button onClick={this.onDeleteClick} className="ui button negative">
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </>
    );
  }

  redirectToHome() {
    history.push('/');
  }

  render() {
    let content = 'Are you sure you want to delete the stream';
    content += this.props.stream
      ? ` with title: ${this.props.stream.title}?`
      : '?';

    return (
      <Modal
        title="Delete Stream"
        content={content}
        actions={this.renderActions()}
        onDismiss={this.redirectToHome}
        loader={this.props.stream ? false : true}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const streamId = ownProps.match.params.id;

  return {
    streamId,
    stream: state.streams[streamId],
  };
};

export default connect(mapStateToProps, {
  fetchStream,
  deleteStream,
})(StreamDelete);
