import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import { setupStore } from "./stores";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "@/static/text/text.css"
export function createApp() {
	const app = createSSRApp(App);
	setupStore(app),
	app.use(ElementPlus)
	return {
		app,
	};
}
