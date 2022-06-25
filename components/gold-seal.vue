<template>
  <div class="gold-seal">
    <a
      rel="noopener noreferrer"
      href="https://www.jointcommission.org/"
      target="_blank"
    >
      <img
        src="/assets/images/goldseal_transparent_gif.gif"
        alt="The Joint Commission Gold Seal"
        data-height-percentage="100"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: "GoldSeal",
};
</script>

<style scoped>
.gold-seal {
  width: 125px;
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 100;
}
</style>
