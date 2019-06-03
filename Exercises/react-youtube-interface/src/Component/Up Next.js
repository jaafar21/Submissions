import React from 'react';

class UpNext extends React.Component{
    constructor(props) {
        super(props);

        this.state = {}

    }
    render() {
        return (
            <div className="UpNext">
            <h1>Up Next</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Bv_5Zv5c-Ts" 
            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe> 
            <h2>React Context vs Redux - Who wins?</h2>
            <p><span>Academind</span><span>58k views</span></p>
            </div>
        );
    }
}

export default UpNext;
