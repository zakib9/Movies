import { reactive } from "vue";
import axios from "axios";

const state = reactive({
  topMovies: [],
  trending: [],
  upcomingTVShows: [],
  loading: false,
  error: null
});

// Optimized getData function
const getData = async (url) => {
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

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Throw the error to handle it in the caller function
  }
};

// Optimized fetchData function
async function fetchData() {
  state.loading = true;
  state.error = null;
  
  try {
    const [topMovies, trending, upcomingTVShows] = await Promise.all([
      getData('https://Movies-Verse.proxy-production.allthingsdev.co/api/movies/top-250-movies'),
      getData('https://Movies-Verse.proxy-production.allthingsdev.co/api/movies/most-popular-movies'),
      getData('https://Movies-Verse.proxy-production.allthingsdev.co/api/movies/upcoming-tv-shows')
    ]);
    
    // Update state with the data
    state.topMovies = topMovies;
    state.trending = trending;
    state.upcomingTVShows = upcomingTVShows;
    
  } catch (error) {
    state.error = "Failed to fetch movie data.";
  } finally {
    state.loading = false;
  }
}

// Automatically fetch data when the component loads
fetchData();

export default {
  state
};
