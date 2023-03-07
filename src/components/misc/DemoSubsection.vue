<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <section class='demo-subsection flex flex-col'>
    <div class='mb-2 text-slate-400'>{{ name }}</div>
    <slot />
  </section>
</template>
