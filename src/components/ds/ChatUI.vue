<script setup lang="ts">
import { ref, watch, nextTick } from "vue";
import { ChevronDown, ChevronUp, Paperclip, Mic, Send } from "@lucide/vue";
import Avatar from "./Avatar.vue";
import AiraviaMark from "../AiraviaMark.vue";

type ChatMsg =
  | { id: number; type?: "message"; role: "user" | "bot"; text: string; time: string }
  | { id: number; type: "date"; label: string };

function isDate(m: ChatMsg): m is Extract<ChatMsg, { type: "date" }> {
  return (m as { type?: string }).type === "date";
}

const INIT_MSGS: ChatMsg[] = [
  { id: 1, role: "bot", text: "Hello! I'm Sky, your Airavia assistant. I can help with bookings, flight status, upgrades, and more. How can I help you today?", time: "Jul 3 · 09:00" },
  { id: 2, role: "user", text: "I need to change my seat on flight AB320 to Paris on July 14th.", time: "Jul 3 · 09:01" },
  { id: 0, type: "date", label: "July 5, 2026" },
  { id: 3, role: "bot", text: "Found your booking AB320 CDG→JFK on 14 July. You're in seat 24C (Economy). Would you like to upgrade to Business, or choose a different Economy seat?", time: "Jul 5 · 09:01" },
];
const BOT_REPLIES = [
  "Done! You're now in seat 12A — a window seat with extra legroom.",
  "Your boarding pass has been sent to your registered email.",
  "Is there anything else I can help you with today?",
  "I can also assist with baggage allowance, meal preferences, or lounge access.",
];

const messages = ref<ChatMsg[]>(INIT_MSGS);
const input = ref("");
const typing = ref(false);
const expanded = ref(true);
const replyIdx = ref(0);
const bottomRef = ref<HTMLDivElement | null>(null);

watch([messages, typing], () => {
  nextTick(() => bottomRef.value?.scrollIntoView({ behavior: "smooth" }));
}, { deep: true });

function send() {
  if (!input.value.trim()) return;
  const now = new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
  messages.value.push({ id: Date.now(), role: "user", text: input.value, time: now });
  input.value = "";
  typing.value = true;
  setTimeout(() => {
    typing.value = false;
    messages.value.push({ id: Date.now() + 1, role: "bot", text: BOT_REPLIES[replyIdx.value % BOT_REPLIES.length], time: now });
    replyIdx.value += 1;
  }, 1300);
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    send();
  }
}

const quickReplies = ["Upgrade to Business", "Baggage allowance", "Check-in status"];
</script>

<template>
  <div class="flex flex-col bg-card border border-border rounded overflow-hidden" style="height: 460px">
    <!-- Header -->
    <div class="flex items-center gap-3 px-4 py-3 border-b border-border bg-[#0d1b4b]">
      <div class="w-8 h-8 rounded-full bg-[#C9A84C] flex items-center justify-center shrink-0">
        <AiraviaMark :size="16" color="#001F6B" />
      </div>
      <div>
        <p class="text-sm font-semibold text-white">Sky - Airavia Assistant</p>
        <p class="text-xs text-white/50 flex items-center gap-1">
          <span class="w-1.5 h-1.5 rounded-full bg-[#2EC074] inline-block" />Online
        </p>
      </div>
      <button
        type="button"
        class="ml-auto flex items-center justify-center bg-white/8 border border-white/20 rounded-lg size-8 text-white/70 hover:text-white hover:bg-white/15 transition-colors"
        :aria-label="expanded ? 'Collapse chat' : 'Expand chat'"
        @click="expanded = !expanded"
      >
        <ChevronDown v-if="expanded" :size="16" />
        <ChevronUp v-else :size="16" />
      </button>
    </div>

    <template v-if="expanded">
      <!-- Messages -->
      <div class="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 bg-[#F4F6FB]">
        <template v-for="m in messages" :key="m.id">
          <div v-if="isDate(m)" class="flex justify-center py-1">
            <span class="bg-[#e6ecf8] text-[#5b6580] text-[11px] px-3 py-1 rounded-full">{{ m.label }}</span>
          </div>
          <div v-else :class="['flex gap-2.5', m.role === 'user' ? 'flex-row-reverse' : '']">
            <div v-if="m.role === 'bot'" class="w-7 h-7 rounded-full bg-[#C9A84C] flex items-center justify-center shrink-0">
              <AiraviaMark :size="14" color="#001F6B" />
            </div>
            <Avatar v-else name="Marie Dupont" size="sm" />
            <div :class="['w-[360px] flex flex-col gap-0.5', m.role === 'user' ? 'items-end' : 'items-start']">
              <div :class="['px-3.5 py-2.5 rounded-[16px] text-sm leading-relaxed', m.role === 'user' ? 'bg-[#0d1b4b] text-white' : 'bg-card text-foreground border border-border shadow-sm']">
                {{ m.text }}
              </div>
              <p class="text-[10px] text-muted-foreground px-1">{{ m.time }}</p>
            </div>
          </div>
        </template>
        <div v-if="typing" class="flex gap-2.5">
          <div class="w-7 h-7 rounded-full bg-[#C9A84C] flex items-center justify-center shrink-0">
            <AiraviaMark :size="14" color="#001F6B" />
          </div>
          <div class="bg-[#f2f3f5] border border-[#d1d5db] px-4 py-3 rounded-[16px] flex items-center gap-3">
            <svg width="42" height="23" viewBox="0 0 42 23" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible">
              <circle class="typing-dot" cx="4" cy="12" r="4" fill="#3D64E0" style="animation-delay: 0ms" />
              <circle class="typing-dot" cx="18" cy="4" r="4" fill="#3D64E0" opacity="0.6" style="animation-delay: 200ms" />
              <circle class="typing-dot" cx="33" cy="11" r="6" fill="#3D64E0" opacity="0.3" style="animation-delay: 400ms" />
            </svg>
            <span class="text-[11px] text-[#5b6580] whitespace-nowrap">Sky is typing…</span>
          </div>
        </div>
        <div ref="bottomRef" />
      </div>
      <!-- Quick replies -->
      <div class="px-4 py-2 border-t border-border flex gap-2 overflow-x-auto">
        <button
          v-for="q in quickReplies"
          :key="q"
          type="button"
          class="shrink-0 text-xs px-3 py-1.5 rounded-full bg-white border border-[#0d1b4b] text-[#0d1b4b] font-semibold hover:bg-[#0d1b4b]/5 transition-colors"
          @click="input = q"
        >
          {{ q }}
        </button>
      </div>
      <!-- Composer -->
      <div class="px-3 pb-3 pt-1 border-t border-border flex items-center gap-2 bg-card">
        <div class="flex-1 flex items-center gap-2 rounded-[20px] border border-border bg-muted px-3 py-2">
          <Paperclip :size="16" class="text-muted-foreground shrink-0" />
          <input
            v-model="input"
            class="flex-1 min-w-0 bg-transparent text-sm outline-none text-foreground placeholder:text-muted-foreground"
            placeholder="Type a message…"
            @keydown="onKeydown"
          />
          <Mic :size="16" class="text-muted-foreground shrink-0" />
        </div>
        <button
          type="button"
          class="shrink-0 flex items-center gap-1.5 bg-[#0d1b4b] text-white rounded-[20px] px-4 py-2.5 text-sm font-semibold hover:bg-[#0d1b4b]/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          :disabled="!input.trim()"
          @click="send"
        >
          <Send :size="14" />
          Send
        </button>
      </div>
    </template>
  </div>
</template>

<style scoped>
.typing-dot {
  animation: typing-dot-bounce 1.2s ease-in-out infinite;
  transform-origin: center;
  transform-box: fill-box;
}
@keyframes typing-dot-bounce {
  0%, 60%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-6px);
  }
}
</style>
