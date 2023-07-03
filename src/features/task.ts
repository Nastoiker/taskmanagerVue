import {createStore, StoreOptions} from "vuex";
import {nanoid} from "nanoid";
interface ITask {
    id: string;
    title: string,
    description: string,
    isCompleted: boolean,
    date: string,
}

export const TaskModule=  {
    state: {
        tasks: JSON.parse(localStorage.getItem('tasks') || '[]') as ITask[],
        searchValue: '',
    },
    getters: {
        getOutStanding(state) {
            return state.tasks.filter( t => t.isCompleted);
        },
        getTasks(state) {
            return state.tasks;
        },
        sortedAndSearchedTasks(state) {
            return state.tasks.filter(t => t.title.toLowerCase().includes(state.searchValue.toLowerCase()))
        }
    },
    mutations: {
        addTask(state, task: ITask) {
            task.id = nanoid();
            task.date = new Date().toString();
            console.log(task);
            state.tasks.push(task);
        },
        removeTask(state, id: string) {
           state.tasks =  state.tasks.filter(t => t.id!==id);
        },
        changeCompleted(state, id: string) {
            state.tasks.forEach( t => { if (t.id===id) {
                t.isCompleted = !t.isCompleted
            }});
        },
        setSearchQuery(state, searchQuery) {
            state.searchValue = searchQuery
        },
        updateLocalStorage(state) {
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
    },
    actions: {
        addTask({commit,}, task: ITask) {
            commit('addTask', task);
            commit('updateLocalStorage');

        },
        removeTask({commit}, id: string) {
            commit('removeTask', id);
            commit('updateLocalStorage');
        },
        changeCompleted({commit}, id: string) {
            commit('changeCompleted', id);
        }
    },
    namespaced:true,
}
