const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + (num || 1);
    },
    reduce(num) {
      this.counter = this.counter - (num || 1);
    },
  },
});

app.mount("#events");
