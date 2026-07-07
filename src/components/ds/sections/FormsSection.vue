<script setup lang="ts">
import { ref } from "vue";
import { Search, ChevronDown, Check } from "@lucide/vue";
import {
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectPortal,
  SelectContent,
  SelectViewport,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
} from "reka-ui";
import Section from "../Section.vue";
import SectionLabel from "../SectionLabel.vue";
import InputField from "../InputField.vue";
import CheckboxItem from "../CheckboxItem.vue";
import RadioGroup from "../RadioGroup.vue";
import Toggle from "../Toggle.vue";

const cabinClass = ref("business");
const classOptions = ["Economy", "Premium Economy", "Business", "First Class"];
</script>

<template>
  <Section id="forms" title="Form Elements" subtitle="Inputs, selects, checkboxes, radios, and toggles with all interactive states.">
    <div class="grid md:grid-cols-2 gap-8">
      <div class="space-y-5">
        <InputField label="Full Name" placeholder="Marie Dupont" />
        <InputField label="Email" placeholder="marie@airbridge.com">
          <template #icon><Search :size="14" /></template>
        </InputField>
        <InputField label="Password" placeholder="Enter your password" />
        <InputField label="Destination" placeholder="Paris, CDG" error="Please enter a valid airport code." />
        <InputField label="Disabled Field" placeholder="Not editable" disabled />
        <div class="flex flex-col gap-1.5">
          <label class="text-sm font-semibold text-foreground">Message</label>
          <textarea
            class="bg-card border border-border rounded px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground resize-none outline-none focus:ring-2 focus:ring-ring/30 focus:border-ring transition-all"
            rows="3"
            placeholder="Any special requirements for your flight…"
          />
        </div>
      </div>
      <div class="space-y-6">
        <div>
          <SectionLabel>Select</SectionLabel>
          <SelectRoot v-model="cabinClass">
            <SelectTrigger class="flex items-center justify-between w-full h-11 px-3 rounded border border-border bg-card text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 hover:border-[#001F6B]/40 transition-all">
              <SelectValue />
              <SelectIcon><ChevronDown :size="14" class="text-muted-foreground" /></SelectIcon>
            </SelectTrigger>
            <SelectPortal>
              <SelectContent class="z-50 bg-card border border-border rounded shadow-lg overflow-hidden" position="popper">
                <SelectViewport class="p-1">
                  <SelectItem
                    v-for="opt in classOptions"
                    :key="opt"
                    :value="opt.toLowerCase().replace(/ /g, '-')"
                    class="flex items-center gap-2 px-3 py-2 text-sm rounded text-foreground cursor-pointer hover:bg-[#E6ECF8] outline-none data-[highlighted]:bg-[#E6ECF8]"
                  >
                    <SelectItemText>{{ opt }}</SelectItemText>
                    <SelectItemIndicator class="ml-auto"><Check :size="12" class="text-[#001F6B]" /></SelectItemIndicator>
                  </SelectItem>
                </SelectViewport>
              </SelectContent>
            </SelectPortal>
          </SelectRoot>
        </div>
        <div>
          <SectionLabel>Checkboxes</SectionLabel>
          <div class="flex flex-col gap-2.5">
            <CheckboxItem label="Add checked baggage (23 kg)" :default-checked="true" />
            <CheckboxItem label="Priority boarding" />
            <CheckboxItem label="Airport lounge access" :default-checked="true" />
            <CheckboxItem label="Travel insurance" />
          </div>
        </div>
        <div>
          <SectionLabel>Radio Group</SectionLabel>
          <RadioGroup :options="['Economy', 'Business', 'First Class']" />
        </div>
        <div>
          <SectionLabel>Toggles</SectionLabel>
          <div class="flex flex-col gap-3">
            <Toggle label="Email notifications" />
            <Toggle label="SMS flight alerts" />
            <Toggle label="Marketing emails" />
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>
