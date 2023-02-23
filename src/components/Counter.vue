<template>
  Counter component
  <div>
    {{ count }} {{ prop2 }}
    <button v-on:click="$emit('myEvent', 2, 'pariwesh')">send to parent</button>
    <div v-for="(value, name, index) in top" :key="index">
      {{ value }}, {{ name }}, {{ index }}
    </div>
    <img :src="url" alt="this is an image" />
    <img v-bind="{src:url, alt:'this is an image'}"/>
  </div>
</template>

<script>
export default {
  props: ["count", "prop2"],
  emits: ["myEvent"],
  setup(props) {
    console.log(props);
  },
  data() {
    return {
      url: "/favicon.ico",
      top: {
        prop1: "v1",
        prop2: "v2",
      },
    };
  },
  name: "CounterC",
};
</script>
