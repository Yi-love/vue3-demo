<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  {{x}}
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup(props) {
    let x:number = 4;
  return {
    x
  }
  }
}
</script>
