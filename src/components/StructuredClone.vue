<template>
  <card :original-object="reactiveObject"
        :copied-object="clonedReactiveObject"
        title="Structured Clone"
        style="color: red;"/>
</template>

<script setup>
import { reactive, computed } from 'vue'
import Card from './Card.vue'

const reactiveObject = reactive({
  id: 1,
  name: 'reactiveObject'
})

const clonedReactiveObject = computed(() => {
  try {
    return structuredClone(reactiveObject)
  } catch(e) {
    return e
  }
})
</script>