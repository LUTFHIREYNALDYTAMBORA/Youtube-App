import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import SearchBar from './components/SearchBar';
import VideoDetails from './components/VideoDetails';
import VideoList from './components/VideoList';

class App extends React.Component {

    state = {
        videos : [],
        selectedVideo : null
    }

    _handleVideoSelect = (video) => {
        this.setState({
            selectedVideo : video
        })
    }

    _handleSubmit = async (searchTerm) => {
        const res = await youtube.get('search', {
            params : {
                part : 'snippet',
                maxResults : 10,
                key : 'AIzaSyCZO7HK9I0BnMsFafmbrbeMPdBQutzY5Us',
                q : searchTerm
            }
        });
        // console.log(res);
        this.setState({
            videos : res.data.items,
            selectedVideo : res.data.items[0]
        });
    }

    render() {
        const { selectedVideo, videos } = this.state;
        return (
            <Grid justify='center' container spacing={10} style={{paddingTop:'20px'}}>
                <Grid item xs={12}> 
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this._handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetails video={selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={videos} _handleVideoSelect={this._handleVideoSelect} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default App;
