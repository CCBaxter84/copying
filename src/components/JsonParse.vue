<template>
  <section style="margin-bottom: 3rem; color: blue;">
    <h2>JSON.parse & JSON.stringify</h2>
    <card :original-object="reactiveObject"
          :copied-object="copiedReactiveObject"/>
    <card :original-object="refObject"
          :copied-object="copiedRefObject"/>
    <circular-reference-card  :circular="circular"
                              :circular-copy="circularCopy"/>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useState } from '../composables/useState'
import Card from './Card.vue'
import CircularReferenceCard from './CircularReferenceCard.vue'

const { reactiveObject, refObject, circular } = useState()

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

const circularCopy = computed(() => {
  try {
    return JSON.parse(JSON.stringify(circular))
  } catch(e) {
    return { value: e }
  }
})
</script>