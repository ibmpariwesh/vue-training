<template>
  <h4>User form</h4>
  <input v-model="fname" />
   <input v-model="age" type='number'/>
  <button @click='add' :disabled='fname.length < 1'>save</button>{{count}}
  <ol>
    <li v-for='user in users' :key='user.id'>
        {{user.id}}{{user.fname}}, {{user.age}}
    </li>
  </ol>
</template>

<script>
import { nextTick } from 'vue'

let counter =0;//db
export default {
  name: "UserForm",
  computed:{
      count(){
          return this.users.length
      }
  },
  methods: {
      add:function () {
        // console.log(eventBus);
         nextTick(() => {
          console.log(this.fname);
      })
          this.users.push({id:++counter, fname:this.fname, age:this.age});
      }
  },
  data() {
    return {
      fname: "Pariwesh",
      age:0,
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
