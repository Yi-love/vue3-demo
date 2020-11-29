<template>
  <h1>{{ msg }}</h1>
  <button @click="add">ADD</button> count is: {{ count }}
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script lang="ts">
import { ref, watch } from 'vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup() {
    let count = ref(0);
    //method
    let add = () => {
      count.value += 1;
    };
    // change
    watch(count, (newVal, oldVal) => {
      console.log('count change...', newVal, oldVal);
    });

    return {
      count,
      add,
    };
  },
};
</script>
