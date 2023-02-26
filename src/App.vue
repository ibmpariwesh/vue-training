<template>
  <Suspense>
    <template #default>
      <UserForm123 />
    </template>

    <template #fallback>
      <div>
        <div>Loading...</div>
        <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" />
      </div>
    </template>
  </Suspense>
</template>
<script>
export default {
  name: "App",
  components: {
    // UserForm  //local registration
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
