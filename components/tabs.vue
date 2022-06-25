<template lang="html">
  <div>
    <ul class="tabs__header">
      <li
        v-for="(tab, index) in tabs"
        :key="tab.title"
        @click="selectTab(index)"
        :class="{ tab__selected: index == selectedIndex }"
      >
        {{ tab.title }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  data() {
    return {
      selectedIndex: 0, // the index of the selected tab,
      tabs: [], // all of the tabs
    };
  },
  created() {
    this.tabs = this.$children;
  },
  mounted() {
    this.selectTab(0);
  },
  methods: {
    selectTab(i) {
      this.selectedIndex = i;

      // loop over all the tabs
      this.tabs.forEach((tab, index) => {
        tab.isActive = index === i;
      });
    },
  },
};
</script>

<style lang="css">
ul.tabs__header {
  display: block;
  list-style: none;
  padding: 0;
}

ul.tabs__header > li {
  padding: 5px 30px;
  margin: 0;
  border: solid white 1px;
  display: inline-block;
  cursor: pointer;
  color: white;
  background-color: #000080;
}

ul.tabs__header > li.tab__selected {
  font-weight: bold;
  background-color: #ff6600;
}

.tab {
  display: inline-block;
  color: black;
  padding: 20px;
  min-width: 800px;
  min-height: 400px;
}

.tabs__light .tab {
  background-color: #fff;
}

.tabs__light li {
  background-color: #ddd;
  color: #aaa;
}

.tabs__light li.tab__selected {
  background-color: #fff;
  color: #83ffb3;
}

.tabs__dark .tab {
  background-color: #555;
  color: #eee;
}

.tabs__dark li {
  background-color: #ddd;
  color: #aaa;
}

.tabs__dark li.tab__selected {
  background-color: #555;
  color: white;
}
</style>
