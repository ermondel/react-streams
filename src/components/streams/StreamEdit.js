import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends Component {
  componentDidMount() {
    if (!this.props.stream) {
      this.props.fetchStream(this.props.streamId);
    }
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return <div>{this.props.stream.title}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const streamId = ownProps.match.params.id;

  return {
    streamId,
    stream: state.streams[streamId],
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
