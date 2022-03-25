<template lang="html">
  <div class="tab" v-if="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tab",
  props: {
    title: {
      type: String,
      default: "Tab",
    },
  },
  data() {
    return {
      isActive: true,
    };
  },
};
</script>

<style lang="css"></style>
