export default {
  name: 'BooksPage',
  template: `
    <div>
     <h1>Books Page</h1>
     <p>{{ message }}</p>
    </div>
  `,
  data() {
    return {
      message: 'Oh hai from the books page'
    }
  }
};
