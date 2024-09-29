import { createApp } from "vue";
import App from "./App.vue";

// Import all of Bootstrap's JS
import "bootstrap/scss/bootstrap.scss";
import * as bootstrap from "bootstrap";
createApp(App).use(bootstrap).mount("#app");
