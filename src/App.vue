<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted } from "vue";
import moment from "moment";
import TheFooter from "./components/TheFooter.vue";

onMounted(() => {
  var symbolMap = {
      1: "១",
      2: "២",
      3: "៣",
      4: "៤",
      5: "៥",
      6: "៦",
      7: "៧",
      8: "៨",
      9: "៩",
      0: "០",
    },
    numberMap = {
      "១": "1",
      "២": "2",
      "៣": "3",
      "៤": "4",
      "៥": "5",
      "៦": "6",
      "៧": "7",
      "៨": "8",
      "៩": "9",
      "០": "0",
    };

  moment.locale("km", {
    months:
      "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split(
        "_"
      ),
    monthsShort:
      "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split(
        "_"
      ),
    weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
    weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
    weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm",
    },
    meridiemParse: /ព្រឹក|ល្ងាច/,
    isPM: function (input) {
      return input === "ល្ងាច";
    },
    meridiem: function (hour, minute, isLower) {
      if (hour < 12) {
        return "ព្រឹក";
      } else {
        return "ល្ងាច";
      }
    },
    calendar: {
      sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
      nextDay: "[ស្អែក ម៉ោង] LT",
      nextWeek: "dddd [ម៉ោង] LT",
      lastDay: "[ម្សិលមិញ ម៉ោង] LT",
      lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
      sameElse: "L",
    },
    relativeTime: {
      future: "%sទៀត",
      past: "%sមុន",
      s: "ប៉ុន្មានវិនាទី",
      ss: "%d វិនាទី",
      m: "មួយនាទី",
      mm: "%d នាទី",
      h: "មួយម៉ោង",
      hh: "%d ម៉ោង",
      d: "មួយថ្ងៃ",
      dd: "%d ថ្ងៃ",
      M: "មួយខែ",
      MM: "%d ខែ",
      y: "មួយឆ្នាំ",
      yy: "%d ឆ្នាំ",
    },
    dayOfMonthOrdinalParse: /ទី\d{1,2}/,
    ordinal: "ទី%d",
    preparse: function (string) {
      return string.replace(/[១២៣៤៥៦៧៨៩០]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function (string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4, // The week that contains Jan 4th is the first week of the year.
    },
  });
});
</script>

<template>
  <div class="h-screen">
    <nav class="bg-white shadow-md p-2">
      <div
        class="container mx-auto flex flex-col md:flex-row justify-between gap-2 items-center"
      >
        <div>
          <h1 class="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
            Khmer Chhankitek Calendar
          </h1>
        </div>
        <div>
          <ul class="flex overflow-x-auto whitespace-nowrap  font-bold">
            <li
              class="p-2 hover:bg-gray-200 rounded-md transition-all duration-150 ease-in-out"
            >
              <RouterLink to="/">Home</RouterLink>
            </li>
            <li
              class="p-2 hover:bg-gray-200 rounded-md transition-all duration-150 ease-in-out"
            ></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container mx-auto">
      <RouterView />
    </div>
    <div>
      <TheFooter />
    </div>
  </div>
</template>
