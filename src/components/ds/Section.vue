<script setup lang="ts">
defineProps<{ id: string; title: string; subtitle?: string }>();
</script>

<template>
  <section :id="id" class="py-14 border-b border-border last:border-0">
    <div class="mb-8">
      <h2 class="text-2xl font-semibold text-foreground tracking-tight">{{ title }}</h2>
      <p v-if="subtitle" class="mt-1.5 text-sm text-muted-foreground max-w-xl">{{ subtitle }}</p>
    </div>
    <slot />
  </section>
</template>
