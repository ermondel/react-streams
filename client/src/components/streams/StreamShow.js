import React, { Component } from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
    this.videoPlayer = null;
  }

  componentDidMount() {
    this.props.fetchStream(this.props.streamId);
  }

  componentWillUnmount() {
    this.videoPlayer.destroy();
  }

  componentDidUpdate() {
    if (this.videoPlayer || !this.props.stream) {
      return;
    }

    this.videoPlayer = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${this.props.streamId}.flv`,
    });
    this.videoPlayer.attachMediaElement(this.videoRef.current);
    this.videoPlayer.load();
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const { title, description } = this.props.stream;

    return (
      <div>
        <video ref={this.videoRef} style={{ width: '100%' }} controls={true} />
        <h1>{title}</h1>
        <h5>{description}</h5>
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

export default connect(mapStateToProps, { fetchStream })(StreamShow);
