<script setup lang="ts">
import { ref, computed } from "vue";
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
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuItem,
} from "reka-ui";
import { Search, ArrowLeftRight, ChevronDown, Check } from "@lucide/vue";
import { toast } from "@/composables/useToast";
import { useLocale } from "@/composables/useLocale";
import CityField from "./CityField.vue";
import FieldCell from "./FieldCell.vue";
import DateRangeField, { type DateRange } from "./DateRangeField.vue";
import PassengersField from "./PassengersField.vue";
import ClassSelect from "./ClassSelect.vue";

type Tab = "book" | "manage" | "status";

const { t } = useLocale();

const tab = ref<Tab>("book");
const tripType = ref("round-trip");
const cabinClass = ref("economy");
const promoOpen = ref(false);
const promoCode = ref("");
const origin = ref(t("booking_origin_val"));
const destination = ref(t("booking_dest_val"));
const dateRange = ref<DateRange>({ from: new Date(2026, 6, 15), to: new Date(2026, 6, 22) });
const adults = ref(1);
const children = ref(0);
const bookingRef = ref("");
const lastName = ref("");
const flightNo = ref("");
const statusDate = ref("");

const tripOptions = computed(() => [
  { value: "round-trip", label: t("booking_trip_round") },
  { value: "one-way", label: t("booking_trip_oneway") },
]);
const classOptions = computed(() => [
  { value: "economy", label: t("booking_class_economy") },
  { value: "premium", label: t("booking_class_premium") },
  { value: "business", label: t("booking_class_business") },
  { value: "first", label: t("booking_class_first") },
]);

function swap() {
  const o = origin.value;
  origin.value = destination.value;
  destination.value = o;
}

function onPassengersChange(a: number, c: number) {
  adults.value = a;
  children.value = c;
}

function applyPromo() {
  promoOpen.value = false;
  if (promoCode.value) toast.success(`Promo code "${promoCode.value}" applied.`);
}

const isMoreTab = computed(() => tab.value === "manage" || tab.value === "status");

// Deselected tabs stay fully transparent so the hero photo shows through;
// only the active tab gets an opaque fill.
function tabClasses(active: boolean, extra = "") {
  return `px-5 sm:px-6 py-3 text-[11px] font-bold uppercase tracking-[0.8px] border-b-[3px] transition-colors ${extra} ${
    active
      ? "bg-[#EDF0F7] border-b-[#C9A84C] text-[#001f6b]"
      : "bg-transparent border-b-transparent text-white/80 hover:bg-white/10 hover:text-white"
  }`;
}
</script>

<template>
  <div class="w-full max-w-[1280px] rounded shadow-[0_12px_28px_rgba(0,8,23,0.25)] overflow-visible">
    <!-- Tabs — fully transparent so the hero photo shows through; only the active tab is opaque -->
    <div class="flex rounded-t overflow-hidden">
      <button type="button" :class="tabClasses(tab === 'book', 'border-r border-r-white/15')" @click="tab = 'book'">
        {{ t("booking_tab_book") }}
      </button>
      <button type="button" :class="`hidden sm:block ${tabClasses(tab === 'manage', 'border-r border-r-white/15')}`" @click="tab = 'manage'">
        {{ t("booking_tab_manage") }}
      </button>
      <button type="button" :class="`hidden sm:block ${tabClasses(tab === 'status')}`" @click="tab = 'status'">
        {{ t("booking_tab_status") }}
      </button>
      <!-- Mobile-only: collapse Manage/Status into a "More" dropdown -->
      <DropdownMenuRoot>
        <DropdownMenuTrigger as-child>
          <button type="button" :class="`sm:hidden flex-1 flex items-center justify-center gap-1 ${tabClasses(isMoreTab)}`">
            {{ tab === "manage" ? t("booking_tab_manage") : tab === "status" ? t("booking_tab_status") : "More" }}
            <ChevronDown :size="12" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuPortal>
          <DropdownMenuContent align="end" class="z-50 bg-white border border-[rgba(0,31,107,0.12)] rounded shadow-lg overflow-hidden min-w-[200px]">
            <DropdownMenuItem
              class="px-4 py-3 text-[11px] font-bold uppercase tracking-[0.8px] text-[#09102b] cursor-pointer hover:bg-[#E6ECF8] outline-none"
              @click="tab = 'manage'"
            >
              {{ t("booking_tab_manage") }}
            </DropdownMenuItem>
            <DropdownMenuItem
              class="px-4 py-3 text-[11px] font-bold uppercase tracking-[0.8px] text-[#09102b] cursor-pointer hover:bg-[#E6ECF8] outline-none"
              @click="tab = 'status'"
            >
              {{ t("booking_tab_status") }}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenuRoot>
    </div>

    <!-- Opaque panel below the tab strip — holds all tab content -->
    <div class="bg-[#EDF0F7] rounded-b border border-[rgba(0,31,107,0.12)]">
      <template v-if="tab === 'book'">
        <!-- Trip type + promo (promo hidden on mobile to match compact layout) -->
        <div class="flex items-center justify-between px-5 py-2.5 border-b border-[rgba(0,31,107,0.12)] gap-4">
          <SelectRoot v-model="tripType">
            <SelectTrigger class="flex items-center gap-1.5 text-[13px] font-semibold text-[#09102b] outline-none">
              <SelectValue />
              <SelectIcon><ChevronDown :size="13" class="text-[#5b6580]" /></SelectIcon>
            </SelectTrigger>
            <SelectPortal>
              <SelectContent class="z-50 bg-white border border-[rgba(0,31,107,0.12)] rounded shadow-lg overflow-hidden" position="popper">
                <SelectViewport class="p-1">
                  <SelectItem
                    v-for="opt in tripOptions"
                    :key="opt.value"
                    :value="opt.value"
                    class="flex items-center gap-2 px-3 py-2 text-sm rounded text-[#09102b] cursor-pointer hover:bg-[#E6ECF8] outline-none data-[highlighted]:bg-[#E6ECF8]"
                  >
                    <SelectItemText>{{ opt.label }}</SelectItemText>
                    <SelectItemIndicator class="ml-auto"><Check :size="12" class="text-[#001F6B]" /></SelectItemIndicator>
                  </SelectItem>
                </SelectViewport>
              </SelectContent>
            </SelectPortal>
          </SelectRoot>

          <button v-if="!promoOpen" type="button" class="hidden sm:block text-[11px] font-bold uppercase tracking-[0.8px] text-[#C9A84C] hover:text-[#B8943D] transition-colors" @click="promoOpen = true">
            {{ t("booking_promo") }}
          </button>
          <div v-else class="hidden sm:flex items-center gap-2">
            <input
              v-model="promoCode"
              autofocus
              :placeholder="t('booking_promo_placeholder')"
              class="h-8 px-2.5 text-xs rounded border border-[rgba(0,31,107,0.2)] outline-none focus:border-[#001f6b] text-[#09102b] placeholder:text-[#5b6580] w-32"
            />
            <button type="button" class="h-8 px-3 text-[11px] font-bold uppercase tracking-[0.5px] text-white bg-[#001f6b] rounded hover:bg-[#002B8F] transition-colors" @click="applyPromo">
              {{ t("booking_promo_apply") }}
            </button>
          </div>
        </div>

        <!-- Fields — mobile: each field its own stacked/2-col block. Desktop (lg+): merged route & date blocks -->
        <div class="p-4">
          <!-- Mobile / tablet layout -->
          <div class="grid grid-cols-2 gap-3 lg:hidden">
            <div class="col-span-2 bg-white border border-[rgba(0,31,107,0.12)] rounded-[4px]">
              <CityField :label="t('booking_origin')" v-model="origin" />
            </div>
            <div class="col-span-2 relative bg-white border border-[rgba(0,31,107,0.12)] rounded-[4px]">
              <button
                type="button"
                aria-label="Swap origin and destination"
                class="absolute -top-[14px] right-4 flex items-center justify-center w-7 h-7 rounded-full border-2 border-[#001f6b]/25 bg-white text-[#001f6b] hover:text-white hover:bg-[#001f6b] hover:border-[#001f6b] transition-colors shadow-md z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#001f6b]/40 focus-visible:ring-offset-2"
                @click="swap"
              >
                <ArrowLeftRight :size="12" class="rotate-90" />
              </button>
              <CityField :label="t('booking_destination')" v-model="destination" />
            </div>
            <div class="col-span-2 bg-white border border-[rgba(0,31,107,0.12)] rounded-[4px]">
              <DateRangeField :depart-label="t('booking_depart')" :return-label="t('booking_return')" v-model="dateRange" />
            </div>
            <div class="col-span-2 bg-white border border-[rgba(0,31,107,0.12)] rounded-[4px]">
              <PassengersField :label="t('booking_passengers')" :adults="adults" :children-count="children" @change="onPassengersChange" />
            </div>
            <div class="bg-white border border-[rgba(0,31,107,0.12)] rounded-[4px]">
              <ClassSelect :label="t('booking_class')" v-model="cabinClass" :options="classOptions" />
            </div>
            <button
              type="button"
              class="col-span-2 flex items-center justify-center gap-2 text-[13px] font-bold uppercase tracking-[0.5px] bg-[#C9A84C] text-[#3d2800] hover:bg-[#B8943D] transition-colors rounded-[4px] py-4"
              @click="toast.success(`Searching flights: ${origin} → ${destination}`)"
            >
              <Search :size="14" />{{ t("booking_cta") }}
            </button>
          </div>

          <!-- Desktop layout (lg+) — Origin/Destination merged, Depart/Return merged -->
          <div class="hidden lg:flex items-stretch gap-3">
            <div class="relative flex items-stretch bg-white border border-[rgba(0,31,107,0.12)] rounded-[4px] flex-[1.8] min-w-[320px]">
              <CityField :label="t('booking_origin')" v-model="origin" />
              <button
                type="button"
                class="flex items-center justify-center w-7 h-7 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full border-2 border-[#001f6b]/25 bg-white text-[#001f6b] hover:text-white hover:bg-[#001f6b] hover:border-[#001f6b] transition-colors shadow-md z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#001f6b]/40 focus-visible:ring-offset-2"
                aria-label="Swap origin and destination"
                @click="swap"
              >
                <ArrowLeftRight :size="11" />
              </button>
              <CityField :label="t('booking_destination')" v-model="destination" />
            </div>

            <div class="flex items-stretch bg-white border border-[rgba(0,31,107,0.12)] rounded-[4px] flex-[1.3] min-w-[240px]">
              <DateRangeField :depart-label="t('booking_depart')" :return-label="t('booking_return')" v-model="dateRange" />
            </div>

            <div class="bg-white border border-[rgba(0,31,107,0.12)] rounded-[4px] flex-1 min-w-[120px]">
              <PassengersField :label="t('booking_passengers')" :adults="adults" :children-count="children" @change="onPassengersChange" />
            </div>

            <div class="bg-white border border-[rgba(0,31,107,0.12)] rounded-[4px] flex-1 min-w-[120px]">
              <ClassSelect :label="t('booking_class')" v-model="cabinClass" :options="classOptions" />
            </div>

            <button
              type="button"
              class="shrink-0 w-[190px] flex items-center justify-center gap-2 text-[13px] font-bold uppercase tracking-[0.5px] bg-[#C9A84C] text-[#3d2800] hover:bg-[#B8943D] transition-colors rounded-[4px]"
              @click="toast.success(`Searching flights: ${origin} → ${destination}`)"
            >
              <Search :size="14" />{{ t("booking_cta") }}
            </button>
          </div>
        </div>
      </template>

      <div v-if="tab === 'manage'" class="flex items-stretch gap-3 p-4 flex-wrap lg:flex-nowrap">
        <div class="flex items-stretch bg-white border border-[rgba(0,31,107,0.12)] rounded-[4px] flex-1 min-w-[220px]">
          <FieldCell :label="t('booking_manage_ref')" v-model="bookingRef" has-divider />
          <FieldCell :label="t('booking_manage_lastname')" v-model="lastName" />
        </div>
        <button
          type="button"
          class="shrink-0 w-full lg:w-[220px] flex items-center justify-center gap-2 text-[13px] font-bold uppercase tracking-[0.5px] bg-[#C9A84C] text-[#3d2800] hover:bg-[#B8943D] transition-colors rounded-[4px] py-4 lg:py-0"
          @click="toast.success('Retrieving booking…')"
        >
          <Search :size="14" />{{ t("booking_manage_cta") }}
        </button>
      </div>

      <div v-if="tab === 'status'" class="flex items-stretch gap-3 p-4 flex-wrap lg:flex-nowrap">
        <div class="flex items-stretch bg-white border border-[rgba(0,31,107,0.12)] rounded-[4px] flex-1 min-w-[220px]">
          <FieldCell :label="t('booking_status_flightno')" v-model="flightNo" has-divider />
          <FieldCell :label="t('booking_status_date')" v-model="statusDate" />
        </div>
        <button
          type="button"
          class="shrink-0 w-full lg:w-[220px] flex items-center justify-center gap-2 text-[13px] font-bold uppercase tracking-[0.5px] bg-[#C9A84C] text-[#3d2800] hover:bg-[#B8943D] transition-colors rounded-[4px] py-4 lg:py-0"
          @click="toast.success('Checking flight status…')"
        >
          <Search :size="14" />{{ t("booking_status_cta") }}
        </button>
      </div>
    </div>
  </div>
</template>
