export default {
  name: 'MoviesPage',
  template: `
    <div>
     <h1>Movies Page</h1>
     <p>{{ message }}</p>
    </div>
  `,
  data() {
    return {
      message: 'Oh hai from the movies page'
    }
  }
};
