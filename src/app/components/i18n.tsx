import React, { createContext, useContext, useState, useEffect } from "react";

export type Locale = "en" | "nl" | "de" | "fr";

type Strings = {
  nav_destinations: string;
  nav_business_class: string;
  nav_lounges: string;
  nav_corporate: string;
  nav_book: string;
  nav_signin: string;
  nav_miles: string;
  hero_headline: string;
  hero_subtitle: string;
  hero_ticker: string;
  booking_tab_book: string;
  booking_tab_manage: string;
  booking_tab_status: string;
  booking_trip_round: string;
  booking_trip_oneway: string;
  booking_promo: string;
  booking_promo_placeholder: string;
  booking_promo_apply: string;
  booking_origin: string;
  booking_destination: string;
  booking_depart: string;
  booking_return: string;
  booking_passengers: string;
  booking_class: string;
  booking_class_economy: string;
  booking_class_premium: string;
  booking_class_business: string;
  booking_class_first: string;
  booking_cta: string;
  booking_origin_val: string;
  booking_dest_val: string;
  booking_depart_val: string;
  booking_return_val: string;
  booking_passengers_val: string;
  booking_manage_ref: string;
  booking_manage_lastname: string;
  booking_manage_cta: string;
  booking_status_flightno: string;
  booking_status_date: string;
  booking_status_cta: string;
  premium_label: string;
  premium_title: string;
  premium_biz_title: string;
  premium_biz_body: string;
  premium_biz_cta: string;
  premium_lounge_title: string;
  premium_lounge_body: string;
  premium_lounge_cta: string;
  premium_corp_title: string;
  premium_corp_body: string;
  premium_corp_cta: string;
  dest_label: string;
  dest_title: string;
  dest_subtitle: string;
  dest_view_all: string;
  dest_from: string;
  dest_select: string;
  miles_label: string;
  miles_title: string;
  miles_body: string;
  miles_stat1_val: string;
  miles_stat1_label: string;
  miles_stat2_val: string;
  miles_stat2_label: string;
  miles_stat3_val: string;
  miles_stat3_label: string;
  miles_join: string;
  miles_learn: string;
  footer_tagline: string;
  footer_about_col: string;
  footer_routes_col: string;
  footer_business_col: string;
  footer_support_col: string;
  footer_copyright: string;
  chat_placeholder: string;
  chat_quick1: string;
  chat_quick2: string;
  chat_quick3: string;
  smart_label: string;
  smart_title: string;
  smart_card_title: string;
  smart_card_body: string;
  smart_card_cta: string;
};

const dict: Record<Locale, Strings> = {
  en: {
    nav_destinations: "Destinations",
    nav_business_class: "Business Class",
    nav_lounges: "Lounges",
    nav_corporate: "Corporate",
    nav_book: "Book",
    nav_signin: "Sign In",
    nav_miles: "Miles Program",
    hero_headline: "Trip to all journey and beyond",
    hero_subtitle: "Long-haul Business Class departing Amsterdam · Frankfurt · Brussels · Paris",
    hero_ticker: "Explore new destinations in summer 2027",
    booking_tab_book: "Book Flights",
    booking_tab_manage: "Manage a Booking",
    booking_tab_status: "Flight Status",
    booking_trip_round: "Round trip",
    booking_trip_oneway: "One way",
    booking_promo: "Apply promo code",
    booking_promo_placeholder: "Enter code",
    booking_promo_apply: "Apply",
    booking_origin: "Origin",
    booking_destination: "Destination",
    booking_depart: "Depart Date",
    booking_return: "Return Date",
    booking_passengers: "Passengers",
    booking_class: "Class",
    booking_class_economy: "Economy",
    booking_class_premium: "Premium Economy",
    booking_class_business: "Business",
    booking_class_first: "First Class",
    booking_cta: "Search Flights",
    booking_origin_val: "Amsterdam (AMS)",
    booking_dest_val: "New York (JFK)",
    booking_depart_val: "15 Jul",
    booking_return_val: "22 Jul",
    booking_passengers_val: "1 Adult",
    booking_manage_ref: "Booking Reference",
    booking_manage_lastname: "Last Name",
    booking_manage_cta: "Retrieve Booking",
    booking_status_flightno: "Flight Number",
    booking_status_date: "Date",
    booking_status_cta: "Check Status",
    premium_label: "Premium Experience",
    premium_title: "Fly Better. Every Route.",
    premium_biz_title: "Business Class",
    premium_biz_body: "Fully-flat beds, award-winning dining, and priority service across 40+ long-haul routes.",
    premium_biz_cta: "Explore Business",
    premium_lounge_title: "Airport Lounges",
    premium_lounge_body: "25 partner lounges across CDG, AMS, JFK, DXB and more. Complimentary for Business Class passengers.",
    premium_lounge_cta: "Find a Lounge",
    premium_corp_title: "Corporate Programs",
    premium_corp_body: "Dedicated account management, flexible booking policies, and volume rates for enterprise travel.",
    premium_corp_cta: "Corporate Solutions",
    dest_label: "Our Network",
    dest_title: "Long-Haul Routes",
    dest_subtitle: "Fly direct to the world's major business hubs. Business Class on every route.",
    dest_view_all: "View all routes",
    dest_from: "From",
    dest_select: "Select",
    miles_label: "Loyalty Program",
    miles_title: "Earn Miles on Every Flight",
    miles_body: "Join millions of members who earn and redeem miles on Airavia flights, partner airlines, hotels, and more.",
    miles_stat1_val: "40+",
    miles_stat1_label: "Destinations",
    miles_stat2_val: "2M+",
    miles_stat2_label: "Members",
    miles_stat3_val: "25",
    miles_stat3_label: "Partner Lounges",
    miles_join: "Join Miles Program",
    miles_learn: "Learn more",
    footer_tagline: "Premium aviation experience",
    footer_about_col: "About Airavia",
    footer_routes_col: "Our Routes",
    footer_business_col: "Business & Corporate",
    footer_support_col: "Support",
    footer_copyright: "© 2026 Airavia International. All rights reserved.",
    chat_placeholder: "Type a message…",
    chat_quick1: "Upgrade to Business",
    chat_quick2: "Baggage allowance",
    chat_quick3: "Check-in status",
    smart_label: "AIRAVIA APP",
    smart_title: "Smart travel within your comfort",
    smart_card_title: "Explore Airavia App",
    smart_card_body: "Plan, book, manage and update your trips. All the personalized and self-service functions to help every journey planning go smoothly at your finger trips.",
    smart_card_cta: "Download now",
  },
  nl: {
    nav_destinations: "Bestemmingen",
    nav_business_class: "Business Class",
    nav_lounges: "Lounges",
    nav_corporate: "Corporate",
    nav_book: "Boeken",
    nav_signin: "Inloggen",
    nav_miles: "Miles Programma",
    hero_headline: "Reis door alle bestemmingen en verder",
    hero_subtitle: "Langeafstandsvluchten Business Class vanuit Amsterdam · Frankfurt · Brussel · Parijs",
    hero_ticker: "Ontdek nieuwe bestemmingen in zomer 2027",
    booking_tab_book: "Vluchten Boeken",
    booking_tab_manage: "Boeking Beheren",
    booking_tab_status: "Vluchtstatus",
    booking_trip_round: "Retour",
    booking_trip_oneway: "Enkele reis",
    booking_promo: "Kortingscode toepassen",
    booking_promo_placeholder: "Voer code in",
    booking_promo_apply: "Toepassen",
    booking_origin: "Vertrekpunt",
    booking_destination: "Bestemming",
    booking_depart: "Vertrekdatum",
    booking_return: "Retourdatum",
    booking_passengers: "Passagiers",
    booking_class: "Klasse",
    booking_class_economy: "Economy",
    booking_class_premium: "Premium Economy",
    booking_class_business: "Business",
    booking_class_first: "First Class",
    booking_cta: "Vluchten Zoeken",
    booking_origin_val: "Amsterdam (AMS)",
    booking_dest_val: "New York (JFK)",
    booking_depart_val: "15 jul",
    booking_return_val: "22 jul",
    booking_passengers_val: "1 Volwassene",
    booking_manage_ref: "Boekingsreferentie",
    booking_manage_lastname: "Achternaam",
    booking_manage_cta: "Boeking Ophalen",
    booking_status_flightno: "Vluchtnummer",
    booking_status_date: "Datum",
    booking_status_cta: "Status Controleren",
    premium_label: "Premium Ervaring",
    premium_title: "Vlieg Beter. Elke Route.",
    premium_biz_title: "Business Class",
    premium_biz_body: "Volledig platte bedden, bekroonde catering en prioriteitsservice op 40+ langeafstandsroutes.",
    premium_biz_cta: "Ontdek Business",
    premium_lounge_title: "Luchthavenlounges",
    premium_lounge_body: "25 partnerlounges in CDG, AMS, JFK, DXB en meer. Gratis voor Business Class passagiers.",
    premium_lounge_cta: "Vind een Lounge",
    premium_corp_title: "Corporate Programma's",
    premium_corp_body: "Dedicated accountbeheer, flexibel boekingsbeleid en volumetarieven voor zakelijke reizen.",
    premium_corp_cta: "Corporate Oplossingen",
    dest_label: "Ons Netwerk",
    dest_title: "Langeafstandsroutes",
    dest_subtitle: "Vlieg direct naar de grote zakelijke hubs ter wereld. Business Class op elke route.",
    dest_view_all: "Alle routes bekijken",
    dest_from: "Vanaf",
    dest_select: "Selecteren",
    miles_label: "Loyaliteitsprogramma",
    miles_title: "Verdien Miles op Elke Vlucht",
    miles_body: "Sluit je aan bij miljoenen leden die miles verdienen en inwisselen op Airavia-vluchten, partnermaatschappijen, hotels en meer.",
    miles_stat1_val: "40+",
    miles_stat1_label: "Bestemmingen",
    miles_stat2_val: "2M+",
    miles_stat2_label: "Leden",
    miles_stat3_val: "25",
    miles_stat3_label: "Partnerlounges",
    miles_join: "Word Lid",
    miles_learn: "Meer informatie",
    footer_tagline: "Premium luchtvaartervaring",
    footer_about_col: "Over Airavia",
    footer_routes_col: "Onze Routes",
    footer_business_col: "Zakelijk & Corporate",
    footer_support_col: "Klantenservice",
    footer_copyright: "© 2026 Airavia International. Alle rechten voorbehouden.",
    chat_placeholder: "Typ een bericht…",
    chat_quick1: "Upgrade naar Business",
    chat_quick2: "Bagageruimte",
    chat_quick3: "Inchecken",
    smart_label: "AIRAVIA APP",
    smart_title: "Slim reizen in uw comfort",
    smart_card_title: "Gemakkelijk reizen met Airavia",
    smart_card_body: "Volledig platte bedden, bekroonde catering en prioriteitsservice op 40+ langeafstandsroutes.",
    smart_card_cta: "Nu downloaden",
  },
  de: {
    nav_destinations: "Ziele",
    nav_business_class: "Business Class",
    nav_lounges: "Lounges",
    nav_corporate: "Corporate",
    nav_book: "Buchen",
    nav_signin: "Anmelden",
    nav_miles: "Meilenprogramm",
    hero_headline: "Reisen Sie überall hin und darüber hinaus",
    hero_subtitle: "Langstrecken Business Class ab Amsterdam · Frankfurt · Brüssel · Paris",
    hero_ticker: "Entdecken Sie neue Ziele im Sommer 2027",
    booking_tab_book: "Flüge Buchen",
    booking_tab_manage: "Buchung Verwalten",
    booking_tab_status: "Flugstatus",
    booking_trip_round: "Hin- und Rückflug",
    booking_trip_oneway: "Nur Hinflug",
    booking_promo: "Aktionscode einlösen",
    booking_promo_placeholder: "Code eingeben",
    booking_promo_apply: "Einlösen",
    booking_origin: "Abflugort",
    booking_destination: "Reiseziel",
    booking_depart: "Abflugdatum",
    booking_return: "Rückflugdatum",
    booking_passengers: "Passagiere",
    booking_class: "Klasse",
    booking_class_economy: "Economy",
    booking_class_premium: "Premium Economy",
    booking_class_business: "Business",
    booking_class_first: "First Class",
    booking_cta: "Flüge suchen",
    booking_origin_val: "Amsterdam (AMS)",
    booking_dest_val: "New York (JFK)",
    booking_depart_val: "15. Jul",
    booking_return_val: "22. Jul",
    booking_passengers_val: "1 Erwachsener",
    booking_manage_ref: "Buchungsreferenz",
    booking_manage_lastname: "Nachname",
    booking_manage_cta: "Buchung Abrufen",
    booking_status_flightno: "Flugnummer",
    booking_status_date: "Datum",
    booking_status_cta: "Status Prüfen",
    premium_label: "Premium Erlebnis",
    premium_title: "Besser fliegen. Jede Route.",
    premium_biz_title: "Business Class",
    premium_biz_body: "Vollflachbetten, preisgekrönte Küche und bevorzugter Service auf 40+ Langstrecken.",
    premium_biz_cta: "Business entdecken",
    premium_lounge_title: "Flughafen-Lounges",
    premium_lounge_body: "25 Partnerlounges in CDG, AMS, JFK, DXB und mehr. Kostenlos für Business Class Passagiere.",
    premium_lounge_cta: "Lounge finden",
    premium_corp_title: "Corporate-Programme",
    premium_corp_body: "Dediziertes Kontomanagement, flexible Buchungsrichtlinien und Volumentarife für Geschäftsreisen.",
    premium_corp_cta: "Corporate-Lösungen",
    dest_label: "Unser Streckennetz",
    dest_title: "Langstreckenrouten",
    dest_subtitle: "Fliegen Sie direkt zu den wichtigsten Business-Hubs weltweit. Business Class auf jeder Route.",
    dest_view_all: "Alle Routen anzeigen",
    dest_from: "Ab",
    dest_select: "Auswählen",
    miles_label: "Vielfliegerprogramm",
    miles_title: "Meilen sammeln auf jedem Flug",
    miles_body: "Millionen Mitglieder sammeln und lösen Meilen auf Airavia-Flügen, Partnerairlines, Hotels und mehr ein.",
    miles_stat1_val: "40+",
    miles_stat1_label: "Ziele",
    miles_stat2_val: "2 Mio.+",
    miles_stat2_label: "Mitglieder",
    miles_stat3_val: "25",
    miles_stat3_label: "Partnerlounges",
    miles_join: "Meilenprogramm beitreten",
    miles_learn: "Mehr erfahren",
    footer_tagline: "Premium Luftfahrterlebnis",
    footer_about_col: "Über Airavia",
    footer_routes_col: "Unsere Routen",
    footer_business_col: "Business & Corporate",
    footer_support_col: "Kundendienst",
    footer_copyright: "© 2026 Airavia International. Alle Rechte vorbehalten.",
    chat_placeholder: "Nachricht eingeben…",
    chat_quick1: "Upgrade auf Business",
    chat_quick2: "Freigepäck",
    chat_quick3: "Check-in Status",
    smart_label: "AIRAVIA APP",
    smart_title: "Cleveres Reisen in Ihrem Komfort",
    smart_card_title: "Einfach reisen mit Airavia",
    smart_card_body: "Vollflachbetten, preisgekrönte Küche und bevorzugter Service auf 40+ Langstrecken.",
    smart_card_cta: "Jetzt herunterladen",
  },
  fr: {
    nav_destinations: "Destinations",
    nav_business_class: "Classe Affaires",
    nav_lounges: "Salons",
    nav_corporate: "Entreprises",
    nav_book: "Réserver",
    nav_signin: "Connexion",
    nav_miles: "Programme Miles",
    hero_headline: "Voyagez partout et au-delà",
    hero_subtitle: "Vols long-courriers en Classe Affaires au départ d'Amsterdam · Francfort · Bruxelles · Paris",
    hero_ticker: "Découvrez de nouvelles destinations été 2027",
    booking_tab_book: "Réserver des Vols",
    booking_tab_manage: "Gérer une Réservation",
    booking_tab_status: "Statut de Vol",
    booking_trip_round: "Aller-retour",
    booking_trip_oneway: "Aller simple",
    booking_promo: "Appliquer un code promo",
    booking_promo_placeholder: "Entrer le code",
    booking_promo_apply: "Appliquer",
    booking_origin: "Origine",
    booking_destination: "Destination",
    booking_depart: "Date de Départ",
    booking_return: "Date de Retour",
    booking_passengers: "Passagers",
    booking_class: "Classe",
    booking_class_economy: "Économique",
    booking_class_premium: "Premium Économique",
    booking_class_business: "Affaires",
    booking_class_first: "Première Classe",
    booking_cta: "Rechercher des vols",
    booking_origin_val: "Amsterdam (AMS)",
    booking_dest_val: "New York (JFK)",
    booking_depart_val: "15 juil",
    booking_return_val: "22 juil",
    booking_passengers_val: "1 Adulte",
    booking_manage_ref: "Référence de Réservation",
    booking_manage_lastname: "Nom de Famille",
    booking_manage_cta: "Récupérer la Réservation",
    booking_status_flightno: "Numéro de Vol",
    booking_status_date: "Date",
    booking_status_cta: "Vérifier le Statut",
    premium_label: "Expérience Premium",
    premium_title: "Volez Mieux. Sur Chaque Route.",
    premium_biz_title: "Classe Affaires",
    premium_biz_body: "Lits complètement plats, gastronomie primée et service prioritaire sur 40+ routes long-courriers.",
    premium_biz_cta: "Découvrir la Classe Affaires",
    premium_lounge_title: "Salons Aéroportuaires",
    premium_lounge_body: "25 salons partenaires à CDG, AMS, JFK, DXB et plus. Inclus pour les passagers en Classe Affaires.",
    premium_lounge_cta: "Trouver un Salon",
    premium_corp_title: "Programmes Entreprises",
    premium_corp_body: "Gestion de compte dédiée, politiques de réservation flexibles et tarifs volume pour déplacements professionnels.",
    premium_corp_cta: "Solutions Entreprises",
    dest_label: "Notre Réseau",
    dest_title: "Routes Long-Courriers",
    dest_subtitle: "Volez directement vers les principaux hubs d'affaires mondiaux. Classe Affaires sur chaque route.",
    dest_view_all: "Voir toutes les routes",
    dest_from: "À partir de",
    dest_select: "Sélectionner",
    miles_label: "Programme de Fidélité",
    miles_title: "Gagnez des Miles sur Chaque Vol",
    miles_body: "Rejoignez des millions de membres qui gagnent et échangent des miles sur les vols Airavia, compagnies partenaires, hôtels et plus.",
    miles_stat1_val: "40+",
    miles_stat1_label: "Destinations",
    miles_stat2_val: "2M+",
    miles_stat2_label: "Membres",
    miles_stat3_val: "25",
    miles_stat3_label: "Salons Partenaires",
    miles_join: "Rejoindre le Programme Miles",
    miles_learn: "En savoir plus",
    footer_tagline: "Expérience aérienne premium",
    footer_about_col: "À propos d'Airavia",
    footer_routes_col: "Nos Routes",
    footer_business_col: "Entreprises & Corporate",
    footer_support_col: "Assistance",
    footer_copyright: "© 2026 Airavia International. Tous droits réservés.",
    chat_placeholder: "Écrire un message…",
    chat_quick1: "Passer en Classe Affaires",
    chat_quick2: "Franchise bagages",
    chat_quick3: "Statut enregistrement",
    smart_label: "APPLICATION AIRAVIA",
    smart_title: "Voyagez intelligemment dans votre confort",
    smart_card_title: "Voyagez facilement avec Airavia",
    smart_card_body: "Lits complètement plats, gastronomie primée et service prioritaire sur 40+ routes long-courriers.",
    smart_card_cta: "Télécharger maintenant",
  },
};

type LocaleContextType = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: keyof Strings) => string;
};

const LocaleContext = createContext<LocaleContextType>({
  locale: "en",
  setLocale: () => {},
  t: (key) => dict.en[key],
});

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    try {
      const stored = localStorage.getItem("airavia_locale") as Locale | null;
      return stored && ["en", "nl", "de", "fr"].includes(stored) ? stored : "en";
    } catch {
      return "en";
    }
  });

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try { localStorage.setItem("airavia_locale", l); } catch {}
  };

  const t = (key: keyof Strings) => dict[locale][key];

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}

export const LOCALES: Locale[] = ["en", "nl", "de", "fr"];
export const LOCALE_LABELS: Record<Locale, string> = { en: "EN", nl: "NL", de: "DE", fr: "FR" };
