<template>
  <h4>User form</h4>
  <input v-model="fname" />
  <button @click='add'>save</button>
  <ol>
    <li v-for='user in users' :key='user.id'>
        {{user.id}}{{user.fname}}
    </li>
  </ol>
</template>

<script>
let counter =0;//db
export default {
  name: "UserForm",
  methods: {
      add:function () {
          console.log(this.fname);
          this.users.push({id:++counter, fname:this.fname});
      }
  },
  data() {
    return {
      fname: "Pariwesh",
      users:[]
    };
  },
  components: {},
};
</script>

<style>
input {
  background-color: yellow;
}
</style>
