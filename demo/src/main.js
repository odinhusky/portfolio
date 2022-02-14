import { createApp } from 'vue'

// ? Components | Comtainer | Page
import App from './App.vue'

// = styles
import './assets/tailwind.css'

// $ FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faBorderAll } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBars, faBorderAll);


createApp(App)
  .component('fa', FontAwesomeIcon)
  .mount('#app')
