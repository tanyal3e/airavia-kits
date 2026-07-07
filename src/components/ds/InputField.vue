<script setup lang="ts">
import { ref, computed } from "vue";
import { Eye, EyeOff } from "@lucide/vue";

const props = defineProps<{
  label?: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
}>();

const val = ref("");
const show = ref(false);
const isPassword = computed(() => props.label === "Password");
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <label v-if="label" class="text-sm font-semibold text-foreground">{{ label }}</label>
    <div
      :class="[
        'flex items-center gap-2 px-3 h-11 rounded border',
        error ? 'border-destructive bg-[#FDDDDF]/30' : 'border-border bg-card',
        'focus-within:ring-2 focus-within:ring-ring/30 focus-within:border-ring transition-all',
        disabled ? 'opacity-50 cursor-not-allowed' : '',
      ]"
    >
      <span v-if="$slots.icon" class="text-muted-foreground"><slot name="icon" /></span>
      <input
        v-model="val"
        class="flex-1 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
        :placeholder="placeholder"
        :disabled="disabled"
        :type="isPassword && !show ? 'password' : 'text'"
      />
      <button v-if="isPassword" type="button" class="text-muted-foreground hover:text-foreground" @click="show = !show">
        <EyeOff v-if="show" :size="14" />
        <Eye v-else :size="14" />
      </button>
    </div>
    <p v-if="error" class="text-xs text-destructive">{{ error }}</p>
  </div>
</template>
