import i18n from "i18next";

import LanguageDetector from "i18next-browser-languagedetector";
const resources = {
  en: {
    translations:{
        "Date":'Date',
        "Manage Campaign":'Manage Campaign',
        "Language":'Language',
        "Upcoming Campaigns":"Upcoming Campaigns",
        "Live Campaigns":"Live Campaigns",
        "Post Campaigns":"Post Campaigns",

        "CAMPAIGN":"CAMPAIGN",
        "VIEW":"VIEW",
        "ACTIONS":"ACTIONS",
        "View Pricing":"View Pricing",
        "schedule again":"schedule again",
        "close":"close",
        "Pricing":"Pricing"

    }
  },
  de:{ // these are achive using google translator
    translations:{ 
        "Date":'Datum',  
        "Manage Campaign":'Kampagne verwalten',
        "Language":'Sprache',
        "Upcoming Campaigns":"Kommende Kampagnen",
        "Live Campaigns":"Live Kampagne",
        "Post Campaigns":"Post kampagnen",
        "CAMPAIGN":"KAMPAGNE",
        "VIEW":"AUSSICHT",
        "ACTIONS":"AKTIONEN",
        "View Pricing":"Preise anzeigen",
        "schedule again":"wieder planen",
        "close":"schließen",
        "Pricing":"Preisgestaltung",

    }
  }
};

i18n.use(LanguageDetector).init({
  fallbackLng: "en",
  ns: ["translations"],
  defaultNS: "translations",
  resources: resources,
  debug: true,
  interpolation: {
    escapeValue: false // not needed for react!!
  },
  // react i18next special options (optional)
  react: {
    wait: false,
    bindI18n: "languageChanged loaded",
    bindStore: "added removed",
    nsMode: "default"
  }
});



export default i18n;