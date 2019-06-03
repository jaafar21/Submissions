import React, {Component} from 'react';

import './App.css';
import Header from './Component/Header';
import MainVideo from './Component/Videos';
import UpNext from './Component/UpNext';
import SmallVideos from './Component/SmallVideos';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos : []
        }

    }
    handleSubmit = key => async event=>{
        event.preventDefault(); 
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${key}&key=AIzaSyDj2idHsuZXRHr2wwt43LYIm5_8u7gYERE`); 
        const result = await response.json();
         console.log(result.items); 
         this.setState({ 
            videos:result.items
          })}


          render() {
               <div>
               <SearchBar handleFormSubmit={this.handleSubmit}/> 
                
               </div>  } }

export default App;
