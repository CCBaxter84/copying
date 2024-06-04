<template>
  <card :original-object="reactiveObject"
        :copied-object="clonedReactiveObject"
        title="Structured Clone"
        style="color: red;"/>
</template>

<script setup>
import { computed } from 'vue'
import { useReactive } from '../composables/useReactive'
import Card from './Card.vue'

const { reactiveObject } = useReactive()

const clonedReactiveObject = computed(() => {
  try {
    return structuredClone(reactiveObject)
  } catch(e) {
    return e
  }
})
</script>