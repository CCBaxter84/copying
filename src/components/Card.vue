<template>
  <section style="margin-bottom: 1rem;">
    <article>Original: {{ originalObject }}</article>
    <article>Copy: {{ copiedObject }}</article>
    <article>Original === Copy: {{ originalObject === copiedObject }}</article>
  </section>
</template>

<script setup>
defineProps(["title", "originalObject", "reactiveObject", "copiedObject"])
</script>