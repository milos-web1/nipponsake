import React, {Component} from 'react';

import './VideoSection.css';
//import * as Constant from '../../utils/constants.js'
import ReactPlayer from 'react-player'

class VideoSection extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://youtu.be/rHe8rEHMdaE?t=53'

        }
    }

    render () {
        return (
            <div className='player-wrapper'>
            <ReactPlayer
              id="background-video"
              className="youTubeVideo"
              loop
              controls
              width='100%'
              poster="/images/breweries/video.png"
              url={this.props.url}
            />
        </div>
        )
    }
};

export default VideoSection;
