import React from 'react';
import { Paper, TextField, Grid, Button } from '@material-ui/core';

class SearchBar extends React.Component {
    
    state = {
        searchTerm : ''
    }

    _handleSubmit = (e) => {
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;
        
        onFormSubmit(searchTerm);
        e.preventDefault();
    }

    _handleChange = (e) => {
        this.setState({
            searchTerm : e.target.value
        })
    }

    render() {
        return (
            <Paper elevation={6}>
                <form onSubmit={this._handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={10} style={{paddingLeft:'20px'}}>
                            <TextField  fullWidth label='Cari Video ............' onChange={this._handleChange}/>
                        </Grid>
                        <Grid item xs={2}>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                style={{marginTop:'10px'}} 
                                onClick={this._handleSubmit}> Cari
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        );
    }
}

export default SearchBar;