<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <div class='flex flex-col border border-t-stone-400 p-5'>
    <div class='text-3xl'>{{ name }}</div>

    <div class='flex pt-5'>
      <slot />
    </div>
  </div>
</template>
