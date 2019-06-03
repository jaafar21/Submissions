import React from 'react';

class MainVideo extends React.Component{
    constructor(props) {
        super(props);

        this.state = {}

    }
    render() {
        return (
            <body>
            <div className="MainVideo">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dpw9EHDh2bM" 
            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
            <h2>React Today and Tomorrow and 90% Cleaner React With Hooks</h2>
            <p>316,671 views</p>
            </div>  
            </body>

        );
    }
}

export default MainVideo;