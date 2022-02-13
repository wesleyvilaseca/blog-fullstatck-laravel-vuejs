<template>
  <div>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li
        class="nav-item"
        role="presentation"
        v-for="(tab, index) in tablist"
        :key="index"
      >
        <button
          class="nav-link"
          v-bind:class="{ active: tab.active }"
          :id="`${tab.name}-tab`"
          data-bs-toggle="tab"
          :data-bs-target="`#${tab.name}`"
          type="button"
          role="tab"
          :aria-controls="`${tab.name}`"
          aria-selected="true"
        >
          {{ tab.title }}
        </button>
      </li>
    </ul>

    <div class="tab-content" id="myTabContent">
      <template v-for="(tab, index) in tablist" :key="index">
        <div
          class="tab-pane fade"
          v-bind:class="{ 'show active': tab.active }"
          :id="`${tab.name}`"
          role="tabpanel"
          :aria-labelledby="`${tab.name}-tab`"
        >
          <slot :name="`${tab.name}`" />
        </div>
      </template>
    </div>
  </div>
</template>
<script>
 
export default {
  name: "TabsComponent",
  props: {
    tablist: Array,
  },
  data() {
    return {};
  },
  created() {},
};
</script>
