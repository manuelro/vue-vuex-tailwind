<script>
import MiscButtonIncrement from '../misc/ButtonIncrement.vue'

export default ({
  components: { MiscButtonIncrement },
  data(){
    return { age: 1 }
  },
  methods: {
    increment(){
      this.age++
    }
  }
})
</script>

<template>
  <MiscButtonIncrement
    :age='age'
    @click='increment'
  />
</template>