import React from 'react';
import PropTypes from 'prop-types';

class BackgroundVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: null
    };
    this.assignRef = this.assignRef.bind(this);
  }

  static propTypes = {
    poster: PropTypes.string,
    mp4: PropTypes.string,
    webm: PropTypes.string,
    ogg: PropTypes.string
  };

  assignRef(ref) {
    this.props.videoRef(ref);
    this.setState({ video: ref });
  }

  render() {
    const { source, poster, mp4, webm, ogg } = this.props;
    return (
      <video
        ref={this.props.videoRef.bind(this)}
        onLoadedData={() => this.props.ready()}
        muted
        autoPlay
        loop
        poster={poster}
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          display: 'block',
          position: 'absolute',
          zIndex: 1,
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          height: 'auto',
          width: 'auto',
          minHeight: '100%',
          minWidth: '100%'
        }}
      >
        {mp4 && <source src={mp4} type="video/mp4" />}
        {webm && <source src={webm} type="video/webm" />}
        {ogg && <source src={ogg} type="video/ogg" />}
      </video>
    );
  }
}

export default BackgroundVideo;