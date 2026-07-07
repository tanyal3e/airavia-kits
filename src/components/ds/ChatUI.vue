<script setup lang="ts">
import { ref, watch, nextTick } from "vue";
import { Bot, Minimize2, Maximize2, Paperclip, Smile, Mic, Send } from "@lucide/vue";
import Avatar from "./Avatar.vue";
import Btn from "./Btn.vue";

type ChatMsg = { id: number; role: "user" | "bot"; text: string; time: string };

const INIT_MSGS: ChatMsg[] = [
  { id: 1, role: "bot", text: "Hello! I'm Sky, your Airavia assistant. I can help with bookings, flight status, upgrades, and more. How can I help you today?", time: "09:00" },
  { id: 2, role: "user", text: "I need to change my seat on flight AB320 to Paris on July 14th.", time: "09:01" },
  { id: 3, role: "bot", text: "Found your booking AB320 CDG→JFK on 14 July. You're in seat 24C (Economy). Would you like to upgrade to Business, or choose a different Economy seat?", time: "09:01" },
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
    <div class="flex items-center gap-3 px-4 py-3 border-b border-border bg-[#001F6B]">
      <div class="w-8 h-8 rounded-full bg-[#C9A84C] flex items-center justify-center shrink-0">
        <Bot :size="16" class="text-[#001F6B]" />
      </div>
      <div>
        <p class="text-sm font-semibold text-white">Sky — Airavia Assistant</p>
        <p class="text-xs text-white/50 flex items-center gap-1">
          <span class="w-1.5 h-1.5 rounded-full bg-[#2EC074] inline-block" />Online
        </p>
      </div>
      <div class="ml-auto flex gap-2 text-white/40">
        <button class="hover:text-white transition-colors" type="button"><Minimize2 :size="14" /></button>
        <button class="hover:text-white transition-colors" type="button"><Maximize2 :size="14" /></button>
      </div>
    </div>
    <!-- Messages -->
    <div class="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 bg-[#F4F6FB]">
      <div v-for="m in messages" :key="m.id" :class="['flex gap-2.5', m.role === 'user' ? 'flex-row-reverse' : '']">
        <div v-if="m.role === 'bot'" class="w-7 h-7 rounded-full bg-[#001F6B] flex items-center justify-center shrink-0">
          <Bot :size="14" class="text-white" />
        </div>
        <Avatar v-else name="Marie Dupont" size="sm" />
        <div :class="['max-w-[72%] flex flex-col gap-0.5', m.role === 'user' ? 'items-end' : 'items-start']">
          <div :class="['px-3.5 py-2.5 rounded text-sm leading-relaxed', m.role === 'user' ? 'bg-[#001F6B] text-white rounded-tr-none' : 'bg-card text-foreground border border-border rounded-tl-none shadow-sm']">
            {{ m.text }}
          </div>
          <p class="text-[10px] text-muted-foreground px-1">{{ m.time }}</p>
        </div>
      </div>
      <div v-if="typing" class="flex gap-2.5">
        <div class="w-7 h-7 rounded-full bg-[#001F6B] flex items-center justify-center shrink-0">
          <Bot :size="14" class="text-white" />
        </div>
        <div class="bg-card border border-border px-4 py-3 rounded rounded-tl-none shadow-sm flex gap-1.5 items-center">
          <span class="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" style="animation-delay: 0ms" />
          <span class="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" style="animation-delay: 150ms" />
          <span class="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" style="animation-delay: 300ms" />
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
        class="shrink-0 text-xs px-3 py-1.5 rounded-full border border-border bg-card text-foreground hover:bg-[#E6ECF8] hover:border-[#001F6B]/30 transition-colors"
        @click="input = q"
      >
        {{ q }}
      </button>
    </div>
    <!-- Input row -->
    <div class="px-3 pb-3 pt-1 border-t border-border flex items-center gap-2 bg-card">
      <button class="text-muted-foreground hover:text-foreground transition-colors" type="button"><Paperclip :size="16" /></button>
      <button class="text-muted-foreground hover:text-foreground transition-colors" type="button"><Smile :size="16" /></button>
      <input
        v-model="input"
        class="flex-1 bg-muted rounded px-3 py-2 text-sm outline-none text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring/30"
        placeholder="Type a message…"
        @keydown="onKeydown"
      />
      <button class="text-muted-foreground hover:text-foreground transition-colors" type="button"><Mic :size="16" /></button>
      <Btn size="sm" :disabled="!input.trim()" @click="send">
        <template #icon><Send :size="13" /></template>
        Send
      </Btn>
    </div>
  </div>
</template>
