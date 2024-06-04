<template>
  <card :original-object="reactiveObject"
        :copied-object="copiedReactiveObject"
        title="JSON.parse & JSON.stringify"
        style="color: blue;"/>
</template>

<script setup>
import { reactive, computed } from 'vue'
import Card from './Card.vue'

const reactiveObject = reactive({
  id: 1,
  name: 'reactiveObject'
})

const copiedReactiveObject = computed(() => {
  try {
    return JSON.parse(JSON.stringify(reactiveObject))
  } catch(e) {
    return e
  }
})
</script>