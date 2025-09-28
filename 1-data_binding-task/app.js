const app = Vue.createApp({
  data() {
    return {
      name: "John Doe",
      age: 30,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/f2/Portrait_Hippopotamus_in_the_water.jpg",
    };
  },
  methods: {
    randomNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
