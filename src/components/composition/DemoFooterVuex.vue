<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const age = computed(() => store.getters.age)
</script>

<template>
  <span>Age equals: {{ age }}</span>
</template>