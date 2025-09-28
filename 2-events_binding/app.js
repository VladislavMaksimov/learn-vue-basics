const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + (num || 1);
    },
    reduce(num) {
      this.counter = this.counter - (num || 1);
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    submitForm(event) {
      alert("Submitted!");
    },
    confirmName() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#events");
