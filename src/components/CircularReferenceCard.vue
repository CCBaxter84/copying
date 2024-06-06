<template>
  <section>
    <h3>Circular Reference</h3>
    <article>{{ circular?.value }}</article>
    <article>{{ circularCopy?.value }}</article>
    <article>Original === Copy: {{ circular === circularCopy }}</article>
  </section>
</template>

<script setup>
defineProps(["circular", "circularCopy"])
</script>