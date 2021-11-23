import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnfgSPBkaEeb76wQrEhdjWnZrypmLW5NQ",
  authDomain: "ejemplo-crud-9a01b.firebaseapp.com",
  projectId: "ejemplo-crud-9a01b",
  storageBucket: "ejemplo-crud-9a01b.appspot.com",
  messagingSenderId: "26806471988",
  appId: "1:26806471988:web:87f65dbefa104574866961",
};

// Initialize Firebase
initializeApp(firebaseConfig);

Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
