import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import { getOptions} from './VjsConfig';
import { initSpacePause } from '../util/spacePause';
export default class VideoPlayer extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.player = videojs(this.videoNode, getOptions(this.props.src))
        initSpacePause(this.player)
    }
    componentWillUnmount(){
        if(this.player){
            this.player.dispose();
        }
    }
    render(){
        return(
            <div data-vjs-player>
                <video ref={node => this.videoNode = node} className="video-js"></video>
            </div>
        )
    }
}