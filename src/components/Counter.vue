<template>
  Counter component
  <div>{{ count }} {{prop2}}
  <button @click="$emit('myEvent', 2,'pariwesh')">send to parent</button>
  </div>
</template>

<script>
export default {
  props: ['count', 'prop2'],
  emits:['myEvent'],
  setup(props) {
      console.log(props);
  },
  name: "CounterC",
};
</script>
