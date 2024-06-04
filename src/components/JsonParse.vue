<template>
  <section style="margin-bottom: 3rem; color: blue;">
    <h2 >JSON.parse & JSON.stringify</h2>
    <card :original-object="reactiveObject"
          :copied-object="copiedReactiveObject"
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

const copiedReactiveObject = computed(() => {
  try {
    return JSON.parse(JSON.stringify(reactiveObject))
  } catch(e) {
    return e
  }
})
const copiedRefObject = computed(() => {
  try {
    return JSON.parse(JSON.stringify(refObject.value))
  } catch(e) {
    return e
  }
})
</script>