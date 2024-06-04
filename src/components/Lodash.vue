<template>
  <card :original-object="reactiveObject"
        :copied-object="clonedReactiveObject"
        title="Lodash cloneDeep"
        style="color: purple;"/>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { cloneDeep } from 'lodash'
import Card from './Card.vue'

const reactiveObject = reactive({
  id: 1,
  name: 'reactiveObject'
})

const clonedReactiveObject = computed(() => {
  try {
    return cloneDeep(reactiveObject)
  } catch(e) {
    return e
  }
})
</script>