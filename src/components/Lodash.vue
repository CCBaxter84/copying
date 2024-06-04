<template>
  <card :original-object="reactiveObject"
        :copied-object="clonedReactiveObject"
        title="Lodash cloneDeep"
        style="color: purple;"/>
</template>

<script setup>
import { computed } from 'vue'
import { useReactive } from '../composables/useReactive'
import { cloneDeep } from 'lodash'
import Card from './Card.vue'

const { reactiveObject } = useReactive()

const clonedReactiveObject = computed(() => {
  try {
    return cloneDeep(reactiveObject)
  } catch(e) {
    return e
  }
})
</script>