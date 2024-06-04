<template>
<card :original-object="reactiveObject"
      :copied-object="copiedReactiveObject"
      style="color: blue;"/>
</template>

<script setup>
import { reactive, computed } from 'vue'
import Card from './Card.vue'

const reactiveObject = reactive({
  id: 1,
  name: 'reactiveObject'
})

const copiedReactiveObject = computed(
  () => JSON.parse(JSON.stringify(reactiveObject)))
</script>