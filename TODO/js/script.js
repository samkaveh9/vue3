Vue.createApp({
  data() {
    return {
      input: "",
      tasks: [],
    };
  },

  methods: {
    addTask() {
      if (!this.input) return;
      this.tasks.push({ title: this.input, completed: false });
      this.input = "";
    },

    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
}).mount("#app");
