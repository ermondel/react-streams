import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends Component {
  componentDidMount() {
    if (!this.props.stream) {
      this.props.fetchStream(this.props.streamId);
    }
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.streamId, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const values = {
      title: this.props.stream.title,
      description: this.props.stream.description,
    };

    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} initialValues={values} />
      </div>
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
  editStream,
})(StreamEdit);
