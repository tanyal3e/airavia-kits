<script setup lang="ts">
import { Bot, Bell } from "@lucide/vue";
import Section from "../Section.vue";
import SectionLabel from "../SectionLabel.vue";
import ChatUI from "../ChatUI.vue";
import Badge from "../Badge.vue";
import Btn from "../Btn.vue";

const quickReplies = ["Check my flight status", "Upgrade my seat", "Add baggage", "Rebook flight", "Talk to an agent"];
</script>

<template>
  <Section id="chat" title="Conversational UI" subtitle="Sky — Airavia's AI assistant. Chat interface for booking support and in-app help.">
    <div class="grid lg:grid-cols-2 gap-8">
      <ChatUI />
      <div class="space-y-6">
        <div>
          <SectionLabel>Inline Assistant Card</SectionLabel>
          <div class="bg-card border border-border rounded p-4 flex gap-3 items-start">
            <div class="w-7 h-7 rounded-full bg-[#001F6B] flex items-center justify-center shrink-0">
              <Bot :size="14" class="text-white" />
            </div>
            <div>
              <p class="text-xs font-semibold text-[#001F6B] mb-1">Sky · Airavia Assistant</p>
              <p class="text-sm text-foreground">Your flight to JFK departs in 2 hours. Shall I send your boarding pass to your phone?</p>
              <div class="flex gap-2 mt-3">
                <Btn size="sm">Yes, send it</Btn>
                <Btn size="sm" variant="ghost">Not now</Btn>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SectionLabel>Floating Chat Button</SectionLabel>
          <button type="button" class="flex items-center gap-2 bg-[#001F6B] text-white px-4 py-2.5 rounded-full shadow-lg text-sm font-semibold hover:bg-[#002B8F] transition-colors">
            <Bot :size="14" />
            Chat with Sky
            <span class="w-2 h-2 rounded-full bg-[#2EC074]" />
          </button>
        </div>
        <div>
          <SectionLabel>Notification Chip</SectionLabel>
          <div class="inline-flex items-center gap-2 bg-[#E6ECF8] border border-border rounded px-3 py-2 text-sm">
            <Bell :size="13" class="text-[#001F6B]" />
            <span class="text-foreground font-medium">New message from Sky</span>
            <Badge variant="info" pill>1</Badge>
          </div>
        </div>
        <div>
          <SectionLabel>Quick Reply Chips</SectionLabel>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="q in quickReplies"
              :key="q"
              type="button"
              class="text-xs px-3 py-1.5 rounded-full border border-border bg-card text-foreground hover:bg-[#E6ECF8] hover:border-[#001F6B]/30 transition-colors font-medium"
            >
              {{ q }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>
