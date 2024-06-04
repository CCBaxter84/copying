<template>
  <section>
    <h2>JSON.parse & JSON.stringify</h2>
    <article>Original: {{ originalObject }}</article>
    <article>Copy: {{ copiedObject }}</article>
    <article>Original === Copy: {{ originalObject === copiedObject }}</article>
  </section>
</template>

<script setup>
defineProps(["originalObject", "reactiveObject", "copiedObject"])
</script>