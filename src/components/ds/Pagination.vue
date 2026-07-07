<script setup lang="ts">
import { ref, computed } from "vue";
import { ChevronLeft, ChevronRight } from "@lucide/vue";

const page = ref(3);
const total = 12;

const pages = computed<(number | "…")[]>(() => {
  const nums = Array.from({ length: total }, (_, i) => i + 1).filter(
    (p) => p === 1 || p === total || Math.abs(p - page.value) <= 1
  );
  const acc: (number | "…")[] = [];
  nums.forEach((p, idx) => {
    if (idx > 0 && (p as number) - (nums[idx - 1] as number) > 1) acc.push("…");
    acc.push(p);
  });
  return acc;
});
</script>

<template>
  <div class="flex items-center gap-1.5">
    <button
      type="button"
      :disabled="page === 1"
      class="w-8 h-8 flex items-center justify-center rounded border border-border text-muted-foreground hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      @click="page = Math.max(1, page - 1)"
    >
      <ChevronLeft :size="14" />
    </button>
    <template v-for="(p, i) in pages" :key="p === '…' ? `el-${i}` : p">
      <span v-if="p === '…'" class="w-8 h-8 flex items-center justify-center text-muted-foreground text-sm">…</span>
      <button
        v-else
        type="button"
        :class="['w-8 h-8 flex items-center justify-center rounded text-sm font-medium transition-colors', page === p ? 'bg-[#001F6B] text-white' : 'border border-border text-foreground hover:bg-muted']"
        @click="page = p as number"
      >
        {{ p }}
      </button>
    </template>
    <button
      type="button"
      :disabled="page === total"
      class="w-8 h-8 flex items-center justify-center rounded border border-border text-muted-foreground hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      @click="page = Math.min(total, page + 1)"
    >
      <ChevronRight :size="14" />
    </button>
  </div>
</template>
