import React from 'react';
import VideoItems from './VideoItems';
import { Grid } from '@material-ui/core';

const VideoList = ({videos, _handleVideoSelect}) => {
    const listOfVideo = videos.map((video, id) => <VideoItems _handleVideoSelect={_handleVideoSelect} key={id} video={video}/>);

    return (
        <Grid container spacing={5}>
            {listOfVideo}
        </Grid>
    )
}

export default VideoList;