import Vue from 'vue';
import Vuex from 'vuex';
import data from './data';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paymentsList: [],
    pagesList: [],
    currentPage: 1,
  },
  mutations: {
    // eslint-disable-next-line no-shadow
    SET_PAYMENTS_LIST(state, data) {
      state.paymentsList = data;
    },
    ADD_PAYMENT_DATA(state, payment) {
      state.paymentsList.push(payment);
    },
    ADD_NEW_PAYMENT(state, payment) {
      state.paymentsList.push(payment);
    },

    // eslint-disable-next-line no-shadow
    SET_PAGES_LIST(state, data) {
      state.pagesList = data;
    },

    SET_CURRENT_PAGE(state, page) {
      if (state.pagesList.indexOf(page) !== -1) {
        state.currentPage = page;
      }
    },
  },
  getters: {
    TotalAmount: ({ paymentsList }) => paymentsList
      .reduce((total, { value }) => +total + +value, 0),
    paymentsList: (state) => state.paymentsList,

    onDisplayPayments(state) {
      let startPoint;
      // eslint-disable-next-line no-unused-expressions
      state.currentPage === 1 ? startPoint = 0 : startPoint = (state.currentPage - 1) * 6;
      const endPoint = startPoint + 6;
      return state.paymentsList.slice(startPoint, endPoint);
    },

    pages(state) {
      return state.pagesList;
    },

    currentPage(state) {
      return state.currentPage;
    },
  },
  actions: {
    calcPages({ commit, state }) {
      const pagesCount = Math.ceil(state.paymentsList.length / 6);
      const pagesArray = [];
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < pagesCount; i++) {
        pagesArray.push(i + 1);
      }

      commit('SET_PAGES_LIST', pagesArray);
    },

    fetchData({ commit, dispatch }) {
      const response = data;
      commit('SET_PAYMENTS_LIST', response);
      dispatch('calcPages');
    },

    addNewPayment({ commit, dispatch }, payment) {
      commit('ADD_NEW_PAYMENT', payment);
      dispatch('calcPages');
    },
  },
});
