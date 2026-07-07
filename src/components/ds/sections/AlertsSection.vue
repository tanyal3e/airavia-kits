<script setup lang="ts">
import { Info, CheckCircle2, AlertTriangle, AlertCircle } from "@lucide/vue";
import { toast } from "@/composables/useToast";
import Section from "../Section.vue";
import SectionLabel from "../SectionLabel.vue";
import AlertBox from "../AlertBox.vue";
import Btn from "../Btn.vue";
</script>

<template>
  <Section id="alerts" title="Alerts & Notifications" subtitle="Inline alerts and toast notifications for flight status communication.">
    <div class="space-y-3 mb-8">
      <AlertBox type="info" />
      <AlertBox type="success" />
      <AlertBox type="warning" />
      <AlertBox type="error" />
    </div>
    <SectionLabel>Toast Notifications</SectionLabel>
    <div class="flex flex-wrap gap-3">
      <Btn size="sm" variant="secondary" @click="toast.info('Flight AB320 is now boarding at Gate 14.')">
        <template #icon><Info :size="13" /></template>Info
      </Btn>
      <Btn size="sm" variant="secondary" @click="toast.success('Seat upgraded to Business 4A.')">
        <template #icon><CheckCircle2 :size="13" /></template>Success
      </Btn>
      <Btn size="sm" variant="secondary" @click="toast.warning('Check-in closes in 30 minutes.')">
        <template #icon><AlertTriangle :size="13" /></template>Warning
      </Btn>
      <Btn size="sm" variant="secondary" @click="toast.error('Failed to process upgrade. Try again.')">
        <template #icon><AlertCircle :size="13" /></template>Error
      </Btn>
    </div>
  </Section>
</template>
