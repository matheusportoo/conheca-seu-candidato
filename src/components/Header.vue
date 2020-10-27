<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String
  }
};
</script>

<style scoped lang="scss">
h1 {
  margin: 40px 0 0;
}
</style>
