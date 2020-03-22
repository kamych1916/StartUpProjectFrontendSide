import HeaderComponent from '../../components/HeaderComponent.vue'
import VueGeolocation from 'vue-browser-geolocation';
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

// import { loadYmap } from 'vue-yandex-maps';

export default {
  name: "SearchFoodPage",
  components: { 
      yandexMap, 
      ymapMarker,
      HeaderComponent,   
    },
  data: () => ({
    hover: false,
    coords: [],
    settings: {
      apiKey: 'fa62b7ab-42dd-440f-b314-3b1a9e363514',
      lang: 'en_US',
      coordorder: 'latlong',
      version: '2.1',
      debug: true
    },
    markerIcon: {
      // layout: 'default#imageWithContent',
      // imageHref: 'https://lh3.googleusercontent.com/proxy/dzLifAs_TtVhPoio7NArpPffMjuD2vClCqrb9u5Wv7WCpC3iPKQNwWi_86XK4cFxTcRPu7RUnA8TDiWNV2e4IEnVKptlVv7dov26fEsWGz26_2o3t1xP1esHRkpcIihaXRtiEc5DFX7U',
      // imageSize: [45, 45],
      // imageOffset: [0, -35],
      // content: 'Сели поели', // содержимое контента
      // contentOffset: [-0, -35], // смещение контента в px,
      // contentLayout: '<h1 style="background: red; width: 150px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</h1>'
    }
    // https://cdn.pixabay.com/photo/2014/04/03/11/52/eat-312431_960_720.png
  }),
  created(){
    this.getGEO()
  },
  methods: {
    bindListener() {
     this.coords = [53, 42]
    },
    onClick(e) {
      this.coords = e.get('coords');
    },
    getGEO(){
        VueGeolocation.getLocation().then(coordinates => {
          console.log(coordinates);
          this.coords = [coordinates.lat, coordinates.lng]
        })
    }
  }  
}