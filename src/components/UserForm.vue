<template>
  <h4>User form</h4>
  <input v-model="fname" />
  <input v-model="age" type="number" />
  <input type="radio" name="gender" v-model="gender" value="Male" />Male
  <input type="radio" name="gender" v-model="gender" value="Female" />Female

  <input
    type="checkbox"
    v-model="registered"
    :true-value="true"
    :false-value="false"
  />Registered? <button @click="add" :disabled="fname.length < 1">save</button>{{ count }}
  {{ selected }}
  <select v-model="selected" >
    <option value="">Select one</option>
    <option value="" v-for='option in options' :key='option'>{{option}}</option>

  </select>
  <ol>
    <li v-for="(user, index) in users" :key="user.id">
      {{ user.id }}{{ user.fname }}, {{ user.age
      }}<button @click="deleteUser(user.id, index)">delete</button>
    </li>
  </ol>
</template>

<script>
export default {
  name: "UserForm",
  computed: {
    count() {
      return this.users.length;
    },
  },
  methods: {
    deleteUser: function (userid, index) {
      const promise = fetch(process.env.VUE_APP_ROOT_API+'users/' + userid, {
        method: "delete",
      });
      promise.then(() => {
        this.users.splice(index, 1);
      });
    },
    add: function () {
      const payload = Object.assign({}, this); //copy of model
      delete payload.users;
      const promise = fetch(process.env.VUE_APP_ROOT_API, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      promise.then((response) => {
        //success handler
        response.json().then((user) => {
          this.users.push(user);
        });
      });
      promise.catch((error) => alert(error));
    },
  },
  data() {
    //state of component
    const model = {
      selected: "B",
      fname: "Pariwesh",
      age: 10,
      options:[],
      registered: true,
      users: [],
    };

    return model;
  },
  components: {},
  mounted() {
    //after DOM is pushed in DOM tree
    console.log("mounted");
  },
  beforeMount() {
    const promise = fetch(process.env.VUE_APP_ROOT_API+'users');
    promise.then((response) => {
      response.json().then((users) => {
        this.users = users;
      });
    });
    const promise1 = fetch(process.env.VUE_APP_ROOT_API+'options/');
    promise1.then((response) => {
      response.json().then((options) => {
        this.options = options;
      });
    });
    console.log("beforeMount");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  unmounted() {},
};
</script>

<style>
input {
  background-color: yellow;
}
</style>
