<template>
  Counter component
  <div>{{ count }}</div>
  {{prop2}}
</template>

<script>
export default {
  props: ['count', 'prop2'],
  setup(props) {
      console.log(props);
      // props.prop2='initial value';
    //   props.count=props.count
  },
  name: "CounterC",
};
</script>
