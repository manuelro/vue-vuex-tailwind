<script>
import { mapGetters, mapMutations } from 'vuex'
import MiscButtonIncrement from '../misc/ButtonIncrement.vue'

export default ({
  components: { MiscButtonIncrement },
  computed: {
    ...mapGetters(['age'])
  },
  methods: {
    ...mapMutations(['increment'])
  }
})
</script>

<template>
  <MiscButtonIncrement
    :age='age'
    @click='increment'
  />
</template>