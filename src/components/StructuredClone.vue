<template>
  <section style="margin-bottom: 3rem; color: red;">
    <h2>Structured Clone</h2>
    <card :original-object="reactiveObject"
          :copied-object="clonedReactiveObject"
          title="JSON.parse & JSON.stringify"/>
    <card :original-object="refObject"
          :copied-object="copiedRefObject"
          title="JSON.parse & JSON.stringify"/>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useState } from '../composables/useState'
import Card from './Card.vue'

const { reactiveObject, refObject } = useState()

const clonedReactiveObject = computed(() => {
  try {
    return structuredClone(reactiveObject)
  } catch(e) {
    return e
  }
})
const copiedRefObject = computed(() => {
  try {
    return structuredClone(refObject.value)
  } catch(e) {
    return e
  }
})
</script>