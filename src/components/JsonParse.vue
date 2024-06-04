<template>
  <card :original-object="reactiveObject"
        :copied-object="copiedReactiveObject"
        title="JSON.parse & JSON.stringify"
        style="color: blue;"/>
</template>

<script setup>
import { computed } from 'vue'
import { useReactive } from '../composables/useReactive'
import Card from './Card.vue'

const { reactiveObject } = useReactive()

const copiedReactiveObject = computed(() => {
  try {
    return JSON.parse(JSON.stringify(reactiveObject))
  } catch(e) {
    return e
  }
})
</script>