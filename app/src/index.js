import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchBar';
import VideoList from './videoList';
import YTSearch from 'youtube-api-search';

const APIkey='AIzaSyAm8kGp_X1ZdZ6UqeIn9Fs16TjXzrDLzho';



//Create a new component. This component produces some HTML code

class App extends Component{
    constructor(props)
    {
        super(props);

        this.state={ videos : [] };

        YTSearch({key: APIkey, term : 'vivegam'},(videos) => {
            console.log(videos);
            this.setState({ videos : videos });
        });
    }
    render(){
        return (<div>
            <SearchBar/>
            <VideoList videos={this.state.videos}/>
        </div>);
    }
}

//Take the components generated and add it to DOM
ReactDOM.render(<App/>,document.querySelector('.container'));