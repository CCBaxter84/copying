<template>
  <section style="margin-bottom: 3rem; color: red;">
    <h2>Structured Clone</h2>
    <card :original-object="reactiveObject"
          :copied-object="clonedReactiveObject"/>
    <card :original-object="refObject"
          :copied-object="clonedRefObject"/>
    <card :original-object="reactiveObject"
          :copied-object="clonedRawReactiveObject"/>
    <card :original-object="refObject"
          :copied-object="clonedRawRefObject"/>
    <circular-reference-card  :circular="circular"
                              :circular-copy="circularCopy"/>
  </section>
</template>

<script setup>
import { computed, toRaw } from 'vue'
import { useState } from '../composables/useState'
import Card from './Card.vue'
import CircularReferenceCard from './CircularReferenceCard.vue'

const { reactiveObject, refObject, circular } = useState()

const clonedReactiveObject = computed(() => {
  try {
    return structuredClone(reactiveObject)
  } catch(e) {
    return e
  }
})
const clonedRefObject = computed(() => {
  try {
    return structuredClone(refObject.value)
  } catch(e) {
    return e
  }
})

const clonedRawReactiveObject = computed(() => {
  try {
    return structuredClone(toRaw(reactiveObject))
  } catch(e) {
    return e
  }
})

const clonedRawRefObject = computed(() => {
  try {
    return structuredClone(toRaw(refObject.value))
  } catch(e) {
    return e
  }
})

const circularCopy = computed(() => {
  try {
    return structuredClone(toRaw(circular))
  } catch(e) {
    return { value: e }
  }
})
</script>