<template>
  <section style="color: blue;">
    <h2>JSON.parse & JSON.stringify</h2>
    <article>original: {{ reactiveObject }}</article>
    <article>copy: {{ copiedReactiveObject }}</article>
  </section>
</template>

<script setup>
import { reactive, computed } from 'vue'

const reactiveObject = reactive({
  id: 1,
  name: 'reactiveObject'
})

const copiedReactiveObject = computed(
  () => JSON.parse(JSON.stringify(reactiveObject)))
</script>