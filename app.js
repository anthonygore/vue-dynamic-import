import BooksPage from './pages/BooksPage.js';

new Vue({
  el: '#app',
  data: {
    page: BooksPage
  },
  methods: {
    navigate(event) {
      this.page = () => import(
        /* webpackChunkName: "pages/[request]" */
        `./pages/${event.target.pathname.split('/').pop()}`
      );
    }
  }
});

