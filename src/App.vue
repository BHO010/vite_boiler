<template>
  <component :is="$route.meta.layout || !isVerified ? 'layout-public': 'layout-secure'"></component>
</template>

<script>
import { computed } from "vue"
import { useStore } from 'vuex'
import layoutPublic from "./layouts/Public.vue"
import layoutSecure from "./layouts/Secure.vue"
export default {
  components: {
    "layout-public": layoutPublic, // store.state.user determines if public or secure
    "layout-secure": layoutSecure,
  },
  setup(props, context) {
    const store = useStore()
    const isVerified = computed(() => store.state.verified)

    return {
      isVerified,
    };
  },
};
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
