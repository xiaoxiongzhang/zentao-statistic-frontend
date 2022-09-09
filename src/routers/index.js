import {createRouter, createWebHashHistory} from "vue-router";
import routes from "@/routers/routes";

let option;
option = {
    routes: routes,
    history: createWebHashHistory()
}

export const router = createRouter(option)

