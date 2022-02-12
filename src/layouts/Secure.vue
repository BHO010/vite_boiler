<template>
    <div>
        <h1>Hello</h1>
    <router-view :key="$route.fullPath"></router-view>
    </div>  
</template>

<script>
import { onMounted, onUnmounted } from 'vue'

export default {
  setup(props, context) {
    onMounted(() => console.log('SECURE mounted!'))
    onUnmounted(() => console.log('SECURE unmounted'))
  }
}
</script>