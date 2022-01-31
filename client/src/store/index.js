import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        articles: [],
        selected: {},
        loading: false,
        isLogged: false
    },
    actions: {
        // save article
        savearticle({ commit }, value) {
            commit("updatearticle", value);
        }
    },
    getters: {
        published: state => {
            return state.articles.filter(e => e.published === true);
        }
    },
    mutations: {
        // update article
        updatearticle(state, value) {
            state.articles = value;
        },
        // update selected
        updateselected(state, value) {
            state.selected = value;
        }
    }
});