new Vue({
  el: '#app',
  components: {
    MyComponent: () => import('./MyComponent.js')
  }
});
