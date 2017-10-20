new Vue({
  el: '#app',
  data: {
    route: '/pages/BooksPage.js'
  },
  methods: {
    navigate(event) {
      this.route = event.target.pathname;
    }
  },
  computed: {
    page() {
      //console.log(this.route); // Uncomment this and it works
      return () => import(
        /* webpackChunkName: "pages/[request]" */
        `./pages/${this.route.split('/').pop()}`
      );
    }
  }
});

