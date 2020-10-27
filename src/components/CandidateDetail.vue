<template>
  <div>
    <code>
      {{ candidateDetail }}
    </code>
  </div>
</template>

<script>
export default {
  name: "CandidateDetail",
  props: {
    candidateDetail: { type: Object, default: () => {} }
  }
};
</script>

<style scoped lang="scss">
div {
  margin: 40px 0 0;
}
</style>
