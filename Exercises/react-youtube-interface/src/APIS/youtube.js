import axios from 'axios';

const KEY = 'AIzaSyC1Ka4r10NeifMKxcf5NX-fGRF0ktnZ2Ts'; 
export default axios.create({ 
    baseURL: 'https://www.googleapis.com/youtube/v3/', 
    params: { 
        part: 'snippet', 
    maxResults: 20, 
    key: KEY
} 
})

export default axios;

// class Videos extends React.Component{
//     var key = "AIzaSyC1Ka4r10NeifMKxcf5NX-fGRF0ktnZ2Ts";
// var playlistId = "sdpw9EHDh2bM&t=2s";
// var URL = "https://www.googleapis.com/youyube/v3/playlistItems";

// var options = {
//     part: "snippet";
//     maxResults: 20;
//     key: key;
//     playlistId: playlistId; 

//     }
// var key = "AIzaSyC1Ka4r10NeifMKxcf5NX-fGRF0ktnZ2Ts";
// var playlistId = "sdpw9EHDh2bM&t=2s";
// var URL = "https://www.googleapis.com/youyube/v3/playlistItems";

// var options = {
//     part: "snippet";
//     maxResults: 20;
//     key: key;
//     playlistId: playlistId; 
// }
// loadVids();

// function MainVideo() {
//     $("#video").html(`
//     <iframe width="560" height="315" src="https://www.youtube.com/embed/dpw9EHDh2bM" 
//             frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
//             allowfullscreen></iframe>
//     `);
// }

// });


