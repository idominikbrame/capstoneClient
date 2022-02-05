import React from 'react';

const AudioPlayer = (props) => {
    return (
        <div>
            <audio useRef={"audio-tag"} src={props.url} controls autoPlay={0}></audio>
        </div>
    );
};

export default AudioPlayer;