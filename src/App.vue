<script setup>
import DemoSubsection from './components/misc/DemoSubsection.vue'
import DemoSection from './components/misc/DemoSection.vue'
import CompositionButtonIncrement from './components/composition/ButtonIncrement.vue'
import CompositionButtonIncrementVuex from './components/composition/ButtonIncrementVuex.vue'
import OptionsButtonIncrement from './components/options/ButtonIncrement.vue'
import OptionsButtonIncrementVuex from './components/options/ButtonIncrementVuex.vue'
import CompositionDemoFooterVuex from './components/composition/DemoFooterVuex.vue'
</script>

<template>
  <section class='main-section p-5 flex flex-col font-mono'>
    <DemoSection name="Vue">
      <DemoSubsection name='Options API'>
        <OptionsButtonIncrement />
      </DemoSubsection>

      <DemoSubsection name='Composition API'>
        <CompositionButtonIncrement />
      </DemoSubsection>
    </DemoSection>

    <DemoSection name="Vuex">
      <DemoSubsection name='Options API'>
        <OptionsButtonIncrementVuex />
      </DemoSubsection>
      
      <DemoSubsection name='Composition API'>
        <CompositionButtonIncrementVuex />
      </DemoSubsection>
    </DemoSection>

    <DemoSection name="Age (from Vuex)">
      <CompositionDemoFooterVuex />
    </DemoSection>
  </section>
</template>

<style>
section.demo-subsection {
  @apply pr-5;
}
</style>
