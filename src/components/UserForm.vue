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
      const promise = fetch(process.env.VUE_APP_ROOT_API + userid, {
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
      fname: "Pariwesh",
      age: 10,
      registered: true,
      users: [],
    };

    return model;
  },
  components: {},
  mounted() {
    console.log('mounted');
  },
  beforeMount(){
    const promise = fetch(process.env.VUE_APP_ROOT_API);
    promise.then((response) => {
      response.json().then((users) => {
        this.users = users;
      });
    });
    console.log('beforeMount');
  },
  beforeUpdate(){
    console.log('beforeUpdate');
  }
};
</script>

<style>
input {
  background-color: yellow;
}
</style>
