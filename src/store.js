import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            visits: {}
        };
    },
    mutations: {
        addVisit(state, page) {
            if (typeof state.visits[page] === 'undefined') {
                state.visits[page] = 1;
            } else {
                state.visits[page]++;
            }
        }
    },
    getters: {
        history(state) {
            return state.visits;
        }
    }
});

export { store };
