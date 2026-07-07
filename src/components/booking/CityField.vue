<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { matchAirports } from "./airports";

const props = defineProps<{
  label: string;
  modelValue: string;
  hasDivider?: boolean;
}>();

const emit = defineEmits<{ "update:modelValue": [value: string] }>();

const open = ref(false);
const wrapRef = ref<HTMLDivElement | null>(null);
const groups = computed(() => matchAirports(props.modelValue));

function onClickOutside(e: MouseEvent) {
  if (wrapRef.value && !wrapRef.value.contains(e.target as Node)) open.value = false;
}

onMounted(() => document.addEventListener("mousedown", onClickOutside));
onUnmounted(() => document.removeEventListener("mousedown", onClickOutside));

function onInput(e: Event) {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
  open.value = true;
}

function pick(city: string, code: string) {
  emit("update:modelValue", `${city} (${code})`);
  open.value = false;
}
</script>

<template>
  <div ref="wrapRef" class="relative flex-1 min-w-0">
    <div v-if="hasDivider" class="absolute right-0 top-2 bottom-2 w-px bg-[rgba(0,31,107,0.12)]" />
    <div class="flex flex-col gap-1 px-5 py-3.5">
      <label class="text-[10px] font-bold uppercase tracking-[1px] text-[#5b6580] leading-none whitespace-nowrap">{{ label }}</label>
      <input
        :value="modelValue"
        class="w-full bg-transparent text-[15px] font-semibold text-[#09102b] outline-none truncate"
        @input="onInput"
        @focus="open = true"
      />
    </div>
    <div v-if="open && groups.length > 0" class="absolute top-full left-0 mt-1 w-[280px] max-h-72 overflow-y-auto z-30 bg-white border border-[rgba(0,31,107,0.12)] rounded shadow-lg py-1">
      <div v-for="[continent, cities] in groups" :key="continent">
        <p class="px-4 pt-2 pb-1 text-[10px] font-bold uppercase tracking-[0.8px] text-[#5b6580]">{{ continent }}</p>
        <button
          v-for="c in cities"
          :key="c.code"
          type="button"
          class="w-full flex items-center justify-between gap-2 px-4 py-2 text-sm text-[#09102b] hover:bg-[#E6ECF8] transition-colors text-left"
          @mousedown.prevent
          @click="pick(c.city, c.code)"
        >
          <span class="font-medium">{{ c.city }}</span>
          <span class="text-xs text-[#5b6580] font-[JetBrains_Mono,monospace]">{{ c.code }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
