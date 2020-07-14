import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

const VideoItems = ({video, _handleVideoSelect}) => {
    return(
        <Grid item xs={12}>
            <Paper style={{display:'flex', alignItems:'center', cursor:'pointer'}} onClick={() => _handleVideoSelect(video)} >
                <img style={{marginRight:'20px'}} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
                <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
            </Paper>
        </Grid>
    );
}

export default VideoItems;