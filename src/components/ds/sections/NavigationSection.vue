<script setup lang="ts">
import { ChevronRight, ChevronDown } from "@lucide/vue";
import { TabsRoot, TabsList, TabsTrigger, TabsContent, AccordionRoot, AccordionItem, AccordionTrigger, AccordionContent } from "reka-ui";
import Section from "../Section.vue";
import SectionLabel from "../SectionLabel.vue";
import Pagination from "../Pagination.vue";

const underlineTabs = ["Overview", "Seats", "Meals", "Baggage", "Extras"];
const pillTabs = ["Departures", "Arrivals", "Connecting"];
const breadcrumbs = ["Home", "Flights", "AB320", "Seat Selection"];
const faq = [
  { q: "What is the baggage allowance on Airavia flights?", a: "Economy passengers may check one bag up to 23 kg. Business passengers receive two bags up to 32 kg each. Oversized baggage fees apply beyond these limits." },
  { q: "Can I change my seat after booking?", a: "Yes, seats can be changed up to 24 hours before departure via My Trips or the Airavia app. Seat change fees may apply depending on your fare." },
  { q: "How early should I arrive at the airport?", a: "We recommend 2 hours before domestic and 3 hours before international flights. Online check-in opens 30 hours before departure." },
  { q: "Is lounge access included in Business Class?", a: "Yes, Business Class passengers have complimentary access to Airavia lounges at participating airports. Lounge cards are issued at check-in." },
];
</script>

<template>
  <Section id="navigation" title="Navigation & Tabs" subtitle="Tabs, breadcrumbs, pagination, and accordions.">
    <div class="space-y-10">
      <div>
        <SectionLabel>Tabs — Underline</SectionLabel>
        <TabsRoot default-value="overview">
          <TabsList class="flex border-b border-border">
            <TabsTrigger
              v-for="t in underlineTabs"
              :key="t"
              :value="t.toLowerCase()"
              class="px-5 py-2.5 text-sm font-semibold text-muted-foreground border-b-2 border-transparent data-[state=active]:border-[#001F6B] data-[state=active]:text-[#001F6B] transition-colors hover:text-foreground"
            >
              {{ t }}
            </TabsTrigger>
          </TabsList>
          <div class="pt-5 text-sm text-muted-foreground">
            <TabsContent value="overview">Flight AB320 · Paris CDG → New York JFK · 14 July 2025 · 7h 20m non-stop.</TabsContent>
            <TabsContent value="seats">Choose from 240 available seats including exit row and premium economy options.</TabsContent>
            <TabsContent value="meals">Select from 8 meal options: vegetarian, halal, gluten-free, and more.</TabsContent>
            <TabsContent value="baggage">Your fare includes 1 carry-on (10 kg) and 1 checked bag (23 kg).</TabsContent>
            <TabsContent value="extras">Add lounge access, fast-track security, or an airport transfer.</TabsContent>
          </div>
        </TabsRoot>
      </div>
      <div>
        <SectionLabel>Tabs — Pill</SectionLabel>
        <TabsRoot default-value="departures">
          <TabsList class="inline-flex gap-1 bg-muted p-1 rounded">
            <TabsTrigger
              v-for="t in pillTabs"
              :key="t"
              :value="t.toLowerCase()"
              class="px-4 py-1.5 text-sm font-semibold text-muted-foreground rounded data-[state=active]:bg-card data-[state=active]:text-[#001F6B] data-[state=active]:shadow-sm transition-all"
            >
              {{ t }}
            </TabsTrigger>
          </TabsList>
        </TabsRoot>
      </div>
      <div>
        <SectionLabel>Breadcrumbs</SectionLabel>
        <div class="flex items-center gap-1.5 text-sm flex-wrap">
          <span v-for="(c, i) in breadcrumbs" :key="c" class="flex items-center gap-1.5">
            <span :class="i === breadcrumbs.length - 1 ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground cursor-pointer transition-colors'">
              {{ c }}
            </span>
            <ChevronRight v-if="i < breadcrumbs.length - 1" :size="12" class="text-muted-foreground" />
          </span>
        </div>
      </div>
      <div>
        <SectionLabel>Pagination</SectionLabel>
        <Pagination />
      </div>
      <div>
        <SectionLabel>Accordion — FAQ</SectionLabel>
        <AccordionRoot type="single" collapsible class="border border-border rounded divide-y divide-border">
          <AccordionItem v-for="item in faq" :key="item.q" :value="item.q">
            <AccordionTrigger class="flex w-full items-center justify-between px-5 py-4 text-sm font-semibold text-foreground text-left hover:bg-muted/50 transition-colors [&[data-state=open]>svg]:rotate-180">
              {{ item.q }}
              <ChevronDown :size="15" class="text-muted-foreground transition-transform duration-200 shrink-0 ml-3" />
            </AccordionTrigger>
            <AccordionContent class="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">
              {{ item.a }}
            </AccordionContent>
          </AccordionItem>
        </AccordionRoot>
      </div>
    </div>
  </Section>
</template>
