<template>
  <card :original-object="reactiveObject"
        :copied-object="clonedReactiveObject"
        title="Structured Clone"
        style="color: red;"/>
</template>

<script setup>
import { computed } from 'vue'
import { useState } from '../composables/useState'
import Card from './Card.vue'

const { reactiveObject } = useState()

const clonedReactiveObject = computed(() => {
  try {
    return structuredClone(reactiveObject)
  } catch(e) {
    return e
  }
})
</script>