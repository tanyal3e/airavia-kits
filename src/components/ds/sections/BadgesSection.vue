<script setup lang="ts">
import Section from "../Section.vue";
import SectionLabel from "../SectionLabel.vue";
import Badge from "../Badge.vue";
</script>

<template>
  <Section id="badges" title="Badges & Tags" subtitle="Semantic status labels and aviation-specific cabin class indicators.">
    <div class="space-y-6">
      <div>
        <SectionLabel>Semantic</SectionLabel>
        <div class="flex flex-wrap gap-2">
          <Badge variant="info">Info</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="neutral">Neutral</Badge>
        </div>
      </div>
      <div>
        <SectionLabel>Cabin Class</SectionLabel>
        <div class="flex flex-wrap gap-2">
          <Badge variant="economy">Economy</Badge>
          <Badge variant="business">Business</Badge>
          <Badge variant="first">First Class</Badge>
        </div>
      </div>
      <div>
        <SectionLabel>Flight Status — Pill + Dot</SectionLabel>
        <div class="flex flex-wrap gap-2">
          <Badge variant="success" dot pill>On Time</Badge>
          <Badge variant="warning" dot pill>Delayed 45 min</Badge>
          <Badge variant="error" dot pill>Cancelled</Badge>
          <Badge variant="info" dot pill>Boarding</Badge>
          <Badge variant="neutral" dot pill>Scheduled</Badge>
        </div>
      </div>
    </div>
  </Section>
</template>
