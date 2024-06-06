<template>
  <!-- <section>
    <h3>Circular Reference</h3>
    <article>circular DTO value: {{ circular?.value }}</article>
    <article>circularCopy DTO value: {{ circularCopy?.value }}</article>
    <article>circular === circularCopy: {{ circular === circularCopy }}</article>
  </section> -->
</template>

<script setup>
defineProps(["circular", "circularCopy"])
</script>