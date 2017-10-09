new Vue({
  el: '#app',
  data: {
    route: 'pages/BooksPage.js'
  },
  methods: {
    navigate(event) {
      this.route = event.target.pathname;
    }
  },
  computed: {
    page() {
      // console.log(this.route);
      return () => import(
        /* webpackChunkName: "pages/[request]" */
        `./pages/${this.route.split('/').pop()}`
      )
        .then(m => m.default);
    }
  }
});

