<template>
  <card :original-object="reactiveObject"
        :copied-object="clonedReactiveObject"
        title="Lodash cloneDeep"
        style="color: purple;"/>
</template>

<script setup>
import { computed } from 'vue'
import { useState } from '../composables/useState'
import { cloneDeep } from 'lodash'
import Card from './Card.vue'

const { reactiveObject } = useState()

const clonedReactiveObject = computed(() => {
  try {
    return cloneDeep(reactiveObject)
  } catch(e) {
    return e
  }
})
</script>../composables/useState