const app = Vue.createApp({
  data() {
    return {
      simpleOutput: "",
      enterOutput: "",
    };
  },
  methods: {
    alertMe() {
      alert("The button was clicked!");
    },
    handleKeydown(event) {
      this.simpleOutput = event.target.value;
    },
    handleEnter(event) {
      this.enterOutput = event.target.value;
    },
  },
});

app.mount("#assignment");
