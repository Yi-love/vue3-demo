<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld :msg="msg" />
  <button @click="changeMsg">
    按钮
  </button>
  {{ x }}
  {{ y }}
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import { computed, ref } from 'vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  setup(){
    // ref
    let x = ref(4);
    let msg = ref('hello meesage.');
    let changeMsg = () : void => {
      msg.value = 'change....' + new Date();
    };
    // computed
    let y = computed(() => {
      return x.value + 1;
    });
    return {
      x,
      y,
      msg,
      changeMsg
    };
  },
};
</script>
