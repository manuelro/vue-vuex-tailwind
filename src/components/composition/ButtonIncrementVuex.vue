<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import MiscButtonIncrement from '../misc/ButtonIncrement.vue'

const store = useStore()

const age = computed(() => store.getters.age)
const increment = () => store.commit('increment')
</script>

<template>
  <MiscButtonIncrement
    :age='age'
    @click='increment'
  />
</template>