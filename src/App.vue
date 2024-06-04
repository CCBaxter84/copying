<script setup>
import { onMounted, toRaw } from 'vue'
import { useState } from './composables/useState'
import JsonParse from './components/JsonParse.vue'
import StructuredClone from './components/StructuredClone.vue'
import Lodash from './components/Lodash.vue'

const { reactiveObject, refObject } = useState()

onMounted(() => {
  window.addEventListener("message", e => {
    e.data?.item && console.log(e.data.item)
  })
  window.postMessage({ item: { message: "POJO test" }})
  window.postMessage({ item: toRaw(refObject.value) })
  window.postMessage({ item: toRaw(reactiveObject) })
})
</script>

<template>
  <h1 style="color: green;">Copying in Vue 3</h1>
  <json-parse />
  <structured-clone />
  <lodash />
</template>

