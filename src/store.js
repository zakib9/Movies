import { reactive } from "vue";
import axios from "axios";

const state = reactive({
    topMovies: [],
    trending: [],
    upCommingTVShows: [],
    
})

const getData = async (url) =>{
  
      
    let config = {
     method: 'get',
     maxBodyLength: Infinity,
     url: url,
     headers: { 
        'x-apihub-key': 'P4r-PCQUBTBghVxA9jT920Ec1BJz8kHXRl6bSSkGJcFS2uHsW1', 
        'x-apihub-host': 'Movies-Verse.allthingsdev.co', 
        'x-apihub-endpoint': 'd3ee0b1f-e51c-46bc-99eb-c660726b0a1b'
     }
  };
  
   const data = await axios.request(config)
  .then((response) => {
    return response.data
     
  })
  .catch((error) => {
     console.log(error);
  });
    return data
  }
  
  async function fetchData() {
    state.topMovies = await getData('https://Movies-Verse.proxy-production.allthingsdev.co/api/movies/top-250-movies') 
  state.trending = await getData('https://Movies-Verse.proxy-production.allthingsdev.co/api/movies/most-popular-movies')
  state.upCommingTVShows = await getData('https://Movies-Verse.proxy-production.allthingsdev.co/api/movies/upcoming-tv-shows') 
  }
  
  fetchData();

  export default{
    state: state,
  }