import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl';
 
mapboxgl.accessToken = 'pk.eyJ1IjoibWFqb2g5OSIsImEiOiJjbGZhYzVlZmYwdXB2M3JwZW5sOTl4em80In0.N9sdhHoTSpP2qAHGanzQWQ';

if ( !navigator.geolocation ) {
  alert('Tu navegador no soporta la Geolocalización');
  throw new Error('Tu navegador no soporta la Geolocalización');
}

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
