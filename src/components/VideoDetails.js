import React from 'react';
import { Paper, Typography } from '@material-ui/core';

const VideoDetails = ({ video }) => {
    if(!video) return <h4>LOADING ......</h4>

    console.log(video);

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <React.Fragment>
            <Paper elevation={6} style={{height:'70%'}}>
                <iframe 
                    frameBorder = '0'
                    height = '100%'
                    width = '100%'
                    title = 'Video Player' 
                    src = {videoSrc}
                />
            </Paper>
            <Paper elevation={6} style={{padding:'15px'}}>
            <Typography variant='h6'>{video.snippet.channelTitle} - {video.snippet.title}</Typography>
            <Typography variant='body1'>{video.snippet.description}</Typography>
            <Typography variant='body2'>{video.snippet.publishTime}</Typography>
            </Paper>
        </React.Fragment>
    );
}

export default VideoDetails;