<script setup lang="ts">
import { ref, computed, watch, nextTick } from "vue";
import { Bot, X, Send, Paperclip, Smile, Mic } from "@lucide/vue";
import { useLocale } from "@/composables/useLocale";

type Msg = { id: number; role: "user" | "bot"; text: string; time: string };

const INIT: Msg[] = [
  { id: 1, role: "bot", text: "Hello! I'm Sky, your Airavia assistant. I can help with bookings, flight status, upgrades, and lounge access. How can I assist you today?", time: "now" },
];

const BOT_REPLIES = [
  "I've found your booking. Would you like to upgrade to Business Class on that route?",
  "Your boarding pass has been sent to your registered email.",
  "Is there anything else I can help you with today?",
  "I can also assist with lounge access, meal preferences, or baggage.",
];

const { t } = useLocale();
const open = ref(false);
const msgs = ref<Msg[]>(INIT);
const input = ref("");
const typing = ref(false);
const replyIdx = ref(0);
const bottomRef = ref<HTMLDivElement | null>(null);

watch([msgs, typing], () => {
  nextTick(() => bottomRef.value?.scrollIntoView({ behavior: "smooth" }));
}, { deep: true });

function send() {
  if (!input.value.trim()) return;
  const now = new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
  msgs.value.push({ id: Date.now(), role: "user", text: input.value, time: now });
  input.value = "";
  typing.value = true;
  setTimeout(() => {
    typing.value = false;
    msgs.value.push({ id: Date.now() + 1, role: "bot", text: BOT_REPLIES[replyIdx.value % BOT_REPLIES.length], time: now });
    replyIdx.value += 1;
  }, 1300);
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    send();
  }
}

const quickReplies = computed(() => [t("chat_quick1"), t("chat_quick2"), t("chat_quick3")]);
</script>

<template>
  <!-- Floating button -->
  <button
    v-if="!open"
    type="button"
    class="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#001F6B] text-white pl-4 pr-5 py-3 rounded-full shadow-2xl text-sm font-semibold hover:bg-[#002B8F] transition-colors"
    @click="open = true"
  >
    <div class="w-6 h-6 rounded-full bg-[#C9A84C] flex items-center justify-center">
      <Bot :size="13" class="text-[#001F6B]" />
    </div>
    Ask Sky
    <span class="w-2 h-2 rounded-full bg-[#2EC074]" />
  </button>

  <!-- Chat window -->
  <div
    v-if="open"
    class="fixed bottom-6 right-6 z-50 flex flex-col bg-card border border-border rounded-lg shadow-2xl overflow-hidden w-[360px]"
    style="height: 480px"
  >
    <!-- Header -->
    <div class="flex items-center gap-3 px-4 py-3 bg-[#001F6B] shrink-0">
      <div class="w-8 h-8 rounded-full bg-[#C9A84C] flex items-center justify-center shrink-0">
        <Bot :size="15" class="text-[#001F6B]" />
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-semibold text-white leading-none">Sky — Airavia Assistant</p>
        <p class="text-[10px] text-white/50 flex items-center gap-1 mt-0.5">
          <span class="w-1.5 h-1.5 rounded-full bg-[#2EC074]" />
          Online
        </p>
      </div>
      <button type="button" class="text-white/50 hover:text-white transition-colors" @click="open = false">
        <X :size="16" />
      </button>
    </div>

    <!-- Messages -->
    <div class="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 bg-[#F4F6FB]">
      <div v-for="m in msgs" :key="m.id" :class="['flex gap-2', m.role === 'user' ? 'flex-row-reverse' : '']">
        <div v-if="m.role === 'bot'" class="w-6 h-6 rounded-full bg-[#001F6B] flex items-center justify-center shrink-0 mt-0.5">
          <Bot :size="12" class="text-white" />
        </div>
        <div v-else class="w-6 h-6 rounded-full bg-[#001F6B] text-white text-[9px] font-semibold flex items-center justify-center shrink-0 mt-0.5">MD</div>
        <div :class="['max-w-[78%] px-3 py-2 rounded text-xs leading-relaxed', m.role === 'user' ? 'bg-[#001F6B] text-white rounded-tr-none' : 'bg-card text-foreground border border-border rounded-tl-none shadow-sm']">
          {{ m.text }}
        </div>
      </div>
      <div v-if="typing" class="flex gap-2">
        <div class="w-6 h-6 rounded-full bg-[#001F6B] flex items-center justify-center shrink-0">
          <Bot :size="12" class="text-white" />
        </div>
        <div class="bg-card border border-border px-3 py-2.5 rounded rounded-tl-none shadow-sm flex gap-1 items-center">
          <span class="w-1 h-1 rounded-full bg-muted-foreground animate-bounce" style="animation-delay: 0ms" />
          <span class="w-1 h-1 rounded-full bg-muted-foreground animate-bounce" style="animation-delay: 150ms" />
          <span class="w-1 h-1 rounded-full bg-muted-foreground animate-bounce" style="animation-delay: 300ms" />
        </div>
      </div>
      <div ref="bottomRef" />
    </div>

    <!-- Quick replies -->
    <div class="px-3 py-2 border-t border-border flex gap-1.5 overflow-x-auto shrink-0 bg-background">
      <button
        v-for="q in quickReplies"
        :key="q"
        type="button"
        class="shrink-0 text-[10px] px-2.5 py-1 rounded-full border border-border bg-card text-foreground hover:bg-[#E6ECF8] hover:border-[#001F6B]/30 transition-colors font-medium whitespace-nowrap"
        @click="input = q"
      >
        {{ q }}
      </button>
    </div>

    <!-- Input -->
    <div class="px-3 pb-3 pt-1.5 border-t border-border flex items-center gap-2 bg-card shrink-0">
      <button type="button" class="text-muted-foreground hover:text-foreground transition-colors"><Paperclip :size="14" /></button>
      <button type="button" class="text-muted-foreground hover:text-foreground transition-colors"><Smile :size="14" /></button>
      <input
        v-model="input"
        class="flex-1 bg-muted rounded px-3 py-1.5 text-xs outline-none text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring/30"
        :placeholder="t('chat_placeholder')"
        @keydown="onKeydown"
      />
      <button type="button" class="text-muted-foreground hover:text-foreground transition-colors"><Mic :size="14" /></button>
      <button
        type="button"
        :disabled="!input.trim()"
        class="w-7 h-7 flex items-center justify-center bg-[#001F6B] text-white rounded hover:bg-[#002B8F] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        @click="send"
      >
        <Send :size="12" />
      </button>
    </div>
  </div>
</template>
