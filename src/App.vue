<script setup>
import { onMounted, toRaw } from 'vue'
import { useState } from './composables/useState'
import JsonParse from './components/JsonParse.vue'
import StructuredClone from './components/StructuredClone.vue'
import Lodash from './components/Lodash.vue'
import { cloneDeep } from 'lodash'

const { reactiveObject } = useState()

onMounted(() => {
  window.addEventListener("message", e => {
    e.data?.item && console.log(e.data.item)
  })
  window.postMessage({ item: { message: "POJO test" }})
  window.postMessage({ item: toRaw(reactiveObject) })
  window.postMessage({ item: JSON.parse(JSON.stringify(reactiveObject)) })
  window.postMessage({ item: cloneDeep(reactiveObject) })
})
</script>

<template>
  <h1 style="color: green;">Copying in Vue 3</h1>
  <json-parse />
  <structured-clone />
  <lodash />
</template>

