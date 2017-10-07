export default {
  template: `
    <div>
     <h1>Async Component</h1>
     <p>{{ message }}</p>
    </div>
  `,
  data() {
    return {
      message: 'Oh hai from the async component'
    }
  }
};
