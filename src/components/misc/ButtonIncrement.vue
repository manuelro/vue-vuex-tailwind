<script setup>
defineProps({
  age: {
    type: Number,
    default: 0,
  }
})
</script>

<template>
  <button
    class='p-2 bg-cyan-200 border border-r-blue-300 text-slate-700 text-xl font-mono active:bg-cyan-300'
  >Years: {{age}}</button>
</template>