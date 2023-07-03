import {createStore} from "vuex";
import {TaskModule} from "@/features/task";

export default createStore({
    state: {
        isAuth: false,
    },
    modules: {
        tasks: TaskModule,
    }
})