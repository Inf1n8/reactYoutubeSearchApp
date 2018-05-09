import _ from 'lodash';
import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchBar';
import VideoDetail from './videoDetail';
import VideoList from './videoList';
import YTSearch from 'youtube-api-search';

const APIkey='AIzaSyAm8kGp_X1ZdZ6UqeIn9Fs16TjXzrDLzho';



//Create a new component. This component produces some HTML code

class App extends Component{
    constructor(props)
    {
        super(props);

        this.state={
            videos : [],
            selectedVideo : null
        };
        this.videoSearch('vivegam songs')

    }

    videoSearch(term)
    {
        YTSearch({key: APIkey, term : term},(videos) => {
            console.log(videos);
            this.setState({
                videos : videos,
                selectedVideo: videos[0]
            });
        });
    }
    render(){
        return (<div>
            <SearchBar onSearchTerm={term => this.videoSearch(term)}
            />
            <VideoDetail
                video={this.state.selectedVideo}/>
            <VideoList
                onVideoSelect = {(selectedVideo) => this.setState({selectedVideo})}
                videos={this.state.videos}
            />
        </div>);
    }
}

//Take the components generated and add it to DOM
ReactDOM.render(<App/>,document.querySelector('.container'));