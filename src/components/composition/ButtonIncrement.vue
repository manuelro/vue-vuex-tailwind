<script setup>
import MiscButtonIncrement from '../misc/ButtonIncrement.vue'
import { ref } from 'vue'

const age = ref(0)

const increment = () => age.value++
</script>

<template>
  <MiscButtonIncrement
    :age='age'
    @click='increment'
  />
</template>