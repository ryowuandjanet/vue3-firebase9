import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDZubFSpDf2xGdu5xg8OK7QOacPqU7GAwY",
  authDomain: "version9-6695f.firebaseapp.com",
  projectId: "version9-6695f",
  storageBucket: "version9-6695f.appspot.com",
  messagingSenderId: "85299313211",
  appId: "1:85299313211:web:97dd1cba31550d712dfa1e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }
createApp(App).use(store).use(router).mount('#app')
