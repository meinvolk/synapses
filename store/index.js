// Enable store for auth module
import Vuex from "vuex";

const PASSWORD = "Synapses1!";

const createStore = () => {
    return new Vuex.Store({
        state: {
            password: null,
        },
        getters: {
            checkPassword: (state, getters) => {
                return state.password === PASSWORD;
            },
        },
        mutations: {
            setPassword(state, password) {
                state.password = password;
            },
        },
        actions: {
            checkPassword({ commit, getters }, password) {
                return new Promise((resolve, reject) => {
                    commit("setPassword", password);
                    resolve(getters.checkPassword);
                });
            },
        },
    });
};

export default createStore;