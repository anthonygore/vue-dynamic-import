new Vue({
  el: '#app',
  data: {
    route: '/BooksPage.js'
  },
  methods: {
    navigate(event) {
      this.route = event.target.pathname;
    }
  },
  computed: {
    currentPage() {
      console.log(this.route);
      return () => import(this.route);
    }
  }
});

