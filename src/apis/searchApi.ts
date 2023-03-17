import axios from 'axios';

const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    language: 'es',
    access_token: 'pk.eyJ1IjoibWFqb2g5OSIsImEiOiJjbGZhYzVlZmYwdXB2M3JwZW5sOTl4em80In0.N9sdhHoTSpP2qAHGanzQWQ'
  }
});

export default searchApi;