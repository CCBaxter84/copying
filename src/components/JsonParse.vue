<template>
  <section style="color: blue;">
    <h2>JSON.parse & JSON.stringify</h2>
    <article>Original: {{ reactiveObject }}</article>
    <article>Copy: {{ copiedReactiveObject }}</article>
    <article>Original === Copy: {{ reactiveObject === copiedReactiveObject }}</article>
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