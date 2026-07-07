<script setup lang="ts">
import { ref, computed } from "vue";
import { Info, CheckCircle2, AlertTriangle, AlertCircle, X } from "@lucide/vue";

type AlertType = "info" | "success" | "warning" | "error";

const props = defineProps<{ type: AlertType }>();

const alertCfg: Record<AlertType, { icon: any; bg: string; border: string; text: string; title: string; body: string }> = {
  info: { icon: Info, bg: "bg-[#D2DCFA]/60", border: "border-[#0057D9]/30", text: "text-[#001F6B]", title: "Flight Update", body: "Your flight AB 320 to Paris CDG departs in 2 hours. Please proceed to Gate 14." },
  success: { icon: CheckCircle2, bg: "bg-[#D4F0E3]/60", border: "border-[#0E7A44]/30", text: "text-[#0E7A44]", title: "Boarding Confirmed", body: "Your boarding pass for seat 12A has been issued. Have a great flight!" },
  warning: { icon: AlertTriangle, bg: "bg-[#FEF0D9]/60", border: "border-[#E87D0D]/30", text: "text-[#994F08]", title: "Delay Notice", body: "Flight AB 320 is delayed 45 min due to air traffic. New departure: 16:30." },
  error: { icon: AlertCircle, bg: "bg-[#FDDDDF]/60", border: "border-[#D0182E]/30", text: "text-[#A81224]", title: "Booking Error", body: "Payment could not be processed. Please verify your card details and try again." },
};

const visible = ref(true);
const c = computed(() => alertCfg[props.type]);
</script>

<template>
  <div v-if="visible" :class="['flex gap-3 p-4 rounded border', c.bg, c.border, c.text]">
    <span class="mt-0.5 shrink-0"><component :is="c.icon" :size="16" /></span>
    <div class="flex-1 min-w-0">
      <p class="text-sm font-semibold">{{ c.title }}</p>
      <p class="text-sm opacity-80 mt-0.5">{{ c.body }}</p>
    </div>
    <button type="button" class="opacity-60 hover:opacity-100 shrink-0" @click="visible = false"><X :size="14" /></button>
  </div>
</template>
